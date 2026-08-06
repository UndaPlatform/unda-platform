"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GraphicPanel } from "@/components/brand/graphic-panel";

type Division = {
  name: string;
  domain: string;
  description: string;
};

/**
 * Hover/focus-driven division list — the active item goes bold white with an arrow, the
 * rest dim; the graphic panel on the right crossfades to match. Both mouse hover and keyboard
 * focus drive the same active state, so this isn't a mouse-only interaction.
 */
/** `divisions` must be non-empty — this renders a hover list, not an empty state. */
export function EcosystemHoverList({ divisions }: { divisions: Division[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // biome-ignore lint/style/noNonNullAssertion: divisions is a non-empty compile-time constant, guaranteed by the caller
  const active = divisions[activeIndex] ?? divisions[0]!;

  return (
    <div className="grid grid-cols-1 items-center gap-600 lg:grid-cols-2 lg:gap-800">
      <div className="flex flex-col">
        {divisions.map((division, i) => {
          const isActive = i === activeIndex;
          return (
            <a
              key={division.name}
              href={division.domain}
              rel="noopener"
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              className="group flex items-center gap-300 border-b border-white/10 py-300"
            >
              <span
                aria-hidden="true"
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-opacity duration-150 ease-out ${
                  isActive ? "bg-white text-text-primary opacity-100" : "opacity-0"
                }`}
              >
                →
              </span>
              <span
                className={`font-display text-3xl font-bold tracking-tight transition-colors duration-150 ease-out sm:text-4xl ${
                  isActive ? "text-white" : "text-white/30"
                }`}
              >
                {division.name}
              </span>
            </a>
          );
        })}
      </div>

      <div className="flex flex-col gap-200">
        <div className="relative h-[280px] w-full overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
              className="absolute inset-0"
            >
              <GraphicPanel className="h-full w-full" />
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={active.name}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="text-base text-white/70"
          >
            {active.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
