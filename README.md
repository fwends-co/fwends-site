# FWENDS marketing site

Pre-launch site for FWENDS (Fwends LLC): explains the concept and collects waitlist signups.
Next.js (App Router) + TypeScript + Tailwind CSS. Mostly static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
|---|---|
| Design tokens (colors, type, spacing, radii, motion) | `src/app/globals.css` (top of file) |
| Fonts (Elms Sans, Bitcount Single via `next/font`) | `src/app/layout.tsx` |
| Waitlist submit logic (wire to Supabase here) | `src/lib/waitlist.ts` → `submitWaitlist()` |
| Waitlist form UI and states | `src/components/WaitlistForm.tsx` |
| Logo (served unmodified) | `public/brand/fwends-logo.png`, `src/components/Logo.tsx` |
| Favicon, app icon, OG/Twitter image | `src/app/icon.png`, `apple-icon.png`, `opengraph-image.png`, `twitter-image.png` |
| Privacy / Terms (DRAFT, needs legal review) | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |

## Universal links / app links (later)

`public/.well-known/` is reserved and intentionally empty. When the app ships, add:

- `apple-app-site-association` (iOS universal links; must be served as JSON, no extension)
- `assetlinks.json` (Android app links)

Files in `public/` are served from the site root, so they will resolve at
`https://fwends.co/.well-known/...`. Vercel serves them as-is; set a
`Content-Type: application/json` header in `next.config.ts` for the AASA file if needed.

## Design system notes

Follows `FWENDS-design-system.md`. Deviations, on purpose:

- Header is a frosted Bright Snow bar, not the Nightgrass nav: the wordmark is dark green and
  must not be recolored.
- Footer legal text uses Carbon Black instead of Ink Muted 48 (`#7a7a7a`, 4.0:1, fails AA).
- The design system has no form error state; the invalid field uses a 2px Nightgrass border plus
  a text message.
