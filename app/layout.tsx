import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Time Out — Premium Vegetarian Cafe & Restaurant | Jaipur",
  description:
    "Experience the best pure vegetarian cafe in Jaipur. Enjoy pizzas, burgers, shakes, mocktails and more at our stunning rooftop & poolside restaurant in Jaisinghpura Khor.",
  keywords: [
    "Best vegetarian cafe in Jaipur",
    "Rooftop restaurant Jaisinghpura Khor",
    "The Time Out Jaipur",
    "Pure veg restaurant Jaipur",
    "Poolside cafe Jaipur",
  ],
  openGraph: {
    title: "The Time Out — Premium Vegetarian Cafe & Restaurant",
    description: "Jaipur's favorite rooftop & poolside pure veg cafe. Order online or reserve a table.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream-primary text-ink-primary">
        {children}
      </body>
    </html>
  );
}
