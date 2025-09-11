import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Tag,
  Percent,
  DollarSign,
  Truck,
  Gift,
  Clock,
} from "lucide-react";

interface DiscountData {
  id: string;
  title: string;
  description: string;
  discountType: "percentage" | "fixed" | "shipping" | "bogo";
  discountValue: number;
  code: string;
  image: string;
  category: string;
  validUntil: string;
  minPurchase: number;
  maxDiscount: number | null;
  terms: string[];
  featured: boolean;
  status: string;
}

interface DiscountCardProps {
  discount: DiscountData;
  onClick: () => void;
}

const getDiscountText = (type: string, value: number) => {
  switch (type) {
    case "percentage":
      return `${value}% OFF`;
    case "fixed":
      return `$${value} OFF`;
    case "shipping":
      return "FREE SHIPPING";
    case "bogo":
      return "BUY 2 GET 1 FREE";
    default:
      return "DISCOUNT";
  }
};

const isExpiringSoon = (validUntil: string) => {
  const expiryDate = new Date(validUntil);
  const now = new Date();
  const diffTime = expiryDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7 && diffDays > 0;
};

const isExpired = (validUntil: string) => {
  const expiryDate = new Date(validUntil);
  const now = new Date();
  return expiryDate < now;
};

export default function DiscountCard({ discount, onClick }: DiscountCardProps) {
  const discountText = getDiscountText(
    discount.discountType,
    discount.discountValue,
  );
  const expiringSoon = isExpiringSoon(discount.validUntil);
  const expired =
    isExpired(discount.validUntil) || discount.status === "expired";

  return (
    <Card
      className={`bg-background group cursor-pointer transition-all duration-300 hover:shadow-lg ${
        discount.featured ? "ring-primary/20 ring-2" : ""
      } ${expired ? "border-2 border-red-200 opacity-60" : ""}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        {discount.featured && !expired && (
          <Badge className="bg-primary text-primary-foreground absolute left-3 top-3 z-10">
            Featured
          </Badge>
        )}
        {expiringSoon && !expired && (
          <Badge
            variant="destructive"
            className="absolute right-3 top-3 z-10 flex items-center gap-1"
          >
            <Clock className="h-3 w-3" />
            Ending Soon
          </Badge>
        )}
        {expired && (
          <Badge
            variant="destructive"
            className="absolute right-3 top-3 z-10 bg-red-600 font-semibold text-white"
          >
            EXPIRED
          </Badge>
        )}

        <div className="relative h-48 w-full">
          <Image
            src={discount.image}
            alt={discount.title}
            fill
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              expired ? "opacity-50 grayscale" : ""
            }`}
          />
          {/* Discount Badge */}
          <Badge className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-3 py-2">
            <span className="text-sm font-bold">{discountText}</span>
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle
            className={`group-hover:text-primary line-clamp-2 text-lg transition-colors ${
              expired ? "text-gray-500 line-through" : ""
            }`}
          >
            {discount.title}
          </CardTitle>
        </div>
        <CardDescription
          className={`line-clamp-2 ${expired ? "text-gray-400" : ""}`}
        >
          {discount.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Category and Code */}
          <div className="flex items-center justify-between text-sm">
            <Badge variant="outline" className="text-xs">
              {discount.category}
            </Badge>
            <Badge
              className={`bg-muted flex items-center gap-1 rounded px-2 py-1 font-mono text-xs text-white ${
                expired ? "bg-gray-100 text-gray-400" : ""
              }`}
            >
              <Tag className="h-3 w-3" />
              {discount.code}
            </Badge>
          </div>

          {/* Purchase Requirements */}
          {discount.minPurchase > 0 && (
            <div className="text-xs text-gray-500">
              Min. purchase: ${discount.minPurchase}
              {discount.maxDiscount &&
                ` • Max. discount: $${discount.maxDiscount}`}
            </div>
          )}

          {/* Expiry Date */}
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Calendar className="h-3 w-3" />
            <span>
              Valid until{" "}
              {new Date(discount.validUntil).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
