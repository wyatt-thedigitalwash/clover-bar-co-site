import Link from "next/link";
import Image from "next/image";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const contact = [
  { label: "Email", href: "mailto:cloverbarco@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/cloverbarco", external: true },
  { label: "Facebook", href: "https://www.facebook.com/people/Clover-Bar-Co/61585967311366/", external: true },
  { label: "Google", href: "https://www.google.com/search?q=clover+bar+co", external: true },
];

const details = [
  "Based in New Hampshire",
  "Serving New England",
  "Fully insured",
];

const labelClass =
  "font-body text-[11px] font-medium uppercase tracking-widest text-ink/40";

const linkClass =
  "font-body text-[14px] text-ink/70 transition-colors duration-150 hover:text-clover";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-12 md:py-16">
        {/* Grid */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-8">
          {/* Left: Icon */}
          <div className="shrink-0">
            <Link href="/" className="relative block h-[200px] w-[200px]">
              <Image
                src="/clover-bar-icon.png"
                alt="Clover Bar Co."
                fill
                className="object-contain"
                sizes="200px"
              />
            </Link>
          </div>

          {/* Right: 3 columns — on mobile: Contact+Details row first, then Pages */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-12">
            {/* Contact + Details: side by side on mobile, own columns on desktop */}
            <div className="grid grid-cols-2 md:contents gap-8">
              {/* Contact */}
              <div className="md:order-2">
                <p className={labelClass}>Contact</p>
                <div className="mt-4 flex flex-col gap-3">
                  {contact.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={linkClass}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="md:order-3">
                <p className={labelClass}>Details</p>
                <div className="mt-4 flex flex-col gap-3">
                  {details.map((d) => (
                    <p key={d} className="font-body text-[14px] text-ink/70">
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Pages: below Contact+Details on mobile, first column on desktop */}
            <div className="md:order-1">
              <p className={labelClass}>Pages</p>
              <nav className="mt-4 flex flex-col gap-3">
                {pages.map((p) => (
                  <Link key={p.href} href={p.href} className={linkClass}>
                    {p.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-12 border-t border-ink/10 pt-5 flex flex-col md:flex-row md:justify-between md:items-center gap-2 items-center text-center md:text-left">
          <p className="font-body text-xs text-ink/30">
            &copy; {year} Clover Mobile Bar Co.
          </p>
          <p className="font-body text-xs text-ink/30">
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
    </footer>
  );
}
