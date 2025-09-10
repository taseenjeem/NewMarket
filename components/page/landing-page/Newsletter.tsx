import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Bell, Zap } from "lucide-react";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative py-16 overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
              Stay in the Loop!
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss out on exclusive deals,
              new arrivals, and insider updates!
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="p-3 bg-white/20 rounded-full">
                <Gift className="h-8 w-8" />
              </div>
              <span className="text-lg font-semibold">Exclusive Offers</span>
              <p className="text-sm opacity-90 text-center">Get access to member-only deals</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="p-3 bg-white/20 rounded-full">
                <Bell className="h-8 w-8" />
              </div>
              <span className="text-lg font-semibold">Early Access</span>
              <p className="text-sm opacity-90 text-center">Be first to shop new arrivals</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="p-3 bg-white/20 rounded-full">
                <Zap className="h-8 w-8" />
              </div>
              <span className="text-lg font-semibold">Flash Sale Alerts</span>
              <p className="text-sm opacity-90 text-center">Never miss a lightning deal</p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="mx-auto max-w-lg">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-12 bg-white/20 border-white/30 text-white placeholder:text-white/80 focus:bg-white/30 focus:border-white/50 text-lg"
                />
                <Button className="h-12 bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 text-lg shadow-lg">
                  Subscribe Now
                </Button>
              </div>
              <p className="mt-4 text-sm opacity-90 text-center">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-lg font-medium">Join 50,000+ happy subscribers!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}