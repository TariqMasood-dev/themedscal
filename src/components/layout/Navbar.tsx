"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/ThemeProvider";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

function isActiveLink(label: string, pathname: string) {
  return (
    (label === "Home" && pathname === "/") ||
    (label === "Services" && pathname === "/services") ||
    (label === "About" && pathname === "/about") ||
    (label === "Process" && pathname === "/process") ||
    (label === "Testimonials" && pathname === "/testimonials") ||
    (label === "FAQ" && pathname === "/faq") ||
    (label === "Contact" && pathname === "/contact")
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar-enter absolute inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/20 text-white backdrop-blur-lg">
      <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-4 px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="MedScale home"
          className="group inline-flex shrink-0 items-center rounded-sm"
        >
          <BrandLogo />
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => {
              const active = isActiveLink(link.label, pathname);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-sm text-[0.78rem] font-medium transition-colors hover:text-emerald-200",
                      active ? "text-emerald-200" : "text-slate-300",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={toggleTheme}
            className="size-10 shrink-0 rounded-full border border-white/10 bg-white/[0.04] text-emerald-200 transition-colors hover:border-emerald-200/30 hover:bg-emerald-300/10 hover:text-emerald-100"
          >
            {theme === "dark" ? (
              <Sun aria-hidden="true" className="size-4.5" />
            ) : (
              <Moon aria-hidden="true" className="size-4.5" />
            )}
          </Button>
          <Link
            href="/contact"
            className="nav-cta group relative hidden items-center gap-2 overflow-hidden rounded-full bg-emerald-300 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_22px_rgba(52,211,153,0.22)] transition duration-300 hover:scale-[1.03] hover:bg-emerald-200 hover:shadow-[0_0_34px_rgba(52,211,153,0.4)] sm:inline-flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Book Free Consultation</span>
            <ArrowUpRight aria-hidden="true" className="relative size-4" />
          </Link>
          <Button
            variant="ghost"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="size-10 text-white hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </Button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile primary navigation"
        hidden={!isOpen}
        className={cn(
          "absolute inset-x-0 top-full border-b border-white/10 bg-[var(--theme-card)]/95 px-5 py-4 backdrop-blur-xl lg:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <ul className="mx-auto flex max-w-[90rem] flex-col">
          {links.map((link) => {
            const active = isActiveLink(link.label, pathname);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-3.5 text-sm transition-colors hover:bg-white/5 hover:text-emerald-200",
                    active
                      ? "bg-emerald-300/10 text-emerald-200"
                      : "text-slate-300",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2 sm:hidden">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-lg bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Book Free Consultation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
