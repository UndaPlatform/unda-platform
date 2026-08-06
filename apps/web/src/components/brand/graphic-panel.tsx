import type { HTMLAttributes } from "react";
import { UndaSymbol } from "@/components/brand/unda-symbol";
import { cn } from "@/lib/cn";

/**
 * A bold color panel carrying a repeating field of the logo's own module shape — per
 * unda-design-os/brand-expression/manual/07-graphic-language.md ("modular patterns... derive
 * from the logo geometry"). Stands in for photography until real photography exists —
 * a deliberate graphic device, not a placeholder pretending to be an image.
 */
export function GraphicPanel({
  tone = "brand",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { tone?: "brand" | "dark" }) {
  const patternId = tone === "dark" ? "unda-module-pattern-dark" : "unda-module-pattern-brand";
  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden rounded-lg",
        tone === "dark" ? "bg-text-primary" : "bg-brand-primary",
        className,
      )}
      {...props}
    >
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <title>Decorative module pattern</title>
        <defs>
          <pattern id={patternId} width="56" height="56" patternUnits="userSpaceOnUse">
            <rect x="6" y="6" width="20" height="20" rx="4" fill="white" fillOpacity={0.08} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <UndaSymbol aria-hidden="true" className="relative h-24 w-24 text-white/90 sm:h-32 sm:w-32" />
    </div>
  );
}
