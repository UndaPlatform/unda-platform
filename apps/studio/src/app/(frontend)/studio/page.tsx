import type { Metadata } from "next";
import { About } from "@/components/studio/about";
import { DailyStack } from "@/components/studio/daily-stack";
import { Faq } from "@/components/studio/faq";
import { Founder } from "@/components/studio/founder";
import { Mission } from "@/components/studio/mission";
import { Philosophy } from "@/components/studio/philosophy";
import { Values } from "@/components/studio/values";
import { getStudioGlobal } from "@/lib/payload";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Studio | Unda Studio",
  description: "The team, philosophy, and craft behind Unda Studio.",
};

export default async function StudioPage() {
  const studio = await getStudioGlobal();

  return (
    <>
      <Mission data={studio.mission} />
      <About data={studio.about} />
      <Values data={studio.values} />
      <Founder data={studio.founder} />
      <DailyStack data={studio.dailyStack} />
      <Philosophy data={studio.philosophy} />
      <Faq data={studio.faq} />
    </>
  );
}
