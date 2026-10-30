import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  Megaphone,
  Palette,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "We make sure your brands appear consistently across Instagram, Facebook, and TikTok with high quality content that educates, informs, and builds trust.",
    bullets: [
      "Facebook technologies (META) ads",
      "Creative Content Strategy",
      "Copywriting & Writing Resource",
      "Full Social Media Management",
    ],
    icon: Megaphone,
    index: "01",
  },
  {
    title: "Healthcare: Content Creation",
    description:
      "Healthcare marketing is more than creativity — it requires understanding the medical context and what is your brand's voice.",
    bullets: [
      "Scenario variable custom",
      "Patient attraction content",
      "Standard visual and feeling",
    ],
    icon: Palette,
    index: "02",
  },
  {
    title: "Professional Video Editing",
    description:
      "We transform your raw footage and ideas into premium video content for facebook and instagram Reels, TikTok, YouTube Shorts, and promotional videos.",
    bullets: [
      "Short-form & Educational Videos",
      "Edit & refine raw video footage",
      "Focus on Hook & Story",
    ],
    icon: Clapperboard,
    index: "03",
  },
  {
    title: "AI Video Generation",
    description:
      "Here are the new brand's tools to scale your content production for abstract, tech & clinic promotion.",
    bullets: [
      "AI-driven customized clips, audio, and social teaser",
      "Engage audiences via text, voice, and visual assets",
      "Create diverse advertising templates, scale visual push",
      "Rapid adaptation, & customize visuals components",
      "Tailored platform upload with premium editing",
    ],
    icon: Bot,
    index: "04",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="story-services"
    >
      <div className="story-wrap">
        <div className="story-services__intro">
          <Reveal>
            <p className="story-eyebrow">
              <Sparkles aria-hidden="true" className="size-3.5" />
              Our Services
            </p>
            <WordReveal
              as="h2"
              id="services-heading"
              className="story-heading story-services__heading"
              parts={[
                "Everything Your Med Spa and Aesthetic Clinic Need to ",
                { text: "Grow Online", className: "text-emerald-200" },
              ]}
            />
            <p className="story-copy">
              From strategy to execution — watch content expand online,
              including: video, editing, and content creation... custom built
              specifically for premium healthcare practices.
            </p>
          </Reveal>
          <EditorialImage
            src="/images/home-services-skincare.webp"
            alt="Skincare products arranged on a natural stone surface"
            className="story-services__image"
          />
        </div>

        <div className="story-services__list">
          {services.map(({ title, description, bullets, icon: Icon, index }) => (
            <Reveal
              as="article"
              key={title}
              delay={Number(index) * 0.08}
              className="story-service"
            >
              <div>
                <span className="story-service__icon">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                </span>
                <span className="story-service__index">{index} / 04</span>
              </div>
              <div className="story-service__content">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="story-service__bullets">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div>
          <Link
            href="/services"
            className="story-services__link"
          >
            Explore All Services
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
