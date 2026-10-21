"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Magnetic({ children, className }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const update = () => setEnabled(finePointer.matches && !reducedMotion.matches);

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  function handlePointerMove(event) {
    if (!enabled || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
    const offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.12;

    event.currentTarget.style.setProperty(
      "--magnetic-x",
      `${Math.max(-8, Math.min(8, offsetX))}px`,
    );
    event.currentTarget.style.setProperty(
      "--magnetic-y",
      `${Math.max(-8, Math.min(8, offsetY))}px`,
    );
  }

  function resetPosition(event) {
    event.currentTarget.style.setProperty("--magnetic-x", "0px");
    event.currentTarget.style.setProperty("--magnetic-y", "0px");
  }

  return (
    <motion.span
      className={`inline-flex ${className ?? ""}`}
      whileHover={enabled ? { scale: 1.04 } : undefined}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
    >
      <span
        className={`magnetic-target ${className ?? ""}`}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPosition}
      >
        {children}
      </span>
    </motion.span>
  );
}
