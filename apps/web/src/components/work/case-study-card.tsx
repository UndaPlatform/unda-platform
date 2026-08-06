import Image from "next/image";
import { GraphicPanel } from "@/components/brand/graphic-panel";
import type { CASE_STUDIES } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: (typeof CASE_STUDIES)[number] }) {
  return (
    <div className="flex flex-col gap-200">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        {study.image ? (
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <GraphicPanel tone="dark" className="h-full w-full" />
        )}
      </div>
      <div className="flex flex-col gap-100">
        <p className="text-xs font-medium uppercase tracking-widest text-brand-primary">
          {study.tag}
        </p>
        <p className="text-lg font-semibold text-text-primary">{study.name}</p>
        <p className="text-sm text-text-secondary">{study.description}</p>
        <span className="mt-100 text-sm text-brand-primary underline underline-offset-4">
          View case study →
        </span>
      </div>
    </div>
  );
}
