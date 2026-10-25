"use client";

import { useEffect, useRef } from "react";

const observedElements = new Set();
let sharedObserver = null;

function observeOnce(element) {
  if (!("IntersectionObserver" in window)) {
    element.dataset.revealed = "true";
    return () => {};
  }

  sharedObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.dataset.revealed = "true";
        observedElements.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      }

      if (observedElements.size === 0) {
        sharedObserver?.disconnect();
        sharedObserver = null;
      }
    },
    { threshold: 0.01, rootMargin: "-10% 0px -10% 0px" },
  );

  observedElements.add(element);
  sharedObserver.observe(element);

  return () => {
    observedElements.delete(element);
    sharedObserver?.unobserve(element);
    if (observedElements.size === 0) {
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
}) {
  const elementRef = useRef(null);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    return observeOnce(element);
  }, []);

  const style = {
    "--reveal-delay": `${delay}s`,
  };

  const commonProps = {
    "data-reveal": "",
    "data-revealed": "false",
    "data-reveal-direction": direction,
    "data-reveal-scale": scale ? "true" : undefined,
    "aria-hidden": ariaHidden,
    className,
    style,
  };
  const setElement = (element) => {
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
