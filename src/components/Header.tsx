"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/cloverbarco",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/cloverbarco",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Google Business",
    href: "https://www.google.com/search?q=clover+bar+co",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
      </svg>
    ),
  },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-[#E8E5DF]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-10 py-3.5 md:py-4">
        {/* Logo */}
        <Link href="/" className="relative h-10 w-[180px] shrink-0">
          <Image
            src="/clover-bar-co.png"
            alt="Clover Bar Co."
            fill
            className="object-contain object-left"
            sizes="180px"
            priority
          />
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
          <span className="h-4 w-px bg-[#E8E5DF]" aria-hidden="true" />
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-ink/50 transition-colors duration-150 hover:text-clover"
              >
                {s.icon}
              </a>
            ))}
          </div>
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
            <Link href="/" onClick={handleNavClick} className="relative h-10 w-[180px] shrink-0">
              <Image
                src="/clover-bar-co.png"
                alt="Clover Bar Co."
                fill
                className="object-contain object-left"
                sizes="180px"
              />
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
          <div
            className="flex items-center justify-center gap-6 pb-10"
            style={fadeStyle()}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-ink/40 transition-colors duration-150 hover:text-clover"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
