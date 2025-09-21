"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAppSelector } from "@/store";
import { ShoppingCart, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CartSummary() {
  const { totalItems, totalAmount } = useAppSelector((state) => state.cart);
  const router = useRouter();

  // Calculate additional costs
  const subtotal = totalAmount;
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
  const total = subtotal + tax + shipping;

  const handleCheckout = () => {
    if (totalItems === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Here you would typically integrate with a payment processor
    toast.success("Redirecting to checkout...");
    // router.push("/checkout");
  };

  const handleContinueShopping = () => {
    router.push("/");
  };

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Items Count */}
        <div className="flex justify-between text-sm">
          <span>Items ({totalItems})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span className={shipping === 0 ? "font-medium text-green-600" : ""}>
            {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        {/* Tax */}
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <Separator />

        {/* Total */}
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        {/* Free Shipping Notice */}
        {subtotal < 50 && subtotal > 0 && (
          <div className="text-muted-foreground rounded-md bg-blue-50 p-3 text-sm">
            Add ${(50 - subtotal).toFixed(2)} more for free shipping!
          </div>
        )}

        {/* Checkout Button */}
        <Button
          onClick={handleCheckout}
          disabled={totalItems === 0}
          className="w-full"
          size="lg"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Proceed to Checkout
        </Button>

        {/* Continue Shopping */}
        <Button
          variant="outline"
          onClick={handleContinueShopping}
          className="w-full"
        >
          Continue Shopping
        </Button>

        {/* Security Notice */}
        <div className="text-muted-foreground mt-4 text-center text-xs">
          🔒 Secure checkout with SSL encryption
        </div>
      </CardContent>
    </Card>
  );
}
