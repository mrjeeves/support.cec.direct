import hashlib
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest
from urllib.parse import quote


INSTALLER = Path(__file__).resolve().parents[1] / "install.sh"
TAG = "v0.2.63"
PACKAGE = b"example release asset\n"


def release_asset(name, **overrides):
    return {
        "name": name,
        "state": "uploaded",
        "browser_download_url": f"https://github.com/mrjeeves/CECSupport/releases/download/{TAG}/{quote(name)}",
        "digest": "sha256:" + hashlib.sha256(PACKAGE).hexdigest(),
        **overrides,
    }


class InstallerTest(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.root = Path(temp.name)
        bin_dir = self.root / "bin"
        bin_dir.mkdir()
        stubs = {
            "curl": '''
                while [[ $1 != --output ]]; do shift; done
                case "$3" in
                    https://api.github.com/repos/mrjeeves/CECSupport/releases/latest)
                        cp "$FIXTURE/release.json" "$2" ;;
                    https://github.com/mrjeeves/CECSupport/releases/download/v0.2.63/*)
                        printf '%s\\n' "$3" > "$FIXTURE/download.log"
                        cp "$FIXTURE/package" "$2" ;;
                    *) exit 1 ;;
                esac
            ''',
            "dpkg": 'echo "$TEST_DPKG_ARCH"',
            "uname": 'if [[ $1 == -s ]]; then echo Linux; else echo "$TEST_MACHINE"; fi',
            "sudo": 'exec "$@"',
            "apt-get": '[[ $1 == install ]] && printf "%s\\n" "${2##*/}" > "$FIXTURE/apt.log" && cp "$2" "$FIXTURE/installed"',
        }
        for name, script in stubs.items():
            stub = bin_dir / name
            stub.write_text("#!/usr/bin/env bash\nset -eu\n" + script + "\n")
            stub.chmod(0o755)
        self.env = {
            **os.environ,
            "PATH": str(bin_dir) + os.pathsep + os.environ["PATH"],
            "HOME": str(self.root),
            "FIXTURE": str(self.root),
            "TEST_DPKG_ARCH": "arm64",
            "TEST_MACHINE": "aarch64",
        }

    def install(self, assets, *args, payload=PACKAGE):
        (self.root / "release.json").write_text(json.dumps({"tag_name": TAG, "assets": assets}))
        (self.root / "package").write_bytes(payload)
        return subprocess.run(
            ["bash", str(INSTALLER), *args], env=self.env, text=True, capture_output=True, check=False
        )

    def test_apt_receives_only_the_matching_debian_package(self):
        name = "CEC Support_0.2.63_arm64.deb"
        result = self.install([release_asset("CEC.Support_0.2.63_amd64.deb"), release_asset(name)])
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual((self.root / "apt.log").read_text().strip(), name)
        self.assertEqual((self.root / "installed").read_bytes(), PACKAGE)

    def test_wrong_checksum_stops_before_apt(self):
        result = self.install([release_asset("CEC.Support_0.2.63_arm64.deb")], payload=b"unverified")
        self.assertIn("failed its SHA-256 check", result.stderr)
        self.assertNotEqual(result.returncode, 0)
        self.assertFalse((self.root / "apt.log").exists())

    def test_windows_only_or_foreign_linux_asset_is_not_downloaded(self):
        result = self.install([
            release_asset("CEC.Support_0.2.63_x64-setup.exe"),
            release_asset("CEC.Support_0.2.63_arm64.deb", browser_download_url="https://example.org/file.deb"),
        ])
        self.assertIn("no unambiguous arm64 deb download", result.stderr)
        self.assertNotEqual(result.returncode, 0)
        self.assertFalse((self.root / "download.log").exists())

    def test_missing_digest_stops_before_download(self):
        result = self.install([release_asset("CEC.Support_0.2.63_arm64.deb", digest=None)])
        self.assertIn("no valid SHA-256 digest", result.stderr)
        self.assertNotEqual(result.returncode, 0)
        self.assertFalse((self.root / "download.log").exists())

    @unittest.skipIf(os.geteuid() == 0, "AppImage is installed by a desktop user")
    def test_appimage_replaces_user_copy_without_using_apt(self):
        destination = self.root / ".local/bin/cec-support.AppImage"
        destination.parent.mkdir(parents=True)
        destination.write_bytes(b"previous release")
        asset = release_asset("CEC.Support_0.2.63_aarch64.AppImage")
        failed = self.install([asset], "--appimage", payload=b"wrong payload")
        self.assertNotEqual(failed.returncode, 0)
        self.assertEqual(destination.read_bytes(), b"previous release")

        result = self.install([asset], "--appimage")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(destination.read_bytes(), PACKAGE)
        self.assertTrue(os.access(destination, os.X_OK))
        self.assertFalse((self.root / "apt.log").exists())


if __name__ == "__main__":
    unittest.main()
