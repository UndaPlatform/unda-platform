import { Bot, Compass, Component, Layers, Palette, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { StudioGlobalData } from "@/lib/payload";

const CAPABILITIES = [
  { label: "Product Design", icon: Layers },
  { label: "Brand Identity", icon: Palette },
  { label: "Web Design", icon: Sparkles },
  { label: "Design Systems", icon: Component },
  { label: "AI Product Design", icon: Bot },
  { label: "Product Strategy", icon: Compass },
];

export function About({ data }: { data?: StudioGlobalData["about"] }) {
  return (
    <section className="py-1200">
      <Container>
        <div className="grid grid-cols-1 gap-400 md:grid-cols-[3fr_2fr] md:items-start md:gap-600">
          <Reveal>
            <span className="text-brand-accent-text text-caption uppercase">
              {data?.eyebrow || "About us"}
            </span>
            <h2 className="mt-150 max-w-xl font-display text-h1 text-text-primary leading-[1.15]">
              {data?.heading ||
                "We help ambitious startups and businesses launch sharper brands and products."}
            </h2>
          </Reveal>

          <Reveal index={1}>
            <span className="invisible block text-caption uppercase" aria-hidden="true">
              About us
            </span>
            <p className="mt-150 max-w-sm text-body-lg text-text-secondary md:text-right">
              {data?.supporting ||
                "With clarity, speed, and no drama, from first sketch to shipped product."}
            </p>
          </Reveal>
        </div>

        <Reveal index={2}>
          <div className="mt-600 flex flex-wrap items-center gap-150">
            {CAPABILITIES.map((capability) => (
              <span
                key={capability.label}
                className="inline-flex items-center gap-100 rounded-full border border-neutral-700 bg-neutral-900 px-300 py-150 text-body-sm text-neutral-0"
              >
                <capability.icon className="size-4 text-brand-accent" aria-hidden="true" />
                {capability.label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
