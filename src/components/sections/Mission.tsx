import { ArrowUpRight, Eye, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
] as const;

export function Mission() {
  return (
    <section
      id="about"
      aria-labelledby="mission-heading"
      className="relative flex flex-col justify-center px-6 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
              <span className="h-px w-8 bg-emerald-300/70" />
              A partner with purpose
            </p>
            <h2
              id="mission-heading"
              className="max-w-3xl text-4xl leading-[1.06] font-semibold tracking-[-0.055em] text-white sm:text-6xl"
            >
              Healthcare Marketing Designed for{" "}
              <span className="text-slate-400">
                Med Spas and Aesthetic Clinics
              </span>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            In today&apos;s competitive aesthetic industry, your online
            presence is often the first impression potential clients have of
            your practice. At MedScale, we combine world-class video editing
            with innovative, AI-driven content generation to help you build
            trust and educate your audience.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {principles.map(({ number, title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.12}>
            <article
              className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.055] sm:p-9"
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -bottom-24 size-56 rounded-full bg-emerald-400/[0.07] blur-[70px] transition-colors group-hover:bg-emerald-400/[0.14]"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.18em] text-emerald-300">
                    {number} / PURPOSE
                  </span>
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-slate-400 transition-colors group-hover:text-emerald-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-12 flex items-center gap-2 text-2xl font-medium tracking-tight text-white">
                  {title}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 -translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  {description}
                </p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
