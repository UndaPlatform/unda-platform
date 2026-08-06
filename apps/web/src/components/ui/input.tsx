import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface FieldProps {
  label: string;
  id: string;
  helperText?: string;
  error?: string;
  /** Use "light" when the field sits on a dark/colored section background. */
  labelTone?: "default" | "light";
}

const fieldChrome =
  "w-full rounded-sm border border-border-default bg-bg-default px-200 py-100 text-base text-text-primary " +
  "placeholder:text-text-disabled hover:border-text-disabled " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus";

/** Per unda-design-os/design-system/components/input-textarea-and-search.md — visible label above field, always. */
export function TextField({
  label,
  id,
  helperText,
  error,
  labelTone = "default",
  className,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const helperId = helperText || error ? `${id}-helper` : undefined;
  return (
    <div className="flex flex-col gap-100">
      <label
        htmlFor={id}
        className={cn(
          "text-sm font-medium",
          labelTone === "light" ? "text-white" : "text-text-primary",
        )}
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(fieldChrome, error && "border-status-error", className)}
        aria-describedby={helperId}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {(helperText || error) && (
        <p
          id={helperId}
          className={cn("text-sm", error ? "text-status-error" : "text-text-secondary")}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  );
}

export function TextAreaField({
  label,
  id,
  helperText,
  error,
  className,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const helperId = helperText || error ? `${id}-helper` : undefined;
  return (
    <div className="flex flex-col gap-100">
      <label htmlFor={id} className="text-sm font-medium text-text-primary">
        {label}
      </label>
      <textarea
        id={id}
        className={cn(fieldChrome, "resize-y", error && "border-status-error", className)}
        aria-describedby={helperId}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {(helperText || error) && (
        <p
          id={helperId}
          className={cn("text-sm", error ? "text-status-error" : "text-text-secondary")}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  );
}
