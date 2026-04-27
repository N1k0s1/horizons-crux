# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is a **pre-initialized** Next.js landing page project. The repo currently contains only content `.tsx` files and raw image assets — no `package.json`, no Next.js scaffold, and no component library yet. Before any code can run, the project must be initialized.

## Initializing the Project

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npx shadcn@latest init
```

After init, install any additional deps:
```bash
npm install
```

## Dev Commands (once initialized)

```bash
npm run dev       # start local dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

## Architecture

**Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui.

**Target structure after initialization:**
```
src/
  app/
    page.tsx          # Single-page lander, composes all sections
    layout.tsx        # Root layout, fonts, global metadata
    globals.css       # Tailwind base + shadcn CSS variables (custom dark theme)
  components/
    sections/         # One file per landing page section (Hero, About, Qualify, Schedule, etc.)
    ui/               # shadcn generated components
```

**Content source files** (in repo root — reference these for all copy/data, do not recreate content):
- `home.tsx` — hero copy, event city, dates, CTA link
- `qualifying.tsx` — 5-step qualifying flow, dates, hours requirement
- `forParents.tsx` — about the event, safety, cost breakdown, Hack Club info
- `eventDetails.tsx` — packing list, venue notes, parent policy, schedule expectations
- `travel.tsx` — flight stipends, arrival/departure, visa info, accommodation

**Assets** (`assets/` folder):
| File | Usage |
|------|-------|
| `image (2).png` | Horizons Crux logo |
| `hero_img.PNG` | Hero section background/art |
| `body_bg.PNG` | Body/section background texture |
| `jellyfish[1-3,5].png` | Decorative art, scatter across sections |
| `shark.png` | Decorative art |
| `anchor&chain.PNG` | Side decoration (e.g., alongside Qualify section) |
| `IMG_2774.PNG` | Additional art/decoration |
| `Image_from_iOS-removebg-preview.png` | Removed-background art asset |
| `design_reference.PNG` | Visual design reference |

## Design System

- **Mode:** Dark only — no light mode toggle.
- **Feel:** Editorial. Use shadcn's CSS variable theming (`--background`, `--foreground`, `--muted`, etc.) in `globals.css`. Avoid raw Tailwind color utilities like `bg-gray-900`; prefer `bg-background`, `text-foreground`, `text-muted-foreground`.
- **Typography:** Serif for large headings (editorial feel), sans for body. Configure via `next/font` in `layout.tsx`.
- **Animations:** Keep minimal — no heavy scroll or entrance animations. Simple CSS transitions only.
- **Mobile:** Full responsive support required. Design mobile-first.

## Page Sections (in order)

1. **Navbar** — Logo + anchor links to sections
2. **Hero** — Full-bleed, logo, headline ("charge your own horizon"), subtitle, date/location/cost pill, CTA button → `https://horizons.hackclub.com`
3. **About** — What is Horizons Crux, sourced from `forParents.tsx`
4. **Previous Hackathons** — Cards for [Campfire](https://campfire.hackclub.com) and [Daydream](https://daydream.hackclub.com) with image placeholders
5. **How to Qualify** — 5-step flow from `qualifying.tsx` (Join Hack Club → Build → Track Hours → Hit 30hrs → Apply)
6. **Schedule** — Simple 3-day list (Day 1: Check-in & Opening, Day 2: Hacking, Day 3: Demos & Awards)
7. **We Handle Everything** — "You bring a laptop, we cover the rest": meals, accommodation, flight stipends, transport, swag, awards
8. **Sponsors** — Placeholder logos + "Hack Club is a 501(c)(3) nonprofit" note + CTA to become a sponsor (blank link)
9. **FAQ** — Accordion/dropdown, sourced from content files
10. **Footer** — Links, contact email (`crux@horizons.hackclub.com`), Hack Club attribution

## Key Event Facts

- **Event:** Horizons Crux (Horizons Oceania 2026)
- **Dates:** July 10–12, 2026, Sydney, Australia
- **Ages:** 13–18
- **Cost:** $0 (fully covered: flights, meals, accommodation, transport, swag)
- **Qualifier:** 30 hours of projects on Hack Club
- **Application deadline:** June 30, 2026
- **Contact:** crux@horizons.hackclub.com
- **Apply link:** https://horizons.hackclub.com
- **Hack Club EIN:** 81-2908499 (501c3 nonprofit)
