import {
  ArrowUpRight,
  Cpu,
  Eye,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";

export const metadata = {
  title: "About MedScale",
  description:
    "Learn how MedScale combines healthcare understanding with creative expertise to help med spas grow online.",
};

const missionVision = [
  {
    title: "Our Mission",
    description:
      "To empower healthcare brands with creative marketing solutions that build trust, strengthen digital presence, and support sustainable growth.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become a trusted creative partner for aesthetic healthcare businesses by delivering innovative, high-quality digital marketing solutions.",
    icon: Eye,
  },
];

function MissionVisionCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="card-depth group relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-slate-900/55 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1.5 hover:border-emerald-300/35 hover:bg-slate-900/75 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_26px_80px_rgba(16,185,129,0.1)] sm:p-9">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-cyan-400/[0.045] blur-[85px] transition-colors duration-500 group-hover:bg-emerald-300/[0.12]"
      />
      <div className="relative">
        <span className="grid size-12 place-items-center rounded-2xl border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_26px_rgba(16,185,129,0.1)] transition duration-300 group-hover:scale-105 group-hover:border-emerald-200/35 group-hover:bg-emerald-300/[0.14] group-hover:shadow-[0_0_32px_rgba(16,185,129,0.2)]">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </span>
        <h2 className="mt-7 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
          {item.title}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          {item.description}
        </p>
      </div>
    </article>
  );
}

const pillars = [
  {
    title: "Healthcare-Focused Expertise",
    description:
      "Unlike general agencies, our team understands medical terminology, patient communication, and industry expectations.",
    icon: Stethoscope,
  },
  {
    title: "Premium Creative Quality",
    description:
      "Every graphic, video, and campaign is designed to reflect the high standards of your med spa — quality builds trust.",
    icon: Sparkles,
  },
  {
    title: "AI-Powered Innovation",
    description:
      "We combine creativity with cutting-edge AI tools to produce content efficiently without sacrificing visual standards.",
    icon: Cpu,
  },
  {
    title: "Consistent Growth Strategy",
    description:
      "We develop strategies that increase brand awareness, build trust, and generate more appointment inquiries.",
    icon: TrendingUp,
  },
];

function PillarCard({ pillar }) {
  const Icon = pillar.icon;

  return (
    <article className="card-depth group relative h-full overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-slate-900/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1.5 hover:border-emerald-300/35 hover:bg-slate-900/75 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_26px_80px_rgba(16,185,129,0.1)] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 size-52 rounded-full bg-cyan-400/[0.045] blur-[80px] transition-colors duration-500 group-hover:bg-emerald-300/[0.12]"
      />
      <div className="relative">
        <span className="grid size-12 place-items-center rounded-2xl border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_26px_rgba(16,185,129,0.08)] transition duration-300 group-hover:scale-105 group-hover:border-emerald-200/35 group-hover:bg-emerald-300/[0.14] group-hover:shadow-[0_0_32px_rgba(16,185,129,0.18)]">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </span>
        <h3 className="mt-6 text-lg leading-snug font-semibold tracking-[-0.035em] text-white sm:text-xl">
          {pillar.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:leading-7">
          {pillar.description}
        </p>
      </div>
    </article>
  );
}

const impactMetrics = [
  { value: "6", label: "Social Platforms Managed" },
  { value: "8+", label: "Aesthetic Industries Served" },
  { value: "100%", label: "Healthcare-Focused Team" },
  { value: "4", label: "Step Proven Growth Process" },
];

export default function AboutPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative isolate min-h-screen overflow-x-clip bg-[var(--theme-page)] text-slate-100 selection:bg-emerald-300/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-56 left-[12%] size-[38rem] rounded-full bg-cyan-500/[0.09] blur-[145px]" />
        <div className="absolute top-[38%] -right-64 size-[40rem] rounded-full bg-emerald-500/[0.08] blur-[150px]" />
        <div className="absolute -bottom-72 left-[20%] size-[34rem] rounded-full bg-blue-700/[0.09] blur-[145px]" />
      </div>

      <section
        aria-labelledby="about-page-heading"
        className="px-5 pt-32 pb-8 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44"
      >
        <div className="mx-auto max-w-6xl text-center">
          <Reveal className="inline-flex">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.19em] text-emerald-200 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
            <Sparkles aria-hidden="true" className="size-3.5" />
            About MedScale
          </p>
          </Reveal>
          <Reveal delay={0.1}>
          <WordReveal
            as="h1"
            id="about-page-heading"
            className="mx-auto mt-7 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
            parts={[
              "Healthcare Marketing ",
              {
                text: "Designed for Med Spas",
                className:
                  "bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent",
              },
            ]}
          />
          </Reveal>
          <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            In today&apos;s competitive aesthetic industry, your online
            presence is often the first impression potential clients have of
            your practice. At MedScale, we combine healthcare understanding
            with creative expertise to produce content that reflects your
            professionalism and connects with your audience.
          </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Our mission and vision"
        className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {missionVision.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} scale>
              <MissionVisionCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="why-medscale-heading"
        className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-9 text-center sm:mb-12">
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase">
              Why Choose MedScale
            </p>
            <h2
              id="why-medscale-heading"
              className="mx-auto max-w-4xl text-3xl leading-tight font-semibold tracking-[-0.05em] text-white sm:text-5xl"
            >
              We Understand the Aesthetic Healthcare Industry
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.1} scale>
                <PillarCard pillar={pillar} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="MedScale impact"
        className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-white/[0.08] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl md:grid-cols-4 md:divide-y-0">
          {impactMetrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.08}
              className="flex min-h-32 flex-col items-center justify-center px-3 py-6 text-center sm:min-h-36 sm:px-5"
            >
              <p className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-3xl font-semibold tracking-[-0.06em] text-transparent sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 max-w-40 text-xs leading-5 text-slate-400 sm:text-sm">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="about-cta-heading"
        className="px-5 pb-20 sm:px-8 lg:px-12"
      >
        <Reveal scale className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-200/20 bg-gradient-to-br from-slate-900 via-[#0c171a] to-[#07100f] px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_100px_rgba(0,0,0,0.35),0_0_55px_rgba(16,185,129,0.08)] sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute -top-44 right-[8%] size-80 rounded-full bg-emerald-400/[0.12] blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-52 -left-20 size-72 rounded-full bg-cyan-500/[0.09] blur-[100px]"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2
                id="about-cta-heading"
                className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white sm:text-5xl"
              >
                Let&apos;s Grow Your Med Spa Together
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Book a free consultation and see how MedScale can help you
                attract more clients online.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(52,211,153,0.2)] transition duration-300 hover:scale-[1.03] hover:bg-emerald-200 hover:shadow-[0_0_40px_rgba(52,211,153,0.38)]"
            >
              Book a Free Consultation
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer showCallout={false} />
    </main>
  );
}
