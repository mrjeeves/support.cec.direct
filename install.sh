#!/usr/bin/env bash
# Install the latest published CEC Support desktop package.
set -euo pipefail

usage() {
  echo 'Usage: bash install.sh [--appimage]'
  echo 'Default: install the Debian package with APT. Use --appimage to install for your user.'
}

fail() {
  printf 'CEC Support: %s\n' "$*" >&2
  exit 1
}

case "$#:${1:-}" in
  0:) format=deb ;;
  1:--appimage) format=AppImage ;;
  1:-h|1:--help) usage; exit 0 ;;
  *) usage >&2; exit 2 ;;
esac

[[ $(uname -s) == Linux ]] || fail 'Run this installer on a Linux desktop.'
for command in curl python3 sha256sum; do
  command -v "$command" >/dev/null || fail "Install $command and run this installer again."
done

if [[ $format == deb ]]; then
  command -v dpkg >/dev/null && command -v apt-get >/dev/null ||
    fail 'The Debian package needs APT and dpkg. Use --appimage on other compatible Linux desktops.'
  arch=$(dpkg --print-architecture)
  case "$arch" in
    amd64|arm64) ;;
    *) fail "No Debian package is built for $arch. Use 64-bit x86 or ARM Linux." ;;
  esac
  install_command=(apt-get install)
  if (( EUID != 0 )); then
    command -v sudo >/dev/null || fail 'This install needs sudo or a root shell.'
    install_command=(sudo "${install_command[@]}")
  fi
  workdir=$(mktemp -d /tmp/cec-support.XXXXXXXX)
else
  (( EUID != 0 )) || fail 'Run the AppImage installer as your desktop user.'
  machine=$(uname -m)
  case "$machine" in
    x86_64) arch=amd64 ;;
    aarch64) arch=aarch64 ;;
    *) fail "No AppImage is built for $machine. Use 64-bit x86 or ARM Linux." ;;
  esac
  bin_dir="$HOME/.local/bin"
  mkdir -p -- "$bin_dir"
  # Stage on the same filesystem so updating never leaves a partial AppImage.
  workdir=$(mktemp -d "$bin_dir/.cec-support.XXXXXXXX")
fi
trap 'rm -rf -- "$workdir"' EXIT

repo=mrjeeves/CECSupport
curl_args=(-q --fail --silent --show-error --location --proto '=https' --proto-redir '=https' --retry 2 --connect-timeout 15)
curl "${curl_args[@]}" --max-time 60 --header 'Accept: application/vnd.github+json' \
  --output "$workdir/release.json" "https://api.github.com/repos/$repo/releases/latest" ||
  fail 'Could not look up the latest GitHub release. Try again later or visit https://support.cec.direct/#download.'

# Match the native Tauri package for this release and use GitHub's asset digest.
metadata=$(python3 - "$workdir/release.json" "$repo" "$arch" "$format" <<'PYTHON'
import json
import re
import sys
from urllib.parse import quote

path, repo, arch, package_format = sys.argv[1:]
try:
    with open(path, encoding="utf-8") as release_file:
        release = json.load(release_file)
    tag = release["tag_name"]
    assets = release["assets"]
    if not re.fullmatch(r"v[0-9]+\.[0-9]+\.[0-9]+", tag) or not isinstance(assets, list):
        raise ValueError("invalid release metadata")
except (OSError, ValueError, KeyError, TypeError):
    sys.exit("CEC Support: GitHub did not return valid release metadata.")

suffix = re.escape(f"_{tag[1:]}_{arch}.{package_format}")
name_pattern = re.compile(r"CEC[ ._-]Support" + suffix, re.IGNORECASE)
base_url = f"https://github.com/{repo}/releases/download/{tag}/"
matches = []
for asset in assets:
    name = asset.get("name") if isinstance(asset, dict) else None
    if not isinstance(name, str) or not name_pattern.fullmatch(name) or asset.get("state") != "uploaded":
        continue
    url = base_url + quote(name, safe="")
    if url == asset.get("browser_download_url"):
        matches.append((name, url, asset.get("digest")))

if len(matches) != 1:
    sys.exit(f"CEC Support: No matching {arch} {package_format} download is available in {tag}. "
             "See https://support.cec.direct/#download for release availability.")
name, url, digest = matches[0]
if not isinstance(digest, str) or not re.fullmatch(r"sha256:[a-f0-9]{64}", digest):
    sys.exit(f"CEC Support: The {arch} {package_format} download has no valid SHA-256 digest. Try again later.")
print(name, url, digest.removeprefix("sha256:"), tag, sep="\t")
PYTHON
)
IFS=$'\t' read -r filename url sha256 version <<< "$metadata"

package="$workdir/$filename"
printf 'Downloading CEC Support %s (%s %s)\n' "$version" "$arch" "$format"
curl "${curl_args[@]}" --max-time 600 --output "$package" "$url" || fail 'The package download failed.'
printf '%s  %s\n' "$sha256" "$filename" | (cd "$workdir" && sha256sum --check --status) ||
  fail 'The package failed its SHA-256 check.'

if [[ $format == deb ]]; then
  # Let APT's unprivileged download user read this public local package.
  chmod 0755 "$workdir"
  chmod 0644 "$package"
  "${install_command[@]}" "$package"
else
  destination="$bin_dir/cec-support.AppImage"
  chmod 0755 "$package"
  mv -fT -- "$package" "$destination"
  printf 'Installed CEC Support %s. Launch it with:\n  %q\n' "$version" "$destination"
fi
