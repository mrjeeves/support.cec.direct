# support.cec.direct

The website for **CEC Support**, Critical Error Computing's remote-help app for
Windows. Static, no build step — one visual page (`index.html`) on the shared
CEC design system (`ds/cec/`).

It's deliberately minimal: a headline, a picture of the "Allow?" prompt, three
one-line steps, and **one** button — **Download for Windows**. No install
commands, no OS picker, no options. The button points at the latest
`-setup.exe` from [github.com/mrjeeves/CECSupport](https://github.com/mrjeeves/CECSupport)
(a tiny script upgrades it to the exact release asset when the GitHub API is
reachable; otherwise it opens the releases page).

## Deploy

GitHub Pages → deploy from branch `main`, folder `/root`. The custom domain is
configured in the repo's Pages settings.

## Files

- `index.html` — the whole site.
- `ds/cec/` — the shared CEC design system (tokens + self-hosted fonts); copied
  in so the site matches allmystuff.works. Don't edit the tokens here.
- `install.ps1` — a short-URL stub that fetches and runs the canonical Windows
  installer from the app repo (kept for `irm | iex` power users; the site itself
  doesn't advertise it).
- `favicon.*`, `apple-touch-icon.png`, `assets/` — brand marks.
