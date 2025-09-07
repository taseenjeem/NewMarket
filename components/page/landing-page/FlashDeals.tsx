import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FlashDeals() {
  return (
    <section className="container mx-auto my-24 px-4">
      <div className="flex flex-col flex-wrap justify-between md:flex-row md:items-end">
        <div className="w-full max-w-2xl space-y-3">
          <h2 className="text-center text-3xl font-bold uppercase tracking-widest md:text-left md:text-4xl">
            Flash Deals
          </h2>
          <p className="text-center text-sm md:text-left md:text-base">
            Hurry! Our Flash Deals are limited-time offers on bestselling
            products with insane discounts. But be quick—once they're gone,
            they're gone for good. Check back often because new surprises drop
            when you least expect it! Don't think, just shop!
          </p>
        </div>
        <Link href={""} className="mt-3">
          <Button className="w-full md:w-auto">
            See all products <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
