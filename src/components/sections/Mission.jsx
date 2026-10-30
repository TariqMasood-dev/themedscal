import { ArrowUpRight, Eye, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

const principles = [
  {
    number: "01",
    title: "Our Mission",
    description:
      "To empower healthcare brands with creative marketing solutions that build trust, engage targets, and register scalable healthcare growth.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Our Vision",
    description:
      "To be the leading marketing partner for aesthetic healthcare business by deliver high-volume, high-quality digital marketing solutions.",
    icon: Eye,
  },
];

export function Mission() {
  return (
    <section
      id="about"
      aria-labelledby="mission-heading"
      className="story-mission"
    >
      <div className="story-wrap">
        <div className="story-mission__intro">
          <Reveal>
            <p className="story-eyebrow">A partner with purpose</p>
            <WordReveal
              as="h2"
              id="mission-heading"
              className="story-heading story-heading--dark"
              parts={[
                "Healthcare Marketing Designed for ",
                {
                  text: "Med Spas and Aesthetic Clinics",
                  className: "text-slate-400",
                },
              ]}
            />
          </Reveal>
          <Reveal direction="right">
            <p className="story-copy story-copy--dark">
              In today&apos;s competitive aesthetic industry, your online
              presence is often the first impression potential clients have of
              your practice. At MedScale, we combine world-class video editing
              with innovative, AI-driven content generation to help you build
              trust and educate your audience.
            </p>
          </Reveal>
        </div>

        <EditorialImage
          src="/images/mission-consultation.webp"
          alt="Clinician speaking with patients in a sunlit consultation room"
          className="story-mission__image"
          sizes="(max-width: 680px) 100vw, 75vw"
        />

        <div className="story-mission__principles">
          {principles.map(({ number, title, description, icon: Icon }, index) => (
            <Reveal
              as="article"
              key={title}
              delay={index * 0.12}
              className="story-principle"
            >
              <div className="story-principle__top">
                <span className="story-principle__label">{number} / PURPOSE</span>
                <Icon aria-hidden="true" className="story-principle__icon" strokeWidth={1.5} />
              </div>
              <h3>
                {title}
                <ArrowUpRight aria-hidden="true" className="ml-2 inline size-4" />
              </h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
