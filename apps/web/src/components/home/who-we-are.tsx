import { ImageSlot } from "@/components/ui/image-slot";
import { Reveal } from "@/components/ui/reveal";
import { resolvePhoto } from "@/lib/photo";

const PILLARS = [
  {
    n: "01",
    title: "Strategy",
    description: "We help you define what matters before anything gets built.",
  },
  {
    n: "02",
    title: "Design",
    description: "We design clarity into every experience, screen and interaction.",
  },
  {
    n: "03",
    title: "Growth",
    description: "We help you build systems that scale with real demand.",
  },
];

export function WhoWeAre() {
  return (
    <Reveal>
      <section className="sec pt-0">
        <div className="lb mb-6">Who We Are</div>

        <div className="mb-[72px] grid grid-cols-1 items-end gap-14 lg:grid-cols-[1.4fr_0.6fr]">
          <h2 className="h2 m-0 max-w-[20ch] text-[53px]">
            We partner with ambitious organizations to build what&apos;s next.
          </h2>
          <p className="body-copy text-lg">
            We combine strategy, design and engineering to create systems that solve real problems
            and unlock new opportunities — across three specialized divisions, under one standard of
            work.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.55fr_1fr]">
          <ImageSlot
            src={resolvePhoto("who-we-are.jpg")}
            alt="Real photo — dramatic light, corridor or plaza"
            className="h-[237px] w-full shadow-[0_24px_50px_-20px_rgba(20,15,10,0.25)]"
          />
          <div>
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.n}
                className={`flex items-baseline gap-5 border-t border-line py-7 ${
                  i === PILLARS.length - 1 ? "" : "border-b"
                }`}
              >
                <div className="w-8 shrink-0 font-mono text-[13px] text-accent-link">
                  {pillar.n}
                </div>
                <div className="w-[150px] shrink-0 font-display text-[19px] font-semibold text-ink">
                  {pillar.title}
                </div>
                <div className="text-[14.5px] leading-[1.55] text-muted">{pillar.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
