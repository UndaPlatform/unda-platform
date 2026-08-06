/**
 * Defines the `#unda-symbol` shape once (hidden, zero-size svg) so every `<UndaMark>` instance
 * can reference it via `<use>` instead of duplicating the path. Render once in the root layout.
 */
export function UndaSymbolDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="unda-symbol" viewBox="0 0 64 64">
          <rect x="10" y="10" width="14" height="14" rx="3" />
          <rect x="40" y="10" width="14" height="14" rx="3" />
          <rect x="10" y="40" width="14" height="14" rx="3" />
          <rect x="40" y="40" width="14" height="14" rx="3" />
          <path d="M24 30 a8 8 0 0 0 16 0" fill="none" stroke="currentColor" strokeWidth={3} />
        </symbol>
      </defs>
    </svg>
  );
}

export function UndaMark({
  size = 26,
  className,
  fill = "currentColor",
}: {
  size?: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill={fill}
      className={className}
      aria-hidden="true"
    >
      <use href="#unda-symbol" />
    </svg>
  );
}
