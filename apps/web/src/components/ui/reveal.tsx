"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

/**
 * Scroll-triggered entrance, ported directly from the approved design's own IntersectionObserver
 * script (threshold 0.12, unobserve once revealed) rather than reintroducing framer-motion —
 * the source design already specifies this exact behavior in plain CSS + vanilla JS.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
