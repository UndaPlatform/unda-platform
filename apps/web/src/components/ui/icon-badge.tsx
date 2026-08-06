import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small rounded-square brand-colored badge carrying an icon — used in stat rows and ecosystem cards. */
export function IconBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-primary text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
