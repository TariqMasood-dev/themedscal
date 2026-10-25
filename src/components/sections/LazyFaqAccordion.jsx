"use client";

import dynamic from "next/dynamic";
import { useNearViewport } from "@/lib/useNearViewport";

const FaqAccordion = dynamic(
  () => import("./FaqAccordion").then((module) => module.FaqAccordion),
  { loading: () => <div aria-hidden="true" className="min-h-[34rem]" /> },
);

export function LazyFaqAccordion({ items }) {
  const [ref, isNearViewport] = useNearViewport();

  return (
    <div ref={ref} className="min-h-[34rem]">
      {isNearViewport ? <FaqAccordion items={items} /> : null}
    </div>
  );
}
