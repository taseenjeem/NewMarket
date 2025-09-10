import ProductCard from "@/components/global/cards/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewArrived() {
  return (
    <section className="container mx-auto my-24 px-4">
      <div className="flex flex-col flex-wrap justify-between md:flex-row md:items-end">
        <div className="w-full max-w-2xl space-y-3">
          <h2 className="text-center text-3xl font-bold uppercase tracking-widest md:text-left md:text-4xl">
            New Arrivals
          </h2>
          <p className="text-center text-sm md:text-left md:text-base">
            Discover the latest trends and hottest products that just landed in our store!
            From cutting-edge technology to fashion-forward designs, our new arrivals
            bring you the freshest selection. Be the first to get your hands on these
            must-have items before everyone else!
          </p>
        </div>
        <Link href={""} className="mt-3">
          <Button className="w-full md:w-auto">
            View all new items <ArrowRight />
          </Button>
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-1.5 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}