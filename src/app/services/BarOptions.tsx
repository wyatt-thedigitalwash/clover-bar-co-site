import Button from "@/components/Button";

type Option = {
  title: string;
  detail?: string;
  desc: string;
};

const bars: Option[] = [
  {
    title: "Satellite Bar",
    detail: "10 to 50 guests",
    desc: "A small, portable bar that fits almost anywhere. Perfect for showers, birthdays, and backyard nights.",
  },
  {
    title: "Mobile Bar",
    detail: "10 to 130 guests",
    desc: "The full Clover bar, styled for your event. Room for a bigger crowd and a bigger menu.",
  },
  {
    title: "Bartenders Only",
    detail: "Your venue's bar",
    desc: "Your venue already has a bar. I set up behind it and take care of your guests.",
  },
];

const packages: Option[] = [
  {
    title: "Beer & Wine",
    desc: "Simple and classic. A curated beer and wine bar for your guests.",
  },
  {
    title: "Beer & Wine + 2 Signature Cocktails",
    desc: "Beer and wine, plus two custom cocktails designed around your event.",
  },
  {
    title: "Full Bar + 2 Signature Cocktails",
    desc: "Spirits, beer, and wine, plus two signature cocktails made just for you.",
  },
  {
    title: "Cocktail Class",
    desc: "A hands-on class where you and your guests learn to make cocktails together.",
  },
];

function OptionList({ label, options }: { label: string; options: Option[] }) {
  return (
    <div>
      <h3 className="font-body text-sm font-medium text-clover">
        {label}
      </h3>
      <ul className="mt-4 border-b border-[#E8E5DF]">
        {options.map((o) => (
          <li key={o.title} className="border-t border-[#E8E5DF] py-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h4 className="font-display font-medium text-xl leading-[1.25] text-ink md:text-2xl">
                {o.title}
              </h4>
              {o.detail && (
                <span className="shrink-0 font-body text-sm text-ink/60">
                  {o.detail}
                </span>
              )}
            </div>
            <p className="mt-2 max-w-[520px] font-body text-[15px] leading-[1.6] text-ink/75">
              {o.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BarOptions() {
  return (
    <section data-bg="light" className="bg-white py-24 md:py-30">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Intro */}
        <div className="md:flex md:items-end md:justify-between md:gap-16">
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clover">
              Bars and packages
            </span>
            <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
              Pick your bar. Pick your pour.
            </h2>
            <p className="mt-6 max-w-[560px] font-body text-[17px] leading-[1.6] text-ink/85">
              Every booking comes down to two choices. The bar that fits your
              space and guest count, and the package that sets what gets poured.
              Not sure which fits? We&rsquo;ll figure it out together on the
              planning call.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:shrink-0">
            <Button variant="ghost" href="/contact">
              Let&rsquo;s plan your bar
            </Button>
          </div>
        </div>

        {/* Option lists: stacked on mobile, side by side on desktop */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16">
          <OptionList label="Choose your bar" options={bars} />
          <OptionList label="Choose your package" options={packages} />
        </div>

        <p className="mt-14 md:mt-10 max-w-[560px] font-body text-sm leading-[1.6] text-ink/70">
          Every package is bring-your-own. You buy the alcohol from the
          shopping list I send after our planning call, and I bring everything
          else.
        </p>
      </div>
    </section>
  );
}
