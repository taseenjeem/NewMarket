import { FeatureInfoType } from "@/types";
import { Plane, ShieldCheck } from "lucide-react";
import { TbTruckReturn } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

const features: FeatureInfoType[] = [
  {
    id: "1",
    icon: Plane,
    title: "Fast & Free Shipping",
    description:
      "Enjoy lightning-fast, free delivery on every order over $50, worldwide.",
  },
  {
    id: "2",
    icon: TbTruckReturn,
    title: "Seamless Returns",
    description:
      "Changed your mind? No problem. Our 30-day, hassle-free return policy has you covered.",
  },
  {
    id: "3",
    icon: ShieldCheck,
    title: "Secure Checkout",
    description:
      "Shop with total confidence. Our advanced encryption protects your payment and personal data.",
  },
  {
    id: "4",
    icon: RiCustomerService2Fill,
    title: "24/7 Customer Care",
    description:
      "Our dedicated support team is available around the clock to help you with any question.",
  },
];

export default function Features() {
  return (
    <div className="container mx-auto my-12 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-secondary flex flex-col rounded-xl border px-5 py-6 shadow-xl"
        >
          <div className="bg-muted mb-3 flex h-10 w-10 items-center justify-center rounded-full">
            <feature.icon className="size-8 md:size-10" />
          </div>
          <span className="font-semibold md:text-lg">{feature.title}</span>
          <p className="text-foreground/80 mt-1 text-xs md:text-base">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
