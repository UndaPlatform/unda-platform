import { Globe, Heart, Sparkles, Target } from "lucide-react";
import type { Metadata } from "next";
import { Photo } from "@/components/brand/photo";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconBadge } from "@/components/ui/icon-badge";
import { Reveal } from "@/components/ui/reveal";
import { StatItem } from "@/components/ui/stat-item";
import { resolvePhoto } from "@/lib/photo";
import { STATS } from "@/lib/stats";

export const metadata: Metadata = {
  title: "About Us",
  description: "Our story, mission, and the people building Unda Solutions.",
};

const CULTURE = [
  { icon: Target, title: "Meaningful Work", description: "Solve real problems that matter." },
  { icon: Sparkles, title: "Growth Mindset", description: "Learn, grow, and level up." },
  { icon: Heart, title: "Great Culture", description: "One team, one mission, one Unda." },
  { icon: Globe, title: "Global Impact", description: "Built in Africa, impacting the world." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-1200 sm:py-1600">
        <Container className="grid grid-cols-1 items-center gap-800 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-400">
            <Eyebrow>About us</Eyebrow>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
              Builders, thinkers, and problem solvers.
            </h1>
            <p className="text-lg leading-8 text-text-secondary">
              We&apos;re on a mission to build systems that power progress and improve lives.
            </p>
            <a href="#our-story" className={buttonVariants({ size: "lg" })}>
              Our Story →
            </a>
          </div>
          <Photo
            src={resolvePhoto("about.jpg")}
            alt="The Unda Solutions team"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-square w-full lg:aspect-[4/5]"
          />
        </Container>
      </section>

      <Reveal>
        <section id="our-story" className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-400 max-w-2xl">
            <Eyebrow>Our story</Eyebrow>
            <p className="text-lg leading-8 text-text-secondary">
              Unda Solutions exists to create intelligent solutions that improve how businesses and
              people work, connect, and grow. Through thoughtful design, innovative technology, and
              exceptional service, we build systems that inspire trust, create value, and stand the
              test of time.
            </p>
            <p className="text-lg leading-8 text-text-secondary">
              Rather than functioning as a pure service provider, we&apos;re building an ecosystem
              of products, platforms, and services intended to create long-term value across Africa
              and beyond — with the same rigor and craft as any global technology company.
            </p>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-600">
            <div className="grid grid-cols-1 gap-400 sm:grid-cols-2 lg:grid-cols-4">
              {CULTURE.map((item) => (
                <div key={item.title} className="flex flex-col gap-200">
                  <IconBadge>
                    <item.icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  </IconBadge>
                  <p className="text-lg font-semibold text-text-primary">{item.title}</p>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-800">
          <Container className="flex flex-wrap justify-between gap-600">
            {STATS.map((stat) => (
              <StatItem key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
            ))}
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-200">
            <Eyebrow>The team</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Meet the brains behind Unda
            </h2>
            <p className="max-w-lg text-base text-text-secondary">
              Team profiles are on their way. We&apos;d rather introduce our team properly than fill
              this space with placeholders.
            </p>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-border-default py-1200">
          <Container className="flex flex-col gap-400">
            <div className="flex flex-col gap-100 max-w-lg">
              <Eyebrow>Say hello</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Get in touch
              </h2>
              <p className="text-base text-text-secondary">
                Questions about who we are or what we do? Send us a message.
              </p>
            </div>
            <ContactForm />
          </Container>
        </section>
      </Reveal>
    </>
  );
}
