import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

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
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="story-faq"
    >
      <div className="story-wrap story-faq__layout">
        <div className="story-faq__feature">
          <EditorialImage
            src="/images/home-faq-serene-room.webp"
            alt="Welcoming aesthetic clinic lounge with warm natural light"
            className="story-faq__image"
          />
          <p className="story-eyebrow">Good questions</p>
          <WordReveal
            as="h2"
            id="faq-heading"
            className="story-heading story-heading--dark story-faq__heading"
            parts={[
              "Frequently Asked ",
              { text: "Questions", className: "text-emerald-800" },
            ]}
          />
          <p className="story-faq__description">
            A little more about how we help aesthetic practices show up with
            confidence.
          </p>
          <a href="/contact" className="story-faq__link">
            Still have questions?
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="story-faq__list">
          {questions.map(({ question, answer }, index) => (
            <Reveal
              key={question}
              delay={index * 0.06}
              className="story-faq__item"
            >
              <details>
                <summary>
                  {question}
                  <span className="story-faq__icon">
                    <ChevronDown aria-hidden="true" className="size-4" />
                  </span>
                </summary>
                <p className="story-faq__answer">{answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
