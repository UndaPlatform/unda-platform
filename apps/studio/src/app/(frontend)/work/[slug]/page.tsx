import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentProps } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StretchText } from "@/components/motion/stretch-text";
import { PlaceholderGraphic } from "@/components/ui/placeholder-graphic";
import { type CaseStudy, getPayloadClient } from "@/lib/payload";

export const revalidate = 60;

// `CaseStudy`'s richText fields are typed as `unknown` (see lib/payload.ts —
// no generated Payload types in this environment); narrow to what `RichText`
// actually expects only at the render boundary.
type RichTextData = ComponentProps<typeof RichText>["data"];

const richTextClassName =
  "max-w-[65ch] text-body-lg text-text-secondary [&_a]:text-brand-accent-text [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-400 [&_h2]:font-display [&_h2]:text-h4 [&_h2]:text-text-primary [&_h3]:mt-300 [&_h3]:font-display [&_h3]:text-h4 [&_h3]:text-text-primary [&_li]:mt-100 [&_ol]:mt-200 [&_ol]:list-decimal [&_ol]:pl-400 [&_p]:mt-200 [&_p:first-child]:mt-0 [&_ul]:mt-200 [&_ul]:list-disc [&_ul]:pl-400";

async function getCaseStudy(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "case-studies",
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });
  return (docs[0] as unknown as CaseStudy | undefined) ?? null;
}

// Real position/total among published case studies, in the same order /work
// lists them — used for the closing "NN / total" index, not a fabricated
// count. See DECISIONS.md ADR-105.
async function getCaseStudyIndex(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "case-studies",
    sort: "-createdAt",
    limit: 200,
    depth: 0,
  });
  const slugs = docs.map((d) => (d as unknown as { slug: string }).slug);
  const position = slugs.indexOf(slug);
  return { position: position === -1 ? 1 : position + 1, total: slugs.length };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Case study | Unda Studio" };
  }

  return {
    title: `${caseStudy.title} | Unda Studio`,
    description: caseStudy.client
      ? `A case study on our work with ${caseStudy.client}.`
      : undefined,
  };
}

