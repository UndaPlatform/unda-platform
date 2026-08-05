import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { LinkCard } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";

const DIVISIONS = [
  {
    name: "Unda Studio",
    accent: "bg-division-studio",
    description: "Brand identity, product design, UI/UX, and creative strategy.",
  },
  {
    name: "Unda Technologies",
    accent: "bg-division-tech",
    description: "Software engineering, AI, automation, and technical consulting.",
  },
  {
    name: "Unda Travel",
    accent: "bg-division-travel",
    description: "Flights, hotels, visa assistance, and corporate travel management.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Integrated expertise",
    description: "One ecosystem instead of multiple disconnected providers.",
  },
  {
    title: "Systems thinking",
    description:
      "Every engagement is designed to scale and evolve, not treated as a one-off project.",
  },
  {
    title: "Human-centered approach",
    description: "Technology and design decisions start from real human needs.",
  },
  {
    title: "Long-term partnership",
    description:
      "Success is measured by value created for clients over time, not transaction volume.",
  },
];

export default function Home() {
  return (
    <>
      <section className="py-1600">
        <Container className="flex flex-col items-start gap-400">
          <Eyebrow>Unda Solutions</Eyebrow>
          <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
            Design, engineering, and <span className="text-brand-primary">travel</span> — one
            integrated team.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-text-secondary">
            We deliver thoughtful solutions that combine technology, design, and human-centered
            thinking to help businesses move forward with confidence.
          </p>
          <div className="flex flex-wrap gap-200">
            <Link href="/companies" className={buttonVariants({ size: "lg" })}>
              Explore our companies
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col gap-600">
          <div className="flex flex-col gap-200">
            <Eyebrow>Our companies</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              One brand, three companies
            </h2>
            <p className="max-w-xl text-base text-text-secondary">
              Unda Solutions is the parent brand across a growing ecosystem of specialized
              divisions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-300 sm:grid-cols-3">
            {DIVISIONS.map((division) => (
              <LinkCard key={division.name} href="/companies">
                <span
                  className={`mb-200 block h-1 w-8 rounded-full ${division.accent}`}
                  aria-hidden="true"
                />
                <p className="text-lg font-semibold text-text-primary">{division.name}</p>
                <p className="mt-100 text-sm text-text-secondary">{division.description}</p>
              </LinkCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col gap-600">
          <div className="flex flex-col gap-200">
            <Eyebrow>Why Unda</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Built to be trusted with the whole problem
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-400 sm:grid-cols-2">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="flex flex-col gap-100">
                <p className="text-lg font-semibold text-text-primary">{item.title}</p>
                <p className="text-base text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col items-start gap-300">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Let&apos;s build something that lasts.
          </h2>
          <div className="flex flex-wrap gap-200">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Contact us
            </Link>
            <Link href="/careers" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              View careers
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
