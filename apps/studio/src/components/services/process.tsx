import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { GenerativePattern } from "@/components/ui/generative-pattern";
import { TriangleAccent } from "@/components/ui/triangle-accent";

const STEPS = [
  {
    label: "Step 1",
    title: "Discover",
    description:
      "We learn your business, users, and constraints, through interviews, audits, and competitive research.",
    pattern: { shape: "circle", kind: "dots", tone: "accent" },
  },
  {
    label: "Step 2",
    title: "Define",
    description:
      "Findings become a clear brief: scope, success criteria, and a plan everyone agrees on.",
    pattern: { shape: "square", kind: "dots", tone: "neutral" },
  },
  {
    label: "Step 3",
    title: "Design",
    description:
      "Concepts turn into flows, wireframes, and polished interfaces, with structured reviews throughout.",
    pattern: { shape: "circle", kind: "lines", split: true, tone: "accent" },
  },
  {
    label: "Step 4",
    title: "Deliver",
    description:
      "Production-ready files, documentation, and a clean handoff so your team can ship with confidence.",
    pattern: { shape: "square", kind: "lines", split: true, tone: "neutral" },
  },
] as const;

export function Process() {
  return (
    <section className="bg-neutral-900 py-1200">
      <Container>
        <Reveal>
          <span className="text-brand-accent text-caption uppercase">Process</span>
          <h2 className="mt-150 max-w-xl font-display text-h2 text-neutral-0">
            A clear, four-step path from problem to product
          </h2>
        </Reveal>

        <ul className="mt-800 grid grid-cols-1 gap-800 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" index={i} key={step.title}>
              <div className="text-center">
                <span className="inline-flex items-center gap-100 font-mono text-caption text-neutral-400 uppercase tracking-wide">
                  <TriangleAccent className="size-2 text-brand-accent" />[ {step.label} ]
                </span>

                <GenerativePattern
                  shape={step.pattern.shape}
                  kind={step.pattern.kind}
                  split={"split" in step.pattern ? step.pattern.split : false}
                  tone={step.pattern.tone}
                  className="mx-auto mt-400 size-36"
                />

                <h3 className="mt-400 text-h3 text-neutral-0">{step.title}</h3>
                <p className="mx-auto mt-150 max-w-[28ch] text-body text-neutral-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
