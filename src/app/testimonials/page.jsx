import {
  ArrowUpRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";

export const metadata = {
  title: "Testimonials",
  description:
    "Hear from aesthetic healthcare practices that partner with MedScale to grow their online presence.",
};

const testimonials = [
  {
    quote:
      "Our Instagram finally looks like the premium experience we deliver in the clinic. Bookings from social media have never been easier to track.",
    name: "Med Spa Owner",
    details: "Aesthetic Clinic, Client since 2024",
    initials: "MS",
  },
  {
    quote:
      "The team understands healthcare communication in a way generalist agencies never did. Every video feels accurate and on-brand.",
    name: "Practice Manager",
    details: "Medical Spa, Client since 2024",
    initials: "PM",
  },
  {
    quote:
      "AI-generated content let us post consistently without sacrificing the polished, luxury feel our patients expect.",
    name: "Clinic Director",
    details: "Injectables Practice, Client since 2025",
    initials: "CD",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="card-depth group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-slate-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-slate-900/80 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_26px_80px_rgba(16,185,129,0.12)] sm:p-8">
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              className="size-4 fill-emerald-300 text-emerald-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]"
            />
          ))}
        </div>
        <Quote
          aria-hidden="true"
          className="mt-7 size-7 text-emerald-300/65"
          strokeWidth={1.7}
        />
        <blockquote className="mt-3 flex-1 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center gap-3 border-t border-white/[0.08] pt-5">
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-emerald-100/25 bg-emerald-300 text-xs font-bold tracking-wide text-slate-950"
          >
            {testimonial.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-white">
              {testimonial.name}
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              {testimonial.details}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

const brands = [
  { name: "Social Medispa" },
  { name: "Studio 3 Marketing" },
  { name: "Aesthetic Growth Labs" },
  { name: "All The Things Social" },
  { name: "Miren One" },
  { name: "Brenton Health" },
];

export default function TestimonialsPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative isolate min-h-screen overflow-x-clip text-slate-100 selection:bg-emerald-300/30"
    >
      <div className="relative z-10">
      <section
        aria-labelledby="testimonials-page-heading"
        data-scene="testimonials"
        className="relative isolate overflow-hidden px-5 pt-32 pb-8 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44"
      >
        <div className="mx-auto max-w-6xl text-center">
          <Reveal className="inline-flex">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.19em] text-emerald-200 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Client Success
          </p>
          </Reveal>
          <Reveal delay={0.1}>
          <WordReveal
            as="h1"
            id="testimonials-page-heading"
            className="mx-auto mt-7 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
            parts={[
              "Trusted by ",
              {
                text: "Growing Med Spas",
                className: "text-emerald-200",
              },
            ]}
          />
          </Reveal>
          <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Real feedback from aesthetic healthcare practices that partnered
            with MedScale to grow their online presence.
          </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Client testimonials"
        data-scene="testimonials"
        className="relative isolate overflow-hidden px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1} scale>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="trusted-brands-heading"
        data-scene="testimonials"
        className="relative isolate overflow-hidden px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-7 text-center">
            <p
              id="trusted-brands-heading"
              className="text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase"
            >
              Trusted by Med Spa &amp; Aesthetic Brands
            </p>
          </Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand, index) => (
              <Reveal
                as="li"
                key={brand.name}
                delay={index * 0.07}
                className="flex min-h-20 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-4 text-center text-sm font-medium tracking-[-0.02em] text-slate-300/90 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-emerald-300/[0.04] hover:text-white"
              >
                {brand.name}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="testimonials-cta-heading"
        data-scene="testimonials"
        className="relative isolate overflow-hidden px-5 pb-20 sm:px-8 lg:px-12"
      >
        <Reveal scale className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-200/20 bg-slate-900 px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_100px_rgba(0,0,0,0.35),0_0_55px_rgba(16,185,129,0.08)] sm:px-12 sm:py-16">
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2
                id="testimonials-cta-heading"
                className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white sm:text-5xl"
              >
                Ready to Get Results Like These?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Book a free consultation and see what MedScale can do for your
                med spa.
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
