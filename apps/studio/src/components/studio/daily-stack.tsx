import { SiBlender, SiClaude, SiFigma, SiFramer, SiWebflow } from "@icons-pack/react-simple-icons";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { StudioGlobalData } from "@/lib/payload";

// Real brand marks via @icons-pack/react-simple-icons (MIT-licensed wrapper
// around the CC0 Simple Icons set) where one exists. A few of these tools
// don't have a mark in that set (often removed for trademark reasons) — for
// those, a plain text monogram stands in rather than an invented logo.
const TOOLS = [
  { name: "Figma", icon: SiFigma },
  { name: "FigJam", icon: SiFigma },
  { name: "Adobe Photoshop", monogram: "Ps" },
  { name: "Adobe Illustrator", monogram: "Ai" },
  { name: "Adobe After Effects", monogram: "Ae" },
  { name: "Adobe Premiere Pro", monogram: "Pr" },
  { name: "Canva", monogram: "Cv" },
  { name: "Framer", icon: SiFramer },
  { name: "Webflow", icon: SiWebflow },
  { name: "Claude", icon: SiClaude },
  { name: "Midjourney", monogram: "Mj" },
  { name: "Blender", icon: SiBlender },
];

export function DailyStack({ data }: { data?: StudioGlobalData["dailyStack"] }) {
  return (
    <section className="bg-neutral-900 py-1200">
      <Container>
        <Reveal>
          <span className="text-brand-accent text-caption uppercase">
            {data?.eyebrow || "Daily stack"}
          </span>
          <h2 className="mt-150 max-w-xl font-display text-h2 text-neutral-0">
            {data?.heading || "The tools we design and build with"}
          </h2>
        </Reveal>

        <ul className="mt-800 grid grid-cols-3 gap-x-400 gap-y-600 sm:grid-cols-6">
          {TOOLS.map((tool, i) => (
            <Reveal as="li" index={i} key={tool.name}>
              <div className="flex flex-col items-center gap-200 text-center">
                {tool.icon ? (
                  <tool.icon
                    className="size-8 text-neutral-0"
                    color="currentColor"
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className="flex size-8 items-center justify-center font-display font-semibold text-neutral-0 text-body"
                    aria-hidden="true"
                  >
                    {tool.monogram}
                  </span>
                )}
                <span className="text-body-sm text-neutral-400">{tool.name}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
