import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  { n: 1, title: "Discover", description: "Understand your business and users." },
  { n: 2, title: "Define", description: "Define the right problems to solve." },
  { n: 3, title: "Design", description: "Design intuitive solutions." },
  { n: 4, title: "Develop", description: "Build robust, scalable systems." },
  { n: 5, title: "Launch", description: "Launch and ensure a smooth takeoff." },
  { n: 6, title: "Scale", description: "Optimize and help you grow." },
];

export function Process() {
  return (
    <Reveal>
      <section className="sec">
        <div className="lb mb-4">Our Process</div>
        <h2 className="h2 mb-[52px] max-w-[20ch]">
          A proven process for building systems that scale.
        </h2>
        <div className="relative">
          <div className="absolute inset-x-0 top-[17px] h-px bg-line" aria-hidden="true" />
          <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {STEPS.map((step) => (
              <div key={step.n}>
                <div className="step-num">{step.n}</div>
                <div className="mb-2 font-display text-[15px] font-semibold text-ink">
                  {step.title}
                </div>
                <div className="text-[12.5px] leading-[1.55] text-muted">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
