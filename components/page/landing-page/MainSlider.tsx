"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderData from "@/json/main-slider.json";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function MainSlider() {
  return (
    <AspectRatio ratio={8 / 7}>
      <Slider {...settings}>
        {sliderData.map((data) => (
          <AspectRatio ratio={8 / 7} key={data.id} className="relative">
            <Image
              fill
              priority
              src={data.image}
              alt={data.alt}
              className="absolute object-cover object-center"
            />
          </AspectRatio>
        ))}
      </Slider>
    </AspectRatio>
  );
}
