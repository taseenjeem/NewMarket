import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Bell, Zap } from "lucide-react";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/newsletter-bg.webp"
          alt="Newsletter Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Stay in the Loop!
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed md:text-xl lg:text-2xl">
              Subscribe to our newsletter and never miss out on exclusive deals,
              new arrivals, and insider updates!
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="rounded-full bg-white/20 p-3">
                <Gift className="h-8 w-8" />
              </div>
              <span className="text-lg font-semibold">Exclusive Offers</span>
              <p className="text-center text-sm opacity-90">
                Get access to member-only deals
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="rounded-full bg-white/20 p-3">
                <Bell className="h-8 w-8" />
              </div>
              <span className="text-lg font-semibold">Early Access</span>
              <p className="text-center text-sm opacity-90">
                Be first to shop new arrivals
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="rounded-full bg-white/20 p-3">
                <Zap className="h-8 w-8" />
              </div>
              <span className="text-lg font-semibold">Flash Sale Alerts</span>
              <p className="text-center text-sm opacity-90">
                Never miss a lightning deal
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="mx-auto max-w-lg">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 flex-1 border-white/30 bg-white/20 text-lg text-white placeholder:text-white/80 focus:border-white/50 focus:bg-white/30"
                />
                <Button className="h-12 bg-white px-8 text-lg font-bold text-gray-900 shadow-lg hover:bg-gray-100">
                  Subscribe Now
                </Button>
              </div>
              <p className="mt-4 text-center text-sm opacity-90">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-10">
            <div className="inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-pink-400 to-purple-500"></div>
                <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-cyan-500"></div>
                <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-emerald-500"></div>
              </div>
              <p className="text-lg font-medium">
                Join 50,000+ happy subscribers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
