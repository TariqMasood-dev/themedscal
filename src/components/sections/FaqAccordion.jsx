"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { accordionPanel, fadeUp, staggerContainer } from "@/lib/motion";

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const panelVariants = shouldReduceMotion
    ? {
        closed: { height: 0, opacity: 0, transition: { duration: 0 } },
        open: { height: "auto", opacity: 1, transition: { duration: 0 } },
      }
    : accordionPanel;

  return (
    <motion.div
      className="grid gap-4"
      variants={staggerContainer}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <motion.article
            key={item.question}
            variants={fadeUp}
            className={`group overflow-hidden rounded-2xl border bg-slate-900/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_18px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl transition duration-300 ${
              isOpen
                ? "border-emerald-300/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_70px_rgba(16,185,129,0.08)]"
                : "border-white/[0.08] hover:border-emerald-300/20"
            }`}
          >
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-20 w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
              >
                <span
                  className={`text-base font-semibold tracking-[-0.02em] transition-colors sm:text-lg ${
                    isOpen ? "text-white" : "text-slate-200"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid size-9 shrink-0 place-items-center rounded-full border transition duration-300 ${
                    isOpen
                      ? "rotate-180 border-emerald-200/35 bg-emerald-300/10 text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.14)]"
                      : "border-white/10 bg-white/[0.03] text-slate-400 group-hover:border-emerald-200/25 group-hover:text-emerald-200"
                  }`}
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>
            </h2>
            <motion.div
              id={answerId}
              aria-hidden={!isOpen}
              inert={!isOpen}
              variants={panelVariants}
              initial={isOpen ? false : "closed"}
              animate={isOpen ? "open" : "closed"}
              className="overflow-hidden"
            >
              <p className="mx-5 border-t border-white/[0.08] py-5 text-sm leading-7 text-slate-400 sm:mx-7 sm:text-base sm:leading-7">
                {item.answer}
              </p>
            </motion.div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
