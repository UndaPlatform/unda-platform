import { Building2, Cloud, HeartHandshake, Rocket, Store, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { ServicesGlobalData } from "@/lib/payload";

// Company types/stages, not literal industry verticals — this is the only
// audience description confirmed so far (see Hero and /work copy). Avoid
// adding specific sector claims (e.g. "Fintech", "Healthcare") without
// confirmation, since that would imply verified vertical expertise.
const INDUSTRIES = [
  { label: "Early-stage startups", icon: Rocket },
  { label: "B2B", icon: Building2 },
  { label: "B2C", icon: Users },
  { label: "SaaS", icon: Cloud },
  { label: "NGOs & nonprofits", icon: HeartHandshake },
  { label: "Small & medium businesses", icon: Store },
];

export function Industries({ data }: { data?: ServicesGlobalData["industries"] }) {
  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <span className="text-brand-accent-text text-caption uppercase">
            {data?.eyebrow || "Who we work with"}
          </span>
          <h2 className="mt-150 max-w-xl font-display text-h2 text-text-primary">
            {data?.heading || "Industries and company types we design for"}
          </h2>
        </Reveal>

        <ul className="mt-600 grid grid-cols-1 gap-400 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <Reveal as="li" index={i} key={industry.label}>
              <div className="rounded-lg border border-border-default bg-bg-default p-400 transition-shadow duration-[var(--motion-base)] ease-[var(--ease-standard)] hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                    <industry.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-caption text-text-disabled">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-300 text-h4 text-text-primary">{industry.label}</h3>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
