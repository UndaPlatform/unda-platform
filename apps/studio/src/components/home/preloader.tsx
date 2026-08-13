"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Cycled once, in order, then the preloader dismisses — not a looping ticker.
const TAGLINES = ["We craft digital experiences.", "We build products that ship."];

const TYPE_SPEED_MS = 40;
const HOLD_MS = 700;
const EXIT_MS = 400;

type Phase = "typing" | "holding" | "exiting";

/**
 * Branded intro, plays on every visit to Home: the wordmark sits above a
 * tagline that types in character by character, then exits letter-by-letter
 * with a 3D flip before the next tagline types in. After the last tagline,
 * the whole overlay fades out to reveal the page underneath. Deliberately
 * black/white (no gradient background) to stay consistent with the Hero's
 * locked black-and-white direction — see DECISIONS.md for the ADR on this.
 */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (!visible || phase !== "typing") return;
    const tagline = TAGLINES[taglineIndex];
    if (tagline === undefined) return;
    if (charCount < tagline.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("holding"), HOLD_MS);
    return () => clearTimeout(t);
  }, [visible, phase, charCount, taglineIndex]);

  useEffect(() => {
    if (phase !== "holding") return;
    setPhase("exiting");
  }, [phase]);

  useEffect(() => {
    if (phase !== "exiting") return;
    const t = setTimeout(() => {
      if (taglineIndex < TAGLINES.length - 1) {
        setTaglineIndex((i) => i + 1);
        setCharCount(0);
        setPhase("typing");
      } else {
        setVisible(false);
      }
    }, EXIT_MS);
    return () => clearTimeout(t);
  }, [phase, taglineIndex]);

  const tagline = TAGLINES[taglineIndex] ?? "";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center gap-300 bg-neutral-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <Image
            src="/logo-white.png"
            alt="Unda Studio"
            width={1593}
            height={512}
            priority
            className="h-20 w-auto md:h-28"
          />

          <p
            aria-live="polite"
            className="flex h-[1.5em] items-center font-mono text-h4 text-neutral-400"
            style={{ perspective: "400px" }}
          >
            {phase === "exiting"
              ? tagline.split("").map((char, i) => (
                  <motion.span
                    // biome-ignore lint/suspicious/noArrayIndexKey: static string per render, never reordered
                    key={i}
                    initial={{ rotateX: 0, opacity: 1 }}
                    animate={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.012, ease: "easeIn" }}
                    className="inline-block whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))
              : tagline.slice(0, charCount)}
            {phase === "typing" && (
              <span className="ml-[2px] inline-block h-[1em] w-[1px] animate-pulse bg-neutral-400" />
            )}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
