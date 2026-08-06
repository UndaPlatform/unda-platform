/**
 * PLACEHOLDER CONTENT — carried over from the approved design reference, not real shipped
 * projects. Flagged explicitly in DECISIONS.md. Replace with real case studies (or confirm
 * these are real and provide actual outcomes/imagery) before this ships publicly.
 *
 * No `image` field here on purpose — CaseStudyCard resolves `public/photography/case-studies/
 * <slug>.jpg` for each entry via resolvePhoto() and falls back to GraphicPanel until that file
 * exists. Drop the file in with the matching slug and the real photo appears automatically.
 */
export const CASE_STUDIES = [
  {
    slug: "ai-powered-health-platform",
    name: "AI-Powered Health Platform",
    tag: "Healthcare",
    division: "Technologies",
    description: "An AI platform improving diagnostics accuracy and patient outcomes.",
  },
  {
    slug: "digital-banking-platform",
    name: "Digital Banking Platform",
    tag: "FinTech",
    division: "Technologies",
    description: "A secure and scalable banking platform designed for growth.",
  },
  {
    slug: "corporate-travel-platform",
    name: "Corporate Travel Platform",
    tag: "Travel",
    division: "Travel",
    description: "Streamlining travel booking and expense management for enterprises.",
  },
  {
    slug: "learning-management-system",
    name: "Learning Management System",
    tag: "Education",
    division: "Studio",
    description: "An engaging platform that enhances learning and collaboration.",
  },
] as const;
