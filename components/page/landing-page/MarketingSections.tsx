import { AspectRatio } from "@/components/ui/aspect-ratio";
import MainSlider from "./MainSlider";
import PromotionalSections from "./PromotionalSections";
import SpecialNotice from "./SpecialNotice";

export default function MarketingSections() {
  return (
    <>
      <section className="container mx-auto mt-4 hidden rounded px-4 md:block">
        <AspectRatio
          ratio={16 / 7}
          className="grid size-full grid-cols-2 gap-4 rounded"
        >
          <MainSlider />
          <PromotionalSections />
        </AspectRatio>
      </section>
      <section className="container mx-auto mt-4 rounded px-4 md:hidden">
        <div className="space-y-4">
          <MainSlider />
          <PromotionalSections />
        </div>
      </section>
      <SpecialNotice />
    </>
  );
}
