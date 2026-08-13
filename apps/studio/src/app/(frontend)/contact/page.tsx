import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact | Unda Studio",
  description: "Start a project with Unda Studio: product design, brand identity, and more.",
};

export default function ContactPage() {
  return (
    <section className="pt-[7rem] pb-1600 md:pt-[9rem]">
      <Container>
        <div className="grid grid-cols-1 gap-800 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="text-brand-accent-text text-caption uppercase">Contact</span>
            <h1 className="mt-150 max-w-xl font-display text-h1 text-text-primary">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-200 max-w-[55ch] text-body-lg text-text-secondary">
              Tell us a little about what you&apos;re building: stage, timeline, and budget if you
              have one, and we&apos;ll reply within one business day.
            </p>
            <div className="mt-400">
              <Button
                href="mailto:hello@studio.undasolutions.com"
                size="lg"
                trailingIcon={<ArrowUpRight className="size-4" aria-hidden="true" />}
              >
                hello@studio.undasolutions.com
              </Button>
            </div>
          </div>

          <div className="border-border-default border-t pt-400 md:border-t-0 md:border-l md:pt-0 md:pl-800">
            <h2 className="text-caption text-text-disabled uppercase">What to expect</h2>
            <ul className="mt-200 flex flex-col gap-300">
              <li>
                <p className="text-body text-text-primary">A reply within one business day</p>
                <p className="mt-50 text-body-sm text-text-secondary">
                  From a senior designer, not a sales queue.
                </p>
              </li>
              <li>
                <p className="text-body text-text-primary">A short scoping call</p>
                <p className="mt-50 text-body-sm text-text-secondary">
                  To understand your goals before we talk numbers.
                </p>
              </li>
              <li>
                <p className="text-body text-text-primary">A clear proposal</p>
                <p className="mt-50 text-body-sm text-text-secondary">
                  Scope, timeline, and cost, no surprises later.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
