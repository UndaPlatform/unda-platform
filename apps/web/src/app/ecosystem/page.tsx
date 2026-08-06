import { Globe, Sparkles, Target, Users2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconBadge } from "@/components/ui/icon-badge";
import { Reveal } from "@/components/ui/reveal";
import { IMAGE_CREDITS } from "@/lib/image-credits";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Three businesses, one vision — the Unda Solutions ecosystem.",
};

const DIVISIONS = [
  {
    name: "Unda Technologies",
    domain: "https://technologies.undasolutions.com",
    description:
      "Software engineering, AI, and automation for businesses that need systems built to scale.",
    capabilities: [
      "Software Engineering",
      "AI & Automation",
      "Cloud & Infrastructure",
      "Data & Analytics",
    ],
    image: IMAGE_CREDITS.techDataCenter,
  },
  {
    name: "Unda Studio",
    domain: "https://studio.undasolutions.com",
    description:
      "Product design, brand systems, and creative strategy for companies that take craft seriously.",
    capabilities: ["Product Design", "Brand Systems", "UX/UI Design", "Design Systems"],
    image: null,
  },
  {
    name: "Unda Travel",
    domain: "https://travel.undasolutions.com",
    description:
      "Corporate travel and mobility technology for organizations that move people and teams.",
    capabilities: [
      "Corporate Travel",
      "Travel Technology",
      "Expense Management",
      "Business Mobility",
    ],
    image: IMAGE_CREDITS.travelAirport,
  },
];

const STRENGTHS = [
  { icon: Target, title: "Shared Purpose", description: "Impact through technology and design." },
  { icon: Users2, title: "Collaborative Culture", description: "One team, one mission, one Unda." },
  {
    icon: Sparkles,
    title: "Integrated Capabilities",
    description: "End-to-end expertise across every stage.",
  },
  { icon: Globe, title: "Global Mindset", description: "Built in Africa, ready for the world." },
];

const SHARED_CAPABILITIES = [
  ["Software Engineering", "Cloud Infrastructure"],
  ["Artificial Intelligence", "Digital Transformation"],
  ["Product Design", "Travel Technology"],
  ["Brand Systems", "Data & Analytics"],
];

export default function EcosystemPage() {
  return (
    <>
      <section className="py-1200 sm:py-1600">
        <Container className="flex flex-col gap-400 max-w-2xl">
          <Eyebrow>Unda Solutions</Eyebrow>
          <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-7xl">
            One vision. Three businesses.
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            Our divisions work together seamlessly to deliver end-to-end solutions that transform
            businesses and create lasting value.
          </p>
        </Container>
      </section>

      {DIVISIONS.map((division, i) => (
        <Reveal key={division.name}>
          <section className="border-t border-border-default py-1200">
            <Container
              className={`grid grid-cols-1 items-center gap-800 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                {division.image ? (
                  <Image
                    src={division.image.src}
                    alt={division.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <GraphicPanel className="h-full w-full" />
                )}
              </div>
              <div className="flex flex-col gap-300">
                <Eyebrow>{`0${i + 1}`}</Eyebrow>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  {division.name}
                </h2>
                <p className="text-lg text-text-secondary">{division.description}</p>
                <ul className="flex flex-col gap-100">
                  {division.capabilities.map((capability) => (
                    <li key={capability} className="text-base text-text-secondary">
                      {capability}
                    </li>
                  ))}
                </ul>
                <a
                  href={division.domain}
                  rel="noopener"
                  className={buttonVariants({ className: "self-start" })}
                >
                  Explore {division.name.replace("Unda ", "")} →
                </a>
              </div>
            </Container>
          </section>
        </Reveal>
      ))}

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="flex flex-col gap-200">
              <Eyebrow>How we work together</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                We combine our strengths to deliver complete solutions.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-400 sm:grid-cols-2 lg:grid-cols-4">
              {STRENGTHS.map((strength) => (
                <div key={strength.title} className="flex flex-col gap-200">
                  <IconBadge>
                    <strength.icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  </IconBadge>
                  <p className="text-lg font-semibold text-text-primary">{strength.title}</p>
                  <p className="text-sm text-text-secondary">{strength.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <Eyebrow>Shared capabilities</Eyebrow>
            <h2 className="font-display max-w-lg text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              End-to-end capabilities to bring your vision to life.
            </h2>
            <div className="grid grid-cols-1 gap-x-800 gap-y-100 sm:grid-cols-2">
              {SHARED_CAPABILITIES.map(([left, right]) => (
                <div key={left} className="contents">
                  <div className="flex items-center justify-between border-b border-border-default py-200">
                    <span className="text-base text-text-primary">{left}</span>
                    <span className="text-text-secondary">+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border-default py-200">
                    <span className="text-base text-text-primary">{right}</span>
                    <span className="text-text-secondary">+</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-brand-primary py-1200">
          <Container className="flex flex-col items-start gap-300 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Explore each division in depth. Visit our subdomains to learn more about our
              capabilities and solutions.
            </h2>
            <div className="flex shrink-0 flex-wrap gap-200">
              {DIVISIONS.map((division) => (
                <a
                  key={division.name}
                  href={division.domain}
                  rel="noopener"
                  className={buttonVariants({
                    className: "bg-white text-brand-primary hover:opacity-90",
                  })}
                >
                  {division.name.replace("Unda ", "")} →
                </a>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>
    </>
  );
}
