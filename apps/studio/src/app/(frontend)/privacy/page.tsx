import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/coming-soon";

export const metadata: Metadata = {
  title: "Privacy Policy | Unda Studio",
  description: "Unda Studio's privacy policy.",
};

export default function PrivacyPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      title="Privacy policy, coming soon"
      description="Our privacy policy is being finalized. Check back shortly, or email us with any questions in the meantime."
    />
  );
}
