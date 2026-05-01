import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Gallery | Clover Mobile Bar Co.",
  description:
    "A look at the bar, the drinks, and the details. Clover Mobile Bar Co., mobile bartending across New England.",
};

type GalleryImage = {
  src: string;
  alt: string;
  mobileAspect: string;
};

type GalleryRow = {
  height: string;
  images: (GalleryImage & { widthClass: string })[];
};

const rows: GalleryRow[] = [
  // Row 1: 50/50
  {
    height: "h-[420px] md:h-[560px]",
    images: [
      {
        src: "/assets/gallery-8.jpg",
        alt: "Sydni shaking a gold cocktail shaker behind the Clover mobile bar.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/2",
      },
      {
        src: "/assets/gallery-16.jpg",
        alt: "Three signature cocktails styled with citrus, dried flowers, and fresh garnishes.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/2",
      },
    ],
  },
  // Row 2: thirds
  {
    height: "h-[380px] md:h-[480px]",
    images: [
      {
        src: "/assets/gallery-5.jpg",
        alt: "Two Clover-branded cocktails being cheersed, one with cucumber and one with citrus.",
        mobileAspect: "aspect-[4/5]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-10.jpg",
        alt: "A cocktail being strained through a gold mesh strainer into a salt-rimmed glass.",
        mobileAspect: "aspect-[4/5]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-4.jpg",
        alt: "Sydni raising a glass of champagne beside a Lucky You pillow.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/3",
      },
    ],
  },
  // Row 3: narrow + wide
  {
    height: "h-[420px] md:h-[560px]",
    images: [
      {
        src: "/assets/gallery-11.jpg",
        alt: "The Clover bar styled with a framed cocktail menu, florals, and branded drinks.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-[42%]",
      },
      {
        src: "/assets/gallery-15.jpg",
        alt: "A lineup of garnished cocktails on the Clover bar mat with mixers in the background.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-[58%]",
      },
    ],
  },
  // Row 4: thirds
  {
    height: "h-[340px] md:h-[420px]",
    images: [
      {
        src: "/assets/gallery-1.jpg",
        alt: "Three colorful cocktails with gold bar tools on the Clover bar mat, overhead view.",
        mobileAspect: "aspect-[1/1]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-12.jpg",
        alt: "Gold bar tools, strainers, and shakers arranged on the Clover bar mat.",
        mobileAspect: "aspect-[3/2]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-2.jpg",
        alt: "Two lime margaritas in coupe glasses with clover garnishes and fresh limes.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/3",
      },
    ],
  },
  // Row 5: wide + narrow
  {
    height: "h-[420px] md:h-[560px]",
    images: [
      {
        src: "/assets/gallery-6.jpg",
        alt: "The full Clover bar setup with mixers, florals, and branded cups at a venue.",
        mobileAspect: "aspect-[4/3]",
        widthClass: "w-[58%]",
      },
      {
        src: "/assets/gallery-13.jpg",
        alt: "A mocktail bar setup with Clover business cards and a framed mocktail menu.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-[42%]",
      },
    ],
  },
  // Row 6: thirds
  {
    height: "h-[380px] md:h-[480px]",
    images: [
      {
        src: "/assets/gallery-7.jpg",
        alt: "Sydni stirring a row of fresh cocktails with a gold bar spoon.",
        mobileAspect: "aspect-[4/5]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-3.jpg",
        alt: "The Clover bar topped with a cocktail menu, florals, garnishes, and a lineup of drinks.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-9.jpg",
        alt: "Sydni serving a garnished cocktail from behind the bar with a lineup of drinks.",
        mobileAspect: "aspect-[4/5]",
        widthClass: "w-1/3",
      },
    ],
  },
  // Row 7: full width
  {
    height: "h-[260px] md:h-[400px]",
    images: [
      {
        src: "/assets/gallery-14.jpg",
        alt: "Mixers, cans, fresh herbs, and garnishes staged on the Clover bar before an event.",
        mobileAspect: "aspect-[16/9]",
        widthClass: "w-full",
      },
    ],
  },
];

const allImages = rows.flatMap((r) => r.images);

export default function GalleryPage() {
  return (
    <>
      {/* ─── Section 1: Page hero ─── */}
      <section data-bg="light" className="bg-white pt-14 md:pt-18 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
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
