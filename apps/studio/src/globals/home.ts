import type { GlobalConfig } from "payload";

// The Home page's editable text and images — everything else about Home
// (layout, motion, section order) stays in code. `Process` and `FinalCta`
// are deliberately not covered here since those components are also
// rendered on /services; editing them from this global would silently
// change that page too. See DECISIONS.md ADR-092.
export const HomeGlobal: GlobalConfig = {
  slug: "home",
  admin: {
    description: "Editable text and images for the Home page.",
  },
  fields: [
    {
      name: "hero",
      type: "group",
      label: "Hero",
      fields: [
        {
          name: "eyebrow",
          type: "text",
          defaultValue: "A division of Unda Solutions",
        },
        {
          name: "availabilityText",
          type: "text",
          label: "Availability status text",
          defaultValue: "Now accepting new projects",
        },
        {
          name: "headline",
          type: "text",
          defaultValue: "Creative Studio",
        },
        {
          name: "ratingScore",
          type: "text",
          admin: {
            description: 'e.g. "4.5/5" — update once there are real reviews behind this.',
          },
          defaultValue: "4.5/5",
        },
        {
          name: "ratingCaption",
          type: "text",
          defaultValue: "Early client feedback",
        },
        {
          name: "reviewerAvatars",
          type: "array",
          label: "Reviewer avatars",
          admin: {
            description:
              "Real client photos, once available. Leave empty to keep the generated placeholder avatars.",
          },
          fields: [
            {
              name: "photo",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          name: "tagline",
          type: "text",
          defaultValue: "For small & medium scale businesses.",
        },
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "We partner with ambitious startups and businesses to shape products, brands, and digital experiences, crafted with the same rigor on day one thousand as day one.",
        },
        {
          name: "services",
          type: "array",
          label: "Service list",
          minRows: 1,
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
          ],
          defaultValue: [
            { title: "Product Design" },
            { title: "Brand Identity" },
            { title: "Design Systems" },
            { title: "AI Product Design" },
          ],
        },
      ],
    },
    {
      name: "whoWeAre",
      type: "group",
      label: "Who We Are",
      fields: [
        {
          name: "badge",
          type: "text",
          defaultValue: "Who we are",
        },
        {
          name: "heading",
          type: "text",
          defaultValue: "We build considered brands and products for teams built to lead.",
        },
        {
          name: "gallery",
          type: "array",
          label: "Scrolling gallery images",
          admin: {
            description: "Real project photography. Leave empty to keep the placeholder strip.",
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "servicesSummary",
      type: "group",
      label: "Services Summary",
      fields: [
        {
          name: "eyebrow",
          type: "text",
          defaultValue: "What we do",
        },
        {
          name: "heading",
          type: "text",
          defaultValue: "A full-stack design partner, not a single-service vendor",
        },
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "Engage us for one service or the full arc from strategy to shipped product, the same team, the same standard, throughout.",
        },
      ],
    },
    {
      name: "selectedWork",
      type: "group",
      label: "Selected Work",
      fields: [
        {
          name: "eyebrow",
          type: "text",
          defaultValue: "Selected work",
        },
        {
          name: "heading",
          type: "text",
          defaultValue: "A few things we've been building",
        },
      ],
    },
  ],
};
