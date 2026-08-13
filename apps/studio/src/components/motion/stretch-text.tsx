"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Fit = "scale" | "size";

/**
 * Makes its text touch both edges of its container exactly, regardless of
 * word length or viewport — since font-size/clamp alone can only
 * approximate that for a fixed string.
 *
 * `fit="scale"` (default) applies a horizontal `scaleX` transform — fast,
 * but distorts letterforms wider than their natural shape once the needed
 * ratio strays far from 1.
 * `fit="size"` instead solves for the font-size that makes the text's
 * natural width match the container, so letters keep their true
 * proportions — the right choice for short strings where `scale` would
 * visibly stretch each glyph. It measures off a hidden probe element
 * rather than the visible span: mutating the visible span's own style to
 * re-read its "natural" size, then setting state back to the same
 * resulting value, is a no-op from React's point of view (identical state
 * skips the re-render) and leaves the just-cleared style stuck in the DOM.
 */
export function StretchText({
  children,
  className,
  fit = "scale",
}: {
  children: string;
  className?: string;
  fit?: Fit;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [scaleX, setScaleX] = useState(1);
  const [fontSize, setFontSize] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerWidth = container.offsetWidth;
      if (containerWidth <= 0) return;

      if (fit === "size") {
        const probe = measureRef.current;
        if (!probe) return;
        const naturalFontSize = Number.parseFloat(getComputedStyle(probe).fontSize);
        const textWidth = probe.scrollWidth;
        if (textWidth > 0 && naturalFontSize > 0) {
          setFontSize(naturalFontSize * (containerWidth / textWidth));
        }
        return;
      }

      const text = textRef.current;
      if (!text) return;
      const textWidth = text.scrollWidth;
      if (textWidth > 0) {
        setScaleX(containerWidth / textWidth);
      }
    };

    measure();
    document.fonts?.ready?.then(measure);

    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [fit]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {fit === "size" && (
        <span
          ref={measureRef}
          className={className}
          aria-hidden="true"
          style={{
            position: "absolute",
            visibility: "hidden",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          {children}
        </span>
      )}
      <span
        ref={textRef}
        className={className}
        style={
          fit === "size"
            ? { display: "inline-block", whiteSpace: "nowrap", fontSize }
            : {
                display: "inline-block",
                whiteSpace: "nowrap",
                transform: `scaleX(${scaleX})`,
                transformOrigin: "left",
              }
        }
      >
        {children}
      </span>
    </div>
  );
}
