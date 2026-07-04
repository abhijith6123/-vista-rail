import type { Variants, Transition } from "framer-motion";

/**
 * VistaRail motion language.
 * One source of truth for easings, springs, and the cinematic
 * entrance choreography so the whole page shares a single rhythm.
 */

// Premium easings (mirror the CSS custom properties in globals.css).
// Typed as mutable 4-tuples so Framer Motion accepts them as cubic-beziers.
export const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const easeSoft: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Soft, handcrafted spring — used for the CTA reveal and tactile hovers.
export const softSpring: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 24,
  mass: 0.9,
};

/**
 * Entrance choreography, in seconds. Tuning the cinematic sequence
 * happens here: nav → badge → title → subtitle → search → CTA.
 */
export const SEQUENCE = {
  nav: 0.15,
  badge: 0.55,
  title: 0.75,
  subtitle: 1.05,
  search: 1.32,
  cta: 1.58,
} as const;

type FadeOptions = {
  delay?: number;
  y?: number;
  blur?: number;
  duration?: number;
};

/** Fade + rise + de-blur — the signature VistaRail reveal. */
export const fadeRise = ({
  delay = 0,
  y = 18,
  blur = 10,
  duration = 1,
}: FadeOptions = {}): Variants => ({
  hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration, delay, ease: easePremium },
  },
});

/** Gentle scale-in with a whisper of blur (badge, search input). */
export const scaleIn = ({
  delay = 0,
  from = 0.94,
  duration = 0.9,
}: { delay?: number; from?: number; duration?: number } = {}): Variants => ({
  hidden: { opacity: 0, scale: from, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration, delay, ease: easePremium },
  },
});

/** Soft spring "pop" for the primary CTA. */
export const springIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...softSpring, delay },
  },
});

/** Reduced-motion fallback — opacity only, no transform or blur. */
export const fadeOnly = (delay = 0, duration = 0.5): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration, delay, ease: easeSoft } },
});
