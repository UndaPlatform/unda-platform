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
  sector?: string | null;
  positioning?: { not?: string | null; statement?: string | null } | null;
  scope?: string | null;
  engagement?: string | null;
  opportunity?: { lede?: string | null; body?: RichTextContent } | null;
  approachSection?: {
    lede?: string | null;
    workstreams?: { label: string; id?: string }[] | null;
    caption?: string | null;
  } | null;
  workItems?:
    | {
        tag: string;
        headline: string;
        description?: string | null;
        images?: { image: Media; id?: string }[] | null;
        id?: string;
      }[]
    | null;
  impact?: {
    statement?: string | null;
    highlight?: string | null;
    points?: { title: string; description: string; id?: string }[] | null;
  } | null;
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

export type Service = {
  id: number;
  title: string;
  description: string;
  tags?: { tag: string; id?: string }[] | null;
  image?: Media | null;
  startsAt?: string | null;
  timeline?: string | null;
  order: number;
  featuredOnHome?: boolean | null;
};

export async function getServices() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "services",
    sort: "order",
    depth: 1,
    limit: 100,
  });
  return docs as unknown as Service[];
}

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

export type StudioGlobalData = {
  mission?: { eyebrow?: string | null; headline?: string | null; description?: string | null };
  about?: { eyebrow?: string | null; heading?: string | null; supporting?: string | null };
  values?: {
    eyebrow?: string | null;
    items?: { title: string; description: string; id?: string }[] | null;
  };
  founder?: {
    headline?: string | null;
    roleWord?: string | null;
    roleRest?: string | null;
    bio?: string | null;
    photo?: Media | null;
  };
  dailyStack?: { eyebrow?: string | null; heading?: string | null };
  philosophy?: { eyebrow?: string | null; quote?: string | null; supporting?: string | null };
  faq?: {
    eyebrow?: string | null;
    heading?: string | null;
    items?: { question: string; answer: string; id?: string }[] | null;
  };
};

export async function getStudioGlobal() {
  const payload = await getPayloadClient();
  return (await payload.findGlobal({
    slug: "studio-page",
    depth: 1,
  })) as unknown as StudioGlobalData;
}

export type ServicesGlobalData = {
  hero?: { eyebrow?: string | null; headline?: string | null; description?: string | null };
  servicesList?: { eyebrow?: string | null; heading?: string | null; description?: string | null };
  industries?: { eyebrow?: string | null; heading?: string | null };
};

export async function getServicesGlobal() {
  const payload = await getPayloadClient();
  return (await payload.findGlobal({
    slug: "services-page",
    depth: 1,
  })) as unknown as ServicesGlobalData;
}

export type WorkGlobalData = {
  eyebrow?: string | null;
  headline?: string | null;
  description?: string | null;
};

export async function getWorkGlobal() {
  const payload = await getPayloadClient();
  return (await payload.findGlobal({ slug: "work-page", depth: 1 })) as unknown as WorkGlobalData;
}

export type ContactGlobalData = {
  eyebrow?: string | null;
  headline?: string | null;
  description?: string | null;
  email?: string | null;
  expectations?: {
    heading?: string | null;
    items?: { title: string; description: string; id?: string }[] | null;
  };
};

export async function getContactGlobal() {
  const payload = await getPayloadClient();
  return (await payload.findGlobal({
    slug: "contact-page",
    depth: 1,
  })) as unknown as ContactGlobalData;
}
