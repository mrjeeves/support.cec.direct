# support.cec.direct — GitHub Pages site

The marketing / download site for **CEC Support**, Critical Error Computing's
remote-support app. Static site, no build step.

## Deploy

1. Push the contents of this folder to a GitHub repo (the files, not the folder
   itself — `index.html` must be at the repo root).
2. Repo → Settings → Pages → Source: **Deploy from a branch**, branch `main`,
   folder `/ (root)`.
3. Done. The site works from any subpath (all asset paths are relative).

Every push to `main` (including a PR merge) triggers the automatic
"pages build and deployment" run. If a deploy dies with GitHub's transient
"Deployment failed, try again later", re-run it from the Actions tab — or merge
any commit to `main` to kick a fresh one.

## Layout

CEC Support is one tiny Windows-first app: the customer runs it, reads a short
Support ID and a verification code to a CEC technician, and approves the
connection (once, always, or deny — revocable anytime). It's built on the same
private MyOwnMesh tech as AllMyStuff — peer-to-peer, end-to-end encrypted, with
nothing exposed to the public internet.

- `index.html` — the homepage/overview. Hero, how it works, why it's safe,
  the unattended-repair note, and a download CTA band. Plain hand-written HTML.
- `download/` — Windows-first downloads with a "for this machine" suggestion
  sniffed from the user agent (hidden on phones / when unsure) and a tabbed
  one-liner picker (Windows · macOS/Linux · from source, auto-picked, with copy
  buttons — the same wiring allmystuff.works uses). Static links to
  `releases/latest`; a small script upgrades them to direct versioned asset URLs
  via the GitHub API when reachable. Includes a "what the script does" +
  checksum-verify trust section.
- `faq/` — plain answers, grouped simply: what it is, what a technician can see,
  how to revoke, whether it keeps running, how to uninstall, and how it differs
  from AllMyStuff.
- `install.sh` / `install.ps1` — the one-liner URLs the site advertises
  (`curl -fsSL https://support.cec.direct/install.sh | sh`,
  `irm https://support.cec.direct/install.ps1 | iex`). They are thin stubs that
  fetch and run the canonical installers maintained in the app repo
  (`CECSupport/scripts/install.{sh,ps1}`), forwarding all flags — one source of
  truth, zero drift.

Notes:
- No framework, no bundler — every page is hand-written HTML on the shared CEC
  design system.
- The design-system files live under `ds/cec/` (styles, tokens, self-hosted
  fonts), copied verbatim from allmystuff.works so both sites read as one CEC
  family. No underscore-prefixed folders, so it deploys with or without Jekyll.
- App source and releases: <https://github.com/mrjeeves/CECSupport>.
