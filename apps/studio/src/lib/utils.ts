import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Plain twMerge doesn't know this app's custom font-size scale (text-hero,
 * text-display, text-h1...text-caption) and — because it can't classify
 * them — was folding them into the same conflict group as text-color
 * utilities (text-white, text-brand-accent, etc). Whichever came later in
 * a cn() call won, silently dropping the other. Registering the scale as
 * its own `font-size` group fixes that. See DECISIONS.md ADR-041.
 */
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-hero",
        "text-display",
        "text-h1",
        "text-h2",
        "text-h3",
        "text-h4",
        "text-body-lg",
        "text-body",
        "text-body-sm",
        "text-caption",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
