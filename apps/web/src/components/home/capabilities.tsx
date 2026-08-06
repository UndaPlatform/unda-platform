import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const COLUMN_A = [
  "Software Development",
  "Web & Mobile Apps",
  "UI/UX & Graphic Design",
  "AI & Automation",
];
const COLUMN_B = ["Flights & Hotels", "Visa Assistance", "Tour Packages", "Corporate Travel"];

export function Capabilities() {
  return (
    <Reveal>
      <section className="sec">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-[100px]">
            <div className="lb mb-4">Capabilities</div>
            <h2 className="h2 max-w-[12ch]">
              End-to-end capabilities to bring your vision to life.
            </h2>
            <Link href="/ecosystem" className="text-sm font-semibold text-accent-link">
              View all capabilities →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-11 sm:grid-cols-2">
            <div>
              {COLUMN_A.map((item, i) => (
                <div
                  key={item}
                  className={`cap-row ${i === COLUMN_A.length - 1 ? "border-b-0" : ""}`}
                >
                  {item}
                  <span aria-hidden="true">+</span>
                </div>
              ))}
            </div>
            <div>
              {COLUMN_B.map((item, i) => (
                <div
                  key={item}
                  className={`cap-row ${i === COLUMN_B.length - 1 ? "border-b-0" : ""}`}
                >
                  {item}
                  <span aria-hidden="true">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
