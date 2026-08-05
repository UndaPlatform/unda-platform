import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white hover:opacity-90",
  secondary: "border border-border-default text-text-primary hover:bg-bg-subtle",
  ghost: "text-text-primary hover:bg-bg-subtle",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-150 text-sm",
  md: "h-10 px-300 text-base",
  lg: "h-12 px-300 text-lg",
};

/**
 * Shared visual styling for both the real <button> below and any navigational CTA styled
 * the same way — per design-system/components/button.md, Button triggers an action and is
 * "not for navigation (use Link)"; navigation CTAs apply this className to a real <Link>/<a>.
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
    "inline-flex items-center justify-center gap-100 rounded-md font-medium transition-[opacity,background-color] duration-150 ease-out",
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
