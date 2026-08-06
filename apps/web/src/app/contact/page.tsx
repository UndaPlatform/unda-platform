import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Unda Solutions.",
};

export default function ContactPage() {
  return (
    <section className="py-1200 sm:py-1600">
      <Container className="grid grid-cols-1 gap-800 lg:grid-cols-2">
        <div className="flex flex-col gap-600">
          <div className="flex flex-col gap-300">
            <Eyebrow>Contact us</Eyebrow>
            <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-6xl">
              Let&apos;s build something meaningful together.
            </h1>
            <p className="text-lg leading-8 text-text-secondary">
              Have a project in mind or want to explore how we can help your business grow?
              Let&apos;s talk.
            </p>
          </div>

          <div className="flex flex-col gap-400">
            <div className="flex flex-col gap-100">
              <p className="text-sm font-medium text-text-secondary">Email</p>
              <a
                href="mailto:hello@undasolutions.com"
                className="text-lg text-text-primary hover:text-brand-primary"
              >
                hello@undasolutions.com
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
