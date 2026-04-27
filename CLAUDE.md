# Horizons Crux — Claude Guide

## Project Overview

**Horizons Crux** is the main website for a 3-day hackathon in Sydney, Australia (July 10–12, 2026), fully funded by Hack Club. The site showcases the event, explains the qualification process (building 35 hours on Hack Club), past editions, schedule, and FAQ.

**Repo**: https://github.com/D99-1/horizons-crux  
**Live**: https://horizons.hackclub.com/crux

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **UI Library**: Base UI + shadcn/ui
- **Fonts**: Quicksand (serif), Fredoka (sans), JetBrains Mono (mono)

## Key Architecture

### File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, font imports
│   ├── globals.css         # Theme vars, keyframes (@theme inline)
│   └── page.tsx            # Main page (imports all sections)
├── components/
│   ├── site/               # Page sections
│   │   ├── nav.tsx         # Header navigation (sticky)
│   │   ├── hero.tsx        # Hero section (centered, dark bg)
│   │   ├── about.tsx       # About/qualification steps
│   │   ├── past-events.tsx # Horizontal scroll gallery
│   │   ├── qualify.tsx     # Zigzag path with jellyfish animation
│   │   ├── covered.tsx     # What's covered (flights, etc.)
│   │   ├── schedule.tsx    # 3-day schedule
│   │   ├── sponsors.tsx    # Sponsors section
│   │   └── faq.tsx         # FAQ accordion
│   └── ui/                 # shadcn components (accordion, etc.)
└── lib/
    └── content.ts          # Event data (PAST_EVENTS, QUALIFY_STEPS, etc.)
```

## Recent Design Changes (Latest Session)

### Dark Theme Overhaul
- Migrated all backgrounds from `#0A0A53` (deep purple) to `#0D1117` (Deep Navy-Black)
- Color palette:
  - **Primary**: `#0D1117` (background)
  - **Secondary surfaces**: `#161424`, `#1c1a28`
  - **Accent**: `#FF7AE2` (pink), `#B9FFFF` (cyan)
- Updated all components + globals.css CSS variables

### Hero Section
- Centered content vertically/horizontally
- Switched logo to `cruxlogodarker.png`
- Centered CTA button with centered text

### Past Events Section
- Complete redesign to **horizontal scroll** with sticky viewport
- Cards (Campfire, Daydream, Midnight, Stasis, Scrapyard) scroll horizontally as you scroll vertically
- Section height = `100vh + track_width` to map scroll progress to horizontal movement
- Jellyfish yellow bob animation on cards

### Qualify Section
- **Complete revamp** to fixed-pixel zigzag layout
- 5 steps alternate left/right with `880px` track width, `280px` row height
- **4 disconnected straight-line SVG `<line>` elements** connecting consecutive step nodes
- Pink circular node markers where lines terminate (so lines never overlap text)
- **rAF-smoothed jellyfish animation** using lerp: `current += (target - current) * SMOOTH`
- Opacity fades at segment boundaries (fade transition effect)
- ~1700px total section height for calm scroll pace (~200px per segment)

## Important Patterns & Quirks

### Color System
- All hardcoded colors updated to new dark palette (search for `#0A0A53`, `#06062E`, etc. to find outdated ones)
- CSS variables in `:root` and `.dark` scopes (`--background`, `--crux-*`, etc.)
- Shadcn tokens aliased to Crux palette in globals.css `@theme inline`

### Past Events (Horizontal Scroll)
```tsx
// Outer div height = 100vh + horizontal_scrollable_width
// Sticky inner div stays at top:0 while page scrolls through outer height
// rAF scroll listener updates track's translateX
```
- **Gotcha**: `getBoundingClientRect()` on track after scroll to get current dimensions (used to calculate section height)

### Qualify (Zigzag)
```tsx
const STEP_W = 320, STEP_H = 170, ROW_H = 280, TRACK_W = 880;
function stepBox(i) { /* x,y coords */ }
function stepNode(i) { /* node center position */ }
```
- Fixed-pixel layout (desktop-only, lg:block breakpoint)
- All position math is deterministic from constants → no DOM measurement guessing
- rAF runs every frame, updating jellyfish target and smoothing toward it
- Node circle SVG (3 nested circles: glow, bg-fill ring, pink dot) makes line termination clean

### Base UI + shadcn Quirks
- Base UI **Accordion** component used in FAQ (no `asChild` prop; different API than Radix)
- Make sure to import from `@/components/ui/accordion`
- All shadcn components already installed (check next.config if issues)

## Development Notes

- **Scroll animations**: Use `getBoundingClientRect()` for viewport-relative coords, avoid `offsetTop` (can be relative to various ancestors)
- **GPU acceleration**: Use `transform` and `opacity` for animated props; avoid `left`/`top`
- **Smooth easing**: CSS `transition` works, but rAF + lerp gives more control for scroll-driven animations
- **Content data**: All event info lives in `src/lib/content.ts` (single source of truth)

## Next Steps / Known TODOs

- [ ] Test responsive behavior on mobile for past-events scroll section
- [ ] Verify all image paths work in production deploy
- [ ] Consider accessibility improvements for animation sections (prefers-reduced-motion)

