import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";

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
      className="relative flex flex-col justify-center px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal
          as="dl"
          aria-label="MedScale at a glance"
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-4"
        >
          {metrics.map(({ value, label }, index) => (
            <Reveal
              as="div"
              key={label}
              delay={index * 0.08}
              className="bg-[var(--theme-page)]/90 px-5 py-6 backdrop-blur-xl sm:px-7 sm:py-8"
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

        <div className="mt-16 flex flex-col gap-4 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
              Trusted partner
            </p>
            <WordReveal
              as="h2"
              id="testimonials-heading"
              className="text-4xl leading-[1.07] font-semibold tracking-[-0.055em] text-white sm:text-6xl"
              parts={[
                "Trusted by Growing ",
                { text: "Med Spas", className: "text-slate-400" },
              ]}
            />
          </Reveal>
          <Reveal direction="right">
            <p className="pb-1 text-sm text-slate-400">
            The work speaks for itself.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {testimonials.map(({ quote, name }, index) => (
            <Reveal key={name} delay={index * 0.1} scale>
              <figure className="card-depth group relative flex min-h-64 h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.06] sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-16 size-48 rounded-full bg-emerald-300/[0.045] blur-[65px] transition-all duration-500 group-hover:bg-emerald-300/[0.12]"
              />
              <div className="relative flex items-center justify-between">
                <Quote
                  aria-hidden="true"
                  className="size-5 text-emerald-300/80"
                  strokeWidth={1.6}
                />
                <div
                  role="img"
                  aria-label="5 out of 5 stars"
                  className="flex gap-1 text-emerald-200"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="size-3.5 fill-current"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="relative mt-7 flex-1 text-sm leading-7 text-slate-300 sm:text-[0.95rem]">
                “{quote}”
              </blockquote>
              <figcaption className="relative mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-4">
                <span
                  aria-hidden="true"
                  className="grid size-9 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-[0.62rem] font-semibold text-emerald-200"
                >
                  {name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
                <span className="text-sm font-medium text-white">{name}</span>
              </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
