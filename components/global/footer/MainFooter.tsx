import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CreditCard,
  Shield,
  Truck,
  RotateCcw,
  Heart,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import ScrollToTopButton from "./ScrollToTopButton";

export default function MainFooter() {
  return (
    <footer className="bg-background border-t">
      {/* Trust Badges Section */}
      <div className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center justify-center space-x-3 text-center">
              <Truck className="text-primary h-8 w-8" />
              <div>
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-muted-foreground text-xs">Orders over $50</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-center">
              <RotateCcw className="text-primary h-8 w-8" />
              <div>
                <p className="text-sm font-semibold">Easy Returns</p>
                <p className="text-muted-foreground text-xs">30-day policy</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-center">
              <Shield className="text-primary h-8 w-8" />
              <div>
                <p className="text-sm font-semibold">Secure Payment</p>
                <p className="text-muted-foreground text-xs">SSL Protected</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-center">
              <Clock className="text-primary h-8 w-8" />
              <div>
                <p className="text-sm font-semibold">24/7 Support</p>
                <p className="text-muted-foreground text-xs">Always here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/new-market-logo-black.png"
                alt="NewMarket Logo"
                width={40}
                height={40}
                className="dark:hidden"
              />
              <Image
                src="/images/new-market-logo-white.png"
                alt="NewMarket Logo"
                width={40}
                height={40}
                className="hidden dark:block"
              />
              <span className="text-xl font-bold">NewMarket</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted online marketplace for quality products at unbeatable
              prices. Discover amazing deals and shop with confidence.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaYoutube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact",
                "FAQ",
                "Shipping Info",
                "Returns",
                "Size Guide",
                "Track Order",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              {[
                "Electronics",
                "Fashion",
                "Home & Garden",
                "Sports",
                "Books",
                "Beauty",
                "Automotive",
              ].map((category) => (
                <li key={category}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="text-primary h-4 w-4" />
                <span className="text-muted-foreground">
                  123 Market St, City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="text-primary h-4 w-4" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="text-primary h-4 w-4" />
                <span className="text-muted-foreground">
                  support@newmarket.com
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Stay Updated</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 text-sm"
                />
                <Button size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-6 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 NewMarket. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="text-muted-foreground h-5 w-5" />
              <span className="text-muted-foreground text-sm">
                Secure Payments
              </span>
            </div>
            <ScrollToTopButton />
          </div>
        </div>
      </div>

      {/* Made with Love Badge */}
      <div className="bg-primary/5 py-2">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground flex items-center justify-center space-x-1 text-center text-xs">
            <span>Made with</span>
            <Heart className="h-3 w-3 fill-current text-red-500" />
            <span>for amazing shopping experiences</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
