import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services | Clover Mobile Bar Co.",
  description:
    "Mobile bartending services for weddings, private parties, and corporate events across New England. Certified bartenders, custom cocktails, and full setup.",
};

const services = [
  {
    num: "01",
    title: "Mobile Bartending",
    image: "/assets/home-hero.jpg",
    alt: "Sydni pouring a cocktail at the Clover bar.",
    desc: "I come to you, bar and all, and serve your guests with warmth and pace. Every pour is precise, every interaction is friendly, and every drink looks like someone cared about it. Because someone did.",
    included: [
      "Certified and insured bartender",
      "Professional service attire",
      "Up to 5 hours of service (additional hours available)",
      "Event coordination with your planner or venue",
    ],
  },
  {
    num: "02",
    title: "Full Bar Setup and Cleanup",
    image: "/assets/cocktail-disco.webp",
    alt: "The Clover bar fully set up and styled with florals and menus.",
    desc: "I arrive early to set the bar, style it, stock it, and stage everything for a smooth first pour. After the last drink, I break it all down and leave your space exactly the way I found it.",
    included: [
      "Arrival 60 to 90 minutes before service",
      "Bar styling with fresh florals and signage",
      "Full breakdown and cleanup at the end of the night",
      "Bar transported to and from your venue",
    ],
  },
  {
    num: "03",
    title: "Custom Drink Menus",
    image: "/assets/cocktail-menu-florals.webp",
    alt: "A printed cocktail menu in a green velvet frame on the Clover bar.",
    desc: "Your menu is designed around you, your theme, your favorite flavors, and the story you want to tell. Two signature cocktails, a few classics, and a couple thoughtful mocktails is the usual shape. We can go bigger or simpler.",
    included: [
      "Two custom signature cocktails",
      "A curated list of classic options",
      "Printed menu for your event",
      "Recipe cards for you to keep",
    ],
  },
  {
    num: "04",
    title: "Mocktails and Non-Alcoholic Options",
    image: "/assets/cocktails-citrus-lavender.webp",
    alt: "A styled mocktail with herbs and citrus at the Clover bar.",
    desc: "Every Clover menu includes real non-alcoholic options. Not just a soda water with lime. Proper mocktails, built with the same care as their alcoholic cousins, so every guest has something to raise.",
    included: [
      "At least two signature mocktails on every menu",
      "Built with fresh juices and house-made syrups",
      "Styled and garnished like the cocktails",
    ],
  },
  {
    num: "05",
    title: "Planning Call and Shopping List",
    image: "/assets/sydni-serving-margarita.webp",
    alt: "Sydni holding out a finished margarita toward the camera.",
    desc: "We spend about an hour on the phone walking through your event, your guests, your preferences, and the vibe you're going for. After the call, I send a curated shopping list so you know exactly what alcohol to buy, how much, and where.",
    included: [
      "60-minute planning call",
      "Menu design and sign-off",
      "Curated shopping list with quantities",
      "Ongoing email support through the event",
    ],
  },
  {
    num: "06",
    title: "Premium Mixers, Garnishes, and Bar Tools",
    image: "/assets/bar-prep-mixers-garnishes.webp",
    alt: "Fresh mixers, hand-cut garnishes, and gold bar tools arranged on the Clover bar.",
    desc: "Everything you need for the bar, minus the alcohol. Fresh-squeezed juice, premium mixers, hand-cut fruit, house-made syrups, all the tools and glassware, and enough ice to last the night.",
    included: [
      "Fresh juices and premium mixers",
      "Hand-cut fruit and house-made syrups",
      "Full bar tool kit (shakers, strainers, jiggers, etc.)",
      "Glassware or premium disposables, your choice",
      "Ice and storage",
    ],
  },
];

const eventTypes = [
  {
    num: "01",
    title: "Weddings",
    desc: "Ceremony, cocktail hour, reception, last call. I coordinate with your planner, build a menu around your story, and make sure every guest has a drink from start to finish. Signature cocktails named after you, mocktails that don't feel like an afterthought, and a bar that photographs as well as it pours.",
  },
  {
    num: "02",
    title: "Private Parties",
    desc: "Birthdays, engagement parties, holiday gatherings, showers, anniversaries, and the kind of backyard nights that turn into something memorable. Smaller scale, same level of care, and a lot more room to get creative with the menu.",
  },
  {
    num: "03",
    title: "Corporate Events",
    desc: "Company parties, client dinners, office openings, and anything where you want the bar to feel considered rather than contracted. I handle the front-of-house so your team can actually talk to your guests.",
  },
];

