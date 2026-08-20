import type { CollectionConfig } from "payload";
import { normalizeSlug } from "../lib/slug";

// Case study detail pages (/work/[slug]) follow one fixed structural rhythm
// — hero, meta strip, Opportunity, Approach, The Work, Impact — with only
// the content and images varying per project. Every section below the hero
// is optional and simply doesn't render if empty, so a case study can be
// published with just a cover image and filled in more fully later. See
// DECISIONS.md ADR-105.
export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "client", "category", "featured"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          'The URL segment only, no leading slash, e.g. "your-slug" (becomes /work/your-slug).',
      },
      hooks: {
        beforeValidate: [({ value }) => (typeof value === "string" ? normalizeSlug(value) : value)],
      },
    },
    {
      name: "client",
      type: "text",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
      admin: {
        description:
          "Add new categories in the Categories collection, then pick one here. Used to build the filter tabs on /work.",
      },
    },
    {
      name: "year",
      type: "number",
      defaultValue: () => new Date().getFullYear(),
      admin: {
        description: "The year this project was delivered, shown on the project card.",
      },
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "tagline",
      type: "text",
      admin: {
        description:
          "Short one-line hook shown over the cover image when a visitor hovers the project card. Leave blank to skip the hover effect.",
      },
    },
    {
      name: "sector",
      type: "text",
      admin: {
        description: 'Shown next to the title on the case study page, e.g. "Fintech, Payments".',
      },
    },
    {
      name: "positioning",
      type: "group",
      label: "Positioning statement",
      admin: {
        description:
          'The "not this, but that" framing under the title — e.g. struck-through "Not: a mobile app redesign" above the real statement. Leave blank to skip.',
      },
      fields: [
        { name: "not", type: "text", label: "The reductive framing (struck through)" },
        { name: "statement", type: "textarea", label: "The real positioning statement" },
      ],
    },
    {
      name: "scope",
      type: "text",
      admin: {
        description: 'Meta strip "Scope", e.g. "Brand · Product · Web · Design System".',
      },
    },
    {
      name: "engagement",
      type: "text",
      admin: {
        description: 'Meta strip "Engagement", e.g. "End-to-end design partner".',
      },
    },
    {
      name: "opportunity",
      type: "group",
      label: "01 — The Opportunity",
      fields: [
        { name: "lede", type: "textarea", label: "Lede — the problem, in one line" },
        {
          name: "body",
          type: "richText",
          label: "Body — context and stakes",
        },
      ],
    },
    {
      name: "approachSection",
      type: "group",
      label: "02 — The Approach",
      fields: [
        { name: "lede", type: "textarea", label: "Lede" },
        {
          name: "workstreams",
          type: "array",
          label: "Workstreams (the flow diagram steps)",
          fields: [{ name: "label", type: "text", required: true }],
        },
        { name: "caption", type: "textarea", label: "Closing caption" },
      ],
    },
    {
      name: "workItems",
      type: "array",
      label: "03 — The Work (items)",
      admin: {
        description:
          "One entry per workstream shown (e.g. Brand Identity, Product Design, Website). Uses real project images only — no fabricated mockups.",
      },
      fields: [
        { name: "tag", type: "text", required: true, label: 'Tag, e.g. "Brand Identity"' },
        { name: "headline", type: "text", required: true },
        { name: "description", type: "textarea" },
        {
          name: "images",
          type: "array",
          fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
        },
      ],
    },
    {
      name: "impact",
      type: "group",
      label: "04 — Impact",
      fields: [
        { name: "statement", type: "textarea", label: "Closing statement" },
        {
          name: "highlight",
          type: "text",
          label: "Highlighted phrase",
          admin: {
            description:
              "A short phrase that appears verbatim in the statement above — rendered in the accent color.",
          },
        },
        {
          name: "points",
          type: "array",
          label: "Supporting points",
          fields: [
            { name: "title", type: "text", required: true },
            { name: "description", type: "textarea", required: true },
          ],
        },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Show this case study on the Home page selected work section",
      },
    },
    // Superseded by the structured fields above (opportunity/approachSection/
    // workItems/impact) — kept only so the DB migration is a pure addition
    // rather than a drop+create, which the Postgres adapter's dev-mode
    // schema push otherwise treats as an ambiguous "was this renamed?"
    // prompt on every request. Unused by any code; safe to actually drop in
    // a future pass via a real migration once one is generated. See
    // DECISIONS.md ADR-105.
    {
      name: "gallery",
      type: "array",
      admin: { hidden: true },
      fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
    },
    { name: "problem", type: "richText", admin: { hidden: true } },
    { name: "approach", type: "richText", admin: { hidden: true } },
    { name: "outcome", type: "richText", admin: { hidden: true } },
  ],
};
