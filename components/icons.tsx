import type { SVGProps } from "react";

/**
 * Inline, single-family line icons (1.6 stroke, currentColor).
 * Kept as SVG — never emoji — so they stay crisp and themeable.
 */

/** VistaRail mark — a window framing a distant view. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="4"
        width="20"
        height="20"
        rx="6.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.8 18.4c2.8-3.4 5-5 7.5-5 2.2 0 4 1.1 6.2 3.4 1 1 1.9 1.6 2.7 1.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.7" cy="10.3" r="1.7" fill="currentColor" />
    </svg>
  );
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.5 13.3A8.4 8.4 0 1 1 10.7 3.5a6.6 6.6 0 0 0 9.8 9.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2.6v2.3M12 19.1v2.3M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.6 12h2.3M19.1 12h2.3M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m20 20-3.3-3.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
