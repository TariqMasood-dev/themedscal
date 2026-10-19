import {
  BadgeCheck,
  Fingerprint,
  HeartPulse,
  ScanFace,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
] as const;

export function IndustryFocus() {
  return (
    <section
      aria-labelledby="industry-heading"
      className="relative flex flex-col justify-center px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
              A different kind of partner
            </p>
            <h2
              id="industry-heading"
              className="text-4xl leading-[1.07] font-semibold tracking-[-0.055em] text-white sm:text-6xl"
            >
              We Understand the Aesthetic{" "}
              <span className="text-slate-400">Healthcare Industry</span>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <p className="max-w-sm text-sm leading-6 text-slate-400">
            Your practice deserves creative that understands the care behind
            every result.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <article className="group relative min-h-64 h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition duration-500 hover:scale-[1.025] hover:border-emerald-300/30 hover:bg-white/[0.055]">
              <div
                aria-hidden="true"
                className="absolute -right-16 -bottom-20 size-48 rounded-full bg-cyan-400/[0.04] blur-[65px] transition-colors group-hover:bg-emerald-300/[0.11]"
              />
              <div className="relative flex h-full flex-col">
                <span className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-emerald-200 transition-all group-hover:border-emerald-300/20 group-hover:bg-emerald-300/10">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-[0.65rem] tracking-[0.15em] text-slate-600">
                    0{index + 1}
                  </span>
                </span>
                <h3 className="mt-auto pt-12 text-lg leading-snug font-medium text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
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
