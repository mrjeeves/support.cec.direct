#!/bin/sh
# support.cec.direct/install.sh — short URL for the canonical CEC Support
# installer, which lives in the app repository and is maintained there:
#
#   https://github.com/mrjeeves/CECSupport/blob/main/scripts/install.sh
#
# This stub only fetches that script and runs it, forwarding any flags
# (--service, --no-service, --prefix=DIR, --dry-run), so the site can
# never drift from what the app actually ships.
#
#   curl -fsSL https://support.cec.direct/install.sh | sh
#   curl -fsSL https://support.cec.direct/install.sh | sh -s -- --service

set -eu

URL="https://raw.githubusercontent.com/mrjeeves/CECSupport/main/scripts/install.sh"

if command -v curl >/dev/null 2>&1; then
  curl -fsSL --proto '=https' --tlsv1.2 "$URL" | sh -s -- "$@"
elif command -v wget >/dev/null 2>&1; then
  wget -qO- "$URL" | sh -s -- "$@"
else
  echo "cec-support: need curl or wget to install" >&2
  exit 1
fi
