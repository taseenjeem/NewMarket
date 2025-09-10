import CategorySlider from "@/components/page/landing-page/CategorySlider";
import CouponBanner from "@/components/page/landing-page/CouponBanner";
import Features from "@/components/page/landing-page/Features";
import FlashDeals from "@/components/page/landing-page/FlashDeals";
import MarketingSections from "@/components/page/landing-page/MarketingSections";
import NewArrived from "@/components/page/landing-page/NewArrived";
import Newsletter from "@/components/page/landing-page/Newsletter";
import Testimonials from "@/components/page/landing-page/Testimonials";

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
