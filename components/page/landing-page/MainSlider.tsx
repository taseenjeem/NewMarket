"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import sliderData from "@/json/main-slider.json";
import Image from "next/image";
import Link from "next/link";

export default function MainSlider() {
  return (
    <div className="h-full w-full overflow-hidden rounded">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={500}
        className="h-full w-full"
      >
        {sliderData.map(({ id, image, alt }) => (
          <SwiperSlide key={id} className="h-full">
            <Link href="/" className="block h-full">
              <div className="relative h-[343px] lg:size-full">
                <Image
                  fill
                  priority
                  src={image}
                  alt={alt}
                  className="rounded object-cover object-center"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
