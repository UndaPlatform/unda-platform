"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
];

/**
 * Fixed, floating pill header — a deliberate, scoped exception to
 * unda-design-os's "sticky only in product surfaces" rule for this app's
 * marketing pages, agreed with the user alongside the type-scale exception:
 * it's what keeps the primary CTA reachable and is standard practice for
 * the reference sites this design draws from. Inset from the viewport edges
 * (rather than full-bleed) and always frosted, per the user's Marklab-style
 * reference — see DECISIONS.md ADR-038.
 */
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not read in the body — closes the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[200] px-300 pt-300 md:px-400 md:pt-400">
      <div className="mx-auto max-w-[1200px] rounded-full border border-border-default bg-bg-default/85 px-300 shadow-sm backdrop-blur-md md:px-400">
        <nav aria-label="Primary" className="flex h-14 items-center justify-between md:h-16">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Unda Studio"
              width={1593}
              height={512}
              priority
              className="h-7 w-auto md:h-8"
            />
          </Link>

          <ul className="hidden items-center gap-400 md:flex">
            {NAV_LINKS.map((link) => {
              const current = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "text-body text-text-secondary transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-text-primary",
                      current &&
                        "text-text-primary underline decoration-brand-accent-text underline-offset-4",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Start a project
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-full text-text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="mx-auto mt-200 max-h-[calc(100dvh-6rem)] max-w-[1200px] overflow-y-auto rounded-2xl border border-border-default bg-bg-default shadow-sm md:hidden"
        >
          <ul className="flex flex-col gap-200 px-300 py-400">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="block text-h3 text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-300 pb-400">
            <Button href="/contact" size="lg" className="w-full">
              Start a project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
