import Image from "next/image";
import Button from "@/components/Button";
const movements = [
  {
    src: "/assets/rimming-glass-salt-station.webp",
    alt: "Hands rimming a glass with salt at the Clover bar station.",
    numeral: "I.",
    label: "Rim",
  },
  {
    src: "/assets/pouring-mixer-into-shaker.webp",
    alt: "Mixer being poured into a gold cocktail shaker.",
    numeral: "II.",
    label: "Pour",
  },
  {
    src: "/assets/margarita-straining-closeup.webp",
    alt: "A margarita being strained into a coupe glass, close-up.",
    numeral: "III.",
    label: "Strain",
  },
  {
    src: "/assets/jalapeno-margarita-garnish.webp",
    alt: "A finished jalapeno margarita with a pepper garnish.",
    numeral: "IV.",
    label: "Garnish",
  },
  {
    src: "/assets/sydni-serving-margarita.webp",
    alt: "Sydni holding out a finished margarita toward the camera.",
    numeral: "V.",
    label: "Serve",
  },
];

const services = [
  {
    num: "01",
    name: "Mobile Bartending",
    desc: "Certified, insured bartenders delivering professional service with warm hospitality.",
  },
  {
    num: "02",
    name: "Full Bar Setup and Cleanup",
    desc: "I arrive early, set everything up, and break it all down after. You don't lift a finger.",
  },
  {
    num: "03",
    name: "Custom Drink Menus",
    desc: "Signature cocktails designed around your event's style, theme, and guest list.",
  },
  {
    num: "04",
    name: "Mocktails and Non-Alcoholic Options",
    desc: "Thoughtful non-alcoholic drinks so every guest has something to raise.",
  },
  {
    num: "05",
    name: "Planning Call and Shopping List",
    desc: "A pre-event call to plan your bar, plus a curated shopping list so you buy the right alcohol in the right amounts.",
  },
  {
    num: "06",
    name: "Premium Mixers, Garnishes, and Bar Tools",
    desc: "Fresh juices, premium mixers, hand-cut garnishes, all the tools, all the ice.",
  },
];

const steps = [
  {
    num: "01",
    title: "Inquire",
    desc: "Fill out the form and expect a personalized quote within 24 to 48 hours.",
  },
  {
    num: "02",
    title: "Contract",
    desc: "Review and sign the service agreement. An invoice for the deposit follows.",
  },
  {
    num: "03",
    title: "Deposit",
    desc: "A $100 non-refundable deposit reserves your date. Events totaling $1,200 or more require 50% to reserve.",
  },
  {
    num: "04",
    title: "Event day",
    desc: "I arrive early, set up, serve, and handle the full breakdown. You stay present.",
  },
];


