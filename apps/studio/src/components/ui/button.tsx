import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  // White text on bg-brand-accent (#FF6B00) is 2.86:1 — under WCAG AA's
  // 4.5:1 minimum for text. Kept at the user's explicit, repeated request;
  // see ADR-037. (A separate tailwind-merge bug that silently stripped
  // this class entirely, independent of contrast, was fixed in ADR-041.)
  primary:
    "bg-brand-accent text-white hover:brightness-95 active:brightness-90 focus-visible:ring-border-focus",
  secondary:
    "border border-border-default text-text-primary hover:bg-bg-subtle active:bg-neutral-100 focus-visible:ring-border-focus",
  ghost:
    "text-text-primary hover:bg-bg-subtle active:bg-neutral-100 focus-visible:ring-border-focus",
  destructive:
    "bg-status-error text-white hover:brightness-95 active:brightness-90 focus-visible:ring-status-error",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 gap-100 px-200 text-body-sm",
  md: "h-10 gap-100 px-300 text-body",
  lg: "h-12 gap-100 px-400 text-body-lg",
};

const base =
  "inline-flex items-center justify-center rounded-md font-semibold transition-[filter,background-color] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {loading ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : leadingIcon}
      <span className={loading ? "opacity-0" : undefined}>{children}</span>
      {!loading && trailingIcon}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link
        href={href}
        className={classes}
        {...(anchorProps as Omit<ComponentProps<typeof Link>, "href">)}
      >
        {content}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type="button"
      className={cn(classes, loading && "relative")}
      aria-busy={loading || undefined}
      disabled={loading || buttonProps.disabled}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
