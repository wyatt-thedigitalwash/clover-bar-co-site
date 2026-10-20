export type GalleryImage = {
  src: string;
  alt: string;
  mobileAspect: string;
};

export type GalleryRow = {
  height: string;
  images: (GalleryImage & { widthClass: string })[];
};

export const rows: GalleryRow[] = [
  // Row 1: 50/50 (extra tall) -- bar setups
  {
    height: "h-[560px] md:h-[720px]",
    images: [
      {
        src: "/assets/gallery-38-2.jpg",
        alt: "A bar setup on a deck with house syrups in gold-spouted bottles, vodka, red wine, stacked cups, and gold shakers.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/2",
      },
      {
        src: "/assets/gallery-39-2.jpg",
        alt: "A his and hers Signature Drinks menu beside pink dahlias and bottled rum punch and strawberry margaritas.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/2",
      },
    ],
  },
  // Row 2: thirds (tall) -- the bar, a cocktail close-up, the bartender
  {
    height: "h-[500px] md:h-[600px]",
    images: [
      {
        src: "/assets/gallery-35-2.jpg",
        alt: "The white Clover Bar Co. mobile bar with the green Clover logo, two cocktails, a pink-framed menu, and peonies by the woods.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-36-2.jpg",
        alt: "A pink cocktail with mint and a yellow cocktail with a cherry beside a pink-framed signature cocktail menu.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-37-2.jpg",
        alt: "A smiling bartender behind a white bar with a bouquet of dahlias, an ice bucket, and a Feeling Tipsy sign.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
    ],
  },
  // Row 3: quarters -- details
  {
    height: "h-[380px] md:h-[460px]",
    images: [
      {
        src: "/assets/gallery-40-2.jpg",
        alt: "Malibu, 1800 tequila, and bottled red cocktails on an indoor bar with fresh limes, strawberries, and pink florals.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/4",
      },
      {
        src: "/assets/gallery-41-2.jpg",
        alt: "A garnish station with citrus, mint, labeled watermelon and cranberry mixers, and bar tools on the Clover bar.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/4",
      },
      {
        src: "/assets/gallery-42-2.jpg",
        alt: "A bouquet of dahlias beside an ice bucket, a Feeling Tipsy sign, and Clover business cards on a white bar.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/4",
      },
      {
        src: "/assets/gallery-43-2.jpg",
        alt: "Corona, Budweiser, Bud Light, Coors Light, and hard seltzer cans lined up on the bar overlooking a green lawn.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/4",
      },
    ],
  },
  // Row 4: 50/50
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
  // Row 5: thirds
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
  // Row 6: narrow + wide
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
  // Row 7: thirds
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
  // Row 8: wide + narrow
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
  // Row 9: thirds
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
  // Row 10: full width
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
  // Row 11: thirds (tall) — 34 moved up here
  {
    height: "h-[500px] md:h-[600px]",
    images: [
      {
        src: "/assets/gallery-34-2.jpg",
        alt: "The white Clover Bar Co. mobile bar on an outdoor rug with dried florals and a framed menu in a green forest.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-24-2.jpg",
        alt: "Two Aperol spritzes on a wood table beside a bouquet of orange roses and baby's breath against blooming azaleas.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-33-2.jpg",
        alt: "The Clover bar top set with a gold cocktail shaker, bar tools, two mocktails, and a framed menu in the woods.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
    ],
  },
  // Row 12: thirds (extra tall) — 28 / 25 / 29 together
  {
    height: "h-[560px] md:h-[700px]",
    images: [
      {
        src: "/assets/gallery-28-2.jpg",
        alt: "Close-up of the white Clover Bar Co. bar front with two Aperol spritzes and orange roses on the lawn.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-25-2.jpg",
        alt: "The Clover mocktail bar styled with dried florals, paper straws, and a framed mocktail menu in the woods.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-29-2.jpg",
        alt: "Orange roses and baby's breath beside a framed signature-cocktail menu, halved oranges, and an Aperol spritz.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
    ],
  },
  // Row 13: thirds (tall) — drinks
  {
    height: "h-[500px] md:h-[600px]",
    images: [
      {
        src: "/assets/gallery-17-2.jpg",
        alt: "Two Clover-branded cups on a wood bar rail against a green woodland backdrop, a yellow blueberry drink and a garnished pink drink.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-18-2.jpg",
        alt: "Three Clover mocktails beside dried florals, a jar of paper straws, and a framed menu on the wood bar.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-26-2.jpg",
        alt: "Four watermelon cocktails with lime and paper straws lined up along the bar mat at an outdoor railing.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/3",
      },
    ],
  },
  // Row 14: thirds (tall) — the bars
  {
    height: "h-[500px] md:h-[600px]",
    images: [
      {
        src: "/assets/gallery-21-2.jpg",
        alt: "A monogrammed white mobile bar set with wine, a framed bar menu, and blue hydrangeas at an event.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-27-2.jpg",
        alt: "A full bar setup with wine, Tito's vodka, infused syrups, a garnish caddy, cups, and canned sodas against brick.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/3",
      },
      {
        src: "/assets/gallery-32-2.jpg",
        alt: "The white Clover Bar Co. mobile bar on wheels styled with white and yellow florals against autumn foliage.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/3",
      },
    ],
  },
  // Row 15: quarters — details
  {
    height: "h-[380px] md:h-[460px]",
    images: [
      {
        src: "/assets/gallery-19-2.jpg",
        alt: "Two Aperol spritzes garnished with orange slices beside Clover business cards and halved oranges, azaleas behind.",
        mobileAspect: "aspect-[2/3]",
        widthClass: "w-1/4",
      },
      {
        src: "/assets/gallery-20-2.jpg",
        alt: "Overhead of a chilled garnish tray with fresh lemon slices, mint, and blueberries on the bar.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/4",
      },
      {
        src: "/assets/gallery-22-2.jpg",
        alt: "Behind-the-bar detail with Tito's vodka, house-infused syrups in gold-spouted bottles, an ice bucket, and bar tools.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/4",
      },
      {
        src: "/assets/gallery-31-2.jpg",
        alt: "A framed The Night Before bar menu in dusty blue with blue hydrangeas and monogrammed napkins.",
        mobileAspect: "aspect-[3/4]",
        widthClass: "w-1/4",
      },
    ],
  },
  // Row 16: 50/50 — the two landscape shots
  {
    height: "h-[300px] md:h-[420px]",
    images: [
      {
        src: "/assets/gallery-30-2.jpg",
        alt: "Guests raising pink lemonade shots in a toast at a poolside celebration.",
        mobileAspect: "aspect-[3/2]",
        widthClass: "w-1/2",
      },
      {
        src: "/assets/gallery-23-2.jpg",
        alt: "Overhead of four pink cocktails in stemless cups garnished with lime wedges and purple orchids at a poolside bar.",
        mobileAspect: "aspect-[4/3]",
        widthClass: "w-1/2",
      },
    ],
  },
];
