import Link from "next/link";
import { UndaSymbol } from "@/components/brand/unda-symbol";
import { Container } from "@/components/layout/container";

const COLUMNS = [
  {
    title: "Ecosystem",
    links: [
      {
        href: "https://technologies.undasolutions.com",
        label: "Unda Technologies",
        external: true,
      },
      { href: "https://studio.undasolutions.com", label: "Unda Studio", external: true },
      { href: "https://travel.undasolutions.com", label: "Unda Travel", external: true },
    ],
  },
  {
    title: "Work",
    links: [{ href: "/work", label: "Case studies" }],
  },
  {
    title: "Insights",
    links: [{ href: "/insights", label: "Articles" }],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Resources",
    links: [{ href: "/contact", label: "Contact" }],
  },
];

/** Rich footer matching the approved multi-column reference — utility-first, per navigation-header-sidebar-and-footer.md. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-default bg-text-primary text-white">
      <Container className="flex flex-col gap-800 py-1200">
        <div className="grid grid-cols-2 gap-600 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-200 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-100">
              <UndaSymbol className="h-6 w-6 text-white" />
              <span className="font-display text-sm font-bold tracking-tight">UNDA SOLUTIONS</span>
            </div>
            <p className="text-sm text-white/60">Building systems that power modern businesses.</p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-200">
              <p className="text-sm font-medium text-white">{column.title}</p>
              <ul className="flex flex-col gap-150">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        rel="noopener"
                        className="text-sm text-white/60 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-200 border-t border-white/10 pt-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">© {year} Unda Solutions. All rights reserved.</p>
          <p className="text-sm text-white/60">Built in Africa. Designed for the world.</p>
        </div>
      </Container>
    </footer>
  );
}
