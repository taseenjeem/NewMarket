import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { TestimonialType } from "@/types";
import TestimonialCard from "./TestimonialCard";

const testimonials: TestimonialType[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    testimonial:
      "Amazing quality and super fast delivery! The laptop I ordered exceeded my expectations. New Market has become my go-to store for electronics.",
    product: "Laptop Asus Vivobook",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Tech Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    testimonial:
      "Best prices I've found anywhere! The customer service is outstanding and they really care about their customers. Highly recommended!",
    product: "Gaming Setup",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Fashion Blogger",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 4,
    testimonial:
      "Love the variety of products available. From tech to fashion, they have everything I need. The mobile app makes shopping so convenient!",
    product: "Fashion Collection",
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Small Business Owner",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: 5,
    testimonial:
      "Bulk ordering for my office was seamless. Great discounts and the team helped me choose the right products for our needs.",
    product: "Office Equipment",
  },
  {
    id: "5",
    name: "Lisa Park",
    role: "Home Decorator",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    testimonial:
      "The home decor section is fantastic! Beautiful products at unbeatable prices. My living room transformation was a huge success.",
    product: "Home & Decor",
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Photography Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 4,
    testimonial:
      "Found the perfect camera gear here. The product descriptions are detailed and accurate. Shipping was faster than expected!",
    product: "Camera Equipment",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto my-16 px-4 md:my-24">
      <div className="mb-10 text-center md:mb-16">
        <h2 className="mb-4 text-2xl font-bold uppercase tracking-widest md:text-4xl">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base">
          Don't just take our word for it. Here's what thousands of satisfied
          customers have to say about their shopping experience with New Market.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-8">
        <div className="text-center">
          <p className="text-primary text-2xl font-bold md:text-4xl">50K+</p>
          <p className="text-muted-foreground mt-1 text-xs md:text-sm">
            Happy Customers
          </p>
        </div>
        <div className="text-center">
          <p className="text-primary text-2xl font-bold md:text-4xl">4.9</p>
          <p className="text-muted-foreground mt-1 text-xs md:text-sm">
            Average Rating
          </p>
        </div>
        <div className="text-center">
          <p className="text-primary text-2xl font-bold md:text-4xl">99%</p>
          <p className="text-muted-foreground mt-1 text-xs md:text-sm">
            Satisfaction Rate
          </p>
        </div>
        <div className="text-center">
          <p className="text-primary text-2xl font-bold md:text-4xl">24/7</p>
          <p className="text-muted-foreground mt-1 text-xs md:text-sm">
            Customer Support
          </p>
        </div>
      </div>
    </section>
  );
}
