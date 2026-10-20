import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { rows } from "./galleryRows";

export const metadata: Metadata = {
  title: "Gallery | Clover Mobile Bar Co., New Hampshire",
  description:
    "Photos of the bar, the drinks, and the details. See what Clover Mobile Bar Co. brings to weddings and events across New England.",
  alternates: { canonical: "https://cloverbarco.com/gallery" },
  openGraph: {
    title: "Gallery | Clover Mobile Bar Co., New Hampshire",
    description:
      "Photos of the bar, the drinks, and the details. See what Clover Mobile Bar Co. brings to weddings and events across New England.",
    url: "https://cloverbarco.com/gallery",
    siteName: "Clover Mobile Bar Co.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Clover Mobile Bar Co., New Hampshire",
    description:
      "Photos of the bar, the drinks, and the details. See what Clover Mobile Bar Co. brings to weddings and events across New England.",
    images: ["/og-image.png"],
  },
};

const allImages = rows.flatMap((r) => r.images);

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema pageName="Gallery" pageUrl="/gallery" />
      {/* ─── Section 1: Page hero ─── */}
      <section data-bg="light" className="bg-white pt-14 md:pt-18 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clover">
            Gallery
          </span>
          <h1 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            The bar, the drinks, the details.
          </h1>
          <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.6] text-ink/85">
            A look at what Clover brings to an event. More photos are added
            after every booking.
          </p>
        </div>
      </section>

      {/* ─── Section 2: Gallery grid ─── */}
      <section data-bg="light" className="bg-white pb-24 md:pb-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          {/* Desktop: flex rows with equal-height images */}
          <div className="hidden md:flex flex-col gap-2">
            {rows.map((row, ri) => (
              <div key={ri} className={`flex gap-2 ${row.height}`}>
                {row.images.map((img) => (
                  <div
                    key={img.src}
                    className={`${img.widthClass} relative overflow-hidden rounded-sm`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-opacity duration-200 hover:opacity-95"
                      sizes="(max-width: 1280px) 50vw, 640px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: single column with natural aspect ratios */}
          <div className="md:hidden flex flex-col gap-2">
            {allImages.map((img) => (
              <div
                key={img.src}
                className={`${img.mobileAspect} relative w-full overflow-hidden rounded-sm`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Final CTA ─── */}
      <section data-bg="dark" className="bg-forest py-28 md:py-44 relative overflow-hidden">
        <div className="absolute right-[-25%] md:right-[-5%] top-1/2 -translate-y-1/2 h-[140%] aspect-square pointer-events-none opacity-[0.12]">
          <Image
            src="/assets/glasses-cream.png"
            alt=""
            fill
            className="object-contain"
            sizes="50vw"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
          <div className="lg:max-w-[880px]">
            <h2 className="font-display font-normal text-[64px] leading-[0.95] text-white lg:text-[clamp(88px,9vw,120px)]">
              Want your event on this page?
            </h2>
            <div className="mt-10 lg:mt-14">
              <Button variant="inverted" href="/contact">Inquire</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
