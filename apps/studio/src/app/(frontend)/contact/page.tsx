import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { getContactGlobal } from "@/lib/payload";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact | Unda Studio",
  description: "Start a project with Unda Studio: product design, brand identity, and more.",
};

const FALLBACK_EXPECTATIONS = [
  {
    title: "A reply within one business day",
    description: "From a senior designer, not a sales queue.",
  },
  {
    title: "A short scoping call",
    description: "To understand your goals before we talk numbers.",
  },
  {
    title: "A clear proposal",
    description: "Scope, timeline, and cost, no surprises later.",
  },
];

export default async function ContactPage() {
  const contact = await getContactGlobal();
  const email = contact.email || "hello@studio.undasolutions.com";
  const expectations =
    contact.expectations?.items && contact.expectations.items.length > 0
      ? contact.expectations.items
      : FALLBACK_EXPECTATIONS;

  return (
    <section className="pt-[7rem] pb-1600 md:pt-[9rem]">
      <Container>
        <div className="grid grid-cols-1 gap-800 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="text-brand-accent-text text-caption uppercase">
              {contact.eyebrow || "Contact"}
            </span>
            <h1 className="mt-150 max-w-xl font-display text-h1 text-text-primary">
              {contact.headline || "Let's talk about your project"}
            </h1>
            <p className="mt-200 max-w-[55ch] text-body-lg text-text-secondary">
              {contact.description ||
                "Tell us a little about what you're building: stage, timeline, and budget if you have one, and we'll reply within one business day."}
            </p>
            <div className="mt-400">
              <Button
                href={`mailto:${email}`}
                size="lg"
                trailingIcon={<ArrowUpRight className="size-4" aria-hidden="true" />}
              >
                {email}
              </Button>
            </div>
          </div>

          <div className="border-border-default border-t pt-400 md:border-t-0 md:border-l md:pt-0 md:pl-800">
            <h2 className="text-caption text-text-disabled uppercase">
              {contact.expectations?.heading || "What to expect"}
            </h2>
            <ul className="mt-200 flex flex-col gap-300">
              {expectations.map((item) => (
                <li key={item.title}>
                  <p className="text-body text-text-primary">{item.title}</p>
                  <p className="mt-50 text-body-sm text-text-secondary">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
