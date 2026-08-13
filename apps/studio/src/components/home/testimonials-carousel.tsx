"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { Testimonial } from "@/lib/payload";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-h2 text-text-primary">
              What partners <span className="italic">say</span>
            </h2>

            <div className="mt-300 flex items-center justify-center gap-200">
              <span className="h-px w-16 bg-border-default" />
              <Star className="size-4 text-brand-accent-text" aria-hidden="true" />
              <span className="h-px w-16 bg-border-default" />
            </div>

            {testimonial && (
              <blockquote className="mt-400 font-display text-h3 text-text-primary italic leading-[1.4]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            )}

            {testimonial && (
              <p className="mt-300 text-body-sm text-text-secondary uppercase tracking-wide">
                {testimonial.author}
                {testimonial.role ? `, ${testimonial.role}` : ""}
              </p>
            )}

            {testimonials.length > 1 && (
              <div className="mt-600 flex justify-center gap-100">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                    aria-current={active === i}
                    className={cn(
                      "size-2 rounded-full transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)]",
                      active === i
                        ? "bg-brand-accent-text"
                        : "bg-border-default hover:bg-neutral-300",
                    )}
                  />
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
