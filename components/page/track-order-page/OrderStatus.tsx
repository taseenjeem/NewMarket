import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  User,
  Mail,
  Phone,
} from "lucide-react";

interface OrderData {
  id: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  orderDate: string;
  estimatedDelivery: string;
  trackingNumber: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image?: string;
  }[];
  timeline: {
    status: string;
    description: string;
    date: string;
    location?: string;
    completed: boolean;
  }[];
  customerInfo: {
    email: string;
    phone?: string;
  };
}

interface OrderStatusProps {
  orderData: OrderData;
}

const statusConfig = {
  pending: { color: "bg-yellow-500", label: "Pending", icon: Clock },
  processing: { color: "bg-blue-500", label: "Processing", icon: Package },
  shipped: { color: "bg-purple-500", label: "Shipped", icon: Truck },
  delivered: { color: "bg-green-500", label: "Delivered", icon: CheckCircle },
  cancelled: { color: "bg-red-500", label: "Cancelled", icon: Clock },
};

export default function OrderStatus({ orderData }: OrderStatusProps) {
  const currentStatus = statusConfig[orderData.status];
  const StatusIcon = currentStatus.icon;

  return (
    <div className="space-y-6">
      {/* Order Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                Order #{orderData.id}
              </CardTitle>
              <CardDescription className="mt-1">
                Placed on{" "}
                {new Date(orderData.orderDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </CardDescription>
            </div>
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-3 py-2"
            >
              {currentStatus.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <StatusIcon className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Current Status</p>
                <p className="text-muted-foreground text-sm">
                  {currentStatus.label}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <Truck className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Tracking Number</p>
                <p className="text-muted-foreground font-mono text-sm">
                  {orderData.trackingNumber}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <Calendar className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Estimated Delivery</p>
                <p className="text-muted-foreground text-sm">
                  {new Date(orderData.estimatedDelivery).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    },
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Order Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Order Timeline</CardTitle>
            <CardDescription>Track your order progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orderData.timeline.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        event.completed
                          ? "bg-green-500 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {event.completed ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    {index < orderData.timeline.length - 1 && (
                      <div
                        className={`h-8 w-px ${
                          event.completed ? "bg-green-200" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center justify-between">
                      <p
                        className={`font-medium ${
                          event.completed
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {event.status}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {event.description}
                    </p>
                    {event.location && (
                      <div className="mt-2 flex items-center gap-1">
                        <MapPin className="text-muted-foreground h-3 w-3" />
                        <p className="text-muted-foreground text-xs">
                          {event.location}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Shipping Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">{orderData.shippingAddress.name}</p>
                <p className="text-muted-foreground text-sm">
                  {orderData.shippingAddress.street}
                </p>
                <p className="text-muted-foreground text-sm">
                  {orderData.shippingAddress.city},{" "}
                  {orderData.shippingAddress.state}{" "}
                  {orderData.shippingAddress.zipCode}
                </p>
                <p className="text-muted-foreground text-sm">
                  {orderData.shippingAddress.country}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-muted-foreground h-4 w-4" />
                  <p className="text-sm">{orderData.customerInfo.email}</p>
                </div>
                {orderData.customerInfo.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="text-muted-foreground h-4 w-4" />
                    <p className="text-sm">{orderData.customerInfo.phone}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
          <CardDescription>
            {orderData.items.length} item(s) in this order
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orderData.items.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                      <Package className="text-muted-foreground h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-muted-foreground text-sm">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>
                {index < orderData.items.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
            <Separator />
            <div className="flex items-center justify-between font-semibold">
              <p>Total</p>
              <p>
                $
                {orderData.items
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
