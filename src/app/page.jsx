import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { IndustryFocus } from "@/components/sections/IndustryFocus";
import { Mission } from "@/components/sections/Mission";
import { Path } from "@/components/sections/Path";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { HomepageExperience } from "@/components/sections/HomepageExperience";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative isolate min-h-screen overflow-x-clip text-slate-100 selection:bg-emerald-300/30"
    >
      <HomepageExperience>
        <Hero />
        <Mission />
        <Services />
        <IndustryFocus />
        <Path />
        <Testimonials />
        <Faq />
        <Footer />
      </HomepageExperience>
    </main>
  );
}
