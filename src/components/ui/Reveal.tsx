"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right";

interface RevealProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  as?: "div" | "li" | "nav" | "dl";
  scale?: boolean;
  "aria-hidden"?: boolean;
}

const revealCallbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function observeOnce(element: Element, reveal: () => void) {
  if (!("IntersectionObserver" in window)) {
    reveal();
    return () => {};
  }

  sharedObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealCallbacks.get(entry.target)?.();
        revealCallbacks.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      }

      if (revealCallbacks.size === 0) {
        sharedObserver?.disconnect();
        sharedObserver = null;
      }
    },
    { threshold: 0.05 },
  );

  revealCallbacks.set(element, reveal);
  sharedObserver.observe(element);

  return () => {
    revealCallbacks.delete(element);
    sharedObserver?.unobserve(element);
    if (revealCallbacks.size === 0) {
      sharedObserver?.disconnect();
      sharedObserver = null;
    }
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
  scale = false,
  "aria-hidden": ariaHidden,
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    return observeOnce(element, () => setRevealed(true));
  }, []);

  const style = {
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;

  const commonProps = {
    "data-reveal": "",
    "data-revealed": revealed,
    "data-reveal-direction": direction,
    "data-reveal-scale": scale ? "true" : undefined,
    "aria-hidden": ariaHidden,
    className,
    style,
  };
  const setElement = (element: HTMLElement | null) => {
    elementRef.current = element;
  };

  if (as === "li") {
    return (
      <li ref={setElement} {...commonProps}>
        {children}
      </li>
    );
  }

  if (as === "nav") {
    return (
      <nav ref={setElement} {...commonProps}>
        {children}
      </nav>
    );
  }

  if (as === "dl") {
    return (
      <dl ref={setElement} {...commonProps}>
        {children}
      </dl>
    );
  }

  return (
    <div ref={setElement} {...commonProps}>
      {children}
    </div>
  );
}
