import Link from "next/link";
import { Container } from "@/components/layout/container";

const SITEMAP_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/companies", label: "Companies" },
  { href: "/work", label: "Our Work" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

const DIVISIONS = [
  { href: "https://studio.undasolutions.com", label: "Unda Studio" },
  { href: "https://technologies.undasolutions.com", label: "Unda Technologies" },
  { href: "https://travel.undasolutions.com", label: "Unda Travel" },
];

/** Utility footer, not a second marketing surface — per navigation-header-sidebar-and-footer.md. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-default">
      <Container className="flex flex-col gap-800 py-800">
        <div className="grid grid-cols-1 gap-600 sm:grid-cols-3">
          <div className="flex flex-col gap-100">
            <p className="text-sm font-medium text-text-primary">Sitemap</p>
            <ul className="flex flex-col gap-100">
              {SITEMAP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-100">
            <p className="text-sm font-medium text-text-primary">Divisions</p>
            <ul className="flex flex-col gap-100">
              {DIVISIONS.map((division) => (
                <li key={division.href}>
                  <a
                    href={division.href}
                    className="text-sm text-text-secondary hover:text-text-primary"
                    rel="noopener"
                  >
                    {division.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-100">
            <p className="text-sm font-medium text-text-primary">Unda Solutions</p>
            <p className="text-sm text-text-secondary">
              Intelligent digital solutions and business services across Africa and beyond.
            </p>
          </div>
        </div>

        <p className="font-display text-2xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Unda Solutions
        </p>

        <p className="text-sm text-text-secondary">© {year} Unda Solutions. All rights reserved.</p>
      </Container>
    </footer>
  );
}
