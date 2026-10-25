"use client";

import dynamic from "next/dynamic";
import { useNearViewport } from "@/lib/useNearViewport";

const ContactForm = dynamic(
  () => import("./ContactForm").then((module) => module.ContactForm),
  { loading: () => <div aria-hidden="true" className="min-h-[34rem]" /> },
);

export function LazyContactForm() {
  const [ref, isNearViewport] = useNearViewport();

  return (
    <div ref={ref} className="min-h-[34rem]">
      {isNearViewport ? <ContactForm /> : null}
    </div>
  );
}
