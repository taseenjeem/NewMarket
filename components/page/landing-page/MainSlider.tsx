"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderData from "@/json/main-slider.json";
import Image from "next/image";
import Link from "next/link";

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
    <div className="h-full w-full overflow-hidden rounded bg-green-600">
      <style jsx global>{`
        .slick-slider,
        .slick-list,
        .slick-track {
          height: 100% !important;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
      <Slider {...settings} className="h-full w-full">
        {sliderData.map(({ id, image, alt }) => (
          <div key={id} className="h-full">
            <Link href="/" className="block h-full">
              <div className="relative h-full w-full">
                <Image
                  fill
                  priority
                  src={image}
                  alt={alt}
                  className="rounded object-cover object-center"
                />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
