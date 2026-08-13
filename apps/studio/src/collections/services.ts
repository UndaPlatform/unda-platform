import type { CollectionConfig } from "payload";

// Replaces the previously-static SERVICES array in lib/services-data.ts —
// the same 8 services are shown on both /services (ServicesList) and Home
// (ServicesSummary, filtered to `featuredOnHome`), so this is genuinely
// shared content and belongs in one editable place, not per-page copy.
// See DECISIONS.md ADR-092, ADR-093, ADR-094.
export const Services: CollectionConfig = {
  slug: "services",
  access: {
    read: () => true,
  },
  defaultSort: "order",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "featuredOnHome", "order"],
    description:
      "Shown in two places with different layouts, by design: the full list on /services (image, tags, pricing/timeline), and a compact accordion teaser for featured items on Home. Same content, same edit — the two pages are just meant to look different. See DECISIONS.md ADR-095.",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Shown on the /services detail row. Leave empty to keep the generated placeholder graphic.",
      },
    },
    {
      name: "startsAt",
      type: "text",
      defaultValue: "Custom pricing",
      admin: {
        description: 'Shown on /services as "Starts at". e.g. "$2,500" or "Custom pricing".',
      },
    },
    {
      name: "timeline",
      type: "text",
      defaultValue: "Custom timeline",
      admin: {
        description: 'Shown on /services as "Timeline". e.g. "2–4 weeks" or "Custom timeline".',
      },
    },
    {
      name: "order",
      type: "number",
      required: true,
      admin: {
        description: "Controls display order on both /services and Home, lowest first.",
      },
    },
    {
      name: "featuredOnHome",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Show this service in the 4-item summary on the Home page.",
      },
    },
  ],
};
