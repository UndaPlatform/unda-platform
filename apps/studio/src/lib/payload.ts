import config from "@payload-config";
import { getPayload } from "payload";

export function getPayloadClient() {
  return getPayload({ config });
}

// Written by hand rather than generated via `payload generate:types` — that
// CLI currently crashes on this machine's Node version (see DECISIONS.md
// ADR-047). Keep in sync with src/collections/*.ts; swap for the generated
// `payload-types.ts` once that tooling works again.
export type Media = {
  id: number;
  url?: string | null;
  alt: string;
  width?: number | null;
  height?: number | null;
};

// Payload's lexicalEditor stores rich text as a serialized editor state tree.
// Rendered via `<RichText>` from `@payloadcms/richtext-lexical/react`, which
// doesn't require a precise input type, so `unknown` is intentional here.
export type RichTextContent = unknown;

export type Category = {
  id: number;
  name: string;
};

export type CaseStudy = {
  id: number;
  title: string;
  slug: string;
  client?: string | null;
  category?: Category | null;
  cover: Media;
  tagline?: string | null;
  year?: number | null;
  gallery?: { image: Media; id?: string }[] | null;
  problem?: RichTextContent;
  approach?: RichTextContent;
  outcome?: RichTextContent;
  featured?: boolean | null;
  createdAt: string;
};

export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role?: string | null;
  avatar?: Media | null;
  featured?: boolean | null;
};

export type HomeGlobalData = {
  hero?: {
    eyebrow?: string | null;
    availabilityText?: string | null;
    headline?: string | null;
    ratingScore?: string | null;
    ratingCaption?: string | null;
    reviewerAvatars?: { photo: Media; id?: string }[] | null;
    tagline?: string | null;
    description?: string | null;
    services?: { title: string; id?: string }[] | null;
  };
  whoWeAre?: {
    badge?: string | null;
    heading?: string | null;
    gallery?: { image: Media; id?: string }[] | null;
  };
  servicesSummary?: {
    eyebrow?: string | null;
    heading?: string | null;
    description?: string | null;
  };
  selectedWork?: {
    eyebrow?: string | null;
    heading?: string | null;
  };
};

export async function getHomeGlobal() {
  const payload = await getPayloadClient();
  return (await payload.findGlobal({ slug: "home", depth: 1 })) as unknown as HomeGlobalData;
}
