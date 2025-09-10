"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import categoryData from "@/json/categories.json";
import { ProductCategoryType } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function CategorySlider() {
  return (
    <section className="container mx-auto px-2 py-6 sm:px-4 sm:py-8 md:py-10 lg:py-12">
      <div className="category-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 28,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 32,
            },
          }}
        >
          {categoryData.map((data: ProductCategoryType) => (
            <SwiperSlide key={data.id}>
              <Link href={`/${data.slug}`} className="block">
                <div className="group cursor-pointer">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36">
                    <Image
                      fill
                      src={data.thumbnail}
                      alt={data.category_name}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="from-foreground/70 via-foreground/20 absolute inset-0 flex items-end justify-center bg-gradient-to-t to-transparent pb-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:pb-2 md:pb-3 lg:pb-4">
                      <h3 className="text-background translate-y-1 transform px-1 text-center text-xs font-semibold transition-transform duration-300 group-hover:translate-y-0 sm:translate-y-2 sm:px-2 sm:text-sm md:translate-y-3 md:px-3 md:text-base">
                        {data.category_name}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-1 text-center sm:mt-2 md:mt-3">
                    <h3 className="text-foreground text-xs font-medium transition-colors duration-300 sm:text-sm md:text-base lg:text-lg">
                      {data.category_name}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
