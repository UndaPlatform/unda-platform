import type { Metadata } from "next";
import { About } from "@/components/studio/about";
import { DailyStack } from "@/components/studio/daily-stack";
import { Faq } from "@/components/studio/faq";
import { Founder } from "@/components/studio/founder";
import { Mission } from "@/components/studio/mission";
import { Philosophy } from "@/components/studio/philosophy";
import { Values } from "@/components/studio/values";

export const metadata: Metadata = {
  title: "Studio | Unda Studio",
  description: "The team, philosophy, and craft behind Unda Studio.",
};

export default function StudioPage() {
  return (
    <>
      <Mission />
      <About />
      <Values />
      <Founder />
      <DailyStack />
      <Philosophy />
      <Faq />
    </>
  );
}
