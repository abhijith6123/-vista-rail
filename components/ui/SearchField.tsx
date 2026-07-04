"use client";

import { SearchIcon } from "../icons";

/**
 * Premium glass search input. Functional to type into, inert on submit
 * (no destination search wired yet). Glass background/border transition
 * with the day↔night theme via the shared .glass rule.
 */
export function SearchField({
  placeholder = "Where would you like to go?",
  className = "",
}: {
  placeholder?: string;
  className?: string;
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`glass group flex items-center gap-3 rounded-full px-5 py-3.5 ${className}`}
    >
      <SearchIcon className="h-[18px] w-[18px] shrink-0 text-white/60 transition-colors duration-300 group-focus-within:text-white/90" />
      <input
        type="text"
        inputMode="search"
        aria-label={placeholder}
        placeholder={placeholder}
        className="w-full bg-transparent text-[0.95rem] text-white outline-none placeholder:text-white/55"
      />
    </form>
  );
}
