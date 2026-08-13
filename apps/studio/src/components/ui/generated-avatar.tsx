import { useId } from "react";

const PALETTE = [
  { bg: "var(--color-neutral-100)", fg: "var(--color-neutral-400)" },
  { bg: "oklch(0.702 0.2 45.1 / 0.16)", fg: "var(--color-brand-accent-text)" },
  { bg: "var(--color-neutral-200)", fg: "var(--color-neutral-600)" },
];

const FALLBACK = { bg: "var(--color-neutral-100)", fg: "var(--color-neutral-400)" };

function paletteFor(seed: string) {
  const sum = seed.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  return PALETTE[sum % PALETTE.length] ?? FALLBACK;
}

/**
 * Abstract, illustrated stand-in avatar — not a photo, real or stock, of any
 * specific person. Deterministic per `seed` so the same seed always renders
 * the same look. See DECISIONS.md ADR-033.
 */
export function GeneratedAvatar({ seed, className }: { seed: string; className?: string }) {
  const clipId = useId();
  const { bg, fg } = paletteFor(seed);

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <clipPath id={clipId}>
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <circle cx="16" cy="16" r="16" fill={bg} />
        <circle cx="16" cy="13" r="5.5" fill={fg} />
        <path d="M4 31c0-7.2 5.4-11.5 12-11.5s12 4.3 12 11.5" fill={fg} />
      </g>
    </svg>
  );
}
