import { Capabilities } from "@/components/home/capabilities";
import { ContactCTA } from "@/components/home/contact-cta";
import { Ecosystem } from "@/components/home/ecosystem";
import { FAQ } from "@/components/home/faq";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { Insights } from "@/components/home/insights";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { WhoWeAre } from "@/components/home/who-we-are";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Ecosystem />
      <Capabilities />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <Insights />
      <FAQ />
      <ContactCTA />
    </>
  );
}
