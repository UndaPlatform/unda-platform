import Link from "next/link";
import { UndaSymbol } from "@/components/brand/unda-symbol";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-1600">
      <Container className="flex flex-col items-start gap-400">
        <UndaSymbol className="h-10 w-10 text-brand-primary" />
        <p className="font-display text-2xl font-medium text-text-secondary">404</p>
        <h1 className="font-display max-w-lg text-4xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="max-w-md text-lg text-text-secondary">
          The page you&apos;re looking for may have moved or never existed. Let&apos;s get you back
          on track.
        </p>
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          Back to Home →
        </Link>
      </Container>
    </section>
  );
}
