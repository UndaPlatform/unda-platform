import type { CollectionConfig } from "payload";
import { normalizeSlug } from "../lib/slug";

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publishedAt"],
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
          'The URL segment only, no leading slash, e.g. "your-slug" (becomes /journal/your-slug).',
      },
      hooks: {
        beforeValidate: [({ value }) => (typeof value === "string" ? normalizeSlug(value) : value)],
      },
    },
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "body",
      type: "richText",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
  ],
};
