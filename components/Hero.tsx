"use client";

import {
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import HeroVideo from "./HeroVideo";
import ScrollCue from "./ScrollCue";
import HeroContent, { type HeroCopy } from "./HeroContent";
import { useMode } from "./ModeProvider";

const DAY: HeroCopy = {
  badge: "Scenic Journeys Across the World",
  headingLines: ["Every Window Opens", "a New Adventure"],
  subtitle:
    "Travel through breathtaking landscapes, timeless routes, and unforgettable destinations. Every journey is designed to make the view as memorable as the destination itself.",
  placeholder: "Where would you like to go?",
  cta: "Start Your Journey",
};

const NIGHT: HeroCopy = {
  badge: "Moonlit Routes & Night Escapes",
  headingLines: ["Discover the Beauty That", "Awakens After Sunset"],
  subtitle:
    "Watch mountains glow beneath the stars, cross silent valleys under moonlight, and experience rail journeys that reveal an entirely different world after dark.",
  placeholder: "Choose your night escape",
  cta: "Explore Night Routes",
};

export default function Hero() {
  const reduce = useReducedMotion();
  const { mode } = useMode();

  // --- Subtle mouse parallax (shared by both mode layers) --------------
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 55, damping: 18, mass: 0.6 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  const frontX = useTransform(sx, (v) => v * 16);
  const frontY = useTransform(sy, (v) => v * 16);
  const backX = useTransform(sx, (v) => v * 8);
  const backY = useTransform(sy, (v) => v * 8);

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetMouse = () => {
    mx.set(0);
    my.set(0);
  };

  const frontStyle = reduce ? undefined : { x: frontX, y: frontY };
  const backStyle = reduce ? undefined : { x: backX, y: backY };

  return (
    <section
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6"
    >
      <HeroVideo />

      {/* Soft glow concentrated behind the text for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[130%] w-[150%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(45%_42%_at_50%_50%,rgba(6,12,24,0.42),transparent_72%)]"
      />

      {/* Day + night content grid-stacked in one cell → no layout shift */}
      <div className="relative z-10 grid w-full max-w-4xl place-items-center text-center">
        <HeroContent
          copy={DAY}
          active={mode === "day"}
          entrance
          reduce={reduce}
          frontStyle={frontStyle}
          backStyle={backStyle}
        />
        <HeroContent
          copy={NIGHT}
          active={mode === "night"}
          entrance={false}
          reduce={reduce}
          frontStyle={frontStyle}
          backStyle={backStyle}
        />
      </div>

      <ScrollCue />
    </section>
  );
}
