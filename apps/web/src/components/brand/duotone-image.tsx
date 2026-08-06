import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

/**
 * Grayscale + brand-color blend overlay — turns disparate stock photography into one
 * consistent, intentional art direction instead of literal random photos. A well-established
 * editorial technique (grayscale image + mix-blend-mode: color overlay = duotone), not a filter
 * gimmick — ties every photo on the site back to the single Royal Blue accent per Photography
 * Direction's "neutral grading" and "minimal color usage" rules.
 */
export function DuotoneImage({ className, ...props }: ImageProps & { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image {...props} className="object-cover grayscale contrast-125" />
      <div className="absolute inset-0 bg-brand-primary mix-blend-color" />
      <div className="absolute inset-0 bg-text-primary/10" />
    </div>
  );
}
