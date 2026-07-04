# VistaRail

A cinematic, Awwwards-caliber landing page for a luxury scenic-rail brand. The
hero is built **around a user-provided Runway video** — the video is the
centerpiece and is rendered exactly as supplied (full-bleed, never re-encoded,
cropped, or zoomed).

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — design tokens + liquid-glass utilities in `app/globals.css`
- **Framer Motion** — cinematic entrance choreography, mouse parallax, hover feel
- **Lenis** — global smooth scrolling (reduced-motion aware)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
app/
  layout.tsx        Fonts (Geist), metadata + viewport, <SmoothScroll> wrapper
  page.tsx          Navbar · Hero · Prelude · Footer
  globals.css       Design tokens, .glass surfaces, Lenis + reduced-motion base
  icon.svg          Branded favicon
components/
  Navbar.tsx        Glass nav — brand · centered links · "Switch to Night"
  Hero.tsx          Entrance choreography + mouse parallax orchestrator
  HeroVideo.tsx     The uploaded video (object-cover, untouched) + legibility scrims
  ScrollCue.tsx     Quiet scroll invitation that fades on scroll
  Prelude.tsx       One restrained editorial beat, revealed on scroll
  Footer.tsx
  SmoothScroll.tsx  Lenis smooth-scroll provider
  ui/Button.tsx     Reusable animated button (primary / glass)
  ui/SearchField.tsx
  icons.tsx         Inline SVG icon set
lib/
  motion.ts         Easings, springs, and the entrance timing (single source of truth)
public/
  videos/vistarail-hero.mp4   ← the hero video
```

## The hero video

`public/videos/vistarail-hero.mp4` is a verbatim copy of the uploaded file. To
swap it, replace that file (keep the name) or update the `src` in
`components/HeroVideo.tsx`.

## Phase 2 (not yet implemented)

The **"Switch to Night"** button in the navbar is intentionally inert. When the
nighttime Runway video is provided, it will drive a seamless day → night
transition (background video, hero content, ambient lighting, and UI). The
timing system in `lib/motion.ts` and the glass tokens in `globals.css` are built
to extend into that theme.

## Accessibility & performance

- Honors `prefers-reduced-motion` (parallax and entrance motion collapse to
  simple fades; Lenis falls back to native scroll).
- Animates only `transform` / `opacity` / `filter`; content is statically
  prerendered.
- Keyboard focus rings, `aria-label`s on icon controls, and semantic landmarks.
