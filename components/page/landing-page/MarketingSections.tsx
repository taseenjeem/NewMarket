import { AspectRatio } from "@/components/ui/aspect-ratio";
import MainSlider from "./MainSlider";

export default function MarketingSections() {
  return (
    <section className="container mx-auto mt-4 px-4">
      <AspectRatio ratio={16 / 7} className="grid w-full grid-cols-2">
        <MainSlider />
        <div>
          <div></div>
          <div></div>
        </div>
      </AspectRatio>
    </section>
  );
}
