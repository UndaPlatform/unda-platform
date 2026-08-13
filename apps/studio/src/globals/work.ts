import type { GlobalConfig } from "payload";

// The Work page's (/work) editable hero text. The case studies themselves
// are already editable via the separate Case Studies collection — this
// global only covers the hero copy above the grid. See DECISIONS.md
// ADR-092, ADR-093.
export const WorkGlobal: GlobalConfig = {
  slug: "work-page",
  admin: {
    description: "Editable hero text for the Work (/work) page.",
  },
  fields: [
    { name: "eyebrow", type: "text", defaultValue: "Our work" },
    { name: "headline", type: "text", defaultValue: "Selected Work." },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "A curated look at the products and brands we've designed for early-stage startups and B2B, B2C, SaaS, NGO, small and medium scale companies.",
    },
  ],
};
