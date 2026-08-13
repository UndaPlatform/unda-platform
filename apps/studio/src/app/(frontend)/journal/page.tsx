import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StretchText } from "@/components/motion/stretch-text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Journal | Unda Studio",
  description: "Writing on design, product, and craft from Unda Studio.",
};

export default function JournalPage() {
  return (
    <>
      <section className="bg-neutral-900 pt-[7rem] pb-1200 md:pt-[9rem]">
        <Container>
          <Reveal>
            <span className="text-brand-accent text-caption uppercase">Journal</span>
          </Reveal>

          <Reveal index={1}>
            <h1 className="mt-150">
              <StretchText
                fit="size"
                className="select-none font-display font-bold text-[clamp(3rem,10vw,8rem)] text-neutral-0 leading-[0.95]"
              >
                Coming soon.
              </StretchText>
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-400 text-h4 text-neutral-400">
              We're preparing our first essays on product design, brand, and the craft behind our
              work. Check back shortly.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-1200">
        <Container>
          <Reveal>
            <Button href="/">Back to home</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
