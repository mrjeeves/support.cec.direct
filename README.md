# support.cec.direct

The website for **CEC Support**, Critical Error Computing's remote-help app for
Windows. Static, no build step — one visual page (`index.html`) on the shared
CEC design system (`ds/cec/`).

It's deliberately minimal, in two beats:

- **The app.** A headline, a picture of the "Allow?" prompt, three one-line
  steps, and **one** button — **Download for Windows**. No install commands,
  no OS picker, no options. The button points at the latest `-setup.exe` from
  [github.com/mrjeeves/CECSupport](https://github.com/mrjeeves/CECSupport)
  (a tiny script upgrades it to the exact release asset when the GitHub API
  is reachable; otherwise it opens the releases page).
- **The KVMs** (`#kvms`). The same story in hardware — *"Real help, one button
  away"*: a hero showing the Pro's live screen and its USR-button back panel
  (the hardware "help me" that raises the machine's hand in the same CEC
  Support queue, on lifetime or monthly support), then the lineup in CEC's
  signature product card — **Cube** and **PCIe** at **$149.99**, **Pro** and
  **PCIe-Pro** at **$299.99**. Every card is a **Buy** link to its product
  page on the store
  ([criticalerrorcomputing.com/collections/cec-access](https://www.criticalerrorcomputing.com/collections/cec-access);
  the PCIe cards share the `cec-access-internal` product), and the section
  closes with one "Shop them all" link to that collection.

## Deploy

GitHub Pages → deploy from branch `main`, folder `/root`. The custom domain is
configured in the repo's Pages settings.

## Files

- `index.html` — the whole site.
- `ds/cec/` — the shared CEC design system (tokens + self-hosted fonts); copied
  in so the site matches allmystuff.works. Don't edit the tokens here.
- `assets/kvm-*.png` — the KVM product photos (the hero front/back shot plus
  the four models), copied from allmystuff.works; `kvm-pcie-pro.png` has had
  its white background stripped to transparent so it sits on the dark cards.
- `favicon.*`, `apple-touch-icon.png`, `assets/cec-logo.png` — the CEC brand
  marks (the cyan-bracket "critical error" logo), used in the nav, the hero
  prompt card, and the tab/home-screen icons.
