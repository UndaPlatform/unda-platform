import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { Preloader } from "@/components/home/preloader";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesSummary } from "@/components/home/services-summary";
import { Testimonials } from "@/components/home/testimonials";
import { WhoWeAre } from "@/components/home/who-we-are";
import { Process } from "@/components/services/process";
import { getHomeGlobal } from "@/lib/payload";

// Home reads Selected Work, Testimonials, and the Home global (its own
// editable text/images) from Payload — without revalidation this would
// only pick up new admin content on the next deploy, defeating the point
// of a CMS. See DECISIONS.md ADR-047, ADR-092.
export const revalidate = 60;

export default async function Home() {
  const home = await getHomeGlobal();

  return (
    <>
      <Preloader />
      <Hero data={home.hero} />
      <WhoWeAre data={home.whoWeAre} />
      <SelectedWork data={home.selectedWork} />
      <ServicesSummary data={home.servicesSummary} />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}
