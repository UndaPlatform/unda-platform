import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/coming-soon";

export const metadata: Metadata = {
  title: "Terms of Service | Unda Studio",
  description: "Unda Studio's terms of service.",
};

export default function TermsPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      title="Terms of service, coming soon"
      description="Our terms of service are being finalized. Check back shortly, or email us with any questions in the meantime."
    />
  );
}
