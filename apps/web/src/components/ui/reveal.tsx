"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered entrance — extends design-system/tokens/motion-tokens.md `recipe.scroll-reveal`
 * with a slightly longer travel distance and duration than the base token for a more deliberate
 * section-to-section glide (still well inside "quiet, not decorative"). Framer Motion's
 * `MotionConfig reducedMotion="user"` (set in layout.tsx) handles prefers-reduced-motion globally.
 */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
