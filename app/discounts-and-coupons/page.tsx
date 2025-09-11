import type { Metadata } from "next";
import DiscountsContainer from "@/components/page/discounts-and-coupons-page/DiscountsContainer";

export const metadata: Metadata = {
  title: "Discounts & Coupons - New Market | Save More on Every Purchase",
  description: "Discover exclusive discounts, promotional codes, and money-saving coupons at New Market. Get the best deals on electronics, fashion, home goods, and more with our latest offers.",
  keywords: [
    "discounts",
    "coupons",
    "promo codes",
    "deals",
    "savings",
    "offers",
    "promotional codes",
    "sale",
    "bargains",
    "special offers",
    "clearance",
    "flash deals"
  ],
  authors: [{ name: "New Market Team" }],
  creator: "New Market",
  publisher: "New Market",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newmarket.com/discounts-and-coupons",
    title: "Discounts & Coupons - New Market | Save More on Every Purchase",
    description: "Discover exclusive discounts, promotional codes, and money-saving coupons. Get the best deals on all your favorite products.",
    siteName: "New Market",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discounts & Coupons - New Market | Save More on Every Purchase",
    description: "Discover exclusive discounts, promotional codes, and money-saving coupons. Get the best deals on all your favorite products.",
    creator: "@newmarket",
  },
};

export default function DiscountsAndCouponsPage() {
  return (
    <main>
      <DiscountsContainer />
    </main>
  );
}
