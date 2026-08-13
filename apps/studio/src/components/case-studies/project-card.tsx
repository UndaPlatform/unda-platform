import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceholderGraphic } from "@/components/ui/placeholder-graphic";
import type { CaseStudy } from "@/lib/payload";

export function ProjectCard({ project, variant }: { project: CaseStudy; variant: number }) {
  const year = project.year ?? new Date(project.createdAt).getFullYear();

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-lg border border-border-default bg-bg-default p-150 transition-shadow duration-[var(--motion-base)] ease-[var(--ease-standard)] hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        {project.cover?.url ? (
          <Image
            src={project.cover.url}
            alt={project.cover.alt ?? ""}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <PlaceholderGraphic variant={variant} className="absolute inset-0" />
        )}

        {project.tagline && (
          <div className="absolute inset-0 flex items-start justify-start bg-neutral-900/75 p-300 opacity-0 transition-opacity duration-[var(--motion-base)] ease-[var(--ease-standard)] group-hover:opacity-100">
            <p className="text-left font-display text-body-lg text-neutral-0">{project.tagline}</p>
          </div>
        )}
      </div>

      <div className="mt-200 flex items-center justify-between">
        {project.category && (
          <span className="text-brand-accent-text text-caption uppercase">
            {project.category.name}
          </span>
        )}
        <span className="text-caption text-text-disabled">{year}</span>
      </div>

      <div className="mt-100 flex items-end justify-between gap-200">
        <h3 className="text-h4 text-text-primary">{project.title}</h3>
        <span
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white transition-transform duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
