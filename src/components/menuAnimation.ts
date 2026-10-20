import type React from "react";

export type MenuPhase = "closed" | "mounting" | "opening" | "open" | "closing";

// Overlay background
export function overlayStyle(phase: MenuPhase): React.CSSProperties {
  const animateIn = phase === "opening" || phase === "open";
  if (phase === "mounting") {
    return { opacity: 0, transform: "scale(0.98)" };
  }
  if (animateIn) {
    return {
      opacity: 1,
      transform: "scale(1)",
      transition: "opacity 350ms cubic-bezier(0.22, 1, 0.36, 1), transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
    };
  }
  if (phase === "closing") {
    return {
      opacity: 0,
      transform: "scale(0.98)",
      transition: "opacity 300ms cubic-bezier(0.55, 0, 1, 0.45), transform 300ms cubic-bezier(0.55, 0, 1, 0.45)",
      transitionDelay: "120ms",
    };
  }
  return { opacity: 0 };
}

// Per-link stagger
export function linkStyle(
phase: MenuPhase,
index: number,
total: number
): React.CSSProperties {
  const animateIn = phase === "opening" || phase === "open";
  if (phase === "mounting") {
    return { opacity: 0, transform: "translateY(16px)" };
  }
  if (animateIn) {
    return {
      opacity: 1,
      transform: "translateY(0)",
      transition: "opacity 450ms cubic-bezier(0.22, 1, 0.36, 1), transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
      transitionDelay: `${180 + index * 65}ms`,
    };
  }
  if (phase === "closing") {
    const reverseIndex = total - 1 - index;
    return {
      opacity: 0,
      transform: "translateY(-10px)",
      transition: "opacity 180ms ease-in, transform 180ms ease-in",
      transitionDelay: `${reverseIndex * 35}ms`,
    };
  }
  return { opacity: 0, transform: "translateY(16px)" };
}

// Close button / logo in overlay
export function fadeStyle(phase: MenuPhase): React.CSSProperties {
  const animateIn = phase === "opening" || phase === "open";
  if (phase === "mounting") {
    return { opacity: 0 };
  }
  if (animateIn) {
    return {
      opacity: 1,
      transition: "opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)",
      transitionDelay: "150ms",
    };
  }
  if (phase === "closing") {
    return {
      opacity: 0,
      transition: "opacity 200ms ease-in",
    };
  }
  return { opacity: 0 };
}
