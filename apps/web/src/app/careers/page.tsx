import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

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
      <section className="py-1200">
        <Container className="flex flex-col gap-600 max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Careers at Unda
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            We&apos;re a small, integrated team building across design, engineering, and travel.
            Quality isn&apos;t optional, innovation is pursued with purpose rather than novelty, and
            customer success is how we measure our own.
          </p>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col gap-400">
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            What we value
          </h2>
          <ul className="grid grid-cols-2 gap-200 sm:grid-cols-4">
            {VALUES.map((value) => (
              <li key={value} className="text-base text-text-secondary">
                {value}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col items-start gap-300 max-w-lg">
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Open roles
          </h2>
          <p className="text-base text-text-secondary">
            We don&apos;t have open roles listed right now. If you think you&apos;d be a strong fit
            for where we&apos;re headed, we&apos;d still like to hear from you.
          </p>
          <Link href="/contact" className={buttonVariants()}>
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}
