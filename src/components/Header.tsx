"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

type MenuPhase = "closed" | "mounting" | "opening" | "open" | "closing";

export default function Header() {
  const [phase, setPhase] = useState<MenuPhase>("closed");
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (phase !== "closed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // When phase becomes "mounting", wait one frame then start "opening"
  useEffect(() => {
    if (phase === "mounting") {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("opening");
        });
      });
      return () => cancelAnimationFrame(raf);
    }
    if (phase === "opening") {
      timeoutRef.current = setTimeout(() => setPhase("open"), 600);
    }
    return undefined;
  }, [phase]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openMenu = useCallback(() => {
    if (reducedMotion.current) {
      setPhase("open");
      return;
    }
    setPhase("mounting");
  }, []);

  const closeMenu = useCallback(() => {
    if (reducedMotion.current) {
      setPhase("closed");
      return;
    }
    setPhase("closing");
    timeoutRef.current = setTimeout(() => setPhase("closed"), 450);
  }, []);

  const handleNavClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  const isActive = phase !== "closed";
  const showOverlay = phase !== "closed";
  const animateIn = phase === "opening" || phase === "open";

  // Overlay background
  function overlayStyle(): React.CSSProperties {
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
  function linkStyle(index: number): React.CSSProperties {
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
      const reverseIndex = navLinks.length - 1 - index;
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
  function fadeStyle(): React.CSSProperties {
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

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-[border-color] duration-200 ${
        scrolled ? "border-b border-[#E8E5DF]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-10 py-5 md:py-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-forest text-2xl font-semibold tracking-tight"
        >
          clover
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[15px] font-medium tracking-wide text-ink transition-colors duration-150 hover:text-clover"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger / X toggle */}
        <button
          type="button"
          onClick={isActive ? closeMenu : openMenu}
          className="md:hidden relative flex flex-col justify-center items-center w-8 h-8"
          aria-label={isActive ? "Close menu" : "Open menu"}
        >
          <span
            className="block absolute h-[2px] w-full bg-ink origin-center transition-all duration-300 ease-in-out"
            style={{
              transform: isActive
                ? "rotate(45deg)"
                : "translateY(-7px)",
            }}
          />
          <span
            className="block absolute h-[2px] w-full bg-ink transition-opacity duration-300 ease-in-out"
            style={{ opacity: isActive ? 0 : 1 }}
          />
          <span
            className="block absolute h-[2px] w-full bg-ink origin-center transition-all duration-300 ease-in-out"
            style={{
              transform: isActive
                ? "rotate(-45deg)"
                : "translateY(7px)",
            }}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col"
          style={overlayStyle()}
        >
          <div
            className="flex items-center justify-between px-5 py-5"
            style={fadeStyle()}
          >
            <Link
              href="/"
              onClick={handleNavClick}
              className="font-display text-forest text-2xl font-semibold tracking-tight"
            >
              clover
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="2" y1="2" x2="18" y2="18" />
                <line x1="18" y1="2" x2="2" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-display text-3xl font-medium text-ink hover:text-clover"
                style={linkStyle(i)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
