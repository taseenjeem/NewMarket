"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/category-slider.css";
import Slider from "react-slick";
import categoryData from "@/json/categories.json";
import { ProductCategoryType } from "@/types";
import Link from "next/link";
import Image from "next/image";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function CategorySlider() {
  return (
    <section className="container mx-auto px-2 py-6 sm:px-4 sm:py-8 md:py-10 lg:py-12">
      <div className="category-slider">
        <Slider {...settings}>
          {categoryData.map((data: ProductCategoryType) => (
            <Link
              href={`/${data.slug}`}
              key={data.id}
              className="px-1 sm:px-2 md:px-3"
            >
              <div className="group cursor-pointer">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 xl:h-48 xl:w-48">
                  <Image
                    fill
                    src={data.thumbnail}
                    alt={data.category_name}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="from-foreground/70 via-foreground/20 absolute inset-0 flex items-end justify-center bg-gradient-to-t to-transparent pb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:pb-4 md:pb-5 lg:pb-6">
                    <h3 className="text-background translate-y-2 transform px-2 text-center text-sm font-semibold transition-transform duration-300 group-hover:translate-y-0 sm:translate-y-3 sm:px-3 sm:text-base md:translate-y-4 md:px-4 md:text-lg">
                      {data.category_name}
                    </h3>
                  </div>
                </div>
                <div className="mt-2 text-center sm:mt-3 md:mt-4">
                  <h3 className="text-foreground text-sm font-medium transition-colors duration-300 sm:text-base md:text-lg">
                    {data.category_name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}
