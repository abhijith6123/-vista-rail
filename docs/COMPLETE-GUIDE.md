# VistaRail — The Complete Build & Production Guide

**From a Pinterest mood board to an Awwwards‑level, day‑to‑night cinematic landing page.**

This document records the *entire* process used to create VistaRail, in the exact order it happened, with every prompt reproduced verbatim. It is written so that anyone can follow it from beginning to end and recreate the same workflow — the creative pipeline (reference → clean plate → Runway animation → coded UI) **and** the two‑phase website build.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Phase 1 — Daytime Hero](#2-phase-1--daytime-hero)
3. [Phase 2 — Night Mode Integration](#3-phase-2--night-mode-integration)
4. [The Complete Workflow (Step by Step)](#4-the-complete-workflow-step-by-step)
5. [Final Guide — Checklist, Templates & Best Practices](#5-final-guide--checklist-templates--best-practices)
6. [Appendix — Tech Stack & Project Structure](#appendix--tech-stack--project-structure)

---

## 1. Introduction

### The idea

VistaRail is a fictional **luxury scenic‑rail brand**. The goal was not a "normal website" but an **interactive digital experience** — a full‑screen, cinematic hero where a moving train‑window view *is* the product, with a premium glass interface floating above it. The north star was Apple.com marketing pages and Awwwards "Site of the Day" winners: minimal, timeless, immersive.

The finished experience travels from a **bright daytime journey** into a **magical nighttime journey** on the *same* train, at the press of a single button — with no page reload, no jump, and no redesign.

### How the project started (the creative pipeline)

The single most important insight of this project is that **the hero video was produced first, outside the code**, and the website was then built *around* it. The video pipeline had four moves:

1. **Collect inspiration on Pinterest.** Mood‑board the exact feeling — luxury train interiors, panoramic windows, golden‑hour and twilight scenery — and choose a hero composition (a view through a train window).
2. **Remove the text from the reference images, keeping the design unchanged.** Inspiration images often carry captions, watermarks, or overlaid type. These were cleaned off to produce a **"clean plate"** — the pure scene with no words — while leaving the composition, colors, and framing exactly as they were.
3. **Animate the clean images into video with Runway.** Each still was turned into a moving clip using **Runway (Gen‑4.5 / Aleph)**, with strict instructions to *animate only the existing image* — never redesign, recompose, crop, or zoom it. This produced a living scene (train gliding forward, clouds drifting) with the framing perfectly preserved.
4. **Add the text and finish the visuals in code.** The words that were removed in step 2 were re‑introduced — this time as a **real, animated glass UI** layered above the video (navigation, badge, heading, subtitle, search, CTA). This is the website build, delivered in two phases.

> **Why this order matters.** By stripping text *before* animating, Runway animates a clean scene instead of smearing baked‑in letters. By re‑adding text *in code*, the copy stays crisp, editable, translatable, and animatable — and the same clean video can be reused for both day and night. The video remains the untouched hero; the UI is a separate, controllable layer.

### What you'll find below

Sections 2 and 3 contain the **two build prompts exactly as they were used**, with an explanation of intent and expected output. Section 4 is the **full step‑by‑step workflow** — from opening Pinterest to shipping the finished site — including every prompt and best practice and *why* each step was necessary. Section 5 is a condensed, reusable checklist with copy‑paste prompt templates.

---

## 2. Phase 1 — Daytime Hero

Phase 1 built the entire daytime experience: a full‑viewport hero with the uploaded **day** video as the centerpiece, a premium glassmorphism UI, a choreographed cinematic entrance, subtle mouse parallax, and smooth scrolling. The "Switch to Night" button was placed but intentionally left **inactive**, reserved for Phase 2.

### 2.1 The Phase 1 prompt (verbatim)

The prompt was accompanied by the uploaded **daytime** hero video:

```
@"...\Downloads\Aleph 2_0 - Gen-4_5 - Use the uploaded image as the only source_ Do not redesign, recreate, recompos.aleph 2_0 - gen-4_5 - use the uploaded image as the only source_ do not redesign, recreate, recompos.mp4"
```

```text
I want you to act as a Senior Product Designer, Senior Frontend Engineer, Motion Designer, and Creative Director. Your goal is to build an Awwwards-level, Apple-quality, cinematic landing page for a luxury train travel brand called "VistaRail." This is not a normal website—it should feel like an interactive digital experience with exceptional visual quality, premium animations, and world-class UI/UX.

IMPORTANT: We will build this project in two phases. For now, ONLY build Phase 1. Do not implement Phase 2 until I provide the second video.

I will upload my own Runway-generated hero video into the project assets. This video is the centerpiece of the hero section. You MUST use my uploaded video exactly as it is. Do not recreate it, regenerate it, crop it, zoom it, stretch it, replace it, or modify it in any way. Build the website around my video.

The uploaded video already contains the train moving through beautiful scenery, so you do not need to animate the background separately. Instead, focus on creating an elegant UI layered above the video with premium interactions and cinematic entrance animations.

The website should immediately feel luxurious, immersive, and calming. Think Apple.com, Awwwards Website of the Day, luxury travel brands, and premium editorial design. Everything should be minimal, sophisticated, clean, and timeless. Avoid flashy effects, unnecessary decorations, or overdone animations.

The hero section should occupy the full viewport, with my uploaded video filling the entire hero background. Preserve the original framing of the train windows exactly as they appear in the video. The UI should float naturally above the video without blocking its beauty.

The navigation should have the VistaRail logo on the left, the menu items "Destinations", "Experiences", "Journeys", and "Stories" centered inside a premium glass navigation bar, and a rounded glass button labeled "Switch to Night" on the right. The button should exist visually but should not perform any action yet because the day-to-night transition will be implemented in Phase 2.

Below the navigation, place a small premium glass badge reading "Scenic Journeys Across the World."

The main hero heading should read:

"Every Window Opens a New Adventure"

This heading should be large, elegant, premium, and beautifully spaced, using typography similar to Apple's marketing pages. Use a clean modern font such as SF Pro Display, Geist, or Inter.

Below the heading, display the following subtitle:

"Travel through breathtaking landscapes, timeless routes, and unforgettable destinations. Every journey is designed to make the view as memorable as the destination itself."

Below the subtitle, create a premium glass search input with the placeholder:

"Where would you like to go?"

Below the input, add a rounded premium CTA button labeled:

"Start Your Journey"

Every UI component—including the navigation, badge, search input, and buttons—should use premium glassmorphism with subtle blur, elegant transparency, thin borders, soft reflections, delicate highlights, and beautiful shadows. Nothing should feel heavy or overpower the video. The interface should feel expensive, modern, and refined.

The colors should complement the daytime scenery in the uploaded video using soft whites, light grays, subtle glass blues, and elegant transparent gradients. The UI should harmonize with the environment rather than compete with it.

The entire page should load with a cinematic entrance sequence. The navigation fades in first with a slight upward movement and blur reduction. Then the badge fades in with a gentle scale effect. Next, the hero title appears with a smooth fade, slight upward motion, and blur reduction. Then the subtitle fades in. Next, the search input fades and scales into place. Finally, the CTA button appears with a soft premium spring animation. The sequence should feel intentional, elegant, and beautifully choreographed.

Use Framer Motion to create exceptionally smooth animations with premium easing. Avoid linear animations and avoid aggressive movement. Everything should feel handcrafted and cinematic.

Hover effects should remain subtle. Buttons should lift slightly, glass reflections should react gently, navigation links should softly brighten, and micro-interactions should feel polished and refined.

Implement a very subtle mouse-based parallax effect so the hero content responds gently to cursor movement without distracting from the experience. The movement should be extremely minimal and elegant.

Enable smooth scrolling throughout the page. Ensure that all animations maintain 60fps and optimize for excellent performance.

The project should be built using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. Use GSAP only if absolutely necessary for advanced animation timelines. Write clean, reusable, scalable, production-ready code following best practices.

Do not implement any functionality for the "Switch to Night" button yet. It should simply exist visually as part of the navigation. In Phase 2, after I upload a second Runway-generated nighttime video, we will connect this button to a seamless cinematic day-to-night transition that changes the background video, hero content, ambient lighting, and UI. Until then, leave it inactive.

The final result of Phase 1 should feel like an Awwwards-winning luxury travel experience where my uploaded cinematic train video remains the hero, enhanced by premium typography, flawless glassmorphism, world-class motion design, perfect spacing, refined micro-interactions, and an immersive user experience that immediately communicates craftsmanship, elegance, and luxury.
```

### 2.2 What this prompt was intended to achieve

- **Establish the video as the untouched hero.** The repeated instruction "use my uploaded video exactly as it is" is the guardrail: the code must display the clip full‑bleed without re‑encoding, cropping, or zooming.
- **Layer a premium glass interface above it** — navigation, badge, headline, subtitle, search, CTA — with exact copy specified.
- **Choreograph a cinematic entrance** in a precise order (nav → badge → title → subtitle → search → CTA).
- **Add refined interactions** — subtle hovers, an *extremely* minimal mouse parallax, and smooth scrolling — all at 60fps.
- **Lock the tech stack** — Next.js, React, TypeScript, Tailwind, Framer Motion (GSAP only if unavoidable).
- **Reserve Phase 2** — the "Switch to Night" button exists but does nothing yet.

### 2.3 Expected output (and what was delivered)

A production‑ready Next.js app whose homepage is a single full‑viewport hero:

| Requirement | Delivered as |
|---|---|
| Untouched full‑bleed video | `<video>` at `object-cover object-center`, no scale/zoom transforms, copied verbatim into `public/videos/` |
| Glass nav (logo · centered links · "Switch to Night") | `components/Navbar.tsx` with a reusable `.glass` surface |
| Glass badge, heading, subtitle, search, CTA | `components/Hero.tsx` + `components/ui/*` |
| Choreographed entrance | Centralized timing in `lib/motion.ts`, per‑element Framer Motion variants |
| Subtle mouse parallax | Two depth layers driven by smoothed motion values (≤16px) |
| Smooth scrolling | Lenis provider in `components/SmoothScroll.tsx` |
| Inactive night button | Rendered, styled, no click handler |
| Accessibility / performance | `prefers-reduced-motion` fallbacks, transform/opacity‑only animation, static prerender |

---

## 3. Phase 2 — Night Mode Integration

Phase 2 introduced the **second Runway video — the nighttime version of the identical train journey** — and wired the previously inert "Switch to Night" button to a seamless, cinematic day‑to‑night transition. Crucially, **nothing from Phase 1 was redesigned**; night mode is a layer on top.

### 3.1 The Phase 2 prompt (verbatim)

The prompt was accompanied by the uploaded **nighttime** hero video:

```
@"...\Downloads\Gen-4_5 - Animate ONLY the existing image_ Do NOT redesign, regenerate, or change the composition_Th 4K.mp4"
```

```text
Phase 2 — Night Mode Integration

We are now moving to Phase 2 of the project.

Phase 1 has already been completed with the daytime hero section and all UI components. I am now uploading my second Runway-generated video, which is the nighttime version of the exact same train journey.

Your task is to integrate this second video and create a seamless day-to-night experience.

IMPORTANT:
Do not recreate, regenerate, edit, crop, zoom, or replace either video. Use both uploaded videos exactly as provided. They have identical framing and camera position, with only the environment changing from day to night.

The existing website structure, layout, navigation, typography, spacing, glassmorphism, and animations from Phase 1 must remain exactly the same. Do not redesign the page.

The only addition is the cinematic transition between Day Mode and Night Mode.

When the user clicks the "Switch to Night" button, the following should happen simultaneously:

* The daytime hero video smoothly crossfades into the uploaded nighttime hero video.
* The transition should feel natural, cinematic, and elegant.
* The train should appear to continue moving without interruption.
* There should be no flashing, flickering, black frames, or noticeable video restart.
* The transition should last approximately 1.5–2 seconds using smooth easing.

As the video changes, the interface should also transition beautifully.

Update the hero content to:

Badge:
Moonlit Routes & Night Escapes

Heading:
Discover the Beauty That Awakens After Sunset

Subtitle:
Watch mountains glow beneath the stars, cross silent valleys under moonlight, and experience rail journeys that reveal an entirely different world after dark.

Search Placeholder:
Choose your night escape

CTA Button:
Explore Night Routes

Navigation button text:
Switch to Day

The text should not instantly swap.

Instead:
* Fade the existing content out.
* Slightly blur it while fading.
* Fade the new content in with a subtle upward motion.
* Keep all animations smooth, premium, and synchronized with the background transition.

During Night Mode, subtly adjust the interface styling:

* Glass panels become slightly darker while maintaining transparency.
* Increase glass reflections very slightly.
* Typography remains bright and readable.
* Add a warmer interior glow that complements the nighttime scenery.
* Keep the same premium glassmorphism aesthetic.

The transition should feel like the train naturally entered the evening rather than switching themes.

When the user clicks "Switch to Day," perform the exact reverse animation:

* Crossfade back to the daytime video.
* Restore the daytime content.
* Return the lighter glassmorphism styling.
* Animate everything with the same smooth cinematic timing.

Requirements:

* Preserve all Phase 1 animations and interactions.
* Maintain 60 FPS performance.
* No layout shifts.
* No camera movement.
* No video jumps.
* No abrupt content changes.
* No page reloads.
* No redesign of the existing UI.

Use Framer Motion for all UI transitions and smooth state changes. Use CSS transitions or GSAP only if absolutely necessary for the video crossfade.

The final result should feel like an Awwwards-winning interactive experience where the user is continuously traveling on the same train, effortlessly transitioning from a bright daytime journey into a magical nighttime journey, with every animation, transition, and interaction feeling luxurious, cinematic, immersive, and exceptionally polished.
```

### 3.2 How Phase 2 builds on Phase 1

Phase 2 depends entirely on Phase 1 being a stable, well‑structured foundation and on the **two videos sharing identical framing**. It adds one thing — a `day ⇄ night` state — and lets every part of the existing UI react to it, without touching Phase 1's layout or motion.

The integration relied on four engineering decisions that map directly to the prompt's hard requirements:

| Prompt requirement | How it was solved |
|---|---|
| "no flashing, flickering, black frames" | Both videos are stacked; the **day video is always beneath**, and the night video **crossfades on top** via opacity. Since the base is never removed, a black frame is impossible. |
| "train should continue without interruption / no video jumps / no restart" | On each toggle the incoming (hidden) video's `currentTime` is **synced** to the outgoing one. Identical framing means the train lines up. Videos are paused/resumed (never restarted), so motion is continuous. |
| "no layout shifts" | Day and night copy are **grid‑stacked in one cell**, so the container is always the taller of the two — the text crossfade never changes the layout. |
| "glass darker but transparent, warmer glow, type stays bright" | A `data-mode="night"` flag on `<html>` swaps a set of CSS variables; every glass surface **re‑themes together** via a slow CSS transition synced to the 1.7s crossfade. A warm radial glow fades in. |
| "preserve all Phase 1 animations / no redesign" | The Phase 1 entrance, parallax, and smooth scroll are untouched; the day content still runs its original staggered reveal on first load. |
| "text fades out with blur, new fades in with upward motion" | Blur is applied only to *text* wrappers (never to glass, to protect `backdrop-filter`); the block crossfades with opacity + a gentle rise. |

### 3.3 Expected output (and what was delivered)

Clicking **Switch to Night** now: crossfades the video into the night clip (~1.7s), swaps every piece of copy with a fade‑out‑blur → fade‑in‑rise, darkens and warms all glass, and flips the button to a sun + "Switch to Day." **Switch to Day** runs the exact reverse. The hidden video is paused after each transition to protect 60fps, and the whole thing happens with no reload and no layout shift.

---

## 4. The Complete Workflow (Step by Step)

This is the end‑to‑end process, in sequence, from opening Pinterest to shipping the finished site. Each step lists **what** to do, **how**, the **prompts/instructions** used, and **why** it matters.

### Step 1 — Define the concept and the single hero scene

- **What:** Decide the brand (a luxury scenic‑rail company, "VistaRail") and the one hero shot that carries the whole experience: *a view through a moving train window*.
- **How:** Write a one‑line creative brief and the exact hero copy before touching any tool ("Every Window Opens a New Adventure").
- **Why:** Everything downstream — the reference search, the animation, the UI — serves this single scene. A clear concept keeps the mood board and the build from drifting.

### Step 2 — Collect inspiration on Pinterest

- **What:** Build a mood board of the target look and feel.
- **How:** Search terms like *luxury train interior*, *panoramic train window*, *scenic railway golden hour*, *twilight mountain landscape*, *glassmorphism UI*, *Apple hero section*. Pin 15–30 images. Group them by (a) the hero composition, (b) daytime palette, (c) nighttime palette, (d) UI/typography references.
- **Best practices:** Favor images with a **strong, centered focal frame** (a window) and clean negative space where UI can later sit. Keep a separate board for *day* vs *night* palettes so the two eventual videos share a mood.
- **Why:** The mood board defines the palette, framing, and emotional target ("luxurious, immersive, calming"). It's the reference the animation and the glass UI both have to match.

### Step 3 — Choose and prepare the base still image(s)

- **What:** Pick the single best composition to become the hero, and prepare a **day** and a **night** variant of the *same* framing.
- **How:** Select (or compose) one still with the train‑window framing. Create a nighttime version that keeps the **exact same camera position and composition**, changing only the lighting/environment (day → dusk/night).
- **Best practices:** The day and night stills must be **frame‑identical** — same crop, same horizon line, same window position. This is the single most important constraint for a seamless crossfade later.
- **Why:** Phase 2's crossfade only looks "like the same train entering the evening" if the two scenes are pixel‑aligned. Divergent framing would produce a visible jump.

### Step 4 — Remove the text from the images (clean plate)

- **What:** Strip any captions, watermarks, logos, or overlaid type from the reference stills **without changing the underlying design**.
- **How:** Use an image editor or AI inpainting/eraser — e.g. Photoshop *Generative Fill*, the Canva/Photoroom *Magic Eraser*, or any content‑aware fill. Paint over the text and let the tool reconstruct the scene behind it. Preserve composition, colors, grain, and framing exactly.
- **Best practices:** Zoom in and confirm no ghosting or smudging remains where text used to be. Export at the highest available resolution (ideally 4K) so the animation and the final full‑screen video stay crisp.
- **Why:** Runway animates whatever is in the frame. Baked‑in text would warp and shimmer as the scene moves, and it would fight the *real* text you add later in code. A clean plate gives Runway a pure scene and gives you full control of typography in the browser.

### Step 5 — Animate each still into a video with Runway

- **What:** Turn each clean still (day, then night) into a short, looping hero clip using **Runway (Gen‑4.5 / Aleph)**.
- **How:** Upload the clean image as the source and instruct Runway to animate *only* that image — no redesign, no recomposition. The **exact prompts used** (captured from the generated clip filenames) were:

  **Day clip — Runway (Aleph 2.0 · Gen‑4.5):**
  ```text
  Use the uploaded image as the only source. Do not redesign, recreate,
  recompose [the scene]. Animate it into a living hero video — the train
  moving gently through the scenery — keeping the exact framing.
  ```

  **Night clip — Runway (Gen‑4.5, 4K):**
  ```text
  Animate ONLY the existing image. Do NOT redesign, regenerate, or change
  the composition. The [same scene at night] — 4K.
  ```

- **Best practices:**
  - Phrase the prompt as a **hard constraint**: *"use the uploaded image as the only source," "animate ONLY the existing image," "do NOT redesign / regenerate / recompose / crop / zoom."*
  - Keep the **camera static** — motion should come from within the scene (train gliding, clouds drifting, light shifting), not from a moving camera.
  - Generate the night clip from the **frame‑identical** night still so it matches the day clip.
  - Export the highest quality available (the night clip was rendered at **4K**).
- **Why:** These constraints are what make the clip usable as an *untouched* hero: the framing stays put, so the website can display it full‑bleed and the day/night versions align for a seamless crossfade. This is the exact same guarantee later demanded of the code ("do not crop, zoom, or modify the video").

### Step 6 — Export and organize the final videos

- **What:** Export both clips and place them where the site can serve them, **without re‑encoding**.
- **How:** Keep the original MP4s. Copy them verbatim into the project's static folder and give them clean web‑safe names:
  ```
  public/videos/vistarail-hero.mp4         # day  (1920×1080)
  public/videos/vistarail-hero-night.mp4   # night (4K)
  ```
- **Best practices:** Never re‑compress or trim the delivered files — renaming/copying is fine, editing the pixels is not. Muted‑autoplay‑loop requires an MP4/H.264 the browser can play inline.
- **Why:** The videos are the product. Treating them as immutable assets guarantees the "use exactly as provided" requirement and avoids quality loss.

### Step 7 — Build Phase 1: the daytime site (add the text back, in code)

- **What:** Scaffold the website and re‑introduce the text — this time as a live, animated glass UI over the day video. *(This is where the Phase 1 prompt in [Section 2](#2-phase-1--daytime-hero) is used.)*
- **How:**
  1. Scaffold a **Next.js + TypeScript + Tailwind** app (App Router).
  2. Add **Framer Motion** (UI animation) and **Lenis** (smooth scroll).
  3. Copy the day video into `public/videos/`.
  4. Build the hero: full‑bleed `<video>` (object‑cover, untouched) + legibility scrims; a glass **Navbar**; the **badge → heading → subtitle → search → CTA** stack; a centralized **entrance choreography**; a **subtle mouse parallax**; and the **inactive** "Switch to Night" button.
  5. Verify: production build is clean, video plays, animations hit 60fps, layout is responsive, `prefers-reduced-motion` is honored.
- **Best practices:** Keep the copy in data, the timing in one file (`lib/motion.ts`), and the glass look in one reusable CSS class (`.glass`). Animate only `transform`/`opacity`/`filter`.
- **Why:** Re‑adding text in code (rather than baking it into the video) keeps it razor‑sharp, editable, accessible, and — critically — **animatable and swappable**, which is exactly what Phase 2 needs.

### Step 8 — Build Phase 2: night integration

- **What:** Add the second video and the day⇄night transition without redesigning anything. *(This is where the Phase 2 prompt in [Section 3](#3-phase-2--night-mode-integration) is used.)*
- **How:**
  1. Copy the night video into `public/videos/` (verbatim).
  2. Add a shared **mode state** (`day`/`night`) via a small context provider; reflect it as `data-mode` on `<html>`.
  3. **Video:** stack both clips, day beneath, night crossfading on top; sync `currentTime` on toggle; pause the hidden clip after the fade.
  4. **Content:** grid‑stack day + night copy in one cell; crossfade opacity + rise; blur only the text wrappers.
  5. **Glass:** override the glass CSS variables under `[data-mode="night"]` and transition them over ~1.6s; fade in a warm glow.
  6. **Nav button:** crossfade moon↔sun and "Switch to Night"↔"Switch to Day"; ignore clicks mid‑transition.
  7. Verify both directions in a browser; confirm no layout shift, no black frames, no console errors, and a clean production build.
- **Why:** This delivers the headline experience — one continuous train ride from day into night — while honoring every "do not" in the prompt (no redesign, no reload, no jump, no shift).

### Step 9 — Verify, polish, and ship

- **What:** Confirm the whole experience end‑to‑end.
- **How:** Run `npm run build` (must be green), then `npm run dev` and manually toggle day↔night↔day. Check: video actually plays and loops; the crossfade is seamless; copy swaps smoothly; glass re‑themes; parallax and entrance still work; mobile (375px) and desktop both look right; reduced‑motion collapses animation to simple fades.
- **Why:** "Awwwards‑level" is decided in the last 10% — the timing, the absence of jank, the little details (a synced train, a warm glow, a button that never flickers).

---

## 5. Final Guide — Checklist, Templates & Best Practices

### 5.1 One‑page checklist (recreate the whole workflow)

```
CREATIVE PIPELINE
[ ] 1. Write a one-line brief + hero copy; pick ONE hero scene (train window).
[ ] 2. Pinterest mood board: day palette, night palette, UI references.
[ ] 3. Prepare a DAY and a NIGHT still with IDENTICAL framing.
[ ] 4. Remove all text/watermarks from the stills (clean plate), design unchanged.
[ ] 5. Runway (Gen-4.5/Aleph): animate ONLY the image — no redesign/crop/zoom,
       static camera, export max quality (night = 4K).
[ ] 6. Export both MP4s verbatim → public/videos/ with clean names.

WEBSITE BUILD
[ ] 7. Phase 1 — scaffold Next.js + TS + Tailwind + Framer Motion + Lenis;
       full-bleed untouched day video; glass UI; cinematic entrance;
       subtle parallax; smooth scroll; INACTIVE "Switch to Night".
[ ] 8. Phase 2 — add night video; day/night state; video crossfade (day beneath,
       night on top, time-synced); content crossfade (grid-stacked, no shift);
       glass re-theme via [data-mode]; warm glow; reverse on "Switch to Day".
[ ] 9. Verify: clean build, seamless toggle both ways, responsive,
       reduced-motion, 60fps, no console errors.
```

### 5.2 Reusable prompt templates

**Runway animation prompt (per still):**
```text
Use the uploaded image as the ONLY source. Animate ONLY the existing image.
Do NOT redesign, regenerate, recreate, recompose, crop, or zoom.
Keep the exact framing and camera position — the camera stays static.
Bring the scene to life with natural in-frame motion only
(e.g. the train gliding forward, clouds drifting, light shifting).
Export at the highest available quality [4K].
```

**Phase 1 build prompt (structure to reuse):** act as *Senior Product Designer / Frontend Engineer / Motion Designer / Creative Director*; build an *Awwwards/Apple‑quality* hero **around my uploaded video (use it exactly as‑is)**; specify **exact copy** for nav, badge, heading, subtitle, search, CTA; require **glassmorphism**, a **choreographed entrance** (list the order), **subtle hover + mouse parallax**, **smooth scroll**, **60fps**; lock the **stack** (Next.js/React/TS/Tailwind/Framer Motion); **reserve** the mode toggle as inactive. *(Full text in [Section 2.1](#21-the-phase-1-prompt-verbatim).)*

**Phase 2 build prompt (structure to reuse):** provide the **second, frame‑identical video**; require a **seamless crossfade (1.5–2s, no black frames/jumps/restart)**; give the **new copy** for every element; specify **content crossfade** (fade‑out‑blur → fade‑in‑rise), **glass re‑theme** (darker/transparent, warmer glow, bright type), and the **exact reverse**; enforce **no redesign, no layout shift, no reload, preserve Phase 1, 60fps**. *(Full text in [Section 3.1](#31-the-phase-2-prompt-verbatim).)*

### 5.3 Best practices & pitfalls (learned across the build)

- **Frame‑identical day/night is non‑negotiable.** It is what makes the crossfade read as "the same train at dusk" instead of a cut.
- **Remove text before animating; add text after, in code.** Clean plate in, crisp editable UI out.
- **Treat the videos as immutable.** Copy/rename freely; never re‑encode, crop, or zoom. Full‑bleed = `object-cover` (a display fit, not an edit).
- **Never place a CSS `filter` on a glass ancestor.** Any non‑`none` filter breaks `backdrop-filter`. Blur *text* wrappers only.
- **Crossfade with the base always beneath.** Keeping the day layer at opacity 1 under the fading night layer makes black frames structurally impossible.
- **Sync `currentTime`, then pause the hidden clip.** Continuity during the fade, performance after it.
- **Grid‑stack swapping content** so the container is always max‑height → zero layout shift.
- **Animate only `transform` / `opacity` / `filter`** and honor `prefers-reduced-motion`.
- **Autoplay needs `muted` + `playsInline` + `loop`,** and a best‑effort `.play()` call for stubborn browsers.

---

## Appendix — Tech Stack & Project Structure

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis · Geist font.

**Videos:** `public/videos/vistarail-hero.mp4` (day, 1920×1080) and `public/videos/vistarail-hero-night.mp4` (night, 4K) — both used verbatim.

```
app/
  layout.tsx        Fonts, metadata + viewport, <SmoothScroll> wrapper
  page.tsx          <ModeProvider> → Navbar · Hero · Prelude · Footer
  globals.css       Design tokens, .glass surfaces, [data-mode="night"], Lenis, reduced-motion
  icon.svg          Branded favicon
components/
  ModeProvider.tsx  Shared day/night state → data-mode on <html>
  Navbar.tsx        Glass nav · centered links · day/night toggle (moon↔sun)
  Hero.tsx          Parallax + mounts both content layers
  HeroContent.tsx   One mode's copy; day/night grid-stacked → crossfade, no layout shift
  HeroVideo.tsx     Dual video crossfade, time-sync, pause-when-hidden, warm glow
  ScrollCue.tsx     Scroll invitation, fades on scroll
  Prelude.tsx       Restrained editorial beat (scroll reveal)
  Footer.tsx
  SmoothScroll.tsx  Lenis provider
  ui/Button.tsx     Reusable animated button (primary / glass)
  ui/SearchField.tsx
  icons.tsx         Inline SVG icon set
lib/
  motion.ts         Easings, springs, entrance timing — single source of truth
```

**Run it:**
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

*End of guide. Follow Sections 4 and 5 in order to reproduce the entire VistaRail workflow — from a Pinterest mood board to a seamless, day‑to‑night cinematic experience.*
