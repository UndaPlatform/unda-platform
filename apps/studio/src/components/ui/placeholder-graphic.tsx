import { cn } from "@/lib/utils";

/**
 * Abstract geometric placeholder — stands in for real project photography,
 * which doesn't exist yet for this pre-launch studio. Geometric and flat per
 * unda-design-os/creative-direction/art-direction.md ("no mascots, no
 * gradients-as-illustration"). Swap for real project imagery once available.
 */
export function PlaceholderGraphic({
  variant = 0,
  className,
}: {
  variant?: number;
  className?: string;
}) {
  const v = variant % 4;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-lg border border-border-default bg-bg-subtle",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        {v === 0 && (
          <>
            <circle
              cx="300"
              cy="90"
              r="70"
              fill="none"
              stroke="oklch(0.702 0.2 45.1 / 0.35)"
              strokeWidth="1.5"
            />
            <circle cx="300" cy="90" r="30" fill="oklch(0.702 0.2 45.1 / 0.12)" />
          </>
        )}
        {v === 1 && (
          <>
            <rect
              x="60"
              y="150"
              width="140"
              height="140"
              rx="12"
              fill="none"
              stroke="oklch(0.702 0.2 45.1 / 0.35)"
              strokeWidth="1.5"
            />
            <rect
              x="90"
              y="180"
              width="80"
              height="80"
              rx="8"
              fill="oklch(0.702 0.2 45.1 / 0.12)"
            />
          </>
        )}
        {v === 2 && (
          <>
            <path
              d="M40 260 L180 60 L340 260 Z"
              fill="none"
              stroke="oklch(0.702 0.2 45.1 / 0.35)"
              strokeWidth="1.5"
            />
            <circle cx="180" cy="180" r="24" fill="oklch(0.702 0.2 45.1 / 0.14)" />
          </>
        )}
        {v === 3 && (
          <>
            <rect
              x="220"
              y="90"
              width="100"
              height="100"
              transform="rotate(45 270 140)"
              fill="none"
              stroke="oklch(0.702 0.2 45.1 / 0.35)"
              strokeWidth="1.5"
            />
            <circle cx="270" cy="140" r="24" fill="oklch(0.702 0.2 45.1 / 0.14)" />
          </>
        )}
      </svg>
    </div>
  );
}
