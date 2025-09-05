import { AspectRatio } from "@/components/ui/aspect-ratio";
import MainSlider from "./MainSlider";
import PromotionalSections from "./PromotionalSections";

export default function MarketingSections() {
  return (
    <section className="container mx-auto mt-4 rounded px-4">
      <AspectRatio
        ratio={16 / 7}
        className="grid size-full grid-cols-2 gap-4 rounded"
      >
        <MainSlider />
        <PromotionalSections />
      </AspectRatio>
    </section>
  );
}