export default function Home() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}

      {/* Mobile hero: background image behind copy */}
      <section
        className="relative md:hidden w-full bg-white overflow-hidden"
        style={{ height: "var(--hero-h)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/home-hero.jpg"
            alt="Sydni behind the Clover mobile bar, styled with fresh florals and premium spirits."
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, white 0%, white 30%, transparent 75%)",
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full px-5"
          style={{
            paddingTop: "12vh",
            paddingBottom: "calc(80px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Mobile Bartending, New Hampshire
          </span>
          <h1 className="mt-5 font-display font-normal text-[40px] leading-[1.05] text-ink">
            Curated cocktails. Lucky pours. Moments worth toasting.
          </h1>
          <p className="mt-6 max-w-[480px] font-body text-lg text-ink/80">
            A thoughtfully stocked bar, brought to your celebration. I&rsquo;m
            Sydni, and I pour drinks for weddings, private parties, and
            gatherings worth remembering across New England.
          </p>
          <div className="mt-8">
            <Button href="/contact">Inquire</Button>
          </div>
        </div>
      </section>

      {/* Desktop hero: split layout */}
      <section className="hidden md:block bg-white pt-20 pb-30">
        <div className="mx-auto max-w-7xl px-10 flex flex-row items-center gap-16">
          <div className="w-[60%]">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Mobile Bartending, New Hampshire
            </span>
            <h1 className="mt-5 font-display font-normal text-[68px] leading-[1.05] text-ink">
              Curated cocktails. Lucky pours. Moments worth toasting.
            </h1>
            <p className="mt-6 max-w-[480px] font-body text-lg text-ink/80">
              A thoughtfully stocked bar, brought to your celebration. I&rsquo;m
              Sydni, and I pour drinks for weddings, private parties, and
              gatherings worth remembering across New England.
            </p>
            <div className="mt-8">
              <Button href="/contact">Inquire</Button>
            </div>
          </div>
          <div className="w-[40%]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src="/assets/drink-arrangement.png"
                alt="Sydni behind the Clover mobile bar, styled with fresh florals and premium spirits."
                fill
                className="object-cover"
                sizes="40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Meet your bartender ─── */}
      <section data-bg="light" className="bg-white py-24 md:py-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Desktop portrait (left column) */}
          <div className="hidden lg:block lg:w-[45%]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src="/assets/sydni-portrait.webp"
                alt="Sydni, owner of Clover Mobile Bar Co., shaking a cocktail behind the Clover bar."
                fill
                className="object-cover"
                sizes="45vw"
              />
            </div>
          </div>

          {/* Copy column */}
          <div className="lg:w-[50%]">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Meet your bartender
            </span>
            <h2 className="mt-5 font-display font-normal text-[40px] leading-[1.05] text-ink md:text-[56px]">
              Hi, I&rsquo;m Sydni.
            </h2>

            {/* Mobile portrait (interleaved between headline and body) */}
            <div className="lg:hidden mt-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src="/assets/sydni-portrait.webp"
                  alt="Sydni, owner of Clover Mobile Bar Co., shaking a cocktail behind the Clover bar."
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>

            <div className="mt-8 lg:mt-6 max-w-[480px] space-y-5">
              <p className="font-body text-[17px] leading-[1.6] text-ink/85">
                With over 7 years behind the bar, I&rsquo;ve poured for
                weddings, private parties, and everything in between. I started
                Clover because every event deserves a bar that feels warm,
                personal, and thoughtfully run.
              </p>
              <p className="font-body text-[17px] leading-[1.6] text-ink/85">
                Whether you want classic cocktails or a custom menu built around
                your theme, I handle every detail so you can focus on the night
                and the people in it.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about">More about me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Services preview ─── */}
      <section data-bg="light" className="bg-white pb-24 md:pb-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row md:items-stretch gap-12 md:gap-20">
          {/* Left column */}
          <div className="md:w-1/2 md:shrink-0 flex flex-col">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              What I bring
            </span>
            <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[40px]">
              Everything but the bottle.
            </h2>
            <p className="mt-4 max-w-[320px] font-body text-base text-ink/80">
              You bring the alcohol. I bring the bar, the bartender, the mixers,
              the garnishes, the ice, the menus, and the calm.
            </p>
            <div className="mt-6">
              <Button variant="ghost" href="/services">
                See full services
              </Button>
            </div>
            <div className="mt-12 relative aspect-[4/3] md:aspect-auto md:flex-1 w-full overflow-hidden rounded-sm">
              <Image
                src="/assets/cocktails-citrus-lavender.webp"
                alt="A styled pour behind the Clover bar, florals and garnishes in soft focus."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right column: services list */}
          <div className="md:w-1/2 flex flex-col gap-8">
            {services.map((s) => (
              <div key={s.num}>
                <span className="font-display font-medium text-sm text-clover">
                  {s.num}
                </span>
                <h3 className="mt-1 font-display font-medium text-2xl text-ink">
                  {s.name}
                </h3>
                <p className="mt-1.5 max-w-[520px] font-body text-[15px] text-ink/75">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: A drink in four movements ─── */}
      <section data-bg="light" className="bg-white py-16 md:py-24">
        {/* Intro */}
        <div className="mx-auto max-w-7xl px-5 md:px-10 mb-12 md:mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            The craft
          </span>
          <h2 className="mt-4 max-w-[600px] font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            A drink in five movements.
          </h2>
        </div>

        {/* Desktop: 5-up edge-to-edge row */}
        <div className="hidden md:flex w-full">
          {movements.map((m) => (
            <div key={m.numeral} className="w-1/5">
              <div className="relative aspect-[4/5]">
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              <div className="px-5 mt-5">
                <p className="font-display italic font-normal text-xl text-clover">
                  {m.numeral}
                </p>
                <p className="mt-1 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/70">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: staggered vertical stack */}
        <div className="md:hidden flex flex-col gap-12 w-full">
          {movements.map((m, i) => {
            const isOffset = i % 2 === 1;
            return (
              <div
                key={m.numeral}
                className={isOffset ? "w-[75%] ml-auto" : "w-full"}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={m.src}
                    alt={m.alt}
                    fill
                    className="object-cover"
                    sizes={isOffset ? "75vw" : "100vw"}
                  />
                </div>
                <div className="px-5 mt-5">
                  <p className="font-display italic font-normal text-xl text-clover">
                    {m.numeral}
                  </p>
                  <p className="mt-1 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/70">
                    {m.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Section 5: How it works ─── */}
      <section data-bg="light" className="bg-white py-24 md:py-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            How it works
          </span>
          <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            Four steps from inquiry to cheers.
          </h2>

          <div className="mt-16 md:mt-20 flex flex-col md:flex-row gap-10 md:gap-12">
            {steps.map((step) => (
              <div key={step.num} className="md:w-1/4">
                <span className="font-display font-medium text-sm text-clover">
                  {step.num}
                </span>
                <h3 className="mt-3 font-display font-medium text-2xl text-ink leading-[1.2]">
                  {step.title}
                </h3>
                <p className="mt-2.5 font-body text-[15px] leading-[1.6] text-ink/75">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: Final CTA ─── */}
      <section data-bg="dark" className="bg-forest py-28 md:py-44">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="lg:max-w-[880px]">
            <h2
              className="font-display font-normal text-[64px] leading-[0.95] text-white lg:text-[clamp(88px,9vw,120px)]"
            >
              Let&rsquo;s plan your bar.
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
