import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-text-primary text-bg-default hover:opacity-90",
  secondary: "border border-border-default text-text-primary hover:bg-bg-subtle",
  accent: "bg-brand-primary text-white hover:opacity-90",
  ghost: "text-text-primary hover:bg-bg-subtle",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-200 text-sm",
  md: "h-10 px-300 text-base",
  lg: "h-12 px-400 text-base",
};

/**
 * Shared visual styling for both the real <button> below and any navigational CTA styled
 * the same way — per design-system/components/button.md, Button triggers an action and is
 * "not for navigation (use Link)"; navigation CTAs apply this className to a real <Link>/<a>.
 * Pill-shaped (rounded-full) per the approved visual reference — supersedes the earlier
 * radius.md assumption in design-system/tokens; see DECISIONS.md.
 */
export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string | undefined;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-100 rounded-full font-medium transition-[opacity,background-color] duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

/** Per unda-design-os/design-system/components/button.md — one primary action per view. */
export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
