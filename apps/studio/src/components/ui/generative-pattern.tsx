type Shape = "circle" | "square";
type Kind = "dots" | "lines";

/**
 * Small procedurally-generated dot/line grid, clipped to a circle or left
 * as a square — decorative only, not a semantic icon (so it doesn't need
 * to be a Lucide glyph). Used wherever a step/reason needs a distinct
 * abstract mark rather than a literal icon. See DECISIONS.md ADR-043.
 */
export function GenerativePattern({
  shape,
  kind,
  split = false,
  tone = "neutral",
  className,
}: {
  shape: Shape;
  kind: Kind;
  split?: boolean;
  tone?: "accent" | "neutral";
  className?: string;
}) {
  const size = 200;
  const center = size / 2;
  const cells = 13;
  const step = size / (cells + 1);
  const color = tone === "accent" ? "var(--color-brand-accent)" : "var(--color-neutral-400)";

  const inCircle = (x: number, y: number) => {
    const dx = x - center;
    const dy = y - center;
    return Math.sqrt(dx * dx + dy * dy) <= center - step / 2;
  };

  const elements: React.ReactNode[] = [];

  if (kind === "dots") {
    for (let row = 0; row < cells; row++) {
      for (let col = 0; col < cells; col++) {
        const x = step * (col + 1);
        const y = step * (row + 1);
        if (shape === "circle" && !inCircle(x, y)) continue;
        elements.push(<circle key={`${row}-${col}`} cx={x} cy={y} r={2.4} fill={color} />);
      }
    }
  } else {
    for (let row = 0; row < cells; row++) {
      const y = step * (row + 1);
      let x1 = step * 0.5;
      let x2 = size - step * 0.5;
      if (shape === "circle") {
        const dy = y - center;
        const halfWidth = Math.sqrt(Math.max(0, center ** 2 - dy * dy));
        if (halfWidth < step / 2) continue;
        x1 = center - halfWidth;
        x2 = center + halfWidth;
      }
      if (split) {
        const gap = 5;
        elements.push(
          <line
            key={`${row}-l`}
            x1={x1}
            y1={y}
            x2={center - gap}
            y2={y}
            stroke={color}
            strokeWidth={2}
          />,
        );
        elements.push(
          <line
            key={`${row}-r`}
            x1={center + gap}
            y1={y}
            x2={x2}
            y2={y}
            stroke={color}
            strokeWidth={2}
          />,
        );
      } else {
        elements.push(
          <line key={row} x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth={2} />,
        );
      }
    }
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      {elements}
    </svg>
  );
}
