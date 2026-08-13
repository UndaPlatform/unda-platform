"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered entrance for marketing content — the "first, single
 * content reveal" the motion foundations allow. `index` staggers children by
 * 40ms up to 3 deep per the choreography rule; beyond that, cap the value.
 */
export function Reveal({
  children,
  index = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];
  const delay = Math.min(index, 3) * 0.04;

  if (reduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.24, ease: [0, 0, 0.2, 1], delay }}
    >
      {children}
    </Component>
  );
}
