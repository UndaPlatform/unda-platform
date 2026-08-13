import { ArrowRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { HomeGlobalData } from "@/lib/payload";

// Plain landscape placeholders shown until real gallery images are added
// via the Home global in /admin — deliberately not another abstract
// illustration or a real screenshot standing in for it. Doubled in render
// for a seamless marquee loop; see the `marquee` keyframe in globals.css.
// See DECISIONS.md ADR-046, ADR-092.
const PLACEHOLDER_ITEMS = [0, 1, 2, 3, 4];

export function WhoWeAre({ data }: { data?: HomeGlobalData["whoWeAre"] }) {
  const gallery = data?.gallery ?? [];
  const strip = gallery.length > 0 ? [...gallery, ...gallery] : null;

  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-x-400 gap-y-300">
            <span className="inline-flex items-center gap-100 rounded-full border border-border-default px-200 py-100 text-caption text-text-secondary uppercase">
              <span className="size-1.5 rounded-full bg-brand-accent" />
              {data?.badge || "Who we are"}
            </span>

            <Link
              href="/studio"
              className="group inline-flex items-center gap-100 text-body text-text-primary underline decoration-brand-accent-text/40 underline-offset-4 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:decoration-brand-accent-text"
            >
              About the studio
              <ArrowRight
                className="size-4 transition-transform duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <h2 className="mt-400 max-w-3xl font-display text-h1 text-text-primary leading-[1.1]">
            {data?.heading || "We build considered brands and products for teams built to lead."}
          </h2>
        </Reveal>
      </Container>

      <Reveal index={1}>
        <div className="mt-800 overflow-hidden">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-300 motion-reduce:animate-none">
            {strip
              ? strip.map((entry, i) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: gallery is doubled for a seamless marquee loop, so image ids repeat by design
                    key={`${entry.id ?? entry.image.id}-${i}`}
                    aria-hidden="true"
                    className="aspect-video w-[360px] shrink-0 overflow-hidden rounded-lg border border-border-default sm:w-[440px]"
                  >
                    <Image
                      src={entry.image.url ?? ""}
                      alt={entry.image.alt}
                      width={440}
                      height={248}
                      className="size-full object-cover"
                    />
                  </div>
                ))
              : [...PLACEHOLDER_ITEMS, ...PLACEHOLDER_ITEMS].map((_, i) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: static decorative marquee, duplicated list, never reorders
                    key={i}
                    aria-hidden="true"
                    className="flex aspect-video w-[360px] shrink-0 items-center justify-center rounded-lg border border-border-default bg-bg-subtle sm:w-[440px]"
                  >
                    <ImageIcon className="size-8 text-text-disabled" strokeWidth={1.5} />
                  </div>
                ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
