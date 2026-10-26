import dynamic from "next/dynamic";
import { SceneBackground } from "@/components/canvas/SceneBackground";

const Hero = dynamic(() => import("@/components/sections/Hero").then((module) => module.Hero));
const Mission = dynamic(() => import("@/components/sections/Mission").then((module) => module.Mission));
const Services = dynamic(() => import("@/components/sections/Services").then((module) => module.Services));
const IndustryFocus = dynamic(() => import("@/components/sections/IndustryFocus").then((module) => module.IndustryFocus));
const Path = dynamic(() => import("@/components/sections/Path").then((module) => module.Path));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((module) => module.Testimonials));
const Faq = dynamic(() => import("@/components/sections/Faq").then((module) => module.Faq));
const Footer = dynamic(() => import("@/components/layout/Footer").then((module) => module.Footer));

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative isolate min-h-screen overflow-x-clip text-slate-100 selection:bg-emerald-300/30"
    >
      <SceneBackground />
      <div className="relative z-10">
      <Hero />
      <Mission />
      <Services />
      <IndustryFocus />
      <Path />
      <Testimonials />
      <Faq />
      <Footer />
      </div>
    </main>
  );
}
