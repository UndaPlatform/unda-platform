import Link from "next/link";
import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";
import { resolvePhoto } from "@/lib/photo";

const PROJECTS = [
  {
    slug: "digital-banking-platform",
    tag: "Fintech · Technologies",
    title: "Digital Banking Platform",
    placeholder: "Case study — fintech platform UI",
  },
  {
    slug: "ai-powered-health-platform",
    tag: "Healthcare · Technologies",
    title: "AI-Powered Health Platform",
    placeholder: "Case study — data / analytics dashboard",
  },
  {
    slug: "corporate-travel-platform",
    tag: "Hospitality · Travel",
    title: "Corporate Travel Platform",
    placeholder: "Case study — travel management app",
  },
];

export function FeaturedWork() {
  return (
    <Reveal>
      <section
        id="work"
        className="px-6 py-[120px] sm:px-16"
        style={{ background: "linear-gradient(180deg, #171412, #0f0d0b)" }}
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-[52px] flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <div className="lb lb--on-dark mb-4">Featured Work</div>
              <h2 className="font-display text-[38px] font-bold tracking-[-0.015em] text-white">
                Real impact. Measurable results.
              </h2>
            </div>
            <Link
              href="/work"
              className="whitespace-nowrap text-sm font-semibold text-accent-on-dark"
            >
              View all projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PROJECTS.map((project) => (
              <div key={project.slug} className="work-card">
                <ImageSlot
                  src={resolvePhoto(`work/${project.slug}.jpg`)}
                  alt={project.placeholder}
                  tone="dark"
                  className="h-[210px] w-full"
                />
                <div className="pt-[22px]">
                  <div className="lb lb--on-dark mb-2.5">{project.tag}</div>
                  <div className="font-display text-[17px] font-semibold text-white">
                    {project.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
