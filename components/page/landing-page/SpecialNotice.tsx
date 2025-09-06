import { Marquee, MarqueeContent, MarqueeFade } from "@/components/ui/marquee";

export default function SpecialNotice() {
  return (
    <Marquee className="bg-background mt-4 w-full md:mt-10 lg:mt-4">
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        <div className="bg-secondary-foreground dark:bg-secondary whitespace-nowrap px-2 py-4 text-sm text-white sm:text-base">
          || 🔥 LIMITED TIME OFFER! 🔥 Enjoy HUGE Savings During Our Site-Wide
          Sale - Get a WHOPPING 50% OFF your entire order when you use code
          NEWMARKET50 at checkout! Plus, EVERY order gets FREE Express Shipping!
          This incredible deal won't last long, so don't miss out! 🛒 Shop Now
          and See the Difference! 🛒 ||
        </div>
      </MarqueeContent>
    </Marquee>
  );
}
