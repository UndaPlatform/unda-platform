import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Solutions that drive real impact.",
};

const DIVISION_FILTERS = ["All", "Technologies", "Studio", "Travel"];

export default function WorkPage() {
  return (
    <>
      <section className="py-1200 sm:py-1600">
        <Container className="flex flex-col gap-400 max-w-2xl">
          <Eyebrow>Our work</Eyebrow>
          <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight text-text-primary sm:text-6xl">
            Solutions that drive real impact.
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            We partner with ambitious organizations to design and build systems that create
            measurable impact and unlock new opportunities.
          </p>
        </Container>
      </section>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="flex flex-wrap gap-100">
              {DIVISION_FILTERS.map((filter, i) => (
                <span
                  key={filter}
                  className={`rounded-full px-300 py-100 text-sm font-medium ${
                    i === 0 ? "bg-brand-primary text-white" : "text-text-secondary"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-400 sm:grid-cols-2">
              {CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>

            <p className="text-sm text-text-secondary">
              The projects above are illustrative examples pending real case studies — see
              DECISIONS.md.
            </p>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-text-primary py-1200 text-white">
          <Container className="flex flex-col items-start gap-300 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind? Let&apos;s build something great together.
            </h2>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "shrink-0 bg-white text-text-primary hover:opacity-90",
              })}
            >
              Start a Project →
            </Link>
          </Container>
        </section>
      </Reveal>
    </>
  );
}
