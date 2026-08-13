import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/case-studies/project-card";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { type CaseStudy, getPayloadClient, type HomeGlobalData } from "@/lib/payload";

async function getFeaturedCaseStudies() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "case-studies",
    where: { featured: { equals: true } },
    limit: 4,
    depth: 1,
    sort: "-createdAt",
  });
  return docs as unknown as CaseStudy[];
}

export async function SelectedWork({ data }: { data?: HomeGlobalData["selectedWork"] }) {
  const caseStudies = await getFeaturedCaseStudies();

  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="bg-neutral-900 py-1200">
      <Container>
        <div className="flex flex-col gap-300 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <span className="text-brand-accent text-caption uppercase">
                {data?.eyebrow || "Selected work"}
              </span>
              <h2 className="mt-150 max-w-xl font-display text-h2 text-neutral-0">
                {data?.heading || "A few things we've been building"}
              </h2>
            </div>
          </Reveal>
          <Reveal index={1}>
            <Link
              href="/work"
              className="inline-flex items-center gap-100 text-body text-neutral-400 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-neutral-0"
            >
              View all work
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-600 grid grid-cols-1 gap-400 md:grid-cols-2">
          {caseStudies.map((project, i) => (
            <Reveal as="li" index={i} key={project.id}>
              <ProjectCard project={project} variant={i} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
