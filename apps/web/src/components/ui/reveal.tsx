"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered entrance — per design-system/tokens/motion-tokens.md `recipe.scroll-reveal`:
 * opacity + translateY(8px), once, ease.enter/motion.base. Framer Motion's `MotionConfig
 * reducedMotion="user"` (set in layout.tsx) handles prefers-reduced-motion globally.
 */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.18, ease: [0, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
