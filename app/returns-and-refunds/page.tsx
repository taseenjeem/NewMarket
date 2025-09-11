import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Clock,
  Package,
  CreditCard,
  Shield,
  CheckCircle,
  XCircle,
  AlertCircle,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Truck,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Refunds - New Market | Easy Return Policy & Process",
  description: "Learn about New Market's hassle-free return and refund policy. Find step-by-step return instructions, eligible items, refund timeframes, and contact information for return support.",
  keywords: [
    "returns policy",
    "refunds",
    "return process",
    "exchange policy",
    "money back guarantee",
    "return shipping",
    "refund timeframe",
    "return eligibility",
    "product returns",
    "customer returns",
    "return instructions",
    "refund process"
  ],
  authors: [{ name: "New Market Customer Service" }],
  creator: "New Market",
  publisher: "New Market",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newmarket.com/returns-and-refunds",
    title: "Returns & Refunds - New Market | Easy Return Policy & Process",
    description: "Learn about our hassle-free return and refund policy. Step-by-step return instructions and refund information.",
    siteName: "New Market",
  },
  twitter: {
    card: "summary_large_image",
    title: "Returns & Refunds - New Market | Easy Return Policy & Process",
    description: "Learn about our hassle-free return and refund policy. Step-by-step return instructions and refund information.",
    creator: "@newmarket",
  },
};

export default function ReturnsAndRefundsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description:
        "Log into your account and select the item you want to return from your order history.",
      icon: Package,
    },
    {
      step: 2,
      title: "Print Return Label",
      description:
        "Download and print the prepaid return shipping label we provide.",
      icon: Truck,
    },
    {
      step: 3,
      title: "Package & Ship",
      description:
        "Securely package your item and attach the return label, then drop it off.",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Processing",
      description:
        "We'll inspect your return and process your refund within 3-5 business days.",
      icon: RefreshCw,
    },
  ];

  const eligibleItems = [
    {
      category: "Electronics",
      timeframe: "30 days",
      condition: "Original packaging required",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      category: "Clothing & Accessories",
      timeframe: "60 days",
      condition: "Tags attached, unworn",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      category: "Home & Garden",
      timeframe: "45 days",
      condition: "Unused condition",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      category: "Books & Media",
      timeframe: "30 days",
      condition: "No damage or markings",
      icon: CheckCircle,
      color: "text-green-600",
    },
  ];

  const nonEligibleItems = [
    {
      category: "Personalized Items",
      reason: "Custom made to order",
      icon: XCircle,
      color: "text-red-600",
    },
    {
      category: "Perishable Goods",
      reason: "Food safety regulations",
      icon: XCircle,
      color: "text-red-600",
    },
    {
      category: "Digital Downloads",
      reason: "Instant delivery completed",
      icon: XCircle,
      color: "text-red-600",
    },
    {
      category: "Gift Cards",
      reason: "Non-returnable by policy",
      icon: XCircle,
      color: "text-red-600",
    },
  ];

  const refundMethods = [
    {
      method: "Original Payment Method",
      timeframe: "3-5 business days",
      description:
        "Refund will be credited back to your original payment method",
      icon: CreditCard,
    },
    {
      method: "Store Credit",
      timeframe: "Instant",
      description:
        "Receive store credit immediately for faster future purchases",
      icon: Shield,
    },
    {
      method: "Exchange",
      timeframe: "2-3 business days",
      description: "Exchange for a different size, color, or similar item",
      icon: RefreshCw,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            <Shield className="mr-2 h-4 w-4" />
            Hassle-Free Returns
          </Badge>
          <h1 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Returns & Refunds
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed">
            We want you to be completely satisfied with your purchase. If you're
            not happy with your order, we make it easy to return or exchange
            items with our customer-friendly return policy.
          </p>
        </div>

        {/* Quick Info Alert */}
        <div className="mb-12">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-base">
              <strong>Quick Tip:</strong> Most returns are processed within 3-5
              business days. Keep your order confirmation email for faster
              processing.
            </AlertDescription>
          </Alert>
        </div>

        {/* Return Process */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              How to Return an Item
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Follow these simple steps to return your item and get your refund
              processed quickly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {returnSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative">
                  <CardHeader className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-foreground flex items-center justify-center gap-2 text-lg">
                      <IconComponent className="h-5 w-5" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                  {index < returnSteps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="text-muted-foreground h-6 w-6" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Return Policy */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* Eligible Items */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Eligible for Return
              </CardTitle>
              <CardDescription>
                Items that can be returned within the specified timeframes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {eligibleItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border p-4"
                  >
                    <IconComponent className={`mt-1 h-5 w-5 ${item.color}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-foreground font-medium">
                          {item.category}
                        </h4>
                        <Badge variant="outline">{item.timeframe}</Badge>
                      </div>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {item.condition}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Non-Eligible Items */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2 text-2xl">
                <XCircle className="h-6 w-6 text-red-600" />
                Not Eligible for Return
              </CardTitle>
              <CardDescription>
                Items that cannot be returned due to policy restrictions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {nonEligibleItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border p-4"
                  >
                    <IconComponent className={`mt-1 h-5 w-5 ${item.color}`} />
                    <div className="flex-1">
                      <h4 className="text-foreground font-medium">
                        {item.category}
                      </h4>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {item.reason}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Refund Methods */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              Refund Options
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Choose the refund method that works best for you. Processing times
              may vary depending on your selection.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {refundMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-primary/10 rounded-full p-3">
                        <IconComponent className="text-primary h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-foreground text-lg">
                      {method.method}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="text-muted-foreground h-4 w-4" />
                      <span className="text-muted-foreground text-sm">
                        {method.timeframe}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Important Information */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2 text-2xl">
                <AlertCircle className="text-primary h-6 w-6" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="text-foreground font-semibold">
                    Return Conditions
                  </h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      Items must be in original condition
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      Original packaging and tags required
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      Return within specified timeframe
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      Proof of purchase required
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-foreground font-semibold">
                    Processing Times
                  </h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Clock className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      Return inspection: 1-2 business days
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      Refund processing: 3-5 business days
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      Bank processing: 1-3 business days
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      Store credit: Instant upon approval
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground mb-4 text-2xl">
                Need Help with Your Return?
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg">
                Our customer support team is here to assist you with any
                questions about returns, refunds, or exchanges.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    1-800-NEW-MARKET
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    returns@newmarket.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    Mon-Fri 9AM-6PM EST
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">
                  <Package className="mr-2 h-4 w-4" />
                  Start a Return
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
