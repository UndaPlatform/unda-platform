import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { StudioGlobalData } from "@/lib/payload";

const FALLBACK_VALUES = [
  {
    title: "Clarity First",
    description: "We choose the obvious solution over the impressive one, every time it wins.",
  },
  {
    title: "Systems Thinking",
    description: "What we build is designed to extend as you grow, not just to look good once.",
  },
  {
    title: "Purposeful Craft",
    description: "The parts no one asks about get the same care as the parts everyone sees.",
  },
  {
    title: "Speed Without Shortcuts",
    description: "We move fast because the process is disciplined, not because we skip steps.",
  },
];

export function Values({ data }: { data?: StudioGlobalData["values"] }) {
  const values = data?.items && data.items.length > 0 ? data.items : FALLBACK_VALUES;

  return (
    <section className="bg-neutral-900 py-1200">
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-100 text-brand-accent text-caption uppercase">
            <span className="size-1.5 rounded-full bg-brand-accent" />
            {data?.eyebrow || "Our values"}
          </span>
        </Reveal>

        <ul className="mt-600 border-neutral-700 border-t">
          {values.map((value, i) => (
            <Reveal as="li" index={i} key={value.title}>
              <div className="grid grid-cols-1 items-baseline gap-150 border-neutral-700 border-b py-600 md:grid-cols-[auto_1fr_1fr] md:gap-800">
                <span className="font-mono text-body-sm text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-h1 text-neutral-0">{value.title}</h3>
                <p className="max-w-sm text-body-lg text-neutral-400 md:justify-self-end">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
