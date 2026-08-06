import Image from "next/image";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import { cn } from "@/lib/cn";

/**
 * Renders real photography when a src is available (see lib/photo.ts#resolvePhoto), falling
 * back to GraphicPanel when it isn't. One conditional shared by every image slot in the app
 * instead of duplicating the "do we have a real photo yet" check at each call site.
 */
export function Photo({
  src,
  alt,
  tone = "brand",
  className,
  priority,
  sizes = "100vw",
}: {
  src: string | null;
  alt: string;
  tone?: "brand" | "dark";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!src) {
    return <GraphicPanel tone={tone} className={className} />;
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
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
