import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Careers",
  description: "What it's like to work at Unda Solutions, and how to reach out.",
};

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
        <Container className="flex flex-col gap-400 max-w-2xl">
          <Eyebrow>Join us</Eyebrow>
          <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-7xl">
            Careers at Unda
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            We&apos;re a small, integrated team building across design, engineering, and travel.
            Quality isn&apos;t optional, innovation is pursued with purpose rather than novelty, and
            customer success is how we measure our own.
          </p>
        </Container>
      </section>

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
        <section className="bg-brand-primary py-1200">
          <Container className="flex flex-col items-start gap-300 max-w-lg">
            <Eyebrow className="text-white/70">Open roles</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Nothing open right now — but we still want to hear from you.
            </h2>
            <p className="text-base text-white/80">
              If you think you&apos;d be a strong fit for where we&apos;re headed, reach out
              directly.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "bg-white text-brand-primary hover:opacity-90",
              })}
            >
              Get in touch
            </Link>
          </Container>
        </section>
      </Reveal>
    </>
  );
}
