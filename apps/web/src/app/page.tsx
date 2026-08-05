import Link from "next/link";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

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
      <section className="py-1200 sm:py-1600">
        <Container className="grid grid-cols-1 items-center gap-800 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col items-start gap-400">
            <Eyebrow>Unda Solutions</Eyebrow>
            <h1 className="font-display max-w-2xl text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-7xl">
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
              <Link
                href="/contact"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Get in touch
              </Link>
            </div>
          </div>
          <GraphicPanel className="aspect-square w-full lg:aspect-[4/5]" />
        </Container>
      </section>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="flex flex-col gap-200">
              <Eyebrow>Our companies</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                One brand, three companies
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-border-default border-t border-b border-border-default">
              {DIVISIONS.map((division) => (
                <Link
                  key={division.name}
                  href="/companies"
                  className="group flex items-center justify-between gap-400 px-200 py-500 transition-colors duration-150 ease-out hover:bg-bg-subtle sm:-mx-200"
                >
                  <div className="flex items-center gap-300">
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full ${division.accent}`}
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-100">
                      <p className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
                        {division.name}
                      </p>
                      <p className="max-w-md text-sm text-text-secondary sm:text-base">
                        {division.description}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl text-text-secondary transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:text-brand-primary"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <section className="bg-brand-primary py-1200">
          <Container className="flex flex-col items-start gap-300">
            <Eyebrow className="text-white/70">Get started</Eyebrow>
            <h2 className="font-display max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something that lasts.
            </h2>
            <div className="flex flex-wrap gap-200">
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className: "bg-white text-brand-primary hover:opacity-90",
                })}
              >
                Contact us
              </Link>
              <Link
                href="/careers"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "border-white/40 text-white hover:bg-white/10",
                })}
              >
                View careers
              </Link>
            </div>
          </Container>
        </section>
      </Reveal>
    </>
  );
}
