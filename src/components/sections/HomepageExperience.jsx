"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomepageExperience({ children }) {
  const experienceRef = useRef(null);

  useEffect(() => {
    const experience = experienceRef.current;
    if (!experience) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia(experience);

    media.add("(prefers-reduced-motion: no-preference)", () => {
      experience.querySelectorAll("[data-reveal]").forEach((element) => {
        const direction = element.dataset.revealDirection;
        const offsetX = direction === "left" ? -34 : direction === "right" ? 34 : 0;
        const offsetY = direction === "down" ? -26 : direction === "up" ? 26 : 0;
        const scale = element.dataset.revealScale === "true" ? 0.97 : 1;
        const delay = Number.parseFloat(
          element.style.getPropertyValue("--reveal-delay"),
        ) || 0;

        gsap.fromTo(
          element,
          { autoAlpha: 0, x: offsetX, y: offsetY, scale },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            delay,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "willChange",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
              onEnter: () => {
                element.dataset.revealed = "true";
              },
              onEnterBack: () => {
                element.dataset.revealed = "true";
              },
              onLeaveBack: () => {
                element.dataset.revealed = "false";
              },
            },
          },
        );
      });

      experience.querySelectorAll("[data-word-reveal]").forEach((heading) => {
        const words = heading.querySelectorAll(".word-rise");
        if (!words.length) return;

        gsap.fromTo(
          words,
          { yPercent: 112, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.82,
            stagger: 0.035,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      experience.querySelectorAll("[data-image-reveal]").forEach((image) => {
        gsap.fromTo(
          image,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.15,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: image,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const progress = experience.querySelector(".story-progress__fill");
      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: experience,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      const processRule = experience.querySelector(".story-process__rule");
      if (processRule) {
        gsap.fromTo(
          processRule,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: processRule,
              start: "top 84%",
              end: "bottom 35%",
              scrub: 0.5,
            },
          },
        );
      }

      ScrollTrigger.refresh();
    });

    media.add(
      "(min-width: 760px) and (prefers-reduced-motion: no-preference)",
      () => {
        experience.querySelectorAll("[data-scroll-visual] img").forEach((image) => {
          gsap.fromTo(
            image,
            { scale: 1.08, yPercent: -2 },
            {
              scale: 1,
              yPercent: 2,
              ease: "none",
              scrollTrigger: {
                trigger: image.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      },
    );

    return () => media.revert();
  }, []);

  return (
    <div ref={experienceRef} className="story-experience">
      <div className="story-progress" aria-hidden="true">
        <span className="story-progress__fill" />
      </div>
      {children}
    </div>
  );
}
