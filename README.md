# support.cec.direct

The CEC Support website: a static, visual tour of the Windows app on the shared
CEC design system. Keep customer-facing copy brief; show the controls.

- **Get help:** share a nine-digit Support Number, confirm the technician's name,
  approve access, and use Forget to disconnect and revoke access.
- **Toolbox:** selectable previews of repairs, Windows utilities, and advanced
  tools, plus visible repair progress and downloadable logs.
- **KVMs:** product photos alongside claiming, console, Wi-Fi, firmware updates,
  and support approvals. Product cards link to the store for current pricing.

The support flow is number-based access to a private mesh. It does not advertise
a public directory, a queue, or raising a hand. App illustrations are labelled
previews and use example identities and numbers. Their controls only switch
illustrations; they do not connect to a computer or execute repairs.
The illustrated layout is simplified from the app, not a screenshot.

## Content sources

Feature labels and behavior were checked against `mrjeeves/CECSupport` at
`6065332`, especially `gui/src/ui/ApproveModal.svelte`, `AccessList.svelte`,
`ToolboxWindow.svelte`, `KvmClaimCard.svelte`, and `KvmWifiModal.svelte`.
The support-number-first messaging follows the private-mesh product direction.
Keep firmware-dependent KVM controls qualified, and do not imply every model
has Wi-Fi.

## Local development and validation

Run `just dev` to serve the site, or `python -m http.server 8000`.
Run `just check` or `just build` (both use `python scripts/check_site.py`).
Preview desktop and narrow mobile widths; check the support steps, Toolbox
categories, keyboard focus, and download links.

The page has no build step or third-party UI runtime. Without JavaScript, all
preview panels remain visible and downloads open GitHub's latest-release page.
With JavaScript, download links resolve to the latest Windows `-setup.exe` when
the GitHub release API is reachable. Preview transitions never autoplay.
Reduced-motion preferences disable smooth scrolling and transitions.

## Files

- `index.html`: page content and accessible SVG icons.
- `assets/site.css`: responsive page styles.
- `assets/site.js`: preview selectors and installer link resolution.
- `ds/cec/`: shared tokens and self-hosted fonts. Do not edit the tokens here.
- `assets/kvm-*.png`: existing product photography.
- `favicon.*`, `apple-touch-icon.png`, `assets/cec-logo.png`: brand assets.

## Deploy

GitHub Pages deploys from `main`, folder `/root`. The custom domain is configured
in the repository's Pages settings.