const youBring = [
  {
    title: "Alcohol",
    desc: "Purchased from the shopping list I send during our planning call.",
  },
  {
    title: "A space",
    desc: "Indoor, outdoor, or a mix. I work with what you have.",
  },
  {
    title: "The guest list",
    desc: "So we can plan the menu and quantities right.",
  },
];

const iBring = [
  {
    title: "The bar",
    desc: "A portable light-wood bar, fully styled.",
  },
  {
    title: "The bartender",
    desc: "Me, certified and insured, in professional attire.",
  },
  {
    title: "The tools",
    desc: "Shakers, strainers, jiggers, glassware, ice.",
  },
  {
    title: "The mixers and garnishes",
    desc: "Fresh juice, premium syrups, hand-cut fruit.",
  },
  {
    title: "The menu",
    desc: "Custom-designed and printed for your event.",
  },
  {
    title: "The cleanup",
    desc: "Everything goes out the way it came in.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Section 1: Page hero ─── */}
      <section data-bg="light" className="bg-white py-24 md:py-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          <div className="md:w-[55%]">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
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
            <div className="relative aspect-[4/5] md:aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src="/assets/sydni-prep.webp"
                alt="Sydni arranging garnishes on the Clover bar before an event."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: What you bring / What I bring ─── */}
      <section data-bg="light" className="bg-white pb-24 md:pb-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          {/* Section header */}
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            The division of labor
          </span>
          <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            You bring the bottles. I bring the bar.
          </h2>
          <p className="mt-6 max-w-[600px] font-body text-[17px] leading-[1.6] text-ink/85">
            Clover is a full-service mobile bar, with one exception. You handle
            the alcohol, so you stay in control of what gets poured. I handle
            everything else. During our planning call, I send a curated shopping
            list so you buy the right amount of the right things.
          </p>

          {/* Comparison columns */}
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row gap-12 md:gap-20">
            {/* You bring */}
            <div className="md:w-1/2">
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-clover">
                You bring
              </span>
              <div className="mt-6 flex flex-col gap-8">
                {youBring.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-display font-medium text-xl text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm text-ink/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* I bring */}
            <div className="md:w-1/2">
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-clover">
                I bring
              </span>
              <div className="mt-6 flex flex-col gap-8">
                {iBring.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-display font-medium text-xl text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm text-ink/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: The services ─── */}
      <section data-bg="light" className="bg-white py-24 md:py-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Six services, one bar
          </span>
          <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            What&rsquo;s on the menu.
          </h2>
        </div>

        <div className="mt-16 md:mt-20 flex flex-col gap-20 md:gap-30">
          {services.map((s, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={s.num}
                className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row md:items-center gap-12 md:gap-20"
              >
                {/* Image column */}
                <div
                  className={`md:w-1/2 ${
                    imageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Copy column */}
                <div
                  className={`md:w-1/2 ${
                    imageLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <span className="font-display font-medium text-sm text-clover">
                    {s.num}
                  </span>
                  <h3 className="mt-2 font-display font-medium text-[26px] leading-[1.2] text-ink md:text-[32px]">
                    {s.title}
                  </h3>
                  <p className="mt-4 font-body text-base leading-[1.6] text-ink/75">
                    {s.desc}
                  </p>
                  {s.included && (
                    <ul className="mt-5 flex flex-col gap-2">
                      {s.included.map((item) => (
                        <li
                          key={item}
                          className="font-body text-sm text-ink/70"
                        >
                          <span className="text-clover mr-2">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Section 4: Event types ─── */}
      <section data-bg="dark" className="bg-cream py-24 md:py-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
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

      {/* ─── Section 5: Final CTA ─── */}
      <section data-bg="forest" className="bg-forest py-28 md:py-44">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="lg:max-w-[880px]">
            <h2 className="font-display font-normal text-[64px] leading-[0.95] text-white lg:text-[clamp(88px,9vw,120px)]">
              Ready to build your bar.
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
