import { Globe, Sparkles, Target, Users2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconBadge } from "@/components/ui/icon-badge";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Three businesses, one vision — the Unda Solutions ecosystem.",
};

const DIVISIONS = [
  {
    name: "Unda Technologies",
    domain: "https://technologies.undasolutions.com",
    capabilities: [
      "Software Engineering",
      "AI & Automation",
      "Cloud & Infrastructure",
      "Data & Analytics",
    ],
  },
  {
    name: "Unda Studio",
    domain: "https://studio.undasolutions.com",
    capabilities: ["Product Design", "Brand Systems", "UX/UI Design", "Design Systems"],
  },
  {
    name: "Unda Travel",
    domain: "https://travel.undasolutions.com",
    capabilities: [
      "Corporate Travel",
      "Travel Technology",
      "Expense Management",
      "Business Mobility",
    ],
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

export default function EcosystemPage() {
  return (
    <>
      <section className="py-1200 sm:py-1600">
        <Container className="grid grid-cols-1 items-center gap-800 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-400">
            <Eyebrow>Our ecosystem</Eyebrow>
            <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-6xl">
              Three businesses. One vision.
            </h1>
            <p className="text-lg leading-8 text-text-secondary">
              Our divisions work together seamlessly to deliver end-to-end solutions that transform
              businesses and create lasting value.
            </p>
          </div>
          <GraphicPanel className="aspect-square w-full lg:aspect-[4/5]" />
        </Container>
      </section>

      <Reveal>
        <section id="divisions" className="border-t border-border-default py-1200">
          <Container className="grid grid-cols-1 gap-600 sm:grid-cols-3">
            {DIVISIONS.map((division) => (
              <div key={division.name} className="flex flex-col gap-300">
                <p className="font-display text-2xl font-semibold text-text-primary">
                  {division.name}
                </p>
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
                  className="text-sm text-brand-primary underline underline-offset-4 hover:no-underline"
                >
                  Explore {division.name.replace("Unda ", "")} →
                </a>
              </div>
            ))}
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="flex flex-col gap-200">
              <Eyebrow>Stronger together</Eyebrow>
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
        <section className="bg-brand-primary py-1200">
          <Container className="flex flex-col items-start gap-300 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Explore each division in depth. Visit our subdomains to learn more about our
              capabilities and solutions.
            </h2>
            <Link
              href="#divisions"
              className={buttonVariants({
                size: "lg",
                className: "shrink-0 bg-white text-brand-primary hover:opacity-90",
              })}
            >
              Explore Now →
            </Link>
          </Container>
        </section>
      </Reveal>
    </>
  );
}
