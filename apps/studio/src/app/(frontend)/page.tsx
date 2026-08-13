import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { Preloader } from "@/components/home/preloader";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesSummary } from "@/components/home/services-summary";
import { Testimonials } from "@/components/home/testimonials";
import { WhoWeAre } from "@/components/home/who-we-are";
import { Process } from "@/components/services/process";
import { getHomeGlobal, getServices } from "@/lib/payload";
import { SERVICES as FALLBACK_SERVICES, HOME_SERVICE_TITLES } from "@/lib/services-data";

// Home reads Selected Work, Testimonials, and the Home global (its own
// editable text/images) from Payload — without revalidation this would
// only pick up new admin content on the next deploy, defeating the point
// of a CMS. See DECISIONS.md ADR-047, ADR-092, ADR-094.
export const revalidate = 60;

export default async function Home() {
  const [home, services] = await Promise.all([getHomeGlobal(), getServices()]);

  const homeServices =
    services.length > 0
      ? services
          .filter((s) => s.featuredOnHome)
          .map((s) => ({
            title: s.title,
            description: s.description,
            tags: (s.tags ?? []).map((t) => t.tag),
          }))
      : HOME_SERVICE_TITLES.map((title) => FALLBACK_SERVICES.find((s) => s.title === title))
          .filter((s) => s !== undefined)
          .map((s) => ({ title: s.title, description: s.description, tags: [...s.tags] }));

  return (
    <>
      <Preloader />
      <Hero data={home.hero} />
      <WhoWeAre data={home.whoWeAre} />
      <SelectedWork data={home.selectedWork} />
      <ServicesSummary data={home.servicesSummary} services={homeServices} />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}
