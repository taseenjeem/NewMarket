"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package } from "lucide-react";

interface OrderSearchFormProps {
  onSearch: (orderId: string, email: string) => void;
  isLoading?: boolean;
}

export default function OrderSearchForm({ onSearch, isLoading = false }: OrderSearchFormProps) {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim() && email.trim()) {
      onSearch(orderId.trim(), email.trim());
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Package className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">Track Your Order</CardTitle>
        <CardDescription>
          Enter your order ID and email address to track your package
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orderId">Order ID</Label>
            <Input
              id="orderId"
              type="text"
              placeholder="e.g., ORD-123456789"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || !orderId.trim() || !email.trim()}
          >
            {isLoading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                Searching...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Track Order
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}