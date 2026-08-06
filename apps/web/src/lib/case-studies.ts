/**
 * PLACEHOLDER CONTENT — carried over from the approved design reference, not real shipped
 * projects. Flagged explicitly in DECISIONS.md. Replace with real case studies (or confirm
 * these are real and provide actual outcomes/imagery) before this ships publicly.
 *
 * `image` is null everywhere on purpose — real project imagery isn't ready, so every card
 * renders a GraphicPanel placeholder instead of an unrelated stock photo. Swap in real image
 * objects here once real case study screenshots/photography exist.
 */
export const CASE_STUDIES = [
  {
    slug: "ai-powered-health-platform",
    name: "AI-Powered Health Platform",
    tag: "Healthcare",
    division: "Technologies",
    description: "An AI platform improving diagnostics accuracy and patient outcomes.",
    image: null,
  },
  {
    slug: "digital-banking-platform",
    name: "Digital Banking Platform",
    tag: "FinTech",
    division: "Technologies",
    description: "A secure and scalable banking platform designed for growth.",
    image: null,
  },
  {
    slug: "corporate-travel-platform",
    name: "Corporate Travel Platform",
    tag: "Travel",
    division: "Travel",
    description: "Streamlining travel booking and expense management for enterprises.",
    image: null,
  },
  {
    slug: "learning-management-system",
    name: "Learning Management System",
    tag: "Education",
    division: "Studio",
    description: "An engaging platform that enhances learning and collaboration.",
    image: null,
  },
] as const;
