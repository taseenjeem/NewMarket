"use client";

import { useState } from "react";
import OrderSearchForm from "./OrderSearchForm";
import OrderStatus from "./OrderStatus";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for demonstration
const mockOrderData = {
  id: "ORD-123456789",
  status: "shipped" as const,
  orderDate: "2024-01-15T10:30:00Z",
  estimatedDelivery: "2024-01-20T18:00:00Z",
  trackingNumber: "1Z999AA1234567890",
  shippingAddress: {
    name: "John Doe",
    street: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States"
  },
  items: [
    {
      id: "item-1",
      name: "Wireless Bluetooth Headphones",
      quantity: 1,
      price: 99.99
    },
    {
      id: "item-2",
      name: "Phone Case - Clear",
      quantity: 2,
      price: 15.99
    }
  ],
  timeline: [
    {
      status: "Order Placed",
      description: "Your order has been successfully placed and is being prepared.",
      date: "2024-01-15T10:30:00Z",
      location: "New York, NY",
      completed: true
    },
    {
      status: "Order Confirmed",
      description: "Payment confirmed and order is being processed.",
      date: "2024-01-15T11:15:00Z",
      location: "New York, NY",
      completed: true
    },
    {
      status: "Preparing for Shipment",
      description: "Your items are being picked and packed at our warehouse.",
      date: "2024-01-16T09:00:00Z",
      location: "Distribution Center, NJ",
      completed: true
    },
    {
      status: "Shipped",
      description: "Your package has been shipped and is on its way to you.",
      date: "2024-01-17T14:30:00Z",
      location: "Distribution Center, NJ",
      completed: true
    },
    {
      status: "In Transit",
      description: "Package is currently in transit to your delivery address.",
      date: "2024-01-18T08:45:00Z",
      location: "Philadelphia, PA",
      completed: true
    },
    {
      status: "Out for Delivery",
      description: "Your package is out for delivery and will arrive today.",
      date: "2024-01-20T07:00:00Z",
      location: "New York, NY",
      completed: false
    },
    {
      status: "Delivered",
      description: "Package has been delivered successfully.",
      date: "2024-01-20T18:00:00Z",
      location: "New York, NY",
      completed: false
    }
  ],
  customerInfo: {
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567"
  }
};

export default function TrackOrderContainer() {
  const [orderData, setOrderData] = useState<typeof mockOrderData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (orderId: string, email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock validation - in real app, this would be an API call
      if (orderId.toLowerCase() === "ord-123456789" && email.toLowerCase() === "john.doe@example.com") {
        setOrderData(mockOrderData);
      } else {
        setError("Order not found. Please check your order ID and email address.");
      }
    } catch (err) {
      setError("An error occurred while searching for your order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSearch = () => {
    setOrderData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {!orderData ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Track Your Order</h1>
              <p className="text-lg text-muted-foreground">
                Enter your order details below to get real-time updates on your package delivery status.
              </p>
            </div>
            
            <OrderSearchForm onSearch={handleSearch} isLoading={isLoading} />
            
            {error && (
              <Alert variant="destructive" className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-3">Demo Credentials</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Use these credentials to test the order tracking:
              </p>
              <div className="space-y-1 text-sm font-mono">
                <p><strong>Order ID:</strong> ORD-123456789</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={handleBackToSearch}
                className="mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Search
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">Order Tracking</h1>
              <p className="text-muted-foreground mt-2">
                Here's the latest information about your order
              </p>
            </div>
            
            <OrderStatus orderData={orderData} />
          </div>
        )}
      </div>
    </div>
  );
}