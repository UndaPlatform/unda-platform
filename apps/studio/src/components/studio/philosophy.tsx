import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { StudioGlobalData } from "@/lib/payload";

export function Philosophy({ data }: { data?: StudioGlobalData["philosophy"] }) {
  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[-3.5rem] left-[-0.5rem] select-none font-display text-[10rem] text-neutral-200 leading-none"
            >
              &ldquo;
            </span>
            <span className="relative text-brand-accent-text text-caption uppercase">
              {data?.eyebrow || "Philosophy"}
            </span>
            <blockquote className="relative mt-150 max-w-3xl font-display text-h1 text-text-primary leading-[1.15]">
              {data?.quote ||
                "Great design is invisible, until you try to imagine the product without it."}
            </blockquote>
            <p className="relative mt-300 max-w-xl text-body-lg text-text-secondary">
              {data?.supporting ||
                "We believe restraint is a craft skill, not an absence of ideas. The aesthetic is what happens when the thinking is right."}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
