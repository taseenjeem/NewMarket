import { Gift } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "./CopyButton";

interface CouponBannerProps {
  discount?: string;
  couponCode?: string;
  description?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function CouponBanner({
  discount = "25% OFF",
  couponCode = "COUPON25",
  description = "Super discount for your first purchase",
}: CouponBannerProps) {
  return (
    <section className="container mx-auto my-12 px-4">
      <div className="relative w-full overflow-hidden rounded-lg border border-neutral-200 bg-gradient-to-r from-neutral-100 via-neutral-50 to-neutral-100 shadow-lg dark:border-neutral-700 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.02)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        <div className="relative px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-30 blur-md" />
                  <div className="relative rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-3 shadow-lg">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="flex-shrink-0 animate-pulse border-0 bg-gradient-to-r from-orange-500 to-red-500 text-sm font-bold text-white transition-all duration-300 hover:animate-none"
                  >
                    {discount}
                  </Badge>
                  <span className="text-base font-semibold text-neutral-800 sm:text-lg lg:text-xl dark:text-white">
                    {description}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 lg:text-base dark:text-neutral-300">
                  Use discount code at checkout to save big!
                </p>
              </div>
            </div>
            <div className="flex w-full items-center gap-3 sm:w-auto sm:flex-shrink-0 sm:justify-end">
              <div className="group relative w-full md:w-auto">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-40" />
                <div className="relative w-full rounded-lg border border-neutral-300/50 bg-neutral-200/50 px-4 py-3 backdrop-blur-sm sm:w-auto lg:px-6 dark:border-white/20 dark:bg-white/10">
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-base font-bold tracking-wider text-neutral-800 sm:flex-none lg:text-lg dark:text-white">
                      {couponCode}
                    </code>
                    <CopyButton couponCode={couponCode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 opacity-60" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 dark:via-white/5" />
      </div>
    </section>
  );
}
