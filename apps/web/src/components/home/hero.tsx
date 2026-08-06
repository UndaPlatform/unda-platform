import Link from "next/link";
import { UndaMark } from "@/components/brand/unda-symbol";

const SERVICE_STRIP = ["Software", "UI/UX & Design", "AI & Automation", "Travel & Corporate"];

export function Hero() {
  return (
    <>
      <header className="relative overflow-hidden px-6 pt-14 sm:px-16">
        <UndaMark
          size={460}
          className="pointer-events-none absolute -right-20 -top-[100px] text-ink opacity-[0.05]"
          fill="none"
        />
        <div
          className="pointer-events-none absolute right-[120px] top-[60px] h-[340px] w-[340px] rounded-full blur-[6px]"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.2 255 / 0.16), transparent 72%)",
          }}
        />

        <div className="relative grid w-full max-w-[1088px]">
          <h1 className="m-0 mb-12 text-[clamp(56px,10vw,150px)] font-bold leading-[0.94] tracking-[-0.03em] text-ink font-display">
            Unda
            <br />
            <span
              style={{
                background: "linear-gradient(100deg, #171412, oklch(0.5 0.2 255))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Solutions
            </span>
            <sup className="ml-[0.15em] inline-flex h-[1em] w-[1em] items-center justify-center rounded-full border-[2.5px] border-ink text-[0.28em] align-super">
              ®
            </sup>
          </h1>

          <div className="mb-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <p className="body-copy mb-6 text-xl">
                From software to travel, we deliver thoughtful systems that drive growth and build
                trust.
              </p>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ background: "var(--color-accent)" }}
              >
                Get Started <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="font-mono text-[17px] leading-[2] text-body">
              <span
                className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              Built in Africa, Pan-African reach
              <br />
              Available for global projects
            </div>
          </div>
        </div>
      </header>

      <section className="my-14 border-y border-line-soft sm:my-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 sm:grid-cols-4">
          {SERVICE_STRIP.map((label, i) => (
            <div
              key={label}
              className={`border-line-soft px-6 py-5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-body ${
                i < SERVICE_STRIP.length - 1 ? "border-r" : ""
              } ${i === 0 ? "text-left" : i === SERVICE_STRIP.length - 1 ? "text-right" : "text-center"}`}
            >
              {label}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
