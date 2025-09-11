import type { Metadata } from "next";
import CategorySlider from "@/components/page/landing-page/CategorySlider";
import CouponBanner from "@/components/page/landing-page/CouponBanner";
import Features from "@/components/page/landing-page/Features";
import FlashDeals from "@/components/page/landing-page/FlashDeals";
import MarketingSections from "@/components/page/landing-page/MarketingSections";
import NewArrived from "@/components/page/landing-page/NewArrived";
import Newsletter from "@/components/page/landing-page/Newsletter";
import Testimonials from "@/components/page/landing-page/Testimonials";

export const metadata: Metadata = {
  title: "New Market - Your One-Stop Shop for Everything | Best Deals & Quality Products",
  description: "Discover amazing deals on electronics, fashion, home goods, and more at New Market. Shop with confidence with our quality guarantee, fast shipping, and excellent customer service.",
  keywords: [
    "online shopping",
    "marketplace",
    "deals",
    "electronics",
    "fashion",
    "home goods",
    "best prices",
    "quality products",
    "fast shipping",
    "customer service"
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
    url: "https://newmarket.com",
    title: "New Market - Your One-Stop Shop for Everything",
    description: "Discover amazing deals on electronics, fashion, home goods, and more. Shop with confidence at New Market.",
    siteName: "New Market",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Market - Your One-Stop Shop for Everything",
    description: "Discover amazing deals on electronics, fashion, home goods, and more. Shop with confidence at New Market.",
    creator: "@newmarket",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function LandingPage() {
  return (
    <>
      <MarketingSections />
      <Features />
      <CategorySlider />
      <CouponBanner />
      <FlashDeals />
      <Testimonials />
      <NewArrived />
      <Newsletter />
    </>
  );
}
