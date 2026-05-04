/* UPDATE: Replace cloverbarco.com with the production domain before launch */
const BASE_URL = "https://cloverbarco.com";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: "Clover Mobile Bar Co.",
  description:
    "Mobile bartending service for weddings, private parties, and corporate events across New England. Custom cocktails, full bar setup, and professional service.",
  url: BASE_URL,
  email: "cloverbarco@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "NH",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "GeoCircle",
    name: "New England",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 43.2,
      longitude: -71.5,
    },
  },
  priceRange: "$$",
  image: `${BASE_URL}/og-image.png`,
  sameAs: [
    "https://instagram.com/cloverbarco",
    "https://www.facebook.com/people/Clover-Bar-Co/61585967311366/",
  ],
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

export function BreadcrumbSchema({ pageName, pageUrl }: { pageName: string; pageUrl: string }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...(pageName !== "Home"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: pageName,
              item: `${BASE_URL}${pageUrl}`,
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "EventPlanner",
      name: "Clover Mobile Bar Co.",
      url: BASE_URL,
    },
    areaServed: "New England",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  );
}
