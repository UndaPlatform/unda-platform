import { IMAGE_CREDITS } from "@/lib/image-credits";

/**
 * PLACEHOLDER CONTENT — carried over from the approved design reference, not real shipped
 * projects. Flagged explicitly in DECISIONS.md. Replace with real case studies (or confirm
 * these are real and provide actual outcomes/imagery) before this ships publicly.
 */
export const CASE_STUDIES = [
  {
    slug: "ai-powered-health-platform",
    name: "AI-Powered Health Platform",
    tag: "Healthcare",
    division: "Technologies",
    description: "An AI platform improving diagnostics accuracy and patient outcomes.",
    image: IMAGE_CREDITS.techDataCenter,
  },
  {
    slug: "digital-banking-platform",
    name: "Digital Banking Platform",
    tag: "FinTech",
    division: "Technologies",
    description: "A secure and scalable banking platform designed for growth.",
    image: IMAGE_CREDITS.techDataCenter,
  },
  {
    slug: "corporate-travel-platform",
    name: "Corporate Travel Platform",
    tag: "Travel",
    division: "Travel",
    description: "Streamlining travel booking and expense management for enterprises.",
    image: IMAGE_CREDITS.travelAirport,
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
