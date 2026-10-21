import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { IndustryFocus } from "@/components/sections/IndustryFocus";
import { Mission } from "@/components/sections/Mission";
import { Path } from "@/components/sections/Path";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative isolate min-h-screen overflow-x-clip bg-[var(--theme-page)] text-slate-100 selection:bg-emerald-300/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-52 left-[8%] size-[38rem] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute top-[35%] -right-64 size-[42rem] rounded-full bg-emerald-500/[0.08] blur-[150px]" />
        <div className="absolute -bottom-80 left-[28%] size-[38rem] rounded-full bg-blue-700/10 blur-[150px]" />
      </div>
      <Hero />
      <Mission />
      <Services />
      <IndustryFocus />
      <Path />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
