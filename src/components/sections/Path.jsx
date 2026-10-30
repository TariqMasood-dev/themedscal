import { ArrowUpRight, Compass, FileVideo, Flag, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

const steps = [
  {
    title: "Discovery",
    description: "Full analysis on what you have, options, audience and goals.",
    icon: Compass,
  },
  {
    title: "Strategy",
    description: "We create a custom path visual tailored for you.",
    icon: Target,
  },
  {
    title: "Content Creation",
    description:
      "We design graphics, edit video, and produce AI customized content.",
    icon: FileVideo,
  },
  {
    title: "Results",
    description:
      "Deliver continuous brand impact, tracking optimization to support long-term goals.",
    icon: Flag,
  },
];

export function Path() {
  return (
    <section
      id="process"
      aria-labelledby="path-heading"
      className="story-process"
    >
      <div className="story-wrap story-process__layout">
        <EditorialImage
          src="/images/home-process-hallway.webp"
          alt="Quiet spa corridor with soft daylight and natural textures"
          className="story-process__image"
        />
        <div>
          <Reveal>
            <p className="story-eyebrow">The process</p>
          <WordReveal
            as="h2"
            id="path-heading"
            className="story-heading story-heading--dark story-process__heading"
            parts={[
              "A Simple Path to a ",
              { text: "Stronger Online Presence", className: "text-emerald-800" },
            ]}
          />
          </Reveal>
          <div className="story-process__rule" aria-hidden="true" />
          <ol className="story-process__steps">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <Reveal
                as="li"
                key={title}
                delay={0.08 + index * 0.06}
                className="story-step"
              >
                <span className="story-step__index">0{index + 1}</span>
                <Icon aria-hidden="true" className="ml-2 inline size-4 text-emerald-800" strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{description}</p>
              </Reveal>
            ))}
          </ol>
          <a href="#services" className="story-process__link">
            Discover how we make it happen
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
