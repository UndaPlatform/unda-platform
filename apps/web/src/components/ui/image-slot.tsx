import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Renders a real photo when `src` resolves (see lib/photo.ts#resolvePhoto), otherwise an
 * honest empty state — a dashed frame, an image icon, and the caption describing what belongs
 * there. Never a repeated brand mark standing in for content: that read as broken, not
 * deliberate, the last time this site shipped placeholder imagery.
 */
export function ImageSlot({
  src,
  alt,
  tone = "light",
  className,
  priority,
  sizes = "100vw",
}: {
  src: string | null;
  alt: string;
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={cn("image-slot relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority ?? false}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "image-slot relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed p-3 text-center",
        tone === "light"
          ? "border-ink/20 bg-ink/[0.04] text-ink/60"
          : "border-white/25 bg-white/[0.05] text-white/55",
        className,
      )}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="opacity-70"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="max-w-[90%] text-xs font-medium tracking-[0.01em]">{alt}</span>
    </div>
  );
}
