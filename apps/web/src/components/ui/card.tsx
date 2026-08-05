import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Static card — per unda-design-os/design-system/components/card.md. A container for one idea. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-md border border-border-default bg-bg-default p-300", className)}
      {...props}
    />
  );
}

type LinkCardProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & { className?: string };

/** Interactive card — whole card is one hit target; must be a real link, never a div+onClick. */
export function LinkCard({ className, ...props }: LinkCardProps) {
  return (
    <Link
      className={cn(
        "block rounded-md border border-border-default bg-bg-default p-300 transition-[box-shadow,transform] duration-150 ease-out",
        "hover:-translate-y-0.5 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  );
}
