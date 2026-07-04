"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeSoft } from "@/lib/motion";
import { useMode } from "./ModeProvider";

/**
 * Dual hero video with a seamless day↔night crossfade.
 *
 * Both uploaded Runway videos are used EXACTLY as provided (object-cover,
 * centered, no scale/zoom/crop transforms). The day video is the base and
 * is always beneath; the night video crossfades on top via opacity, so at
 * no point is a black frame possible. On each toggle the incoming (hidden)
 * video's currentTime is synced to the outgoing one — identical framing
 * means the train never jumps — and the now-hidden video is paused once
 * the fade completes to protect 60fps.
 */
export default function HeroVideo() {
  const dayRef = useRef<HTMLVideoElement>(null);
  const nightRef = useRef<HTMLVideoElement>(null);
  const firstRun = useRef(true);
  const reduce = useReducedMotion();
  const { mode } = useMode();

  useEffect(() => {
    const day = dayRef.current;
    const night = nightRef.current;
    if (!day || !night) return;

    day.muted = true;
    night.muted = true;

    if (firstRun.current) {
      firstRun.current = false;
      day.play?.().catch(() => {}); // night stays paused + preloaded
      return;
    }

    const incoming = mode === "night" ? night : day;
    const outgoing = mode === "night" ? day : night;

    // Align the train: seed the incoming video's time from the outgoing one.
    const dur = incoming.duration;
    let t = outgoing.currentTime;
    if (Number.isFinite(dur) && dur > 0) t = t % dur;
    if (Number.isFinite(t)) {
      try {
        incoming.currentTime = t;
      } catch {
        /* seeking not ready yet — harmless */
      }
    }
    incoming.play?.().catch(() => {});

    // Once the crossfade settles, pause whichever video is now hidden.
    const timer = setTimeout(() => outgoing.pause?.(), 1850);
    return () => clearTimeout(timer);
  }, [mode]);

  const crossfade = { duration: reduce ? 0.3 : 1.7, ease: easeSoft };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Day — base layer, always beneath */}
      <video
        ref={dayRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/videos/vistarail-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Night — crossfaded on top; identical framing keeps the train aligned */}
      <motion.video
        ref={nightRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/videos/vistarail-hero-night.mp4"
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: mode === "night" ? 1 : 0 }}
        transition={crossfade}
      />

      {/* Legibility scrims (unchanged from Phase 1) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/45"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_45%,transparent_55%,rgba(6,12,24,0.42)_100%)]"
      />

      {/* Warm interior glow — fades in at night for a lamplit, cabin-at-dusk feel */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen bg-[radial-gradient(100%_75%_at_50%_72%,rgba(255,183,110,0.16),transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: mode === "night" ? 1 : 0 }}
        transition={crossfade}
      />
    </div>
  );
}
