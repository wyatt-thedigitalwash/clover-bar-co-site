import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Sydni | Clover Mobile Bar Co.",
  description:
    "Meet Sydni, the owner and bartender behind Clover Mobile Bar Co. Seven years of bartending experience poured into every event across New England.",
};

const beliefs = [
  {
    num: "01",
    statement: "A good bartender disappears.",
    supporting:
      "Your guests should notice the drinks, the vibe, the night, not the person making it happen. My job is to be there when you need me and invisible when you don't.",
  },
  {
    num: "02",
    statement: "The small things are the whole thing.",
    supporting:
      "The ice, the garnish, the glassware, the first drink someone orders when they walk up. The small things are what make the night feel considered.",
  },
  {
    num: "03",
    statement: "Mocktails deserve the same care.",
    supporting:
      "Not every guest is drinking, and that shouldn't mean a sad club soda. Every Clover menu includes non-alcoholic drinks built with the same attention as the cocktails.",
  },
];

const stats = [
  { label: "Years bartending", value: "7+" },
  /* PLACEHOLDER — need real number from Sydni */
  { label: "Events served", value: "50+" },
  { label: "Certifications", value: "TIPS certified, fully insured" },
  { label: "Based in", value: "New Hampshire" },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Section 1: Page hero / Meet Sydni ─── */}
      <section data-bg="light" className="bg-white pt-14 md:pt-18 pb-24 md:pb-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Desktop portrait (left column) */}
          <div className="hidden lg:block lg:w-[45%]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src="/assets/sydni-champagne-portrait.webp"
                alt="Sydni, owner of Clover Mobile Bar Co., standing behind her mobile bar."
                fill
                className="object-cover"
                sizes="45vw"
                priority
              />
            </div>
          </div>

          {/* Copy column */}
          <div className="lg:w-[50%]">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Meet Sydni
            </span>
            <h1 className="mt-5 font-display font-normal text-[40px] leading-[1.05] text-ink md:text-[56px]">
              Seven years behind the bar. One reason I started Clover.
            </h1>

            {/* Mobile portrait (interleaved between headline and body) */}
            <div className="lg:hidden mt-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src="/assets/sydni-champagne-portrait.webp"
                  alt="Sydni, owner of Clover Mobile Bar Co., standing behind her mobile bar."
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <div className="mt-8 lg:mt-6 max-w-[480px] space-y-5">
              <p className="font-body text-[17px] leading-[1.6] text-ink/85">
                I&rsquo;m Sydni, and I&rsquo;ve been pouring drinks for a long
                time. Weddings, rooftop parties, dive bars, private dinners, all
                of it. Somewhere along the way I realized the moments people
                remember aren&rsquo;t the fancy ones. They&rsquo;re the ones
                where everything just worked, where the bar was stocked, the
                bartender was warm, and the host got to actually be a guest at
                their own event.
              </p>
              <p className="font-body text-[17px] leading-[1.6] text-ink/85">
                That&rsquo;s why I started Clover. I wanted to build the kind of
                bar I&rsquo;d want at my own wedding. Thoughtfully stocked.
                Personally run. Styled with care. Small enough to feel like a
                friend is bartending, professional enough that nothing falls
                through.
              </p>
              <p className="font-body text-[17px] leading-[1.6] text-ink/85">
                Every event I take is personal. I plan the menu with you. I
                handle the setup and the breakdown. I pour every drink myself.
                And I bring a little luck to every pour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: What I believe ─── */}
      <section data-bg="dark" className="bg-cream py-24 md:py-30">
        <div className="mx-auto max-w-[720px] px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            What I believe
          </span>
          <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            A few things I&rsquo;ve learned about hospitality.
          </h2>

          <div className="mt-16 md:mt-20 flex flex-col gap-12">
            {beliefs.map((b) => (
              <div key={b.num}>
                <span className="font-display italic font-normal text-sm text-clover">
                  {b.num}
                </span>
                <h3 className="mt-2 font-display font-normal text-[22px] leading-[1.3] text-ink md:text-[28px]">
                  {b.statement}
                </h3>
                <p className="mt-3 max-w-[520px] font-body text-base leading-[1.6] text-ink/75">
                  {b.supporting}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Image break ─── */}
      <section className="w-full">
        <div className="relative aspect-[4/3] md:aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/assets/sydni-serving-margarita.webp"
            alt="Sydni mid-pour, shaking a cocktail behind the Clover bar."
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* ─── Section 4: The details ─── */}
      <section data-bg="light" className="bg-white py-24 md:py-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
          {/* Left column: header */}
          <div className="md:w-[40%]">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              The details
            </span>
            <h2 className="mt-4 font-display font-normal text-[28px] leading-[1.1] text-ink md:text-[36px]">
              Certified, insured, and ready.
            </h2>
          </div>

          {/* Right column: stats grid */}
          <div className="md:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
                  {s.label}
                </span>
                <p className="mt-2 font-display font-medium text-[28px] text-ink">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Final CTA ─── */}
      <section data-bg="dark" className="bg-forest py-28 md:py-44">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="lg:max-w-[880px]">
            <h2 className="font-display font-normal text-[64px] leading-[0.95] text-white lg:text-[clamp(88px,9vw,120px)]">
              Let&rsquo;s plan something good.
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
