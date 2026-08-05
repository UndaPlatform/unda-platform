import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Our Work",
  description: "How Unda Solutions works, and the capabilities behind every engagement.",
};

const CAPABILITIES = [
  {
    name: "Brand & product design",
    description:
      "Identity systems, product design, UI/UX, and creative strategy — led by Unda Studio.",
  },
  {
    name: "Software & AI",
    description:
      "Web and mobile engineering, automation, and AI systems — led by Unda Technologies.",
  },
  {
    name: "Travel & mobility",
    description: "Flights, hotels, visas, and corporate travel management — led by Unda Travel.",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="py-1200">
        <Container className="flex flex-col gap-600 max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Complete systems, not isolated services.
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            Unlike agencies that focus on a single discipline, we build complete systems that help
            businesses grow, operate more efficiently, and create lasting value — combining design,
            engineering, and travel expertise under one integrated team.
          </p>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col gap-600">
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Capabilities
          </h2>
          <div className="grid grid-cols-1 gap-400 sm:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <div key={capability.name} className="flex flex-col gap-100">
                <p className="text-lg font-semibold text-text-primary">{capability.name}</p>
                <p className="text-base text-text-secondary">{capability.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border-default py-1200">
        <Container className="flex flex-col gap-200 max-w-lg">
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Case studies
          </h2>
          <p className="text-base text-text-secondary">
            We&apos;re early — real case studies will appear here as engagements ship, framed as
            problem, approach, and measurable outcome. We&apos;d rather wait than show placeholder
            work.
          </p>
        </Container>
      </section>
    </>
  );
}
