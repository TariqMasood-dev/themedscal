import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { EditorialImage } from "@/components/ui/EditorialImage";

const footerLinks = [
  { href: "/#home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer({ showCallout = true }) {
  return (
    <footer
      id="contact"
      className="story-footer"
    >
      {showCallout && (
        <div className="story-footer__banner">
          <EditorialImage
            src="/images/footer-spa-reception.webp"
            alt="Sunlit spa reception with natural textures"
            className="story-footer__image"
            reveal={false}
          />
          <Reveal className="story-footer__callout">
            <div>
              <p className="story-eyebrow">
                Your next chapter starts here
              </p>
              <h2 className="story-heading story-footer__heading">
                Ready to Grow Your Med Spa?
              </h2>
            </div>
            <Magnetic className="story-footer__cta-wrap">
              <Link
                href="/contact"
                className="story-button story-button--solid"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      )}

      <Reveal className="story-footer__layout">
        <div className="story-footer__brand">
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

        </div>
        <Reveal as="nav" delay={0.12} aria-label="Footer navigation">
            <p className="story-footer__group-title">
              Quick Links
            </p>
            <ul className="story-footer__links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
        </Reveal>

        <Reveal delay={0.2} className="story-footer__contact">
            <p className="story-footer__group-title">
              Contact
            </p>
            <ul>
              <li>
                <a href="mailto:shoaib@themedscale.com">
                  shoaib@themedscale.com
                </a>
              </li>
              <li>
                <a href="tel:+923392106075">
                  +92 3392106075
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="story-footer__contact-cta"
            >
              Book a Free Consultation
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </Link>
        </Reveal>
      </Reveal>

      <Reveal scale className="story-footer__legal">
        <p>© 2026 MedScale. All rights reserved.</p>
        <p>Made for aesthetic healthcare.</p>
      </Reveal>
    </footer>
  );
}
