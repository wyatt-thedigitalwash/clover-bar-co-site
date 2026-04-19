import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8E5DF] bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Logo + tagline */}
          <div>
            <Link
              href="/"
              className="font-display text-forest text-xl font-semibold tracking-tight"
            >
              clover
            </Link>
            <p className="mt-3 font-display italic text-sm text-ink/60">
              Curated cocktails. Lucky pours. Moments worth toasting.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-ink/40">
              Contact
            </span>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:cloverbarco@gmail.com"
                  className="font-body text-sm text-ink transition-colors duration-150 hover:text-clover"
                >
                  cloverbarco@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/cloverbarco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-ink transition-colors duration-150 hover:text-clover"
                >
                  @cloverbarco
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service area */}
          <div>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-ink/40">
              Service Area
            </span>
            <p className="mt-3 font-body text-sm text-ink">
              Based in New Hampshire.
              <br />
              Serving New England.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#E8E5DF] mt-12 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2 items-center">
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
    </footer>
  );
}
