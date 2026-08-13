export function TriangleAccent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" className={className} aria-hidden="true">
      <path d="M5 0 L10 9 L0 9 Z" fill="currentColor" />
    </svg>
  );
}
