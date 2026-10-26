import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { LazyFaqAccordion } from "@/components/sections/LazyFaqAccordion";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { WordReveal } from "@/components/ui/WordReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SceneBackground } from "@/components/canvas/SceneBackground";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the questions Med Spa owners ask us most often about MedScale's marketing services.",
};

const faqItems = [
  {
    question: "Do you work only with Med Spas?",
    answer:
      "Our primary focus is Med Spas and aesthetic healthcare practices, allowing us to create industry-specific content and marketing strategies.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "We manage Instagram, Facebook, and TikTok, with content adapted to each platform's format and audience.",
  },
  {
    question: "Can you edit videos we record in our clinic?",
    answer:
      "Yes - send us your raw clinic footage and we'll edit it into premium, on-brand content for Reels, TikTok, and YouTube Shorts.",
  },
  {
    question: "Do you create AI-generated promotional videos?",
    answer:
      "Yes, we produce AI-powered videos for treatment promotions, campaigns, and service introductions, tailored to your brand.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No - we work on a flexible, month-to-month basis with no long-term lock-in required.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Most clients start seeing improved engagement within the first 4-6 weeks, with steady growth continuing month over month.",
  },
];

export default function FaqPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative isolate min-h-screen overflow-x-clip text-slate-100 selection:bg-emerald-300/30"
    >
      <SceneBackground />
      <div className="relative z-10">
      <section
        aria-labelledby="faq-page-heading"
        data-scene="faq"
        className="relative isolate overflow-hidden px-5 pt-32 pb-4 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44"
      >
        <SectionBackground src="/images/faq-hero-water-light.avif" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="inline-flex">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.19em] text-emerald-200 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Got Questions
          </p>
          </Reveal>
          <Reveal delay={0.1}>
          <WordReveal
            as="h1"
            id="faq-page-heading"
            className="mx-auto mt-7 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
            parts={[
              "Frequently Asked ",
              {
                text: "Questions",
                className:
                  "bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent",
              },
            ]}
          />
          </Reveal>
          <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Answers to the questions Med Spa owners ask us most often.
          </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Frequently asked questions"
        data-scene="faq"
        className="relative isolate overflow-hidden px-0 pb-16 sm:pb-20"
      >
        <SectionBackground src="/images/faq-content-serene-room.webp" />
        <Reveal className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <LazyFaqAccordion items={faqItems} />
        </Reveal>
      </section>

      <section
        aria-labelledby="faq-cta-heading"
        data-scene="faq"
        className="relative isolate overflow-hidden px-5 pb-20 sm:px-8 lg:px-12"
      >
        <SectionBackground src="/images/faq-cta-consultation.webp" />
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
                id="faq-cta-heading"
                className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white sm:text-5xl"
              >
                Still Have Questions?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Book a free consultation and we&apos;ll walk you through exactly
                how MedScale can help.
              </p>
            </div>
            <Magnetic className="shrink-0">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(52,211,153,0.2)] transition duration-300 hover:bg-emerald-200 hover:shadow-[0_0_40px_rgba(52,211,153,0.38)]"
              >
                Book a Free Consultation
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      <Footer showCallout={false} />
      </div>
    </main>
  );
}
