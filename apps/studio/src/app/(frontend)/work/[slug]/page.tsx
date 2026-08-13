import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ComponentProps } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { type CaseStudy, getPayloadClient } from "@/lib/payload";

export const revalidate = 60;

// `CaseStudy`'s richText fields are typed as `unknown` (see lib/payload.ts —
// no generated Payload types in this environment); narrow to what `RichText`
// actually expects only at the render boundary.
type RichTextData = ComponentProps<typeof RichText>["data"];

const richTextClassName =
  "max-w-[65ch] text-body text-text-secondary [&_a]:text-brand-accent-text [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-400 [&_h2]:font-display [&_h2]:text-h4 [&_h2]:text-text-primary [&_h3]:mt-300 [&_h3]:font-display [&_h3]:text-h4 [&_h3]:text-text-primary [&_li]:mt-100 [&_ol]:mt-200 [&_ol]:list-decimal [&_ol]:pl-400 [&_p]:mt-200 [&_p:first-child]:mt-0 [&_ul]:mt-200 [&_ul]:list-disc [&_ul]:pl-400";

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

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="pt-[7rem] pb-1200 md:pt-[9rem]">
      <Container>
        <Reveal>
          {caseStudy.category && (
            <span className="text-brand-accent-text text-caption uppercase">
              {caseStudy.category.name}
            </span>
          )}
          <h1 className="mt-150 max-w-3xl font-display text-h1 text-text-primary">
            {caseStudy.title}
          </h1>
          {caseStudy.client && (
            <p className="mt-200 text-body-lg text-text-secondary">{caseStudy.client}</p>
          )}
        </Reveal>

        {caseStudy.cover?.url && (
          <Reveal index={1}>
            <div className="relative mt-600 aspect-[16/9] overflow-hidden rounded-lg">
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
        )}

        <div className="mt-800 grid grid-cols-1 gap-600 md:grid-cols-3">
          {caseStudy.problem != null && (
            <Reveal index={0}>
              <h2 className="text-brand-accent-text text-caption uppercase">Problem</h2>
              <div className={richTextClassName}>
                <RichText data={caseStudy.problem as RichTextData} />
              </div>
            </Reveal>
          )}
          {caseStudy.approach != null && (
            <Reveal index={1}>
              <h2 className="text-brand-accent-text text-caption uppercase">Approach</h2>
              <div className={richTextClassName}>
                <RichText data={caseStudy.approach as RichTextData} />
              </div>
            </Reveal>
          )}
          {caseStudy.outcome != null && (
            <Reveal index={2}>
              <h2 className="text-brand-accent-text text-caption uppercase">Outcome</h2>
              <div className={richTextClassName}>
                <RichText data={caseStudy.outcome as RichTextData} />
              </div>
            </Reveal>
          )}
        </div>

        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <ul className="mt-800 grid grid-cols-1 gap-400 md:grid-cols-2">
            {caseStudy.gallery.map((item, i) => (
              <Reveal as="li" index={i} key={item.id ?? item.image.id}>
                {item.image?.url && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={item.image.url}
                      alt={item.image.alt ?? ""}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </article>
  );
}
