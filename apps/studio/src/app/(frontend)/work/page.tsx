import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StretchText } from "@/components/motion/stretch-text";
import { WorkGrid } from "@/components/work/work-grid";
import { type CaseStudy, getPayloadClient } from "@/lib/payload";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Work | Unda Studio",
  description: "Case studies from Unda Studio's product design and brand identity work.",
};

async function getCaseStudies() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "case-studies",
    depth: 1,
    sort: "-createdAt",
    limit: 100,
  });
  return docs as unknown as CaseStudy[];
}

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <section className="bg-neutral-900 pt-[7rem] pb-1200 md:pt-[9rem]">
        <Container>
          <Reveal>
            <span className="text-brand-accent text-caption uppercase">Our work</span>
          </Reveal>

          <Reveal index={1}>
            <h1 className="mt-150">
              <StretchText
                fit="size"
                className="select-none font-display font-bold text-[clamp(3rem,10vw,8rem)] text-neutral-0 leading-[0.95]"
              >
                Selected Work.
              </StretchText>
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-400 text-h4 text-neutral-400">
              A curated look at the products and brands we've designed for early-stage startups and
              B2B, B2C, SaaS, NGO, small and medium scale companies.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-1200">
        <Container>
          {caseStudies.length === 0 ? (
            <p className="max-w-[60ch] text-body-lg text-text-secondary">
              We're preparing our first case studies. Check back shortly.
            </p>
          ) : (
            <WorkGrid caseStudies={caseStudies} />
          )}
        </Container>
      </section>
    </>
  );
}
