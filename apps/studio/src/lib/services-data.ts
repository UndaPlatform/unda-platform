// Shared between components/home/services-summary.tsx and
// components/services/services-list.tsx so the two presentations of the
// same services can't drift out of sync with each other.
export const SERVICES = [
  {
    title: "Product Design",
    description: "End-to-end design from first sketch to shipped interface.",
    tags: ["UX/UI Design", "Prototyping", "User Testing"],
  },
  {
    title: "Brand Identity",
    description: "Names, marks, and systems that hold up across every surface.",
    tags: ["Visual Identity", "Style Guides", "Brand Strategy"],
  },
  {
    title: "UX Research",
    description: "Evidence over opinion: research that shapes real decisions.",
    tags: ["User Interviews", "Usability Testing", "Journey Mapping"],
  },
  {
    title: "UI Design",
    description: "Interfaces that are as considered up close as at a glance.",
    tags: ["Interface Design", "Interaction Design", "Design QA"],
  },
  {
    title: "Design Systems",
    description: "Tokens, components, and docs that keep teams shipping fast.",
    tags: ["Component Libraries", "Design Tokens", "Documentation"],
  },
  {
    title: "Web Design",
    description: "Marketing sites and product surfaces built for conversion.",
    tags: ["UX/UI Design", "Responsive Layouts", "Web Development"],
  },
  {
    title: "AI Product Design",
    description: "Designing trustworthy, legible experiences around AI.",
    tags: ["AI UX Patterns", "Prompt Design", "Human-in-the-loop"],
  },
  {
    title: "Product Strategy",
    description: "Roadmaps and positioning grounded in your actual market.",
    tags: ["Roadmapping", "Positioning", "Market Research"],
  },
] as const;

// The 4 services surfaced on Home — a fixed subset, not derived by index, so
// removing/reordering entries in SERVICES doesn't silently change which ones
// appear on Home.
export const HOME_SERVICE_TITLES = [
  "Product Design",
  "Brand Identity",
  "Design Systems",
  "AI Product Design",
] as const;
