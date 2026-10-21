"use client";

import { ReactLenis } from "lenis/react";

const options = {
  lerp: 0.08,
  duration: 1.2,
  smoothWheel: true,
  syncTouch: false,
  anchors: true,
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
};

export function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
