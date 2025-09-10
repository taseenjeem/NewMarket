import { Card, CardContent } from "@/components/ui/card";
import { TestimonialType } from "@/types";
import { Badge, Quote, Star } from "lucide-react";
import Image from "next/image";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  return (
    <Card className="h-full border-2">
      <CardContent className="p-4 md:p-6">
        <div className="flex h-full flex-col">
          <Quote className="text-primary mb-3 h-8 w-8 opacity-20" />
          <p className="text-foreground/80 mb-4 flex-1 text-sm leading-relaxed md:text-base">
            "{testimonial.testimonial}"
          </p>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12">
              <Image
                fill
                src={testimonial.avatar}
                alt={testimonial.name}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold md:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {testimonial.role}
                  </p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
