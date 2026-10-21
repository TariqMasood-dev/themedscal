import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";

export const metadata = {
  title: "Our Process",
  description:
    "See how MedScale takes your med spa from discovery to a consistent, measurable online presence.",
};

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We learn about your med spa, services, audience, and goals through an in-depth onboarding call.",
  },
  {
    number: "2",
    title: "Strategy",
    description:
      "We create a customized content and marketing plan tailored to your practice and patient base.",
  },
  {
    number: "3",
    title: "Content Creation",
    description:
      "We design graphics, edit videos, and produce AI-powered content aligned with your brand.",
  },
  {
    number: "4",
    title: "Growth",
    description:
      "We help maintain a consistent presence that supports long-term, sustainable growth.",
  },
];

function ProcessStepCard({ step, index }) {
  return (
    <Reveal
      as="li"
      delay={index * 0.1}
      scale
      className="group relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
    >
      <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-emerald-200/35 bg-slate-950 text-lg font-semibold text-emerald-200 shadow-[0_0_28px_rgba(52,211,153,0.16)] transition duration-300 group-hover:scale-110 group-hover:border-emerald-100/70 group-hover:bg-emerald-300/10 group-hover:shadow-[0_0_38px_rgba(52,211,153,0.3)] md:size-14">
        {step.number}
      </span>
      <div className="pb-2 transition duration-300 group-hover:translate-y-[-2px] md:pt-7">
        <h3 className="text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
          {step.title}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400 sm:text-[0.95rem] sm:leading-7">
          {step.description}
        </p>
      </div>
    </Reveal>
  );
}

const guarantees = [
  {
    title: "Clear Communication",
    description:
      "Regular check-ins and updates so you always know your project status.",
    icon: MessageCircle,
  },
  {
    title: "On-Time Delivery",
    description:
      "Content delivered on a predictable monthly schedule you can rely on.",
    icon: CalendarCheck,
  },
  {
    title: "Measurable Results",
    description:
      "Reporting that shows engagement, reach, and growth month over month.",
    icon: TrendingUp,
  },
];

function GuaranteeCard({ guarantee }) {
  const Icon = guarantee.icon;

  return (
    <article className="card-depth group relative h-full overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-slate-900/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1.5 hover:border-emerald-300/35 hover:bg-slate-900/75 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_26px_80px_rgba(16,185,129,0.1)] sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 size-52 rounded-full bg-cyan-400/[0.045] blur-[80px] transition-colors duration-500 group-hover:bg-emerald-300/[0.12]"
      />
      <div className="relative">
        <span className="grid size-12 place-items-center rounded-2xl border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_26px_rgba(16,185,129,0.08)] transition duration-300 group-hover:scale-105 group-hover:border-emerald-200/35 group-hover:bg-emerald-300/[0.14] group-hover:shadow-[0_0_32px_rgba(16,185,129,0.18)]">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </span>
        <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-white">
          {guarantee.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-[0.95rem] sm:leading-7">
          {guarantee.description}
        </p>
      </div>
    </article>
  );
}

export default function ProcessPage() {
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
        aria-labelledby="process-page-heading"
        className="px-5 pt-32 pb-8 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44"
      >
        <div className="mx-auto max-w-6xl text-center">
          <Reveal className="inline-flex">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.19em] text-emerald-200 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Our Process
          </p>
          </Reveal>
          <Reveal delay={0.1}>
          <WordReveal
            as="h1"
            id="process-page-heading"
            className="mx-auto mt-7 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
            parts={[
              "A Simple Path to a ",
              {
                text: "Stronger Online Presence",
                className:
                  "bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent",
              },
            ]}
          />
          </Reveal>
          <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A clear, collaborative process so you always know what&apos;s
            happening with your marketing - from first call to consistent
            monthly growth.
          </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Our four-step process"
        className="px-0 pb-16 sm:pb-20"
      >
        <ol className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 before:absolute before:top-[4.5rem] before:bottom-24 before:left-12 before:w-px before:bg-gradient-to-b before:from-emerald-300/50 before:via-teal-300/20 before:to-transparent md:grid-cols-4 md:gap-8 md:py-16 md:before:top-[calc(4rem+1.75rem)] md:before:right-[11.5%] md:before:bottom-auto md:before:left-[11.5%] md:before:h-px md:before:w-auto md:before:bg-gradient-to-r md:before:from-emerald-300/10 md:before:via-emerald-300/50 md:before:to-cyan-300/10 md:before:shadow-[0_0_16px_rgba(52,211,153,0.3)]">
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="expectations-heading"
        className="px-5 pb-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-9 text-center sm:mb-12">
            <h2
              id="expectations-heading"
              className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white sm:text-5xl"
            >
              What You Can Expect Along the Way
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {guarantees.map((guarantee, index) => (
              <Reveal key={guarantee.title} delay={index * 0.1}>
                <GuaranteeCard guarantee={guarantee} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="process-cta-heading"
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
                id="process-cta-heading"
                className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white sm:text-5xl"
              >
                Ready to Start Your Growth Journey?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Book a free consultation and let&apos;s map out your custom
                content plan.
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
