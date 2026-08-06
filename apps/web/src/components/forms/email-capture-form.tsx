"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/input";
import { cn } from "@/lib/cn";

/**
 * Single-field email capture, shared by Newsletter and Talent Network signup.
 * TODO: no backend is wired yet — this only simulates success client-side. Connect a real
 * mailing-list provider (or API route) before this goes live.
 */
export function EmailCaptureForm({
  idPrefix,
  label,
  buttonLabel,
  successMessage,
  tone = "default",
}: {
  idPrefix: string;
  label: string;
  buttonLabel: string;
  successMessage: string;
  tone?: "default" | "light";
}) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p
        role="status"
        className={cn("text-base", tone === "light" ? "text-white" : "text-text-primary")}
      >
        {successMessage}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-200 sm:flex-row sm:items-end"
    >
      <div className="w-full sm:max-w-xs">
        <TextField
          label={label}
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          labelTone={tone}
        />
      </div>
      <Button type="submit" variant="accent">
        {buttonLabel}
      </Button>
    </form>
  );
}
