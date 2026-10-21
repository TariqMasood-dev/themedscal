import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ChartNoAxesCombined,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { Parallax } from "@/components/ui/Parallax";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="relative z-10">
          <Reveal className="mb-7 inline-flex max-w-full">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3.5 py-2 text-[0.62rem] leading-5 font-semibold tracking-[0.14em] text-emerald-100 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:text-xs">
            <span className="text-base" aria-hidden="true">
              ⚡
            </span>
            Trusted digital partner for med spas and aesthetic clinics
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <WordReveal
              as="h1"
              id="hero-heading"
              className="max-w-3xl text-[clamp(2.7rem,6.2vw,5.7rem)] leading-[0.99] font-semibold tracking-[-0.065em] text-white"
              parts={[
                "Grow Your Med Spa and Aesthetic Clinic with ",
                {
                  text: "Content That Attracts More Clients",
                  className:
                    "bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent",
                },
              ]}
            />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            At MedScale, we help Med Spas and Aesthetic Clinics build a stronger
            online presence through strategic, Social Media Marketing,
            professional Video Editing, and AI Video Generation — content that
            builds trust and makes your practice attract more client voices.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(52,211,153,0.24)] transition duration-300 hover:bg-emerald-200 hover:shadow-[0_0_38px_rgba(52,211,153,0.42)] sm:w-auto"
              >
                Book a Free Consultation
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Magnetic>
            <a
              href="#testimonials"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/[0.08]"
            >
              See Our Case Studies
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-3 text-xs text-slate-400">
            <span className="flex -space-x-2">
              <span className="size-7 rounded-full border-2 border-slate-950 bg-gradient-to-br from-emerald-200 to-emerald-700" />
              <span className="size-7 rounded-full border-2 border-slate-950 bg-gradient-to-br from-cyan-200 to-blue-700" />
              <span className="size-7 rounded-full border-2 border-slate-950 bg-gradient-to-br from-rose-200 to-orange-700" />
            </span>
            Built for the people behind better care
            <Sparkles
              aria-hidden="true"
              className="size-3.5 text-emerald-300"
            />
            </div>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          className="relative mx-auto flex min-h-[27rem] w-full max-w-[38rem] items-center justify-center sm:min-h-[34rem]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-[12%] rounded-full bg-emerald-400/10 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="absolute top-[10%] left-[8%] size-2 transform-gpu rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)] motion-safe:animate-[medscale-pulse_3s_ease-in-out_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute right-[7%] bottom-[16%] size-1.5 transform-gpu rounded-full bg-emerald-200 shadow-[0_0_16px_rgba(110,231,183,0.9)] motion-safe:animate-[medscale-pulse_4s_ease-in-out_infinite]"
          />

          <Parallax className="relative w-[min(100%,31rem)] rotate-[-3deg] transform-gpu rounded-[2rem] border border-white/10 bg-slate-900/65 p-3 shadow-[0_35px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform duration-700 hover:rotate-0 sm:p-4">
            <div className="overflow-hidden rounded-[1.45rem] border border-white/[0.07] bg-[#0c1518]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.7)]" />
                  <span className="text-xs font-medium text-slate-200">
                    MedScale Studio
                  </span>
                </div>
                <span className="text-[0.65rem] tracking-[0.14em] text-slate-500 uppercase">
                  Campaign preview
                </span>
              </div>

              <div className="group relative aspect-[1.13/1] overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_34%,rgba(132,204,194,0.68),transparent_34%),radial-gradient(ellipse_at_52%_96%,rgba(14,116,110,0.8),transparent_60%),linear-gradient(145deg,#173133_0%,#142425_42%,#080d11_100%)] transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-[18%] top-[15%] h-[65%] rounded-[45%_45%_25%_25%] border border-white/10 bg-gradient-to-b from-white/20 via-emerald-100/10 to-slate-950/40 blur-[1px] shadow-[0_0_65px_rgba(110,231,183,0.13)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-[32%] top-[26%] h-[45%] rounded-[48%_48%_42%_42%] bg-gradient-to-b from-[#e4cbbf]/60 via-[#9ca49a]/40 to-[#233b39]/75 blur-[1.5px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-black/5"
                />
                <span className="absolute top-5 left-5 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[0.62rem] font-medium tracking-[0.12em] text-white/80 uppercase backdrop-blur-md">
                  Aesthetic in focus
                </span>
                <span className="absolute right-5 bottom-5 left-5">
                  <span className="block text-[0.62rem] tracking-[0.16em] text-emerald-200 uppercase">
                    Your next story
                  </span>
                  <span className="mt-1 block text-lg font-medium tracking-tight text-white">
                    Confidence, captured.
                  </span>
                </span>
              </div>

              <div className="p-3 sm:p-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-[0.65rem] text-slate-300">
                      <ChartNoAxesCombined
                        aria-hidden="true"
                        className="size-3.5 text-emerald-300"
                      />
                      Engagement Rate
                    </div>
                    <span className="text-[0.6rem] text-emerald-300">
                      ↗ Growing
                    </span>
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <span className="text-2xl font-semibold tracking-tight text-white">
                      +184%
                    </span>
                    <div
                      aria-hidden="true"
                      className="flex h-8 flex-1 items-end justify-end gap-1"
                    >
                      {[30, 48, 37, 62, 52, 82, 66, 100, 78, 94, 72, 100].map(
                        (height, index) => (
                          <span
                            key={index}
                            style={{ height: `${height}%` }}
                            className="w-2 rounded-t-sm bg-gradient-to-t from-emerald-500/40 to-emerald-200 transition-all duration-500 group-hover:brightness-125"
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>

          <Parallax className="absolute -top-[1%] right-[-2%] flex items-center gap-3 rounded-2xl border border-emerald-200/25 bg-[var(--theme-card)]/90 px-4 py-3 shadow-[0_0_36px_rgba(16,185,129,0.18)] backdrop-blur-xl transition-colors duration-300 hover:border-emerald-200/45 sm:right-[-4%]">
            <span className="grid size-9 place-items-center rounded-xl bg-emerald-300/10 text-emerald-200">
              <ChartNoAxesCombined aria-hidden="true" className="size-4" />
            </span>
            <span>
              <span className="block text-[0.6rem] font-medium tracking-[0.12em] text-slate-400 uppercase">
                Engagement Rate
              </span>
              <span className="mt-0.5 block text-lg font-semibold leading-none text-emerald-200">
                +184%
              </span>
            </span>
          </Parallax>

          <Parallax className="absolute right-0 bottom-[4%] flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/85 px-4 py-2.5 text-xs text-slate-200 shadow-lg backdrop-blur-xl transition-colors duration-300 hover:border-emerald-300/30 sm:right-[-2%]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.85)]" />
            </span>
            <span>Booking Early Watch</span>
          </Parallax>
          </Reveal>
        </div>
    </section>
  );
}
