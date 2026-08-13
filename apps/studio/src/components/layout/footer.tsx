import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

const SITEMAP = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL = [
  { href: "https://instagram.com/undastudio", label: "Instagram" },
  { href: "https://linkedin.com/company/undasolutions", label: "LinkedIn" },
  { href: "https://dribbble.com/undastudio", label: "Dribbble" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-neutral-900 text-neutral-0">
      <Container>
        <div className="grid grid-cols-1 gap-800 pt-1200 pb-800 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="max-w-lg font-display text-h1">Ready to start your next project?</h2>
            <p className="mt-200 max-w-md text-body-lg text-neutral-400">
              Reach out and we&apos;ll get back to you within one business day.
            </p>
            <a
              href="mailto:hello@studio.undasolutions.com"
              className="mt-400 inline-flex w-full max-w-md items-center justify-between gap-400 rounded-full border border-neutral-700 py-100 pr-100 pl-300 text-body transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:border-neutral-600"
            >
              hello@studio.undasolutions.com
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-600 md:items-end md:text-right">
            <ul className="flex flex-col gap-150 md:items-end">
              {SITEMAP.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-neutral-300 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-neutral-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-150 md:items-end">
              {SOCIAL.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-body-sm text-neutral-400 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-neutral-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-200 border-neutral-800 border-t py-400 text-body-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Unda Studio. All rights reserved.</p>
          <div className="flex items-center gap-300">
            <a
              href="https://undasolutions.com"
              className="transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-neutral-300"
            >
              Part of Unda Solutions
            </a>
            <Link
              href="/privacy"
              className="transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-neutral-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-neutral-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="overflow-hidden"
        style={{ height: "clamp(4rem, 13vw, 10rem)" }}
      >
        <p className="select-none whitespace-nowrap pl-300 font-display font-bold text-[clamp(6rem,20vw,16rem)] text-neutral-0 uppercase leading-none tracking-tight md:pl-400">
          Unda Studio
        </p>
      </div>
    </footer>
  );
}
