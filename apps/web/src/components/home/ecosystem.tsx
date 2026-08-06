import Link from "next/link";
import { UndaMark } from "@/components/brand/unda-symbol";
import { Reveal } from "@/components/ui/reveal";

const DIVISIONS = [
  {
    name: "Unda Technologies",
    description:
      "Software, web and mobile application development, plus AI and automation solutions built for scale.",
    cta: "Explore Technologies",
  },
  {
    name: "Unda Studio",
    description:
      "UI/UX and graphic design, brand systems and digital experiences for companies that take their image seriously.",
    cta: "Explore Studio",
  },
  {
    name: "Unda Travel",
    description:
      "Flight bookings, hotel reservations, visa assistance, tour packages and corporate travel solutions.",
    cta: "Explore Travel",
  },
];

export function Ecosystem() {
  return (
    <Reveal>
      <section id="ecosystem" className="sec rounded-[32px] bg-ink">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="lb lb--on-dark mb-4">Our Ecosystem</div>
            <h2 className="max-w-[16ch] font-display text-[38px] font-bold tracking-[-0.015em] text-white">
              One company. Three specialized divisions.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-3">
          {DIVISIONS.map((division) => (
            <div key={division.name} className="eco-card">
              <div className="icon-badge">
                <UndaMark size={19} fill="#fff" />
              </div>
              <div className="mb-3 font-display text-xl font-bold text-white">{division.name}</div>
              <p className="mb-6 text-[14.5px] leading-[1.65] text-body-on-dark">
                {division.description}
              </p>
              <Link href="/ecosystem" className="text-[13.5px] font-semibold text-accent-on-dark">
                {division.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
