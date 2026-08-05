import type { SVGProps } from "react";

/**
 * Symbol-only Unda Solutions mark. Inlined (not <img src>) so `currentColor`
 * resolves against the surrounding CSS context — see unda-design-os/brand/logo-system.md
 * for construction rules and color variations. Decorative by default; pass
 * `aria-label` if this instance is the only accessible name for its context.
 */
export function UndaSymbol({
  "aria-hidden": ariaHidden = true,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: decorative by default (aria-hidden); pass aria-label via props for accessible instances
    <svg viewBox="0 0 64 64" fill="none" aria-hidden={ariaHidden} {...props}>
      <rect x="17" y="17" width="14" height="14" rx="3" fill="currentColor" />
      <rect x="33" y="17" width="14" height="14" rx="3" fill="currentColor" />
      <rect x="17" y="33" width="14" height="14" rx="3" fill="currentColor" />
      <rect x="33" y="33" width="14" height="14" rx="3" fill="currentColor" />
      <path
        d="M26 31 Q32 39 38 31"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
