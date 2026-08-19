import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StretchText } from "@/components/motion/stretch-text";
import { Button } from "@/components/ui/button";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import type { HomeGlobalData } from "@/lib/payload";

const FALLBACK_SERVICES = [
  "Product Design",
  "Brand Identity",
  "Design Systems",
  "AI Product Design",
];

const REVIEW_AVATAR_SEEDS = ["a", "b", "c", "d", "e"];

/**
 * Black-and-white hero, per the user's explicit direction — no gradient,
 * no illustration, no tint. Orange is reserved for interactive elements
 * only (buttons, the availability dot), everything else is neutral-0/
 * neutral-900/neutral-400 on a bg-neutral-900 section. See ADR-042.
 *
 * Text and the reviewer avatars come from the Home global (Payload) so
 * they're editable from /admin; every field has a fallback matching the
 * original hardcoded copy so this renders identically if the global is
 * empty. See DECISIONS.md ADR-092.
 */
export function Hero({ data }: { data?: HomeGlobalData["hero"] }) {
  const services =
    data?.services && data.services.length > 0
      ? data.services.map((s) => s.title)
      : FALLBACK_SERVICES;
  const avatars = data?.reviewerAvatars ?? [];
  const headline = data?.headline || "Creative Studio";
  const headlineWords = headline.split(" ");
  const headlineFirstWord = headlineWords[0] ?? headline;
  const headlineRest = headlineWords.slice(1).join(" ");

  return (
    <section className="flex min-h-dvh flex-col justify-center bg-neutral-900 pt-[8.5rem] pb-1200 md:pt-[11rem]">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-100 text-caption text-neutral-400 uppercase sm:flex-row sm:items-center sm:justify-between sm:gap-400">
            <span>{data?.eyebrow || "A division of Unda Solutions"}</span>
            <span className="inline-flex items-center gap-100">
              <span className="size-1.5 rounded-full bg-brand-accent" />
              {data?.availabilityText || "Now accepting new projects"}
            </span>
          </div>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-400">
            <span className="block sm:hidden">
              <StretchText
                fit="size"
                className="font-display font-bold text-[clamp(2.5rem,9vw,7rem)] text-neutral-0 uppercase leading-[0.92] tracking-tight"
              >
                {headlineFirstWord}
              </StretchText>
              {headlineRest && (
                <StretchText
                  fit="size"
                  className="font-display font-bold text-[clamp(2.5rem,9vw,7rem)] text-neutral-0 uppercase leading-[0.92] tracking-tight"
                >
                  {headlineRest}
                </StretchText>
              )}
            </span>
            <span className="hidden sm:block">
              <StretchText className="font-display font-bold text-[clamp(2.5rem,9vw,7rem)] text-neutral-0 uppercase leading-[0.92] tracking-tight">
                {headline}
              </StretchText>
            </span>
          </h1>
        </Reveal>

        <Reveal index={2}>
          <div className="mt-300 flex flex-col gap-300 md:flex-row-reverse md:items-center md:justify-between md:gap-400">
            <p className="font-display font-semibold text-body text-neutral-0 uppercase tracking-tight sm:text-h4">
              {data?.tagline || "For small & medium scale businesses."}
            </p>

            <div className="flex items-center gap-200">
              <span className="flex items-center" aria-hidden="true">
                {avatars.length > 0
                  ? avatars.map((entry, i) => (
                      <Image
                        key={entry.id ?? i}
                        src={entry.photo.url ?? ""}
                        alt={entry.photo.alt}
                        width={32}
                        height={32}
                        className="-ml-100 size-8 rounded-full object-cover ring-2 ring-neutral-900 first:ml-0"
                      />
                    ))
                  : REVIEW_AVATAR_SEEDS.map((seed) => (
                      <GeneratedAvatar
                        key={seed}
                        seed={seed}
                        className="-ml-100 size-8 rounded-full ring-2 ring-neutral-900 first:ml-0"
                      />
                    ))}
              </span>
              <span className="text-body-sm text-neutral-400">
                <span className="block font-semibold text-neutral-0">
                  {data?.ratingScore || "4.5/5"}
                </span>
                {data?.ratingCaption || "Early client feedback"}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-200 grid grid-cols-1 gap-600 md:mt-800 md:grid-cols-[1.5fr_1fr] md:items-start">
          <Reveal index={3}>
            <div>
              <p className="max-w-[52ch] text-body-lg text-neutral-400">
                {data?.description ||
                  "We partner with ambitious startups and businesses to shape products, brands, and digital experiences, crafted with the same rigor on day one thousand as day one."}
              </p>
              <div className="mt-400 flex flex-col gap-200 sm:flex-row sm:items-center">
                <Button href="/contact" size="lg">
                  Start a project
                </Button>
                <Button
                  href="/work"
                  variant="ghost"
                  size="lg"
                  className="text-neutral-0 hover:bg-neutral-800 active:bg-neutral-700"
                  trailingIcon={<ArrowRight className="size-4" aria-hidden="true" />}
                >
                  View our work
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal index={4}>
            <ol className="border-neutral-700 border-t">
              {services.map((service, i) => (
                <li
                  key={service}
                  className="flex items-center gap-200 border-neutral-700 border-b py-150"
                >
                  <span className="font-mono text-caption text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-body text-neutral-0">{service}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
