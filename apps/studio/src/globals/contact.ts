import type { GlobalConfig } from "payload";

// The Contact page's (/contact) editable text. See DECISIONS.md ADR-092,
// ADR-093.
export const ContactGlobal: GlobalConfig = {
  slug: "contact-page",
  admin: {
    description: "Editable text for the Contact (/contact) page.",
  },
  fields: [
    { name: "eyebrow", type: "text", defaultValue: "Contact" },
    { name: "headline", type: "text", defaultValue: "Let's talk about your project" },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Tell us a little about what you're building: stage, timeline, and budget if you have one, and we'll reply within one business day.",
    },
    { name: "email", type: "text", defaultValue: "hello@studio.undasolutions.com" },
    {
      name: "expectations",
      type: "group",
      label: "What to expect",
      fields: [
        { name: "heading", type: "text", defaultValue: "What to expect" },
        {
          name: "items",
          type: "array",
          minRows: 1,
          fields: [
            { name: "title", type: "text", required: true },
            { name: "description", type: "text", required: true },
          ],
          defaultValue: [
            {
              title: "A reply within one business day",
              description: "From a senior designer, not a sales queue.",
            },
            {
              title: "A short scoping call",
              description: "To understand your goals before we talk numbers.",
            },
            {
              title: "A clear proposal",
              description: "Scope, timeline, and cost, no surprises later.",
            },
          ],
        },
      ],
    },
  ],
};
