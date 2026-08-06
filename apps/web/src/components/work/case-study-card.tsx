import { DuotoneImage } from "@/components/brand/duotone-image";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import type { CASE_STUDIES } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: (typeof CASE_STUDIES)[number] }) {
  return (
    <div className="group flex flex-col gap-200">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        {study.image ? (
          <DuotoneImage
            src={study.image.src}
            alt={study.image.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105"
          />
        ) : (
          <GraphicPanel
            tone="dark"
            className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-col gap-100">
        <p className="text-xs font-medium uppercase tracking-widest text-brand-primary">
          {study.tag}
        </p>
        <p className="text-lg font-semibold text-text-primary">{study.name}</p>
        <p className="text-sm text-text-secondary">{study.description}</p>
        <span className="mt-100 text-sm text-brand-primary underline underline-offset-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5">
          View case study →
        </span>
      </div>
    </div>
  );
}
