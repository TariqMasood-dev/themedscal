"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const SectionBackgroundContext = createContext(null);

export function SectionBackgroundProvider({ children }) {
  const [activeBackground, setActiveBackground] = useState(null);
  const [loadedSource, setLoadedSource] = useState(null);
  const registrations = useRef(new Map());
  const observer = useRef(null);

  const updateActiveBackground = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    let closest = null;
    let closestDistance = Infinity;

    for (const [element, registration] of registrations.current) {
      if (!registration.isIntersecting) continue;

      const rect = element.getBoundingClientRect();
      const distance =
        rect.bottom < viewportCenter
          ? viewportCenter - rect.bottom
          : rect.top > viewportCenter
            ? rect.top - viewportCenter
            : 0;

      if (distance < closestDistance) {
        closest = registration.background;
        closestDistance = distance;
      }
    }

    setActiveBackground((current) =>
      current?.src === closest?.src &&
      current?.priority === closest?.priority
        ? current
        : closest,
    );
  }, []);

  const registerBackground = useCallback(
    (element, background) => {
      if (!observer.current) {
        observer.current = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              const registration = registrations.current.get(entry.target);
              if (registration) {
                registration.isIntersecting = entry.isIntersecting;
              }
            }
            updateActiveBackground();
          },
          { rootMargin: "-30% 0px -30% 0px", threshold: 0 },
        );
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      registrations.current.set(element, {
        background,
        isIntersecting:
          rect.bottom > viewportHeight * 0.3 &&
          rect.top < viewportHeight * 0.7,
      });
      observer.current.observe(element);
      updateActiveBackground();

      return () => {
        observer.current?.unobserve(element);
        registrations.current.delete(element);
        updateActiveBackground();
      };
    },
    [updateActiveBackground],
  );

  useEffect(() => {
    setLoadedSource(null);
  }, [activeBackground?.src]);

  return (
    <SectionBackgroundContext.Provider value={registerBackground}>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="section-background-fallback absolute inset-0" />
        {activeBackground ? (
          <Image
            key={activeBackground.src}
            src={activeBackground.src}
            alt=""
            fill
            sizes="100vw"
            preload={activeBackground.priority}
            loading={activeBackground.priority ? undefined : "eager"}
            onLoad={() => setLoadedSource(activeBackground.src)}
            className={`object-cover transition-opacity duration-700 ${
              loadedSource === activeBackground.src ? "opacity-75" : "opacity-0"
            }`}
          />
        ) : null}
        <div className="section-background-overlay absolute inset-0" />
      </div>
      {children}
    </SectionBackgroundContext.Provider>
  );
}

export function SectionBackgroundRegistration({ src, priority }) {
  const registerBackground = useContext(SectionBackgroundContext);
  const anchorRef = useRef(null);

  if (!registerBackground) {
    throw new Error(
      "SectionBackgroundRegistration must be rendered inside SectionBackgroundProvider.",
    );
  }

  useEffect(() => {
    const anchor = anchorRef.current;
    const section = anchor?.closest("section, footer");

    if (!section) {
      throw new Error("SectionBackground must be placed inside a section or footer.");
    }

    return registerBackground(section, { src, priority });
  }, [priority, registerBackground, src]);

  return <span ref={anchorRef} aria-hidden="true" className="hidden" />;
}
