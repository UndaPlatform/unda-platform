"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextAreaField, TextField } from "@/components/ui/input";

/**
 * TODO: no backend is wired yet — this only simulates a successful submission client-side.
 * Before this form goes live, connect a real API route (or third-party form service) that
 * actually delivers the message, and remove the simulated-success fallback below.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p
        role="status"
        className="rounded-lg border border-border-default p-400 text-base text-text-primary"
      >
        Thanks for reaching out — we&apos;ll get back to you shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-300 rounded-lg border border-border-default p-400"
    >
      <TextField
        label="Full name"
        id="contact-name"
        name="name"
        type="text"
        required
        autoComplete="name"
      />
      <TextField
        label="Email address"
        id="contact-email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <TextField
        label="Company"
        id="contact-company"
        name="company"
        type="text"
        autoComplete="organization"
      />
      <TextAreaField
        label="How can we help?"
        id="contact-message"
        name="message"
        rows={4}
        required
      />
      <Button type="submit" variant="accent" className="self-start">
        Send Message →
      </Button>
    </form>
  );
}
