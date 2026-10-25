"use client";

export function Magnetic({ children, className }) {
  function handlePointerMove(event) {
    if (event.pointerType !== "mouse") return;

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
    <span
      className={`magnetic-target ${className ?? ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
    >
      {children}
    </span>
  );
}
