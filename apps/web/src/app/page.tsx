import Image from "next/image";
import Link from "next/link";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { StatItem } from "@/components/ui/stat-item";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { CASE_STUDIES } from "@/lib/case-studies";
import { IMAGE_CREDITS } from "@/lib/image-credits";
import { STATS } from "@/lib/stats";

const DIVISIONS = [
  {
    name: "Unda Technologies",
    domain: "https://technologies.undasolutions.com",
    description: "Software engineering, AI & automation, cloud & infrastructure, data & analytics.",
    image: IMAGE_CREDITS.techDataCenter,
  },
  {
    name: "Unda Studio",
    domain: "https://studio.undasolutions.com",
    description: "Product design, brand systems, UX/UI design, and design systems.",
    image: null,
  },
  {
    name: "Unda Travel",
    domain: "https://travel.undasolutions.com",
    description: "Corporate travel, travel technology, expense management, business mobility.",
    image: IMAGE_CREDITS.travelAirport,
  },
];

const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Government",
  "Education",
  "Hospitality",
  "Retail",
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
            <Eyebrow>Built in Africa. Designed for the world.</Eyebrow>
            <h1 className="font-display max-w-2xl text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-7xl">
              We build systems that power modern{" "}
              <span className="text-brand-primary">businesses.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-text-secondary">
              Unda Solutions builds technology, products, and digital experiences that help
              businesses grow, operate, and lead.
            </p>
            <div className="flex flex-wrap gap-200">
              <Link href="/ecosystem" className={buttonVariants({ size: "lg" })}>
                Explore Our Ecosystem →
              </Link>
              <Link href="/work" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                View Our Work →
              </Link>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg lg:aspect-[4/5]">
            <Image
              src={IMAGE_CREDITS.heroOfficeBuilding.src}
              alt={IMAGE_CREDITS.heroOfficeBuilding.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <Reveal>
        <section className="border-t border-border-default py-800">
          <Container className="flex flex-wrap justify-between gap-600">
            {STATS.map((stat) => (
              <StatItem key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
            ))}
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-1200">
          <Container>
            <div className="relative flex min-h-[320px] items-end overflow-hidden rounded-lg">
              <GraphicPanel tone="dark" className="absolute inset-0 h-full w-full rounded-lg" />
              <div className="relative flex flex-col gap-200 p-600">
                <p className="font-display max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Technology is easy. Building the right system isn&apos;t.
                </p>
                <Link
                  href="/about"
                  className="text-sm text-white/80 underline underline-offset-4 hover:text-white"
                >
                  Learn more about us →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="flex flex-col gap-200">
              <Eyebrow>Our ecosystem</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                One company. Three specialized divisions.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-300 sm:grid-cols-3">
              {DIVISIONS.map((division) => (
                <a
                  key={division.name}
                  href={division.domain}
                  rel="noopener"
                  className="group flex flex-col overflow-hidden rounded-lg bg-text-primary text-white"
                >
                  <div className="relative aspect-[4/3] w-full">
                    {division.image ? (
                      <Image
                        src={division.image.src}
                        alt={division.image.alt}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover opacity-70 transition-opacity duration-150 ease-out group-hover:opacity-90"
                      />
                    ) : (
                      <GraphicPanel tone="dark" className="h-full w-full rounded-none" />
                    )}
                  </div>
                  <div className="flex flex-col gap-100 p-300">
                    <p className="font-display text-lg font-semibold">{division.name}</p>
                    <p className="text-sm text-white/70">{division.description}</p>
                    <span className="mt-100 text-sm text-white underline underline-offset-4">
                      Explore →
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <Link
              href="/ecosystem"
              className="text-sm text-brand-primary underline underline-offset-4 hover:no-underline"
            >
              Discover our ecosystem →
            </Link>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="flex flex-col gap-200">
              <Eyebrow>Featured work</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Real impact. Measurable results.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-400 sm:grid-cols-3">
              {CASE_STUDIES.slice(0, 3).map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
            <Link
              href="/work"
              className="text-sm text-brand-primary underline underline-offset-4 hover:no-underline"
            >
              View all projects →
            </Link>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="font-display max-w-lg text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              We partner with organizations across industries.
            </h2>
            <div className="grid grid-cols-2 gap-400 sm:grid-cols-3 lg:grid-cols-6">
              {INDUSTRIES.map((industry) => (
                <p key={industry} className="text-base font-medium text-text-primary">
                  {industry}
                </p>
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
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-400">
            <div className="flex flex-col gap-200">
              <Eyebrow>Latest insights</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Ideas, stories, and insights from our team.
              </h2>
            </div>
            <p className="max-w-lg text-base text-text-secondary">
              The first articles are being written — we&apos;d rather publish something worth
              reading than fill this space with placeholder posts.
            </p>
            <Link
              href="/insights"
              className="text-sm text-brand-primary underline underline-offset-4 hover:no-underline"
            >
              Visit our insights →
            </Link>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-text-primary py-1200 text-white">
          <Container className="flex flex-col items-start gap-300 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-200">
              <Eyebrow className="text-white/60">Join our team</Eyebrow>
              <h2 className="font-display max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
                Build what&apos;s next, with the best.
              </h2>
            </div>
            <Link
              href="/careers"
              className={buttonVariants({
                size: "lg",
                className: "shrink-0 bg-white text-text-primary hover:opacity-90",
              })}
            >
              View Careers →
            </Link>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col items-start gap-300 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-200">
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="font-display max-w-md text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Let&apos;s build something meaningful together.
              </h2>
            </div>
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "shrink-0" })}>
              Contact Us →
            </Link>
          </Container>
        </section>
      </Reveal>
    </>
  );
}
