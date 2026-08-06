import type { Metadata } from "next";
import { EmailCaptureForm } from "@/components/forms/email-capture-form";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "Ideas, stories, and insights from the Unda Solutions team.",
};

const FILTERS = ["All", "Engineering", "Design", "Business", "Travel", "Company"];

export default function InsightsPage() {
  return (
    <>
      <section className="py-1200 sm:py-1600">
        <Container className="flex flex-col gap-400 max-w-2xl">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
            Ideas, stories, and insights from our team.
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            Thoughts on technology, design, business, and the future.
          </p>
        </Container>
      </section>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="flex flex-wrap gap-100">
              {FILTERS.map((filter, i) => (
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

            <div className="flex flex-col gap-200 rounded-lg border border-border-default p-800 text-center">
              <p className="text-lg font-semibold text-text-primary">
                The first articles are being written
              </p>
              <p className="mx-auto max-w-md text-base text-text-secondary">
                We&apos;d rather publish something worth reading than fill this page with
                placeholder posts. Check back soon.
              </p>
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-text-primary py-1200 text-white">
          <Container className="flex flex-col gap-300">
            <div className="flex flex-col gap-200">
              <Eyebrow className="text-white/60">Newsletter</Eyebrow>
              <h2 className="font-display max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
                Get new articles in your inbox.
              </h2>
            </div>
            <EmailCaptureForm
              idPrefix="newsletter"
              label="Email address"
              buttonLabel="Subscribe →"
              successMessage="You're subscribed — thanks for reading."
              tone="light"
            />
          </Container>
        </section>
      </Reveal>
    </>
  );
}
