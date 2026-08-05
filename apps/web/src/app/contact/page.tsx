import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Unda Solutions.",
};

export default function ContactPage() {
  return (
    <section className="py-1200">
      <Container className="flex flex-col gap-600 max-w-lg">
        <div className="flex flex-col gap-200">
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Contact us
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            Tell us a little about what you need — we&apos;ll get back to you.
          </p>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
