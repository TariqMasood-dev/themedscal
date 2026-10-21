"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  practice: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("");

  function updateField(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `MedScale consultation request from ${values.fullName}`;
    const body = [
      `Name: ${values.fullName}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Med Spa: ${values.practice || "Not provided"}`,
      "",
      "Message:",
      values.message,
    ].join("\n");
    const mailto = `mailto:info@themedscale.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus(
      "Your email app should open with your message ready to send. If it doesn't, email info@themedscale.com.",
    );
    window.location.href = mailto;
  }

  const inputClassName =
    "mt-2.5 min-h-12 w-full rounded-xl border border-white/[0.1] bg-[var(--theme-page)] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition duration-200 focus:border-emerald-300/50 focus:ring-4 focus:ring-emerald-300/10 focus:outline-none";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
    >
      <div>
        <label
          htmlFor="full-name"
          className="text-sm font-medium text-slate-200"
        >
          Full Name
        </label>
        <input
          id="full-name"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          required
          value={values.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-200">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@themedscale.com"
          required
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-slate-200">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor="practice"
          className="text-sm font-medium text-slate-200"
        >
          Med Spa Name
        </label>
        <input
          id="practice"
          name="practice"
          type="text"
          autoComplete="organization"
          placeholder="Your Practice Name"
          value={values.practice}
          onChange={(event) => updateField("practice", event.target.value)}
          className={inputClassName}
        />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-slate-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your practice and goals..."
          required
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${inputClassName} min-h-32 resize-y`}
        />
      </div>

      <div className="sm:col-span-2">
        <Magnetic className="w-full sm:w-auto">
          <button
            type="submit"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(52,211,153,0.2)] transition duration-300 hover:from-emerald-200 hover:to-teal-200 hover:shadow-[0_0_40px_rgba(52,211,153,0.36)] sm:w-auto"
          >
            Send Message
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </Magnetic>
        <p
          role="status"
          aria-live="polite"
          className="mt-4 text-sm leading-6 text-emerald-200"
        >
          {status}
        </p>
      </div>
    </form>
  );
}
