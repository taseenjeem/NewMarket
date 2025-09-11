import type { Metadata } from "next";
import TrackOrderContainer from "@/components/page/track-order-page/TrackOrderContainer";

export const metadata: Metadata = {
  title: "Track Your Order - New Market | Real-Time Order Tracking",
  description: "Track your New Market order in real-time. Enter your order number to get live updates on shipping status, delivery progress, and estimated arrival time.",
  keywords: [
    "track order",
    "order tracking",
    "shipping status",
    "delivery tracking",
    "order status",
    "package tracking",
    "shipment tracking",
    "delivery updates",
    "order progress",
    "tracking number",
    "order lookup",
    "shipping information"
  ],
  authors: [{ name: "New Market Logistics Team" }],
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
    url: "https://newmarket.com/track-order",
    title: "Track Your Order - New Market | Real-Time Order Tracking",
    description: "Track your order in real-time. Get live updates on shipping status, delivery progress, and estimated arrival time.",
    siteName: "New Market",
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Your Order - New Market | Real-Time Order Tracking",
    description: "Track your order in real-time. Get live updates on shipping status, delivery progress, and estimated arrival time.",
    creator: "@newmarket",
  },
};

export default function TrackOrderPage() {
  return (
    <main>
      <TrackOrderContainer />
    </main>
  );
}
