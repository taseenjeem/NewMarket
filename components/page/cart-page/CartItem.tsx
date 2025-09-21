"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch } from "@/store";
import {
  updateQuantity,
  removeFromCart,
  CartItem as CartItemType,
} from "@/store/slices/cartSlice";
import { toast } from "sonner";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1) return;

    setIsUpdating(true);
    try {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
      toast.success("Quantity updated");
    } catch (error) {
      toast.error("Failed to update quantity");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          {/* Product Image */}
          <div className="relative h-20 w-20 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="rounded-md object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-semibold">{item.name}</h3>
            {item.category && (
              <p className="text-muted-foreground text-sm">{item.category}</p>
            )}
            {item.description && (
              <p className="text-muted-foreground mt-1 truncate text-sm">
                {item.description}
              </p>
            )}
            <p className="mt-2 text-lg font-bold">${item.price.toFixed(2)}</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={isUpdating || item.quantity <= 1}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="min-w-[2rem] text-center font-semibold">
              {item.quantity}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={isUpdating}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Item Total */}
          <div className="min-w-[80px] text-right">
            <p className="text-lg font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          {/* Remove Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRemoveItem}
            className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
