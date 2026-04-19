import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Gallery | Clover Mobile Bar Co.",
  description:
    "A look at the bar, the drinks, and the details. Clover Mobile Bar Co., mobile bartending across New England.",
};

/* PLACEHOLDER IMAGES — All twelve image paths need to be replaced with real
   Clover photography during the asset mapping pass. */
const images: {
  src: string;
  alt: string;
  aspect: string;
  colSpan: string;
}[] = [
  // Row 1
  {
    src: "/assets/sydni-behind-clover-mobile-bar.webp",
    alt: "The Clover mobile bar styled and ready, Sydni standing behind it.",
    aspect: "aspect-[4/3]",
    colSpan: "md:col-span-7",
  },
  {
    src: "/assets/sydni-shaking-cocktail.webp",
    alt: "Sydni behind the bar, shaking a cocktail in a gold shaker.",
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-5",
  },
  // Row 2
  {
    src: "/assets/cocktail-disco.webp",
    alt: "A coupe glass with garnishes beside a disco ball on the Clover bar.",
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-4",
  },
  {
    src: "/assets/rimming-glass-salt-station.webp",
    alt: "Hands rimming a glass with salt at the Clover bar station.",
    aspect: "aspect-[1/1]",
    colSpan: "md:col-span-4",
  },
  {
    src: "/assets/jalapeno-margarita-garnish.webp",
    alt: "A jalapeno margarita being garnished with a pepper slice.",
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-4",
  },
  // Row 3
  {
    src: "/assets/cocktail-menu-florals.webp",
    alt: "A printed cocktail menu in a green velvet frame with fresh florals.",
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-5",
  },
  {
    src: "/assets/cocktails-bar-tools-overhead.webp",
    alt: "Three colorful cocktails with gold bar tools, overhead angle.",
    aspect: "aspect-[4/3]",
    colSpan: "md:col-span-7",
  },
  // Row 4
  {
    src: "/assets/cocktail-menu-setup.webp",
    alt: "The Clover cocktail menu and business cards styled with florals.",
    aspect: "aspect-[1/1]",
    colSpan: "md:col-span-4",
  },
  {
    src: "/assets/sydni-serving-margarita.webp",
    alt: "Sydni holding out a finished margarita toward the camera.",
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-4",
  },
  {
    src: "/assets/margarita-straining-closeup.webp",
    alt: "Close-up of a margarita being strained through a gold mesh strainer.",
    aspect: "aspect-[1/1]",
    colSpan: "md:col-span-4",
  },
  // Row 5
  {
    src: "/assets/sydni-and-guest-behind-bar.webp",
    alt: "Sydni and a guest smiling behind the Clover bar at a party.",
    aspect: "aspect-[4/3]",
    colSpan: "md:col-span-7",
  },
  {
    src: "/assets/bar-prep-mixers-garnishes.webp",
    alt: "Fresh mixers, garnishes, and bottles arranged for event prep.",
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-5",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ─── Section 1: Page hero ─── */}
      <section data-bg="light" className="bg-white py-24 md:py-30">
        <div className="mx-auto max-w-[720px] px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
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
          {/* Desktop: 12-column editorial grid */}
          <div className="hidden md:grid grid-cols-12 gap-2">
            {images.map((img) => (
              <div
                key={img.src}
                className={`${img.colSpan} ${img.aspect} relative overflow-hidden rounded-sm`}
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

          {/* Mobile: single column stack */}
          <div className="md:hidden flex flex-col gap-2">
            {images.map((img) => (
              <div
                key={img.src}
                className={`${img.aspect} relative w-full overflow-hidden rounded-sm`}
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
      <section data-bg="dark" className="bg-forest py-28 md:py-44">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
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
