import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StretchText } from "@/components/motion/stretch-text";
import type { StudioGlobalData } from "@/lib/payload";

export function Mission({ data }: { data?: StudioGlobalData["mission"] }) {
  return (
    <section className="bg-neutral-900 pt-[7rem] pb-1200 md:pt-[9rem]">
      <Container>
        <Reveal>
          <span className="text-brand-accent text-caption uppercase">
            {data?.eyebrow || "Our mission"}
          </span>
        </Reveal>

        <Reveal index={1}>
          <h2 className="mt-150">
            <StretchText
              fit="size"
              className="select-none font-display font-bold text-[clamp(3rem,10vw,8rem)] text-neutral-0 leading-[0.95]"
            >
              {data?.headline || "Craft over speed."}
            </StretchText>
          </h2>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-400 text-h4 text-neutral-400">
            {data?.description ||
              "To help ambitious teams build products and brands worth remembering, without trading craft for speed, or speed for craft."}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
