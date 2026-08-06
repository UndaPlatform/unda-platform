import { Heart, Sparkles, Target, Zap } from "lucide-react";
import type { Metadata } from "next";
import { Photo } from "@/components/brand/photo";
import { EmailCaptureForm } from "@/components/forms/email-capture-form";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconBadge } from "@/components/ui/icon-badge";
import { Reveal } from "@/components/ui/reveal";
import { resolvePhoto } from "@/lib/photo";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build what's next, with the best.",
};

const WHY_JOIN = [
  { icon: Target, title: "Impactful Work", description: "Work on projects that matter." },
  { icon: Zap, title: "Ownership", description: "We trust you to own and drive outcomes." },
  {
    icon: Sparkles,
    title: "Learning",
    description: "Continuous learning is built into how we work.",
  },
  {
    icon: Heart,
    title: "Wellbeing",
    description: "We care about your wellbeing, not just output.",
  },
];

const VALUES = [
  "Craftsmanship",
  "Innovation",
  "Integrity",
  "Simplicity",
  "Impact",
  "Collaboration",
  "Continuous learning",
  "Customer success",
];

export default function CareersPage() {
  return (
    <>
      <section className="py-1200 sm:py-1600">
        <Container className="grid grid-cols-1 items-center gap-800 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-400">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
              Build what&apos;s next. With the best.
            </h1>
            <p className="text-lg leading-8 text-text-secondary">
              We&apos;re a team of builders, thinkers, and dreamers creating impact through
              technology.
            </p>
            <a href="#open-positions" className={buttonVariants({ size: "lg" })}>
              View Open Positions →
            </a>
          </div>
          <Photo
            src={resolvePhoto("careers.jpg")}
            alt="Life at Unda Solutions"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-square w-full lg:aspect-[4/5]"
          />
        </Container>
      </section>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <Eyebrow>Why join Unda</Eyebrow>
            <div className="grid grid-cols-1 gap-400 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_JOIN.map((item) => (
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
          <Container className="flex flex-col gap-400">
            <Eyebrow>What we value</Eyebrow>
            <ul className="grid grid-cols-2 gap-200 sm:grid-cols-4">
              {VALUES.map((value) => (
                <li key={value} className="text-lg font-semibold text-text-primary">
                  {value}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section id="open-positions" className="bg-brand-primary py-1200">
          <Container className="flex flex-col items-start gap-300 max-w-lg">
            <Eyebrow className="text-white/70">Open positions</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Don&apos;t see the right role? Join our talent network and be the first to know.
            </h2>
            <EmailCaptureForm
              idPrefix="talent-network"
              label="Email address"
              buttonLabel="Join Talent Network →"
              successMessage="You're on the list — we'll reach out when a fit opens up."
              tone="light"
            />
          </Container>
        </section>
      </Reveal>
    </>
  );
}
