import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";
import BarOptions from "./BarOptions";
import ServiceRow from "./ServiceRow";
import {
  services,
  menuExamples,
  eventTypes,
  youBring,
  iBring,
} from "./servicesData";

export const metadata: Metadata = {
  title: "Services | Clover Mobile Bar Co., New Hampshire",
  description:
    "Mobile bartending services for weddings, private parties, and corporate events across New England. Custom cocktails, full bar setup, and cleanup.",
  alternates: { canonical: "https://cloverbarco.com/services" },
  openGraph: {
    title: "Services | Clover Mobile Bar Co., New Hampshire",
    description:
      "Mobile bartending services for weddings, private parties, and corporate events across New England. Custom cocktails, full bar setup, and cleanup.",
    url: "https://cloverbarco.com/services",
    siteName: "Clover Mobile Bar Co.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Clover Mobile Bar Co., New Hampshire",
    description:
      "Mobile bartending services for weddings, private parties, and corporate events across New England. Custom cocktails, full bar setup, and cleanup.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema pageName="Services" pageUrl="/services" />
      <ServiceSchema
        name="Mobile Bartending"
        description="Full-service mobile bartending for weddings, private parties, and corporate events across New England. Custom cocktails, bar setup, mixers, garnishes, and cleanup included."
      />
      {/* ─── Section 1: Page hero ─── */}
      <section data-bg="light" className="bg-white pt-14 md:pt-18 pb-16 md:pb-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          <div className="md:w-[55%]">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clover">
              Services
            </span>
            <h1 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
              Everything I bring, everything it includes.
            </h1>
            <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.6] text-ink/85">
              From the first planning call to the last pour, here&rsquo;s
              exactly what you get when you book Clover for your event.
            </p>
          </div>
          <div className="md:w-[40%]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src="/assets/services-premium-mixers.jpg"
                alt="Fresh mixers, hand-cut garnishes, and bar tools arranged on the Clover bar."
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: What you bring / What I bring ─── */}
      <section data-bg="light" className="bg-white pb-24 md:pb-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row md:items-center gap-12 md:gap-20">
          {/* Image column — desktop only */}
          <div className="hidden md:block md:w-1/2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/assets/services-you-bring-bottles.jpg"
                alt="Bottles and bar supplies arranged on the Clover mobile bar."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Copy column */}
          <div className="md:w-1/2">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clover">
              The division of labor
            </span>
            <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
              You bring the bottles. I bring the bar.
            </h2>
            <p className="mt-6 font-body text-[17px] leading-[1.6] text-ink/85">
              Clover is a full-service mobile bar, with one exception. You handle
              the alcohol, so you stay in control of what gets poured. I handle
              everything else. During our planning call, I send a curated shopping
              list so you buy the right amount of the right things.
            </p>

            {/* Bottles image — visible only on mobile, between copy and lists */}
            <div className="mt-8 md:hidden">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src="/assets/services-you-bring-bottles.jpg"
                  alt="Bottles and bar supplies arranged on the Clover mobile bar."
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-10 sm:gap-16">
              {/* You bring */}
              <div>
                <span className="font-body text-sm font-medium text-clover">
                  You bring
                </span>
                <div className="mt-4 flex flex-col gap-5">
                  {youBring.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-display font-medium text-lg text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-body text-sm text-ink/70">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* I bring */}
              <div>
                <span className="font-body text-sm font-medium text-clover">
                  I bring
                </span>
                <div className="mt-4 flex flex-col gap-5">
                  {iBring.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-display font-medium text-lg text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-body text-sm text-ink/70">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: The services ─── */}
      <section data-bg="light" className="bg-white py-24 md:py-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clover">
            Six services, one bar
          </span>
          <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            What&rsquo;s on the menu.
          </h2>
        </div>

        {/* Services 01-03 */}
        <div className="mt-16 md:mt-20 flex flex-col gap-20 md:gap-30">
          {services.slice(0, 3).map((s, i) => (
            <ServiceRow key={s.num} service={s} imageLeft={i % 2 === 0} />
          ))}
        </div>

        {/* ─── Menu examples showcase ─── */}
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-24">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clover">
            From past events
          </span>
          <h3 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            A few menus I&rsquo;ve designed.
          </h3>

          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
            {menuExamples.map((m) => (
              <div key={m.src} className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-md">
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* Mobile: horizontal scroll with snap */}
          <div className="md:hidden mt-12 -mx-5 px-5 pb-4 flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none">
            {menuExamples.map((m) => (
              <div
                key={m.src}
                className="w-[70vw] shrink-0 snap-center"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-md">
                  <Image
                    src={m.src}
                    alt={m.alt}
                    fill
                    className="object-contain bg-white"
                    sizes="70vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services 04-06 */}
        <div className="flex flex-col gap-20 md:gap-30">
          {services.slice(3).map((s, i) => (
            <ServiceRow
              key={s.num}
              service={s}
              imageLeft={(i + 3) % 2 === 0}
            />
          ))}
        </div>
      </section>

      {/* ─── Section 4: Bars and packages ─── */}
      <BarOptions />

      {/* ─── Section 5: Event types ─── */}
      <section data-bg="light" className="bg-cream py-24 md:py-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clover">
            Where I pour
          </span>
          <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            Every celebration, on its own terms.
          </h2>
          <p className="mt-6 max-w-[560px] font-body text-[17px] leading-[1.6] text-ink/85">
            Every event is different, and every bar should reflect that.
            Here&rsquo;s the shape most of my events take.
          </p>

          <div className="mt-16 md:mt-20 flex flex-col md:flex-row gap-10 md:gap-12">
            {eventTypes.map((e) => (
              <div key={e.num} className="md:w-1/3">
                <span className="font-display font-medium text-sm text-clover">
                  {e.num}
                </span>
                <h3 className="mt-3 font-display font-medium text-[28px] leading-[1.2] text-ink">
                  {e.title}
                </h3>
                <p className="mt-3 font-body text-base leading-[1.6] text-ink/75">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: Final CTA ─── */}
      <section data-bg="forest" className="bg-forest py-28 md:py-44 relative overflow-hidden">
        <div className="absolute right-[-25%] md:right-[-5%] top-1/2 -translate-y-1/2 h-[140%] aspect-square pointer-events-none opacity-[0.12]">
          <Image
            src="/assets/horseshoe-cream.png"
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
              Ready to build your bar?
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
