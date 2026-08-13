import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { PlaceholderGraphic } from "@/components/ui/placeholder-graphic";
import { getServices, type Media, type ServicesGlobalData } from "@/lib/payload";
import { SERVICES as FALLBACK_SERVICES } from "@/lib/services-data";

export async function ServicesList({ data }: { data?: ServicesGlobalData["servicesList"] }) {
  const services = await getServices();
  const list =
    services.length > 0
      ? services.map((s) => ({
          title: s.title,
          description: s.description,
          tags: (s.tags ?? []).map((t) => t.tag),
          image: s.image as Media | null | undefined,
          startsAt: s.startsAt || "Custom pricing",
          timeline: s.timeline || "Custom timeline",
        }))
      : FALLBACK_SERVICES.map((s) => ({
          ...s,
          image: null as Media | null | undefined,
          startsAt: "Custom pricing",
          timeline: "Custom timeline",
        }));

  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-300 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-brand-accent-text text-caption uppercase">
                {data?.eyebrow || "What we do"}
              </span>
              <h2 className="mt-150 max-w-xl font-display text-h2 text-text-primary">
                {data?.heading || "A full-stack design partner, not a single-service vendor"}
              </h2>
            </div>
            <p className="max-w-sm text-body text-text-secondary">
              {data?.description ||
                "Each service stands on its own, or combines into a single connected engagement."}
            </p>
          </div>
        </Reveal>

        <ul className="mt-800 border-border-default border-t">
          {list.map((service, i) => (
            <Reveal as="li" index={i} key={service.title}>
              <div className="grid grid-cols-1 gap-400 border-border-default border-b py-600 lg:grid-cols-[1fr_3fr_2fr] lg:gap-800">
                <span className="text-body text-text-secondary">{service.title}</span>

                <div>
                  {service.image?.url ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border-default">
                      <Image
                        src={service.image.url}
                        alt={service.image.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <PlaceholderGraphic variant={i} className="aspect-[16/10] w-full" />
                  )}
                  <div className="mt-300 flex flex-wrap gap-100">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-default px-200 py-50 text-body-sm text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <p className="max-w-sm text-body-lg text-text-primary">{service.description}</p>

                  <dl className="mt-600 lg:mt-0">
                    <div className="flex items-center justify-between border-border-default border-t py-200">
                      <dt className="text-body text-text-secondary">Starts at</dt>
                      <dd className="text-body text-text-primary">{service.startsAt}</dd>
                    </div>
                    <div className="flex items-center justify-between border-border-default border-t py-200">
                      <dt className="text-body text-text-secondary">Timeline</dt>
                      <dd className="text-body text-text-primary">{service.timeline}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
