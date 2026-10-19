"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { BrandLogo } from "@/components/layout/BrandLogo";

const footerLinks = [
  { href: "/#home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

interface FooterProps {
  showCallout?: boolean;
}

export function Footer({ showCallout = true }: FooterProps) {
  const pathname = usePathname();

  return (
    <footer
      id="contact"
      className="relative flex flex-col justify-between overflow-hidden bg-black px-5 py-16 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-20rem] left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.12] blur-[150px]"
      />
      <div className="relative mx-auto w-full max-w-[90rem]">
        {showCallout && (
          <Reveal
            scale
            className="flex flex-col items-start justify-between gap-7 border-b border-white/10 pb-12 sm:flex-row sm:items-end sm:pb-14"
          >
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
                Your next chapter starts here
              </p>
              <h2 className="max-w-3xl text-4xl leading-[1.04] font-semibold tracking-[-0.055em] text-white sm:text-6xl">
                Ready to Grow Your Med Spa?
              </h2>
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex min-h-12 shrink-0 items-center gap-2 overflow-hidden rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(52,211,153,0.2)] transition duration-300 hover:scale-[1.03] hover:bg-emerald-200 hover:shadow-[0_0_42px_rgba(52,211,153,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Book a Free Consultation</span>
              <ArrowUpRight aria-hidden="true" className="relative size-4" />
            </Link>
          </Reveal>
        )}

        <Reveal
          className={`grid gap-10 md:grid-cols-[1fr_1.4fr_1fr] md:gap-12 ${
            showCallout ? "py-10" : "pt-4"
          }`}
        >
          <Reveal delay={0.05}>
            <Link
              href="/"
              aria-label="MedScale home"
              className="inline-flex items-center rounded-sm"
            >
              <BrandLogo />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Thoughtful content for the people behind better care.
            </p>
          </Reveal>

          <Reveal as="nav" delay={0.12} aria-label="Footer navigation">
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-slate-300 uppercase">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={
                      (link.label === "About" && pathname === "/about") ||
                      (link.label === "Process" && pathname === "/process") ||
                      (link.label === "Testimonials" &&
                        pathname === "/testimonials") ||
                      (link.label === "FAQ" && pathname === "/faq") ||
                      (link.label === "Contact" && pathname === "/contact") ||
                      (link.label === "Services" && pathname === "/services")
                        ? "page"
                        : undefined
                    }
                    className={`text-sm transition-colors hover:text-emerald-200 ${
                      (link.label === "About" && pathname === "/about") ||
                      (link.label === "Process" && pathname === "/process") ||
                      (link.label === "Testimonials" &&
                        pathname === "/testimonials") ||
                      (link.label === "FAQ" && pathname === "/faq") ||
                      (link.label === "Contact" && pathname === "/contact") ||
                      (link.label === "Services" && pathname === "/services")
                        ? "font-medium text-emerald-200"
                        : "text-slate-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-slate-300 uppercase">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:shoaib@themedscale.com"
                  className="transition-colors hover:text-emerald-200"
                >
                  shoaib@themedscale.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923392106075"
                  className="transition-colors hover:text-emerald-200"
                >
                  +92 3392106075
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-200 transition-colors hover:text-emerald-100"
            >
              Book a Free Consultation
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </Reveal>

        <Reveal
          scale
          className="flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© 2026 MedScale. All rights reserved.</p>
          <p>Made for aesthetic healthcare.</p>
        </Reveal>
      </div>
    </footer>
  );
}
