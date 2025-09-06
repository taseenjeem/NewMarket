import { Marquee, MarqueeContent, MarqueeFade } from "@/components/ui/marquee";

export default function SpecialNotice() {
  return (
    <div className="bg-background mt-4 flex size-full items-center justify-center">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          <div className="bg-secondary-foreground dark:bg-secondary py-4 text-white">
            | 🔥 LIMITED TIME OFFER! 🔥 Enjoy HUGE Savings During Our Site-Wide
            Sale - Get a WHOPPING 50% OFF your entire order when you use code
            NEWMARKET50 at checkout! Plus, EVERY order gets FREE Express
            Shipping! This incredible deal won't last long, so don't miss out!
            🛒 Shop Now and See the Difference! 🛒 |
          </div>
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
