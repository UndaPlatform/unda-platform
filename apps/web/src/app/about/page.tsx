import type { Metadata } from "next";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Our story, mission, and the people building Unda Solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-1200 sm:py-1600">
        <Container className="grid grid-cols-1 items-center gap-800 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-400">
            <Eyebrow>Who we are</Eyebrow>
            <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-6xl">
              Our story
            </h1>
            <p className="text-lg leading-8 text-text-secondary">
              Unda Solutions exists to create intelligent solutions that improve how businesses and
              people work, connect, and grow. Through thoughtful design, innovative technology, and
              exceptional service, we build systems that inspire trust, create value, and stand the
              test of time.
            </p>
            <p className="text-lg leading-8 text-text-secondary">
              Rather than functioning as a pure service provider, we&apos;re building an ecosystem
              of products, platforms, and services intended to create long-term value across Africa
              and beyond — with the same rigor and craft as any global technology company.
            </p>
          </div>
          <GraphicPanel className="aspect-square w-full lg:aspect-[4/5]" />
        </Container>
      </section>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-200">
            <Eyebrow>The team</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Meet the brains behind Unda
            </h2>
            <p className="max-w-lg text-base text-text-secondary">
              Team profiles are on their way. We&apos;d rather introduce our team properly than fill
              this space with placeholders.
            </p>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-400">
            <div className="flex flex-col gap-100 max-w-lg">
              <Eyebrow>Say hello</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Get in touch
              </h2>
              <p className="text-base text-text-secondary">
                Questions about who we are or what we do? Send us a message.
              </p>
            </div>
            <ContactForm />
          </Container>
        </section>
      </Reveal>
    </>
  );
}
