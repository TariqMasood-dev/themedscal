"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const questions = [
  {
    question: "Do you run only on medical spas?",
    answer:
      "Our primary focus is Aesthetic and Aesthetics healthcare providers. If your brand needs specific healthcare focus, our strategies work well with aesthetic, dermatology, skin care clinics, and doctors.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "We build connected content strategies for Meta platforms, including Instagram and Facebook; TikTok; and YouTube, including Shorts. We tailor each edit, caption, and publishing plan to the network and the audience you want to reach.",
  },
  {
    question: "Can you help retrieve old social asset files?",
    answer:
      "We can help organize and recover assets that are still available from your social accounts, shared drives, or original uploads. If you have the source footage, we can also help turn it into polished new content.",
  },
  {
    question: "Do you produce AI entirely or process custom footage?",
    answer:
      "Both. We can edit the custom footage your team provides, create AI-generated visual assets, or thoughtfully combine the two to match your brand and campaign goals.",
  },
] as const;

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative flex flex-col justify-center px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal className="lg:h-fit">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
            Good questions
          </p>
          <h2
            id="faq-heading"
            className="text-4xl leading-[1.07] font-semibold tracking-[-0.055em] text-white sm:text-6xl"
          >
            Frequently Asked{" "}
            <span className="text-slate-400">Questions</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            A little more about how we help aesthetic practices show up with
            confidence.
          </p>
          <a
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition-colors hover:text-emerald-100"
          >
            Still have questions?
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {questions.map(({ question, answer }, index) => (
            <Reveal key={question} delay={index * 0.08}>
              <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-medium text-white marker:content-none sm:py-7 sm:text-lg [&::-webkit-details-marker]:hidden">
                {question}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-300 transition-all group-open:rotate-180 group-open:border-emerald-300/30 group-open:text-emerald-200">
                  <ChevronDown aria-hidden="true" className="size-4" />
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 group-open:grid-rows-[1fr] group-open:opacity-100 motion-reduce:transition-none">
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-slate-400 sm:pb-7 sm:text-base">
                    {answer}
                  </p>
                </div>
              </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
