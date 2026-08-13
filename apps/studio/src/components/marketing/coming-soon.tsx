import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function ComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="flex min-h-[70vh] items-center pt-[7rem] pb-1200 md:pt-[9rem]">
      <Container>
        <span className="text-brand-accent-text text-caption uppercase">{eyebrow}</span>
        <h1 className="mt-150 max-w-2xl font-display text-h1 text-text-primary">{title}</h1>
        <p className="mt-200 max-w-[60ch] text-body-lg text-text-secondary">{description}</p>
        <div className="mt-400">
          <Button href="/">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
