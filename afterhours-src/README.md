# AFTERHOURS — Landing page

A self-contained static marketing site for AFTERHOURS, to send to prospective venue owners.
No framework, no external images — just HTML/CSS/vanilla JS with the AFTERHOURS design tokens.

## Develop

```bash
pnpm --filter @venue-app/landing dev       # Vite dev server
pnpm --filter @venue-app/landing build     # → dist/  (static, deploy anywhere)
pnpm --filter @venue-app/landing preview    # serve the production build
```

## Change the contact address

Every "email us" call-to-action is driven by a single constant. Edit `CONTACT_EMAIL`
(and optionally the subject line) at the top of [`src/main.js`](src/main.js) — the page
rewrites all mailto links on load. Currently set to `info@impecable.dev`. If you change it,
also update the visible address in the CTA line (`.cta-mailline` in `index.html`).

## Open / send without a server

```bash
pnpm --filter @venue-app/landing standalone
```

Writes `standalone/afterhours-landing.html` — a **single self-contained file** with the CSS and
JS inlined. Double-click it to view fully styled (no server needed), or email it to a client as-is.
Regenerate it after any copy/design change. (A Vite `dist/` build does **not** work over `file://`
— browsers block its module scripts/styles for local files; the standalone build avoids that.)

## Deploy

`vite build` emits a static `dist/`. Host it on any static host (Railway static site,
Netlify, Cloudflare Pages) or hand someone the folder. Fonts load from Google Fonts.
