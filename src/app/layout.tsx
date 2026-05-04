import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* UPDATE: Replace cloverbarco.com with the production domain before launch */
export const metadata: Metadata = {
  metadataBase: new URL("https://cloverbarco.com"),
  title:
    "Clover Mobile Bar Co. | Mobile Bartending in New Hampshire & New England",
  description:
    "Warm, personal, craft-forward mobile bartending for weddings, private parties, and events across New England. Curated cocktails, custom menus, and full bar service brought to you with care.",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Clover Mobile Bar Co. | Mobile Bartending in New Hampshire & New England",
    description:
      "Warm, personal, craft-forward mobile bartending for weddings, private parties, and events across New England.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clover Mobile Bar Co. | Mobile Bartending in New Hampshire & New England",
    description:
      "Warm, personal, craft-forward mobile bartending for weddings, private parties, and events across New England.",
    images: ["/og-image.png"],
  },
  themeColor: "#203F0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink font-body">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
