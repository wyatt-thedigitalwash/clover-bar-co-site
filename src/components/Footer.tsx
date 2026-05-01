const contactLinks = [
  { label: "cloverbarco@gmail.com", href: "mailto:cloverbarco@gmail.com" },
  { label: "@cloverbarco", href: "https://instagram.com/cloverbarco", external: true },
  { label: "Facebook", href: "https://www.facebook.com/people/Clover-Bar-Co/61585967311366/", external: true },
  { label: "Google", href: "https://www.google.com/search?q=clover+bar+co", external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-20">
        {/* Row 1: Brand + contact */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Left: brand + tagline */}
          <div>
            <p className="font-display font-normal text-[20px] text-forest">
              Clover Mobile Bar Co.
            </p>
            <p className="mt-1.5 font-display italic text-[14px] text-ink/50">
              Curated cocktails. Lucky pours. Moments worth toasting.
            </p>
          </div>

          {/* Right: contact links */}
          {/* Desktop: horizontal with mid-dot separators */}
          <div className="hidden md:flex items-center gap-0 flex-wrap">
            {contactLinks.map((link, i) => (
              <span key={link.label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-3 text-ink/30 select-none" aria-hidden="true">·</span>
                )}
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-body text-[14px] text-ink/70 transition-colors duration-150 hover:text-clover"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col gap-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-body text-[14px] text-ink/70 transition-colors duration-150 hover:text-clover"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Bottom line */}
        <div className="mt-12 md:mt-16 border-t border-ink/10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-3 items-start">
          <p className="font-body text-xs text-ink/40">
            Based in New Hampshire. Serving New England. Fully insured.
          </p>

          {/* Desktop: horizontal with mid-dot */}
          <div className="hidden md:flex items-center gap-0">
            <span className="font-body text-xs text-ink/40">
              &copy; {year} Clover Mobile Bar Co.
            </span>
            <span className="mx-2 text-ink/20 select-none" aria-hidden="true">·</span>
            <span className="font-body text-xs text-ink/40">
              Created by{" "}
              <a
                href="https://thedigitalwash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:text-clover"
              >
                The Digital Wash
              </a>
            </span>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col gap-1">
            <p className="font-body text-xs text-ink/40">
              &copy; {year} Clover Mobile Bar Co.
            </p>
            <p className="font-body text-xs text-ink/40">
              Created by{" "}
              <a
                href="https://thedigitalwash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:text-clover"
              >
                The Digital Wash
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
