import { UndaMark } from "@/components/brand/unda-symbol";

const SITEMAP = [
  { title: "Ecosystem", links: ["Unda Technologies", "Unda Studio", "Unda Travel"] },
  { title: "Work", links: ["Case Studies", "Industries", "Approach"] },
  { title: "Insights", links: ["Articles", "News", "Research"] },
  { title: "Company", links: ["About Us", "Careers", "Leadership"] },
  { title: "Resources", links: ["Documentation", "Brand Assets"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
];

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-9 pt-[72px] sm:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-3 flex items-center gap-2.5">
          <UndaMark className="text-white" fill="#fff" />
          <span className="font-display text-[15px] font-bold tracking-[0.02em] text-white">
            UNDA SOLUTIONS
          </span>
        </div>
        <p className="mb-11 max-w-md text-[13.5px] text-muted-on-dark">
          Software, design and AI systems — plus flights, hotels and corporate travel — built for
          modern businesses.
        </p>
        <div className="grid grid-cols-2 gap-6 text-[13.5px] leading-[2.2] sm:grid-cols-3 lg:grid-cols-6">
          {SITEMAP.map((group) => (
            <div key={group.title}>
              <div className="mb-1.5 font-semibold text-white">{group.title}</div>
              <div className="text-muted-on-dark">
                {group.links.map((link, i) => (
                  <span key={link}>
                    {link}
                    {i < group.links.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-11 border-t border-ink-border pt-[22px] font-mono text-[11.5px] text-body">
          © 2026 Unda Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
