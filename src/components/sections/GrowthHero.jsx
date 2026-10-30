"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WordReveal } from "@/components/ui/WordReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";
import "./growth-hero.css";

export function GrowthHero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="growth-hero"
    >
      <EditorialImage
        src="/images/hero-treatment-suite.webp"
        alt="Sunlit med spa treatment suite with a modern treatment bed"
        className="story-hero__image"
        priority
        reveal={false}
        sizes="100vw"
      />
      <div className="story-hero__layout">
        <Reveal className="growth-hero__copy">
          <div className="story-eyebrow">Med spa growth partner</div>
          <WordReveal
            as="h1"
            id="hero-heading"
            className="story-heading story-hero__title"
            parts={[
              "Turn Attention Into ",
              { text: "Appointments.", className: "story-hero__accent" },
            ]}
          />
          <p className="story-hero__description">
            ThemedScale helps med spas earn attention, start meaningful
            conversations, and make booking the natural next step.
          </p>
          <div className="story-hero__actions">
            <Magnetic className="growth-hero__cta-wrap">
              <Link href="/contact" className="story-button story-button--solid">
                Let&apos;s Grow Your Med Spa
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </Magnetic>
            <a href="#process" className="story-button story-button--quiet">
              See How It Works
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="story-hero__services" aria-label="Services">
            <span>Social strategy</span>
            <span>Video editing</span>
            <span>AI video</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}