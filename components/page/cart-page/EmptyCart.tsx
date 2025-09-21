"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmptyCart() {
  const router = useRouter();

  const handleStartShopping = () => {
    router.push("/");
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          {/* Empty Cart Icon */}
          <div className="mb-6">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
          </div>

          {/* Empty Cart Message */}
          <h2 className="mb-2 text-2xl font-bold">Your cart is empty</h2>

          <p className="mb-6">
            Looks like you haven't added any items to your cart yet. Start
            shopping to fill it up!
          </p>

          {/* Call to Action Button */}
          <Button onClick={handleStartShopping} size="lg" className="w-full">
            Start Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Additional Links */}
          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-500">
              Need help finding something?
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <button
                className="text-blue-400 hover:underline"
                onClick={() => router.push("/help-and-support")}
              >
                Contact Support
              </button>
              <span className="text-gray-300">|</span>
              <button
                className="text-blue-400 hover:underline"
                onClick={() => router.push("/discounts-and-coupons")}
              >
                View Deals
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
