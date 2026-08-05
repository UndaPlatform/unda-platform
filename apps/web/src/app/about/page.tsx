import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "About Us",
  description: "Our story, mission, and the people building Unda Solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-1200">
        <Container className="flex flex-col gap-400 max-w-2xl">
          <Eyebrow>Who we are</Eyebrow>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
            Our story
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            Unda Solutions exists to create intelligent solutions that improve how businesses and
            people work, connect, and grow. Through thoughtful design, innovative technology, and
            exceptional service, we build systems that inspire trust, create value, and stand the
            test of time.
          </p>
          <p className="text-lg leading-8 text-text-secondary">
            Rather than functioning as a pure service provider, we&apos;re building an ecosystem of
            products, platforms, and services intended to create long-term value across Africa and
            beyond — with the same rigor and craft as any global technology company.
          </p>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col gap-400">
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Meet the brains behind Unda
          </h2>
          <p className="max-w-lg text-base text-text-secondary">
            Team profiles are on their way. We&apos;d rather introduce our team properly than fill
            this space with placeholders.
          </p>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col gap-400">
          <div className="flex flex-col gap-100 max-w-lg">
            <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
              Get in touch
            </h2>
            <p className="text-base text-text-secondary">
              Questions about who we are or what we do? Send us a message.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
