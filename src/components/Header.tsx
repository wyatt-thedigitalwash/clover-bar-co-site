"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, socialLinks } from "./headerLinks";
import {
  overlayStyle,
  linkStyle,
  fadeStyle,
  type MenuPhase,
} from "./menuAnimation";

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
    onScroll();
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-[#E8E5DF]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex w-full items-center justify-between px-5 md:px-10 py-3.5 md:py-4">
        {/* Logo: larger at the top of the page, hanging slightly below the bar.
            On scroll it shrinks up into its top-left corner to normal size.
            The bar height never changes, so nothing else moves. */}
        <Link
          href="/"
          className={`relative h-[34px] w-[97px] shrink-0 origin-top-left transition-transform duration-300 ease-out motion-reduce:transition-none ${
            scrolled ? "scale-100" : "scale-150 md:scale-[1.75]"
          }`}
        >
          <Image
            src="/clover-bar-co-trimmed.png"
            alt="Clover Bar Co."
            fill
            className="object-contain object-left"
            sizes="170px"
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
          style={overlayStyle(phase)}
        >
          <div
            className="flex items-center justify-between px-5 py-5"
            style={fadeStyle(phase)}
          >
            <Link href="/" onClick={handleNavClick} className="relative h-[34px] w-[97px] shrink-0">
              <Image
                src="/clover-bar-co-trimmed.png"
                alt="Clover Bar Co."
                fill
                className="object-contain object-left"
                sizes="97px"
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
                style={linkStyle(phase, i, navLinks.length)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div
            className="flex items-center justify-center gap-6 pb-10"
            style={fadeStyle(phase)}
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
