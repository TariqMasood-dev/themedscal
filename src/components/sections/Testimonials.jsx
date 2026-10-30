import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

const metrics = [
  { value: "6", label: "Social Platforms Managed" },
  { value: "8+", label: "Agency partners served" },
  { value: "100%", label: "Patient/Provider satisfaction" },
  { value: "4", label: "Key Case Studies Preview" },
];

const testimonials = [
  {
    quote:
      "The images finally matches the premium experience we deliver in the clinic. MedScale has made more noise and made sales easier to close.",
    name: "Spa Director",
  },
  {
    quote:
      "The team understands healthcare communication, they generate wonders, make the Case Study files accurate and on brand.",
    name: "Practice Manager",
  },
  {
    quote:
      "To get people excited to us, good consistency counts. We are very happy because they make high quality assets.",
    name: "Lead Injector",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="story-proof"
    >
      <div className="story-wrap">
        <Reveal
          as="dl"
          aria-label="MedScale at a glance"
          className="story-proof__metrics"
        >
          {metrics.map(({ value, label }, index) => (
            <Reveal
              as="div"
              key={label}
              delay={index * 0.08}
              className="story-metric"
            >
              <dd className="text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
                {value}
              </dd>
              <dt className="mt-2 max-w-40 text-xs leading-5 text-slate-400 sm:text-sm">
                {label}
              </dt>
            </Reveal>
          ))}
        </Reveal>

        <div className="story-testimonials__intro">
          <Reveal>
            <p className="story-eyebrow">Trusted partner</p>
            <WordReveal
              as="h2"
              id="testimonials-heading"
              className="story-heading story-testimonials__heading"
              parts={[
                "Trusted by Growing ",
                { text: "Med Spas", className: "text-emerald-200" },
              ]}
            />
          </Reveal>
          <Reveal direction="right">
            <p className="story-testimonials__note">The work speaks for itself.</p>
          </Reveal>
        </div>

        <div className="story-testimonials__body">
          <EditorialImage
            src="/images/home-testimonial-texture.webp"
            alt="Soft water ripples catching reflected light"
            className="story-testimonials__image"
          />
          <div className="story-testimonials__list">
            {testimonials.map(({ quote, name }, index) => (
              <Reveal
                as="figure"
                key={name}
                delay={index * 0.08}
                className="story-quote"
              >
                <Quote aria-hidden="true" className="story-quote__mark size-5" strokeWidth={1.6} />
                <div>
                  <div
                    role="img"
                    aria-label="5 out of 5 stars"
                    className="story-quote__rating"
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        aria-hidden="true"
                        className="size-3.5 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote>“{quote}”</blockquote>
                  <figcaption>
                    <span aria-hidden="true" className="story-quote__avatar">
                      {name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                    <span>{name}</span>
                  </figcaption>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
