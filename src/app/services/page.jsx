import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Share2,
  Sparkles,
  Video,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SceneBackground } from "@/components/canvas/SceneBackground";

export const metadata = {
  title: "Services",
  description:
    "Explore MedScale's social media management, video editing, AI video generation, and healthcare content services for med spas.",
};

const services = [
  {
    badge: "Sm",
    title: "Social Media Management for Med Spas",
    description:
      "We make sure your brand appears consistently across Instagram, Facebook, and TikTok with high-quality content that educates, inspires, and builds trust.",
    bullets: [
      "Monthly Content Strategy",
      "Caption Writing & Hashtag Research",
      "Community Management & Reporting",
    ],
    icon: Share2,
  },
  {
    badge: "Vi",
    title: "Professional Video Editing",
    description:
      "We transform your raw footage into premium content optimized for Reels, TikTok, YouTube Shorts, and promotional videos.",
    bullets: [
      "Instagram Reels & TikTok",
      "Promotional & Educational Videos",
      "Edited to reflect your luxury experience",
    ],
    icon: Video,
  },
  {
    badge: "AI",
    title: "AI Video Generation",
    description:
      "Stand out with modern AI-powered videos designed specifically for aesthetic healthcare businesses.",
    bullets: [
      "Treatment Promotions & Campaigns",
      "Service Introductions",
      "Fast, premium visual identity",
    ],
    icon: Sparkles,
  },
  {
    badge: "Hc",
    title: "Healthcare Content Creation",
    description:
      "Healthcare marketing requires more than creativity — it requires understanding. We create content aligned with your brand's voice.",
    bullets: [
      "Accurate, compliant messaging",
      "Patient education content",
      "Consistent brand storytelling",
    ],
    icon: HeartPulse,
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <article className="card-depth group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-slate-900/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1.5 hover:border-emerald-300/35 hover:bg-slate-900/75 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_26px_80px_rgba(16,185,129,0.1)] focus-within:border-emerald-300/35 sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-20 size-64 rounded-full bg-cyan-400/[0.045] blur-[90px] transition-colors duration-500 group-hover:bg-emerald-300/[0.12]"
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_26px_rgba(16,185,129,0.08)] transition duration-300 group-hover:scale-105 group-hover:border-emerald-200/35 group-hover:bg-emerald-300/[0.14] group-hover:shadow-[0_0_32px_rgba(16,185,129,0.18)]">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
            </span>
            <span className="rounded-full border border-white/[0.09] bg-white/[0.04] px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-slate-300">
              {service.badge}
            </span>
          </div>
          <span className="text-xs tracking-[0.16em] text-slate-600">
            0{index} / 04
          </span>
        </div>

        <h2 className="mt-7 max-w-md text-2xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-[1.7rem]">
          {service.title}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-[0.95rem] sm:leading-7">
          {service.description}
        </p>

        <ul className="mt-6 grid gap-3 border-t border-white/[0.07] pt-5">
          {service.bullets.map((bullet, index) => (
            <Reveal
              as="li"
              key={bullet}
              delay={index * 0.06}
              className="flex items-start gap-3 text-sm leading-5 text-slate-300"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.65)]"
              />
              {bullet}
            </Reveal>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative isolate min-h-screen overflow-x-clip bg-[var(--theme-page)] text-slate-100 selection:bg-emerald-300/30"
    >
      <SceneBackground />
      <div className="relative z-10">
      <section
        aria-labelledby="services-page-heading"
        data-scene="services"
        className="relative isolate overflow-hidden px-5 pt-32 pb-6 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44"
      >
        <SectionBackground src="/images/services-hero-skincare.avif" />
        <div className="mx-auto max-w-6xl text-center">
          <Reveal className="inline-flex">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.19em] text-emerald-200 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Our Services
          </p>
          </Reveal>
          <Reveal delay={0.1}>
          <WordReveal
            as="h1"
            id="services-page-heading"
            className="mx-auto mt-7 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
            parts={[
              "Everything Your Med Spa Needs to ",
              {
                text: "Grow Online",
                className:
                  "bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent",
              },
            ]}
          />
          </Reveal>
          <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            From strategy to publish — social media management, video editing,
            and AI-powered content built specifically for aesthetic healthcare
            practices.
          </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="MedScale services"
        data-scene="services"
        className="relative isolate overflow-hidden px-0 pb-16 sm:pb-20"
      >
        <SectionBackground src="/images/services-grid-clinic-detail.webp" />
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1} scale>
            <ServiceCard
              service={service}
              index={String(index + 1)}
            />
            </Reveal>
          ))}
        </div>
        <div className="flex justify-center px-6">
          <Link
            href="/contact"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-md transition-colors hover:border-emerald-300/35 hover:bg-emerald-300/[0.07] hover:text-emerald-100"
          >
            Explore our approach
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="services-cta-heading"
        data-scene="services"
        className="relative isolate overflow-hidden px-5 pb-20 sm:px-8 lg:px-12"
      >
        <SectionBackground src="/images/services-cta-consultation.webp" />
        <Reveal scale className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-[#0c171a] to-[#07100f] px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_100px_rgba(0,0,0,0.35)] sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute -top-44 right-[8%] size-80 rounded-full bg-emerald-400/[0.1] blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-52 -left-20 size-72 rounded-full bg-cyan-500/[0.08] blur-[100px]"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase">
                Your next chapter starts here
              </p>
              <h2
                id="services-cta-heading"
                className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white sm:text-5xl"
              >
                Ready to Grow Your Med Spa?
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
      </div>
    </main>
  );
}
