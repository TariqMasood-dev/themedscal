import { ArrowUpRight, Check, Compass, FileVideo, Flag, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";

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
      data-scene="process"
      aria-labelledby="path-heading"
      className="relative isolate flex flex-col justify-center overflow-hidden px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <SectionBackground src="/images/home-process-hallway.webp" />
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
            The process
          </p>
          <WordReveal
            as="h2"
            id="path-heading"
            className="text-4xl leading-[1.07] font-semibold tracking-[-0.055em] text-white sm:text-6xl"
            parts={[
              "A Simple Path to a ",
              { text: "Stronger Online Presence", className: "text-slate-400" },
            ]}
          />
        </Reveal>

        <div className="relative mt-16">
          <Reveal
            aria-hidden
            className="absolute top-8 right-[12%] left-[12%] hidden h-px origin-left scale-x-100 bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent lg:block"
            delay={0.15}
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <Reveal
                as="li"
                key={title}
                delay={0.1 + index * 0.1}
                className="group relative"
              >
                <div className="relative z-10 grid size-16 place-items-center rounded-full border border-emerald-200/20 bg-[var(--theme-page)] text-emerald-200 shadow-[0_0_36px_rgba(16,185,129,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-200/50 group-hover:bg-emerald-300 group-hover:text-slate-950 group-hover:shadow-[0_0_45px_rgba(52,211,153,0.3)]">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.6}
                  />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.16em] text-emerald-300">
                    0{index + 1}
                  </span>
                  <span aria-hidden="true" className="h-px w-8 bg-white/15" />
                  <Check
                    aria-hidden="true"
                    className="size-3.5 text-slate-600 transition-colors group-hover:text-emerald-300"
                  />
                </div>
                <h3 className="mt-3 text-xl font-medium text-white">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        <a
          href="#services"
          className="group mt-14 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-200"
        >
          Discover how we make it happen
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
}
