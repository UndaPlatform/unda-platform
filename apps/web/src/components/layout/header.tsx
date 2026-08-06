"use client";

import Link from "next/link";
import { useState } from "react";
import { UndaSymbol } from "@/components/brand/unda-symbol";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

/**
 * Marketing header — never sticky, per design-system/components/navigation-header-sidebar-and-footer.md
 * ("sticky only in product surfaces, never marketing").
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border-default">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-100 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
        >
          <UndaSymbol className="h-7 w-7 text-brand-primary" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-tight text-text-primary">
              UNDA
            </span>
            <span className="text-[10px] font-medium tracking-widest text-text-secondary">
              SOLUTIONS
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm text-sm text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className={`hidden md:inline-flex ${buttonVariants({ size: "sm" })}`}>
          Contact →
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 text-text-primary"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-border-default md:hidden"
        >
          <Container className="flex flex-col gap-200 py-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={buttonVariants({ className: "mt-100 self-start" })}
              onClick={() => setMenuOpen(false)}
            >
              Contact →
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
