"use client";

import { motion, type MotionStyle } from "framer-motion";
import { SearchField } from "./ui/SearchField";
import { Button } from "./ui/Button";
import { ArrowIcon } from "./icons";
import {
  fadeRise,
  fadeOnly,
  scaleIn,
  springIn,
  SEQUENCE,
  easePremium,
  easeSoft,
} from "@/lib/motion";

export type HeroCopy = {
  badge: string;
  headingLines: [string, string];
  subtitle: string;
  placeholder: string;
  cta: string;
};

type Props = {
  copy: HeroCopy;
  /** Whether this mode is the visible one. */
  active: boolean;
  /** Run the Phase 1 staggered reveal on mount (day layer only). */
  entrance: boolean;
  reduce: boolean | null;
  frontStyle?: MotionStyle;
  backStyle?: MotionStyle;
};

/**
 * One mode's hero content (badge · heading · subtitle · search · CTA).
 * Day and night instances are grid-stacked in a single cell so the
 * container is always the taller of the two — the crossfade never
 * shifts layout. The block crossfades via opacity + a gentle rise;
 * blur is applied only to the text wrappers so glass backdrop-filters
 * are never placed under a CSS `filter`.
 */
export default function HeroContent({
  copy,
  active,
  entrance,
  reduce,
  frontStyle,
  backStyle,
}: Props) {
  const block = reduce
    ? { opacity: active ? 1 : 0 }
    : { opacity: active ? 1 : 0, y: active ? 0 : 16 };

  const enterT = { duration: 0.9, ease: easePremium, delay: 0.4 };
  const exitT = { duration: 0.6, ease: easeSoft };
  const crossfadeT = reduce ? { duration: 0.25 } : active ? enterT : exitT;

  const textBlur = reduce ? {} : { filter: active ? "blur(0px)" : "blur(7px)" };

  // Phase 1 per-child entrance variants (day layer, first paint only).
  const ev = {
    badge: reduce ? fadeOnly(SEQUENCE.badge) : scaleIn({ delay: SEQUENCE.badge }),
    title: reduce
      ? fadeOnly(SEQUENCE.title)
      : fadeRise({ delay: SEQUENCE.title, y: 24, blur: 12, duration: 1.1 }),
    subtitle: reduce
      ? fadeOnly(SEQUENCE.subtitle)
      : fadeRise({ delay: SEQUENCE.subtitle, y: 16, blur: 8, duration: 1 }),
    search: reduce
      ? fadeOnly(SEQUENCE.search)
      : scaleIn({ delay: SEQUENCE.search, from: 0.96 }),
    cta: reduce ? fadeOnly(SEQUENCE.cta) : springIn(SEQUENCE.cta),
  };
  const childAnim = (key: keyof typeof ev) =>
    entrance
      ? { variants: ev[key], initial: "hidden" as const, animate: "show" as const }
      : {};

  return (
    <motion.div
      className="col-start-1 row-start-1 flex flex-col items-center [grid-area:1/1]"
      style={{ pointerEvents: active ? "auto" : "none" }}
      aria-hidden={!active}
      initial={false}
      animate={block}
      transition={crossfadeT}
    >
      {/* Front depth layer — badge + heading */}
      <motion.div style={frontStyle} className="flex flex-col items-center">
        <motion.div {...childAnim("badge")} className="will-animate">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[0.78rem] font-medium tracking-[0.01em] text-white/85">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {copy.badge}
          </span>
        </motion.div>

        {/* Heading — blur lives on this wrapper (text only, no glass inside). */}
        <motion.div
          className="will-animate"
          initial={false}
          animate={textBlur}
          transition={crossfadeT}
        >
          <motion.h1
            {...childAnim("title")}
            className="mt-7 text-balance text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white text-shadow-soft"
          >
            {copy.headingLines[0]}
            <br className="hidden sm:block" /> {copy.headingLines[1]}
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Back depth layer — subtitle + search + CTA */}
      <motion.div style={backStyle} className="flex w-full flex-col items-center">
        <motion.div
          className="w-full max-w-2xl will-animate"
          initial={false}
          animate={textBlur}
          transition={crossfadeT}
        >
          <motion.p
            {...childAnim("subtitle")}
            className="mt-6 text-[clamp(1rem,1.5vw,1.2rem)] font-light leading-relaxed text-white/80 text-shadow-subtle"
          >
            {copy.subtitle}
          </motion.p>
        </motion.div>

        <motion.div {...childAnim("search")} className="mt-10 w-full max-w-md will-animate">
          <SearchField placeholder={copy.placeholder} />
        </motion.div>

        <motion.div {...childAnim("cta")} className="mt-5 will-animate">
          <Button variant="primary" className="px-7 py-3.5 text-[0.95rem]">
            {copy.cta}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
