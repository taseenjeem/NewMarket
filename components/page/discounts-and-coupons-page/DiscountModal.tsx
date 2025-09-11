"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Copy,
  Check,
  Calendar,
  Tag,
  Percent,
  DollarSign,
  Truck,
  Gift,
  ShoppingCart,
  AlertCircle,
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

interface DiscountModalProps {
  discount: DiscountData | null;
  isOpen: boolean;
  onClose: () => void;
}

const getDiscountIcon = (type: string) => {
  switch (type) {
    case "percentage":
      return Percent;
    case "fixed":
      return DollarSign;
    case "shipping":
      return Truck;
    case "bogo":
      return Gift;
    default:
      return Tag;
  }
};

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

const isExpired = (validUntil: string) => {
  const expiryDate = new Date(validUntil);
  const now = new Date();
  return expiryDate < now;
};

const getDaysRemaining = (validUntil: string) => {
  const expiryDate = new Date(validUntil);
  const now = new Date();
  const diffTime = expiryDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export default function DiscountModal({
  discount,
  isOpen,
  onClose,
}: DiscountModalProps) {
  const [copied, setCopied] = useState(false);

  if (!discount) return null;

  const DiscountIcon = getDiscountIcon(discount.discountType);
  const discountText = getDiscountText(
    discount.discountType,
    discount.discountValue,
  );
  const expired = isExpired(discount.validUntil);
  const daysRemaining = getDaysRemaining(discount.validUntil);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(discount.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader className="pt-4">
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={discount.image}
              alt={discount.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Discount Badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 backdrop-blur-sm">
              <DiscountIcon className="text-primary h-5 w-5" />
              <span className="text-primary text-lg font-bold">
                {discountText}
              </span>
            </div>

            {discount.featured && (
              <Badge className="bg-primary text-primary-foreground absolute left-4 top-4">
                Featured Offer
              </Badge>
            )}

            {expired && (
              <Badge variant="destructive" className="absolute right-4 top-4">
                Expired
              </Badge>
            )}
          </div>

          <DialogTitle className="text-2xl font-bold">
            {discount.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {discount.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Coupon Code Section */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Coupon Code
                </p>
                <div className="flex items-center gap-2">
                  <Tag className="text-primary h-4 w-4" />
                  <span className="font-mono text-lg font-bold">
                    {discount.code}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCopyCode}
                variant="outline"
                size="sm"
                disabled={expired}
                className="flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Code
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Key Information */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                  <Calendar className="text-primary h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Valid Until</p>
                  <p className="text-muted-foreground text-sm">
                    {new Date(discount.validUntil).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {!expired && daysRemaining <= 7 && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-orange-600">
                      <Clock className="h-3 w-3" />
                      {daysRemaining} day{daysRemaining !== 1 ? "s" : ""}{" "}
                      remaining
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                  <ShoppingCart className="text-primary h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Category</p>
                  <Badge variant="outline">{discount.category}</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {discount.minPurchase > 0 && (
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <DollarSign className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Minimum Purchase</p>
                    <p className="text-muted-foreground text-sm">
                      ${discount.minPurchase}
                    </p>
                  </div>
                </div>
              )}

              {discount.maxDiscount && (
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <AlertCircle className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Maximum Discount</p>
                    <p className="text-muted-foreground text-sm">
                      ${discount.maxDiscount}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Terms and Conditions */}
          <div>
            <h4 className="mb-3 flex items-center gap-2 font-semibold">
              <AlertCircle className="h-4 w-4" />
              Terms & Conditions
            </h4>
            <ul className="space-y-2">
              {discount.terms.map((term, index) => (
                <li
                  key={index}
                  className="text-muted-foreground flex list-disc items-start gap-2 text-sm"
                >
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
