"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, ShoppingCart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        {/* 404 Visual */}
        <div className="relative">
          <div className="text-muted-foreground/20 select-none text-9xl font-bold">
            404
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-foreground text-4xl font-bold">
            Oops! Page Not Found
          </h1>
          <p className="text-muted-foreground mx-auto max-w-md text-xl">
            The page you're looking for seems to have wandered off. Don't worry,
            it happens to the best of us!
          </p>
        </div>

        {/* Action Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="space-y-4 p-6 text-center">
              <Home className="text-primary mx-auto h-12 w-12" />
              <div>
                <h3 className="text-lg font-semibold">Go Home</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Return to our homepage
                </p>
                <Button asChild className="w-full">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="space-y-4 p-6 text-center">
              <ShoppingCart className="text-primary mx-auto h-12 w-12" />
              <div>
                <h3 className="text-lg font-semibold">Browse Products</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Discover amazing deals
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Shop Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="border-border border-t pt-8">
          <p className="text-muted-foreground mb-4 text-sm">
            Or try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/about-us">About Us</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/help-and-support">Help & Support</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/track-order">Track Order</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/discounts-and-coupons">Discounts</Link>
            </Button>
          </div>
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
