"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/Magnetic";
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
];

function isActiveLink(label, pathname) {
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
    <header className="story-nav navbar-enter">
      <div className="story-nav__inner">
        <Link
          href="/"
          aria-label="MedScale home"
          className="story-nav__brand"
        >
          <BrandLogo />
        </Link>

        <nav aria-label="Primary navigation" className="story-nav__desktop">
          <ul>
            {links.map((link) => {
              const active = isActiveLink(link.label, pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "story-nav__link",
                      active && "story-nav__link--active",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="story-nav__actions">
          <Button
            variant="ghost"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={toggleTheme}
            className="story-nav__theme"
          >
            {theme === "dark" ? (
              <Sun aria-hidden="true" className="size-4" />
            ) : (
              <Moon aria-hidden="true" className="size-4" />
            )}
          </Button>
          <Magnetic className="story-nav__cta-wrap">
            <Link href="/contact" className="story-nav__cta">
              <span>Book Free Consultation</span>
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </Magnetic>
          <Button
            variant="ghost"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="story-nav__menu"
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
        className="story-nav__mobile"
      >
        <ul>
          {links.map((link) => {
            const active = isActiveLink(link.label, pathname);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "story-nav__mobile-link",
                    active && "story-nav__mobile-link--active",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="story-nav__mobile-cta">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Book Free Consultation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
