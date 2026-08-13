import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <div className="rounded-lg bg-brand-accent px-300 py-1200 text-center sm:px-600">
            <h2 className="mx-auto max-w-2xl font-display text-h1 text-white">
              Let&apos;s build something worth showing.
            </h2>
            <p className="mx-auto mt-200 max-w-md text-body-lg text-white/85">
              Tell us about your project. We typically reply within one business day.
            </p>
            <div className="mt-400 flex justify-center">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200"
              >
                Start a project
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
