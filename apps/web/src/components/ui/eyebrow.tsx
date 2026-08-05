import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase label above a section headline — signals category before the headline lands. */
export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm font-medium uppercase tracking-widest text-text-secondary", className)}
      {...props}
    />
  );
}
