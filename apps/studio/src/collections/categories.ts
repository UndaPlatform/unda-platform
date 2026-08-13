import type { CollectionConfig } from "payload";
import { normalizeWhitespace } from "../lib/text";

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "e.g. Brand Identity, Product Design, Web Design",
      },
      hooks: {
        beforeValidate: [
          ({ value }) => (typeof value === "string" ? normalizeWhitespace(value) : value),
        ],
      },
    },
  ],
};
