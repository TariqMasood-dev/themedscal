import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  Megaphone,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface Service {
  title: string;
  description: string;
  bullets: readonly string[];
  icon: LucideIcon;
  index: string;
}

const services: readonly Service[] = [
  {
    title: "Social Media Marketing",
    description:
      "We make sure your brands appear consistently across Instagram, Facebook, and TikTok with high quality content that educates, informs, and builds trust.",
    bullets: [
      "Facebook technologies (META) ads",
      "Creative Content Strategy",
      "Copywriting & Writing Resource",
      "Full Social Media Management",
    ],
    icon: Megaphone,
    index: "01",
  },
  {
    title: "Healthcare: Content Creation",
    description:
      "Healthcare marketing is more than creativity — it requires understanding the medical context and what is your brand's voice.",
    bullets: [
      "Scenario variable custom",
      "Patient attraction content",
      "Standard visual and feeling",
    ],
    icon: Palette,
    index: "02",
  },
  {
    title: "Professional Video Editing",
    description:
      "We transform your raw footage and ideas into premium video content for facebook and instagram Reels, TikTok, YouTube Shorts, and promotional videos.",
    bullets: [
      "Short-form & Educational Videos",
      "Edit & refine raw video footage",
      "Focus on Hook & Story",
    ],
    icon: Clapperboard,
    index: "03",
  },
  {
    title: "AI Video Generation",
    description:
      "Here are the new brand's tools to scale your content production for abstract, tech & clinic promotion.",
    bullets: [
      "AI-driven customized clips, audio, and social teaser",
      "Engage audiences via text, voice, and visual assets",
      "Create diverse advertising templates, scale visual push",
      "Rapid adaptation, & customize visuals components",
      "Tailored platform upload with premium editing",
    ],
    icon: Bot,
    index: "04",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative flex flex-col justify-center px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3.5 py-2 text-[0.68rem] font-semibold tracking-[0.18em] text-emerald-200 uppercase">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-4xl leading-[1.08] font-semibold tracking-[-0.055em] text-white sm:text-6xl"
          >
            Everything Your Med Spa and Aesthetic Clinic Need to{" "}
            <span className="text-slate-400">Grow Online</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            From strategy to execution — watch content expand online,
            including: video, editing, and content creation... custom built
            specifically for premium healthcare practices.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map(({ title, description, bullets, icon: Icon, index }) => (
            <Reveal key={title} delay={Number(index) * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_18px_70px_rgba(16,185,129,0.09)] sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -top-28 -right-24 size-64 rounded-full bg-cyan-400/[0.05] blur-[90px] transition duration-500 group-hover:bg-emerald-300/[0.11]"
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.07] text-emerald-200 transition-colors group-hover:border-emerald-200/30 group-hover:bg-emerald-200/15">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.7}
                    />
                  </div>
                  <span className="text-xs tracking-[0.16em] text-slate-600">
                    {index} / 04
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {bullets.map((bullet, bulletIndex) => (
                    <Reveal
                      as="li"
                      key={bullet}
                      delay={Number(index) * 0.1 + bulletIndex * 0.05}
                      className="flex items-start gap-2.5 text-xs leading-5 text-slate-300 sm:text-[0.8rem]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.6)]"
                      />
                      {bullet}
                    </Reveal>
                  ))}
                </ul>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-300/[0.06] px-5 py-2.5 text-sm font-medium text-emerald-100 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200/40 hover:bg-emerald-300/[0.12]"
          >
            Explore All Services
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
