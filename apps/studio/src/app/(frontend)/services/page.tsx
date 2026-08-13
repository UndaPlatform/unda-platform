import type { Metadata } from "next";
import { FinalCta } from "@/components/home/final-cta";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StretchText } from "@/components/motion/stretch-text";
import { Industries } from "@/components/services/industries";
import { Process } from "@/components/services/process";
import { ServicesList } from "@/components/services/services-list";
import { getServicesGlobal } from "@/lib/payload";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Services | Unda Studio",
  description:
    "Product design, brand identity, UX research, design systems, web design, AI product design, and product strategy.",
};

export default async function ServicesPage() {
  const services = await getServicesGlobal();

  return (
    <>
      <section className="bg-neutral-900 pt-[7rem] pb-1200 md:pt-[9rem]">
        <Container>
          <Reveal>
            <span className="text-brand-accent text-caption uppercase">
              {services.hero?.eyebrow || "What we offer"}
            </span>
          </Reveal>

          <Reveal index={1}>
            <h1 className="mt-150">
              <StretchText
                fit="size"
                className="select-none font-display font-bold text-[clamp(3rem,10vw,8rem)] text-neutral-0 leading-[0.95]"
              >
                {services.hero?.headline || "Sketch to shipped."}
              </StretchText>
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-400 text-h4 text-neutral-400">
              {services.hero?.description ||
                "Engage us for one service or the full arc from strategy to shipped product, the same team, the same standard, throughout."}
            </p>
          </Reveal>
        </Container>
      </section>

      <ServicesList data={services.servicesList} />
      <Industries data={services.industries} />
      <Process />
      <FinalCta />
    </>
  );
}
