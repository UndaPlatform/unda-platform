import Link from "next/link";
import { UndaMark } from "@/components/brand/unda-symbol";

const NAV_LINKS = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-line-soft bg-canvas/80 px-6 backdrop-blur-md sm:px-16">
      <Link href="/" className="flex items-center gap-2.5">
        <UndaMark className="text-ink" />
        <span className="font-display text-[17px] font-bold tracking-[-0.01em] text-ink">
          Unda Solutions
        </span>
      </Link>

      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="navlink flex items-center gap-2">
                <span
                  className="h-[5px] w-[5px] shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/contact" className="btn-secondary px-5 py-2.5 text-[13.5px]">
        Contact <span aria-hidden="true">→</span>
      </Link>
    </header>
  );
}
