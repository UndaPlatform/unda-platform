import { Reveal } from "@/components/ui/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Unda rebuilt our core platform without a single day of downtime. Rare honesty from a technology partner.",
    author: "Maria Alonso · CTO, Regional Bank",
  },
  {
    quote:
      "They treated our brand like a system, not a logo project. Fourteen locations finally look like one company.",
    author: "David Okoye · VP Marketing, Hospital Network",
  },
  {
    quote:
      "Our corporate travel program finally feels designed, not just booked. Adoption jumped within a month.",
    author: "Amara Chukwu · Head of Ops, Logistics Group",
  },
];

export function Testimonials() {
  return (
    <Reveal>
      <section className="sec">
        <div className="lb mb-4">What Clients Say</div>
        <h2 className="h2 mb-12 max-w-[20ch]">Trusted by teams who need it done right.</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="card p-8">
              <p className="mb-[22px] font-display text-[17px] font-medium leading-[1.55] text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="text-[13.5px] text-muted">{t.author}</div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
