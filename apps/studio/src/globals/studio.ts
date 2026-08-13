import type { GlobalConfig } from "payload";

// The Studio page's (/studio) editable text and images. Icon-coupled lists
// (Daily Stack's tools, About's capability pills) stay in code since an
// admin text field can't safely pick a brand icon or Lucide icon — only the
// surrounding copy is editable. See DECISIONS.md ADR-092, ADR-093.
export const StudioGlobal: GlobalConfig = {
  slug: "studio-page",
  admin: {
    description: "Editable text and images for the Studio (/studio) page.",
  },
  fields: [
    {
      name: "mission",
      type: "group",
      label: "Mission",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Our mission" },
        { name: "headline", type: "text", defaultValue: "Craft over speed." },
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "To help ambitious teams build products and brands worth remembering, without trading craft for speed, or speed for craft.",
        },
      ],
    },
    {
      name: "about",
      type: "group",
      label: "About Us",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "About us" },
        {
          name: "heading",
          type: "text",
          defaultValue:
            "We help ambitious startups and businesses launch sharper brands and products.",
        },
        {
          name: "supporting",
          type: "text",
          defaultValue: "With clarity, speed, and no drama, from first sketch to shipped product.",
        },
      ],
    },
    {
      name: "values",
      type: "group",
      label: "Our Values",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Our values" },
        {
          name: "items",
          type: "array",
          label: "Values",
          minRows: 1,
          fields: [
            { name: "title", type: "text", required: true },
            { name: "description", type: "text", required: true },
          ],
          defaultValue: [
            {
              title: "Clarity First",
              description:
                "We choose the obvious solution over the impressive one, every time it wins.",
            },
            {
              title: "Systems Thinking",
              description:
                "What we build is designed to extend as you grow, not just to look good once.",
            },
            {
              title: "Purposeful Craft",
              description:
                "The parts no one asks about get the same care as the parts everyone sees.",
            },
            {
              title: "Speed Without Shortcuts",
              description:
                "We move fast because the process is disciplined, not because we skip steps.",
            },
          ],
        },
      ],
    },
    {
      name: "founder",
      type: "group",
      label: "Founder",
      fields: [
        { name: "headline", type: "text", defaultValue: "Meet Ademola" },
        { name: "roleWord", type: "text", label: "Colored role word", defaultValue: "Founder" },
        {
          name: "roleRest",
          type: "text",
          label: "Rest of the role line",
          defaultValue: ", Unda Studio",
        },
        {
          name: "bio",
          type: "textarea",
          defaultValue:
            "Ademola Oshingbesan is a product designer, software engineer, and entrepreneur focused on building AI-powered digital products. He combines product design, software engineering, analytics, and AI to create technology solutions for African and global users, with experience across fintech, healthtech, and other emerging technology sectors.",
        },
        {
          name: "photo",
          type: "upload",
          relationTo: "media",
          admin: {
            description: "Leave empty to keep the current founder.png.",
          },
        },
      ],
    },
    {
      name: "dailyStack",
      type: "group",
      label: "Daily Stack",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Daily stack" },
        { name: "heading", type: "text", defaultValue: "The tools we design and build with" },
      ],
    },
    {
      name: "philosophy",
      type: "group",
      label: "Philosophy",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "Philosophy" },
        {
          name: "quote",
          type: "textarea",
          defaultValue:
            "Great design is invisible, until you try to imagine the product without it.",
        },
        {
          name: "supporting",
          type: "textarea",
          defaultValue:
            "We believe restraint is a craft skill, not an absence of ideas. The aesthetic is what happens when the thinking is right.",
        },
      ],
    },
    {
      name: "faq",
      type: "group",
      label: "FAQ",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "FAQ" },
        { name: "heading", type: "text", defaultValue: "Questions we hear a lot" },
        {
          name: "items",
          type: "array",
          label: "Questions",
          minRows: 1,
          admin: {
            description:
              "These are drafted, honest placeholder answers — edit them once you have real, confirmed answers.",
          },
          fields: [
            { name: "question", type: "text", required: true },
            { name: "answer", type: "textarea", required: true },
          ],
          defaultValue: [
            {
              question: "How long does a typical project take?",
              answer:
                "Timelines vary by scope. Most engagements run a few weeks to a few months, and we'll give you a clear estimate after our first call.",
            },
            {
              question: "Do you work with early-stage startups?",
              answer:
                "Yes. We work with teams at every stage, from pre-seed founders validating an idea to established teams scaling a product.",
            },
            {
              question: "What's included in a project?",
              answer:
                "Every engagement is scoped to your needs, from a single deliverable to the full arc from strategy to shipped product. See our Services page for a breakdown.",
            },
            {
              question: "How do we get started?",
              answer:
                "Reach out through our contact page with a bit about your project. We typically reply within one business day.",
            },
            {
              question: "Do you offer support after launch?",
              answer:
                "Many of our engagements continue past launch. We can talk through ongoing support once we understand what you need.",
            },
          ],
        },
      ],
    },
  ],
};
