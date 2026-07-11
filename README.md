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
- `buy/diagnostic/` — the **$50 Diagnostic Session checkout hand-off**. The CEC
  Support app opens this page (with `?sn=…&ref=…&agent=…` attribution) when a
  technician requests the purchase mid-session; the page bounces straight to
  the Shopify **cart permalink** (`{store}/cart/{variant}:1`), which lands on
  the store's hosted checkout with the attribution attached to the order as
  cart attributes — so the technician can verify the order by the customer's
  Support Number. See below to configure it.
- `ds/cec/` — the shared CEC design system (tokens + self-hosted fonts); copied
  in so the site matches allmystuff.works. Don't edit the tokens here.
- `favicon.*`, `apple-touch-icon.png`, `assets/cec-logo.png` — the CEC brand
  marks (the cyan-bracket "critical error" logo), used in the nav, the hero
  prompt card, and the tab/home-screen icons.

## Configuring the diagnostic checkout

The app never hardcodes store details — they live in ONE place, at the top of
`buy/diagnostic/index.html`:

```js
var STORE = "";        // e.g. "https://your-store.myshopify.com"
var VARIANT_ID = "";   // the Diagnostic Session variant id from Shopify admin
```

Fill both in and publish; until then the page shows a calm "not live yet" note
(and the technician takes payment by phone). To find the variant id: Shopify
admin → Products → *CEC Diagnostic Session* → the number at the end of the
variant's URL. Changing price or product later means updating the product in
Shopify (price is always read from the store at checkout — the page shows $50
as a label only). Because the app only ever links *here*, the store, product,
or domain can change without shipping a new installer.

Query parameters accepted (everything else is ignored — the page never takes a
redirect target from the URL): `sn` (support number, digits), `ref` (purchase
reference), `agent` (technician display name). They become the order's cart
attributes: **Support Number**, **Reference**, **Technician**.
