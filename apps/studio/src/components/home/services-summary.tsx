"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { TriangleAccent } from "@/components/ui/triangle-accent";
import type { HomeGlobalData } from "@/lib/payload";

export type SummaryService = { title: string; description: string; tags: string[] };

export function ServicesSummary({
  data,
  services,
}: {
  data?: HomeGlobalData["servicesSummary"];
  services: SummaryService[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-300 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-brand-accent-text text-caption uppercase">
                {data?.eyebrow || "What we do"}
              </span>
              <h2 className="mt-150 max-w-xl font-display text-h2 text-text-primary">
                {data?.heading || "A full-stack design partner, not a single-service vendor"}
              </h2>
            </div>
            <p className="max-w-sm text-body text-text-secondary">
              {data?.description ||
                "Engage us for one service or the full arc from strategy to shipped product, the same team, the same standard, throughout."}
            </p>
          </div>
        </Reveal>

        <ul className="mt-600 border-border-default border-t">
          {services.map((service, i) => {
            const open = openIndex === i;
            return (
              <Reveal as="li" index={i} key={service.title}>
                <div className="border-border-default border-b">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-300 py-400 text-left"
                    aria-expanded={open}
                    aria-controls={`home-service-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    <span className="flex items-center gap-300">
                      <span className="font-display font-semibold text-h3 text-text-primary">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <span className="font-display font-semibold text-h3 text-text-primary">
                        {service.title}
                      </span>
                    </span>
                    {open ? (
                      <X className="size-6 shrink-0 text-brand-accent" aria-hidden="true" />
                    ) : (
                      <Plus className="size-6 shrink-0 text-brand-accent" aria-hidden="true" />
                    )}
                  </button>

                  {open && (
                    <div
                      id={`home-service-panel-${i}`}
                      className="grid grid-cols-1 gap-400 pb-400 md:grid-cols-2 md:gap-800"
                    >
                      <ul>
                        {service.tags.map((tag) => (
                          <li
                            key={tag}
                            className="flex items-center gap-150 border-border-default border-b py-200"
                          >
                            <TriangleAccent className="size-2.5 shrink-0 text-brand-accent" />
                            <span className="text-body text-text-primary">{tag}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="font-semibold text-body-lg text-text-primary">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
