"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function Parallax({ children, className }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1800], [0, -42]);
  const shouldReduceMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      className={`transform-gpu will-change-transform ${className ?? ""}`}
      style={finePointer && !shouldReduceMotion ? { y } : undefined}
    >
      {children}
    </motion.div>
  );
}
