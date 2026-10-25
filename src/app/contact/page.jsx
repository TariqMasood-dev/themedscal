import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  Phone,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { WordReveal } from "@/components/ui/WordReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SceneBackground } from "@/components/canvas/SceneBackground";
import { LazyContactForm } from "./LazyContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Tell MedScale about your med spa and goals. We'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative isolate min-h-screen overflow-x-clip bg-[var(--theme-page)] text-slate-100 selection:bg-emerald-300/30"
    >
      <SceneBackground />
      <div className="relative z-10">
      <section
        aria-labelledby="contact-page-heading"
        data-scene="contact"
        className="relative isolate overflow-hidden px-5 pt-32 pb-5 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44"
      >
        <SectionBackground src="/images/contact-hero-clinic.webp" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="inline-flex">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.19em] text-emerald-200 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Get in Touch
          </p>
          </Reveal>
          <Reveal delay={0.1}>
          <WordReveal
            as="h1"
            id="contact-page-heading"
            className="mx-auto mt-7 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
            parts={[
              "Let's Grow Your ",
              {
                text: "Med Spa Together",
                className:
                  "bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent",
              },
            ]}
          />
          </Reveal>
          <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Tell us about your practice and we&apos;ll get back to you within
            one business day.
          </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Contact MedScale"
        data-scene="contact"
        className="relative isolate overflow-hidden px-0 pb-16 sm:pb-20"
      >
        <SectionBackground src="/images/contact-form-room-detail.avif" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-12 lg:grid-cols-12 lg:gap-8">
          <Reveal direction="left" className="lg:col-span-7">
          <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_22px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
            <LazyContactForm />
          </div>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-5">
          <aside className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_22px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                Contact Information
              </h2>
              <div className="mt-8 grid gap-6">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,0.08)]">
                    <Mail aria-hidden="true" className="size-4.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-emerald-300 uppercase">
                      Email
                    </p>
                    <a
                      href="mailto:info@themedscale.com"
                      className="mt-1.5 inline-block break-all text-sm text-slate-200 transition-colors hover:text-emerald-200"
                    >
                      info@themedscale.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,0.08)]">
                    <Phone aria-hidden="true" className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-emerald-300 uppercase">
                      Phone
                    </p>
                    <a
                      href="tel:+923392106075"
                      className="mt-1.5 inline-block text-sm text-slate-200 transition-colors hover:text-emerald-200"
                    >
                      +92 339 2106075
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,0.08)]">
                    <Clock3 aria-hidden="true" className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-emerald-300 uppercase">
                      Response Time
                    </p>
                    <p className="mt-1.5 text-sm text-slate-200">
                      Within 1 business day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,0.08)]">
                    <Stethoscope aria-hidden="true" className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-emerald-300 uppercase">
                      Focus
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-200">
                      Med Spas &amp; Aesthetic Healthcare Practices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 border-t border-slate-800 pt-6 text-sm leading-7 text-slate-400">
              No long-term contracts. No generic templates. Just
              healthcare-focused marketing that works.
            </p>
          </aside>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="contact-cta-heading"
        data-scene="contact"
        className="relative isolate overflow-hidden px-5 pb-20 sm:px-8 lg:px-12"
      >
        <SectionBackground src="/images/contact-cta-consultation.webp" />
        <Reveal scale className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-200/20 bg-gradient-to-br from-slate-900 via-[#0c171a] to-[#07100f] px-6 py-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_100px_rgba(0,0,0,0.35),0_0_55px_rgba(16,185,129,0.08)] sm:px-12 sm:py-14">
          <div
            aria-hidden="true"
            className="absolute -top-44 left-1/2 size-80 -translate-x-1/2 rounded-full bg-emerald-400/[0.12] blur-[100px]"
          />
          <div className="relative">
            <h2
              id="contact-cta-heading"
              className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white sm:text-5xl"
            >
              Prefer to Talk First?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Book a free consultation call and let&apos;s discuss your goals
              directly.
            </p>
            <Magnetic className="mt-7">
              <Link
                href="/contact#contact-form"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(52,211,153,0.2)] transition duration-300 hover:bg-emerald-200 hover:shadow-[0_0_40px_rgba(52,211,153,0.38)]"
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
