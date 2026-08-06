import { Globe, Heart, Sparkles, Target } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconBadge } from "@/components/ui/icon-badge";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Our story, mission, and the people building Unda Solutions.",
};

const CULTURE = [
  { icon: Target, title: "Meaningful Work", description: "Solve real problems that matter." },
  { icon: Sparkles, title: "Growth Mindset", description: "Learn, grow, and level up." },
  { icon: Heart, title: "Great Culture", description: "One team, one mission, one Unda." },
  { icon: Globe, title: "Global Impact", description: "Built in Africa, impacting the world." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-1200 sm:py-1600">
        <Container className="grid grid-cols-1 items-center gap-800 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-400">
            <Eyebrow>Who we are</Eyebrow>
            <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-6xl">
              Builders, thinkers, and problem solvers.
            </h1>
            <p className="text-lg leading-8 text-text-secondary">
              We&apos;re on a mission to build systems that power progress and improve lives.
              Through thoughtful design, innovative technology, and exceptional service, we build
              systems that inspire trust, create value, and stand the test of time.
            </p>
            <Link href="/careers" className={buttonVariants({ size: "lg" })}>
              View Open Positions →
            </Link>
          </div>
          <GraphicPanel className="aspect-square w-full lg:aspect-[4/5]" />
        </Container>
      </section>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="grid grid-cols-1 gap-400 sm:grid-cols-2 lg:grid-cols-4">
              {CULTURE.map((item) => (
                <div key={item.title} className="flex flex-col gap-200">
                  <IconBadge>
                    <item.icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  </IconBadge>
                  <p className="text-lg font-semibold text-text-primary">{item.title}</p>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

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
