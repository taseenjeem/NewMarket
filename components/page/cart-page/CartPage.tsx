"use client";
import { useAppSelector } from "@/store";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { clearCart } from "@/store/slices/cartSlice";
import { toast } from "sonner";

export default function CartPage() {
  const { items, totalItems, isLoading } = useAppSelector(
    (state) => state.cart,
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClearCart = () => {
    if (items.length === 0) return;

    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  const handleGoBack = () => {
    router.back();
  };

  // Show empty cart if no items
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={handleGoBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>

        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Button variant="ghost" onClick={handleGoBack} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground mt-1">
              {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <Button
            variant="outline"
            onClick={handleClearCart}
            className="text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Cart
          </Button>
        </div>
      </div>

      <Separator className="mb-8" />

      {/* Cart Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-24 rounded-lg bg-gray-200"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
        <div className="p-4">
          <div className="mb-2 text-2xl">🚚</div>
          <h3 className="mb-1 font-semibold">Free Shipping</h3>
          <p className="text-muted-foreground text-sm">On orders over $50</p>
        </div>

        <div className="p-4">
          <div className="mb-2 text-2xl">🔒</div>
          <h3 className="mb-1 font-semibold">Secure Payment</h3>
          <p className="text-muted-foreground text-sm">
            SSL encrypted checkout
          </p>
        </div>

        <div className="p-4">
          <div className="mb-2 text-2xl">↩️</div>
          <h3 className="mb-1 font-semibold">Easy Returns</h3>
          <p className="text-muted-foreground text-sm">30-day return policy</p>
        </div>
      </div>
    </div>
  );
}
