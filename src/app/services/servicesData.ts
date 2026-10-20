export type Service = {
  num: string;
  title: string;
  image: string;
  alt: string;
  desc: string;
  included?: string[];
};

export const services: Service[] = [
  {
    num: "01",
    title: "Mobile Bartending",
    image: "/assets/services-mobile-bartending.jpg",
    alt: "Sydni serving cocktails from behind the Clover mobile bar.",
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
    image: "/assets/services-bar-setup.jpg",
    alt: "The Clover mobile bar fully set up and styled before an event.",
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
    image: "/clover-new-images/services-mocktails-nonalcholic.jpg",
    alt: "A selection of mocktails and non-alcoholic drinks on the Clover bar.",
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
    image: "/assets/services-planning.jpg",
    alt: "Planning materials and a curated shopping list for a Clover event.",
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
    image: "/assets/services-hero.jpg",
    alt: "A styled spread of cocktails and bar details on the Clover mobile bar.",
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

export const menuExamples = [
  {
    src: "/Website-Bar-Menus/marine-bar-menu.png",
    alt: "Marine-themed bar menu with coastal cocktails and nautical design.",
  },
  {
    src: "/Website-Bar-Menus/floral-bar-menu.png",
    alt: "Floral-themed bar menu with botanical cocktails and flower illustrations.",
  },
  {
    src: "/Website-Bar-Menus/drunk-in-love-menu.png",
    alt: "Drunk in Love wedding bar menu with his and hers signature drinks, wine, beer, and mocktails.",
  },
  {
    src: "/Website-Bar-Menus/bar-menu.png",
    alt: "Botanical bar menu with beer, wine, spirits, and custom cocktails illustrated with poppies.",
  },
  {
    src: "/Website-Bar-Menus/mocktail-menu.png",
    alt: "Watercolor mocktail menu featuring flow state fizz, lotus lemonade, serenity spritz, and zen temple.",
  },
  {
    src: "/Website-Bar-Menus/picnic-bar-menu.png",
    alt: "Picnic-themed bar menu with refreshing summer cocktails.",
  },
  {
    src: "/Website-Bar-Menus/beachy-bar-menu.png",
    alt: "Beach-themed bar menu with tropical cocktails and sandy tones.",
  },
  {
    src: "/Website-Bar-Menus/elegant-the-bar-menu.png",
    alt: "Elegant bar menu with refined cocktails and sophisticated styling.",
  },
  {
    src: "/Website-Bar-Menus/his-hers-menu.png",
    alt: "His and hers signature cocktail menu for a wedding celebration.",
  },
  {
    src: "/Website-Bar-Menus/mocktail-bar-menu.png",
    alt: "Dedicated mocktail bar menu with creative non-alcoholic drinks.",
  },
  {
    src: "/Website-Bar-Menus/clover-bar-menu.png",
    alt: "Clover signature cocktail menu featuring jalapeno pineapple margarita, aperol spritz, and old fashioned.",
  },
];

export const eventTypes = [
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

export const youBring = [
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

export const iBring = [
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
