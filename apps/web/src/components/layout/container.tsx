import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Marketing content-width constraint — 1200px max, per design-system/tokens/spacing-grid-and-border-tokens.md. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-300", className)} {...props} />;
}
