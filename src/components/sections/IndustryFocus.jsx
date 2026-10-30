import {
  BadgeCheck,
  Fingerprint,
  HeartPulse,
  ScanFace,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

const strengths = [
  {
    title: "Med-Spa & Aesthetic-Focus Title",
    description:
      "All other advertising agency run generic campaigns. At MedScale, we focus only on aesthetics...",
    icon: HeartPulse,
  },
  {
    title: "Practice Focus on Quality",
    description:
      "Find a platform video and visual is not easy... We give you the high-resolution files you need to look reliable.",
    icon: BadgeCheck,
  },
  {
    title: "No Generic Automation",
    description:
      "We make the visual looks native and custom for your clinic... we build your target persona standards.",
    icon: Fingerprint,
  },
  {
    title: "Premium Visual Branding",
    description:
      "The display of digital design visualizes brand awareness, trust, tone, and generate more reservation from clients.",
    icon: ScanFace,
  },
];

export function IndustryFocus() {
  return (
    <section
      aria-labelledby="industry-heading"
      className="story-industry"
    >
      <EditorialImage
        src="/images/industry-clinic-detail.webp"
        alt="Modern aesthetic treatment room with clean clinical equipment"
        className="story-industry__image"
      />
      <div className="story-wrap">
        <div className="story-industry__intro">
          <Reveal>
            <p className="story-eyebrow">A different kind of partner</p>
            <WordReveal
              as="h2"
              id="industry-heading"
              className="story-heading story-industry__heading"
              parts={[
                "We Understand the Aesthetic ",
                { text: "Healthcare Industry", className: "story-hero__accent" },
              ]}
            />
            <p className="story-industry__description">
              Your practice deserves creative that understands the care behind
              every result.
            </p>
          </Reveal>
        </div>

        <div className="story-industry__grid">
          {strengths.map(({ title, description, icon: Icon }, index) => (
            <Reveal
              as="article"
              key={title}
              delay={index * 0.08}
              className="story-industry-card"
            >
              <Icon aria-hidden="true" className="story-industry-card__icon size-5" />
              <span className="story-industry-card__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
