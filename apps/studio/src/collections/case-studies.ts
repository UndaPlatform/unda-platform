import type { CollectionConfig } from "payload";
import { normalizeSlug } from "../lib/slug";

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
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "problem",
      type: "richText",
    },
    {
      name: "approach",
      type: "richText",
    },
    {
      name: "outcome",
      type: "richText",
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Show this case study on the Home page selected work section",
      },
    },
  ],
};
