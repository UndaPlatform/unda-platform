import type { GlobalConfig } from "payload";

// The Services page's (/services) editable text. Icon-coupled lists
// (Industries) and shared data/components (the SERVICES list itself, also
// used on Home; the Process section, also rendered on Home) stay in code —
// see DECISIONS.md ADR-092, ADR-093.
export const ServicesGlobal: GlobalConfig = {
  slug: "services-page",
  admin: {
    description: "Editable text for the Services (/services) page.",
  },
  fields: [
    {
      name: "hero",
      type: "group",
      label: "Hero",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "What we offer" },
        { name: "headline", type: "text", defaultValue: "Sketch to shipped." },
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "Engage us for one service or the full arc from strategy to shipped product, the same team, the same standard, throughout.",
        },
      ],
    },
    {
      name: "servicesList",
      type: "group",
      label: "Services List intro",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "What we do" },
        {
          name: "heading",
          type: "text",
          defaultValue: "A full-stack design partner, not a single-service vendor",
        },
        {
          name: "description",
          type: "text",
          defaultValue:
            "Each service stands on its own, or combines into a single connected engagement.",
        },
      ],
    },
    {
      name: "industries",
      type: "group",
      label: "Industries intro",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Who we work with" },
        {
          name: "heading",
          type: "text",
          defaultValue: "Industries and company types we design for",
        },
      ],
    },
  ],
};
