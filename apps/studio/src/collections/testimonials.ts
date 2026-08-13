import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "author",
    defaultColumns: ["author", "role", "featured"],
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      admin: {
        description: "e.g. Founder, Company Name",
      },
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Show this testimonial on the Home page carousel",
      },
    },
  ],
};
