import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Bell, Zap } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Header */}
          <div className="mb-8">
            <Mail className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Stay in the Loop!
            </h2>
            <p className="text-lg opacity-90 md:text-xl">
              Subscribe to our newsletter and never miss out on exclusive deals,
              new arrivals, and insider updates!
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2">
              <Gift className="h-8 w-8" />
              <span className="text-sm font-medium">Exclusive Offers</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Bell className="h-8 w-8" />
              <span className="text-sm font-medium">Early Access</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Zap className="h-8 w-8" />
              <span className="text-sm font-medium">Flash Sale Alerts</span>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="mx-auto max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button className="bg-white px-8 font-semibold text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-xs opacity-75">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-sm opacity-75">
            <p>
              Join 50,000+ happy subscribers already getting the best deals!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
