import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Companies",
  description: "The Unda Solutions ecosystem — Unda Studio, Unda Technologies, and Unda Travel.",
};

const COMPANIES = [
  {
    name: "Unda Studio",
    accent: "bg-division-studio",
    domain: "studio.undasolutions.com",
    description:
      "Brand identity, product design, UI/UX, graphic and motion design, photography, and video editing.",
  },
  {
    name: "Unda Technologies",
    accent: "bg-division-tech",
    domain: "technologies.undasolutions.com",
    description:
      "Software engineering, web and mobile development, AI, automation, cloud, and SaaS products.",
  },
  {
    name: "Unda Travel",
    accent: "bg-division-travel",
    domain: "travel.undasolutions.com",
    description:
      "Flights, hotels, visa assistance, tour packages, and corporate travel management.",
  },
];

export default function CompaniesPage() {
  return (
    <section className="py-1200">
      <Container className="flex flex-col gap-800">
        <div className="flex flex-col gap-300 max-w-2xl">
          <Eyebrow>The ecosystem</Eyebrow>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
            One brand, three companies.
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            Unda Solutions follows a Branded House model — the parent brand, with every division
            operating under the same identity, visual language, and strategic direction. Each
            company is differentiated by its focus and accent color, not by a separate brand.
          </p>
        </div>

        <div className="flex flex-col gap-0 divide-y divide-border-default border-t border-b border-border-default">
          {COMPANIES.map((company) => (
            <div
              key={company.name}
              className="flex flex-col gap-200 py-600 sm:flex-row sm:items-start sm:justify-between sm:gap-800"
            >
              <div className="flex items-start gap-200">
                <span
                  className={`mt-2 h-2 w-2 shrink-0 rounded-full ${company.accent}`}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-100">
                  <p className="text-xl font-semibold text-text-primary">{company.name}</p>
                  <p className="max-w-lg text-base text-text-secondary">{company.description}</p>
                </div>
              </div>
              <a
                href={`https://${company.domain}`}
                rel="noopener"
                className="shrink-0 text-sm text-brand-primary underline underline-offset-4 hover:no-underline"
              >
                {company.domain} →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
