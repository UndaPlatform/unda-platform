"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/case-studies/project-card";
import { Reveal } from "@/components/motion/reveal";
import type { CaseStudy, Category } from "@/lib/payload";
import { cn } from "@/lib/utils";

const ALL = "all";

export function WorkGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const categories = useMemo(() => {
    const byId = new Map<number, Category>();
    for (const project of caseStudies) {
      if (project.category) byId.set(project.category.id, project.category);
    }
    return Array.from(byId.values());
  }, [caseStudies]);

  const [active, setActive] = useState<number | typeof ALL>(ALL);

  const filtered =
    active === ALL ? caseStudies : caseStudies.filter((project) => project.category?.id === active);

  return (
    <>
      {categories.length > 0 && (
        <Reveal index={1}>
          <div className="flex flex-wrap gap-400 border-border-default border-b pb-300">
            <button
              type="button"
              onClick={() => setActive(ALL)}
              aria-current={active === ALL}
              className={cn(
                "text-caption uppercase tracking-wide transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)]",
                active === ALL
                  ? "text-text-primary underline decoration-2 underline-offset-8"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                aria-current={active === category.id}
                className={cn(
                  "text-caption uppercase tracking-wide transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)]",
                  active === category.id
                    ? "text-text-primary underline decoration-2 underline-offset-8"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      {filtered.length === 0 ? (
        <p className="mt-400 max-w-[60ch] text-body-lg text-text-secondary">
          No case studies in this category yet.
        </p>
      ) : (
        <ul className="mt-600 grid grid-cols-1 gap-400 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal as="li" index={i} key={project.id}>
              <ProjectCard project={project} variant={i} />
            </Reveal>
          ))}
        </ul>
      )}
    </>
  );
}
