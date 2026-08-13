import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StretchText } from "@/components/motion/stretch-text";

export function Founder() {
  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <h2>
            <StretchText
              fit="size"
              className="select-none bg-gradient-to-b from-neutral-300 to-transparent bg-clip-text font-display font-bold text-[clamp(3rem,9vw,7rem)] leading-[0.95] text-transparent"
            >
              Meet Ademola
            </StretchText>
          </h2>
        </Reveal>

        <div className="mt-[-2rem] grid grid-cols-1 gap-600 md:mt-[-3rem] md:grid-cols-[2fr_3fr] md:items-center">
          <Reveal index={1}>
            <div className="relative aspect-square max-w-sm overflow-hidden rounded-lg border border-border-default">
              <Image
                src="/founder.png"
                alt="Ademola Oshingbesan, Founder of Unda Studio"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal index={2}>
            <span className="font-display font-semibold text-h4 text-text-primary">
              <span className="text-brand-accent-text">Founder</span>, Unda Studio
            </span>
            <p className="mt-200 max-w-xl text-body-lg text-text-secondary">
              Ademola Oshingbesan is a product designer, software engineer, and entrepreneur focused
              on building AI-powered digital products. He combines product design, software
              engineering, analytics, and AI to create technology solutions for African and global
              users, with experience across fintech, healthtech, and other emerging technology
              sectors.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
