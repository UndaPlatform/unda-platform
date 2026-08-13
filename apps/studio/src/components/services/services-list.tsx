import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { PlaceholderGraphic } from "@/components/ui/placeholder-graphic";
import { SERVICES } from "@/lib/services-data";

export function ServicesList() {
  return (
    <section className="py-1200">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-300 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-brand-accent-text text-caption uppercase">What we do</span>
              <h2 className="mt-150 max-w-xl font-display text-h2 text-text-primary">
                A full-stack design partner, not a single-service vendor
              </h2>
            </div>
            <p className="max-w-sm text-body text-text-secondary">
              Each service stands on its own, or combines into a single connected engagement.
            </p>
          </div>
        </Reveal>

        <ul className="mt-800 border-border-default border-t">
          {SERVICES.map((service, i) => (
            <Reveal as="li" index={i} key={service.title}>
              <div className="grid grid-cols-1 gap-400 border-border-default border-b py-600 lg:grid-cols-[1fr_3fr_2fr] lg:gap-800">
                <span className="text-body text-text-secondary">{service.title}</span>

                <div>
                  <PlaceholderGraphic variant={i} className="aspect-[16/10] w-full" />
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
                      <dd className="text-body text-text-primary">Custom pricing</dd>
                    </div>
                    <div className="flex items-center justify-between border-border-default border-t py-200">
                      <dt className="text-body text-text-secondary">Timeline</dt>
                      <dd className="text-body text-text-primary">Custom timeline</dd>
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