// Splits a statement on a highlighted phrase, rendering that phrase in the
// brand accent color. Falls back to the plain statement if the phrase isn't
// found verbatim (e.g. edited independently in the CMS).
function HighlightedStatement({
  statement,
  highlight,
}: {
  statement: string;
  highlight?: string | null | undefined;
}) {
  if (!highlight) return <>{statement}</>;
  const index = statement.indexOf(highlight);
  if (index === -1) return <>{statement}</>;

  const before = statement.slice(0, index);
  const after = statement.slice(index + highlight.length);
  return (
    <>
      {before}
      <span className="text-brand-accent">{highlight}</span>
      {after}
    </>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [caseStudy, { position, total }] = await Promise.all([
    getCaseStudy(slug),
    getCaseStudyIndex(slug),
  ]);

  if (!caseStudy) {
    notFound();
  }

  const metaItems = [
    { label: "Client", value: caseStudy.client },
    { label: "Sector", value: caseStudy.sector },
    { label: "Scope", value: caseStudy.scope },
    { label: "Engagement", value: caseStudy.engagement },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  const hasOpportunity = Boolean(caseStudy.opportunity?.lede || caseStudy.opportunity?.body);
  const hasApproach = Boolean(
    caseStudy.approachSection?.lede ||
      (caseStudy.approachSection?.workstreams &&
        caseStudy.approachSection.workstreams.length > 0) ||
      caseStudy.approachSection?.caption,
  );
  const hasWork = Boolean(caseStudy.workItems && caseStudy.workItems.length > 0);
  const hasImpact = Boolean(
    caseStudy.impact?.statement || (caseStudy.impact?.points && caseStudy.impact.points.length > 0),
  );

  const jumpLinks = [
    hasOpportunity && { href: "#opportunity", label: "Opportunity" },
    hasApproach && { href: "#approach", label: "Approach" },
    hasWork && { href: "#work", label: "The Work" },
    hasImpact && { href: "#impact", label: "Impact" },
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  // Numbers each rendered section sequentially (01, 02, ...) regardless of
  // which optional sections are actually present, rather than hardcoding a
  // fixed position per section.
  let sectionNumber = 0;
  const nextSectionNumber = () => String(++sectionNumber).padStart(2, "0");
  const opportunityNumber = hasOpportunity ? nextSectionNumber() : null;
  const approachNumber = hasApproach ? nextSectionNumber() : null;
  const workNumber = hasWork ? nextSectionNumber() : null;
  const impactNumber = hasImpact ? nextSectionNumber() : null;

  return (
    <article className="pt-[7rem] pb-1200 md:pt-[9rem]">
      {/* ---------- Hero ---------- */}
      <Container>
        <Reveal>
          {caseStudy.sector && (
            <span className="text-brand-accent-text text-caption uppercase">
              {caseStudy.category ? `${caseStudy.category.name} · ` : ""}
              {caseStudy.sector}
            </span>
          )}
          {!caseStudy.sector && caseStudy.category && (
            <span className="text-brand-accent-text text-caption uppercase">
              {caseStudy.category.name}
            </span>
          )}
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-150">
            <StretchText
              fit="size"
              className="select-none font-display font-bold text-[clamp(2.5rem,10vw,7rem)] text-text-primary uppercase leading-[0.92] tracking-tight"
            >
              {caseStudy.title}
            </StretchText>
          </h1>
        </Reveal>

        {(caseStudy.positioning?.not || caseStudy.positioning?.statement) && (
          <Reveal index={2}>
            <div className="mt-400 grid grid-cols-1 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
              <div />
              <div className="max-w-3xl">
                {caseStudy.positioning?.not && (
                  <p className="text-body-lg text-text-disabled line-through">
                    Not: {caseStudy.positioning.not}
                  </p>
                )}
                {caseStudy.positioning?.statement && (
                  <p className="mt-100 font-display text-h3 text-text-primary leading-[1.25]">
                    {caseStudy.positioning.statement}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        )}
      </Container>

      {/* ---------- Meta strip ---------- */}
      {metaItems.length > 0 && (
        <Reveal index={3}>
          <div className="mt-800 border-border-default border-y py-400">
            <Container>
              <div className="grid grid-cols-2 gap-x-400 gap-y-300 sm:grid-cols-4 sm:gap-x-600">
                {metaItems.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className="font-mono text-caption text-text-disabled uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="mt-100 text-body text-text-primary leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </Reveal>
      )}

      {/* ---------- Cover image ---------- */}
      {caseStudy.cover?.url && (
        <Container>
          <Reveal index={4}>
            <div className="relative mt-800 aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={caseStudy.cover.url}
                alt={caseStudy.cover.alt ?? ""}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      )}

      {/* ---------- Jump nav ---------- */}
      {jumpLinks.length > 0 && (
        <Container>
          <nav
            aria-label="Case study sections"
            className="mt-600 flex flex-wrap gap-x-400 gap-y-150 border-border-default border-t pt-300"
          >
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-sm text-text-secondary uppercase tracking-wide transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      )}

      {/* ---------- 01 Opportunity ---------- */}
      {hasOpportunity && (
        <section id="opportunity" className="py-1200">
          <Container>
            <div className="grid grid-cols-1 gap-400 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-800">
              <Reveal>
                <div>
                  <span className="font-mono text-body-sm text-brand-accent-text">
                    {opportunityNumber}
                  </span>
                  <h2 className="mt-150 font-display text-h2 text-text-primary">The Opportunity</h2>
                </div>
              </Reveal>

              <div>
                {caseStudy.opportunity?.lede && (
                  <Reveal index={1}>
                    <p className="font-display text-h3 text-text-primary leading-[1.3]">
                      {caseStudy.opportunity.lede}
                    </p>
                  </Reveal>
                )}

                {caseStudy.opportunity?.body != null && (
                  <Reveal index={2}>
                    <div className={`mt-400 ${richTextClassName}`}>
                      <RichText data={caseStudy.opportunity.body as RichTextData} />
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ---------- 02 Approach ---------- */}
      {hasApproach && (
        <section id="approach" className="bg-neutral-100 py-1200">
          <Container>
            <div className="grid grid-cols-1 gap-400 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-800">
              <Reveal>
                <div>
                  <span className="font-mono text-body-sm text-brand-accent-text">
                    {approachNumber}
                  </span>
                  <h2 className="mt-150 font-display text-h2 text-text-primary">The Approach</h2>
                </div>
              </Reveal>

              <div>
                {caseStudy.approachSection?.lede && (
                  <Reveal index={1}>
                    <p className="font-display text-h3 text-text-primary leading-[1.3]">
                      {caseStudy.approachSection.lede}
                    </p>
                  </Reveal>
                )}
              </div>
            </div>

            {caseStudy.approachSection?.workstreams &&
              caseStudy.approachSection.workstreams.length > 0 && (
                <Reveal index={2}>
                  <ol className="mt-800 grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-px border border-border-default bg-border-default">
                    {caseStudy.approachSection.workstreams.map((step, i) => (
                      <li
                        key={step.id ?? step.label}
                        className="flex min-h-[9rem] flex-col justify-between bg-bg-default p-400"
                      >
                        <span className="font-mono text-body-sm text-text-disabled">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-body font-medium text-text-primary">
                          {step.label}
                        </span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              )}

            {caseStudy.approachSection?.caption && (
              <Reveal index={3}>
                <p className="mt-400 max-w-[60ch] text-body text-text-secondary">
                  {caseStudy.approachSection.caption}
                </p>
              </Reveal>
            )}
          </Container>
        </section>
      )}

      {/* ---------- 03 The Work ---------- */}
      {hasWork && (
        <section id="work" className="py-1200">
          <Container>
            <Reveal>
              <div className="flex items-start gap-300">
                <span className="pt-100 font-mono text-body-sm text-brand-accent-text">
                  {workNumber}
                </span>
                <div>
                  <h2 className="font-display text-h2 text-text-primary">The Work</h2>
                </div>
              </div>
            </Reveal>

            <ul className="mt-800 divide-y divide-border-default border-border-default border-t">
              {caseStudy.workItems?.map((item, i) => (
                <Reveal as="li" index={i} key={item.id ?? item.headline}>
                  <div className="py-800 first:pt-0">
                    <span className="inline-flex items-center gap-100 text-brand-accent-text text-caption uppercase">
                      <span className="size-1.5 rounded-full bg-brand-accent" />
                      {item.tag}
                    </span>
                    <h3 className="mt-200 max-w-2xl font-display text-h3 text-text-primary">
                      {item.headline}
                    </h3>
                    {item.description && (
                      <p className="mt-200 max-w-[65ch] text-body-lg text-text-secondary">
                        {item.description}
                      </p>
                    )}

                    {item.images && item.images.length > 0 ? (
                      <ul
                        className={`mt-400 grid grid-cols-1 gap-300 ${item.images.length > 1 ? "md:grid-cols-2" : ""}`}
                      >
                        {item.images.map((entry, imgI) => (
                          <li
                            key={entry.id ?? entry.image.id}
                            className="relative aspect-[4/3] overflow-hidden rounded-lg"
                          >
                            {entry.image?.url ? (
                              <Image
                                src={entry.image.url}
                                alt={entry.image.alt ?? ""}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover"
                              />
                            ) : (
                              <PlaceholderGraphic variant={i + imgI} className="size-full" />
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="mt-400">
                        <PlaceholderGraphic variant={i} className="aspect-[16/10] w-full" />
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ---------- 04 Impact ---------- */}
      {hasImpact && (
        <section id="impact" className="bg-neutral-900 py-1200">
          <Container>
            <Reveal>
              <span className="font-mono text-body-sm text-neutral-400 uppercase tracking-wide">
                {impactNumber} — Impact
              </span>
            </Reveal>

            {caseStudy.impact?.statement && (
              <Reveal index={1}>
                <p className="mt-400 max-w-4xl font-display text-h1 text-neutral-0 leading-[1.15]">
                  <HighlightedStatement
                    statement={caseStudy.impact.statement}
                    highlight={caseStudy.impact.highlight}
                  />
                </p>
              </Reveal>
            )}

            {caseStudy.impact?.points && caseStudy.impact.points.length > 0 && (
              <Reveal index={2}>
                <div className="mt-800 grid grid-cols-1 gap-600 border-neutral-700 border-t pt-600 md:grid-cols-3">
                  {caseStudy.impact.points.map((point) => (
                    <div key={point.id ?? point.title}>
                      <h3 className="font-display text-h4 text-neutral-0">{point.title}</h3>
                      <p className="mt-150 text-body text-neutral-400">{point.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </Container>
        </section>
      )}

      {/* ---------- Closing meta ---------- */}
      <Container>
        <div className="mt-800 flex flex-col gap-300 border-border-default border-t pt-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-600 gap-y-150">
            {caseStudy.client && (
              <div>
                <p className="text-caption text-text-disabled uppercase">Client</p>
                <p className="text-body text-text-primary">{caseStudy.client}</p>
              </div>
            )}
            {caseStudy.scope && (
              <div>
                <p className="text-caption text-text-disabled uppercase">Discipline</p>
                <p className="text-body text-text-primary">{caseStudy.scope}</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-400">
            <span className="font-mono text-body-sm text-text-disabled">
              {String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <Link
              href="/work"
              className="text-body-sm text-text-secondary underline decoration-brand-accent-text/40 underline-offset-4 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:decoration-brand-accent-text"
            >
              All work
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
