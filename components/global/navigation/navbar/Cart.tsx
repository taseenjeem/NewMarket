import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface CartProps {
  isMobile?: boolean;
}

export default function Cart({ isMobile }: CartProps) {
  return (
    <Link href={"/cart"} className="flex items-center gap-2">
      <div className="relative">
        <Button variant="outline" size={isMobile ? "icon" : "default"}>
          <ShoppingCart /> {isMobile ? "" : "Cart"}
        </Button>
        <span className="bg-destructive text-destructive-foreground absolute right-0 top-0 flex min-w-4 origin-center -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full px-1 text-xs">
          2
        </span>
      </div>
    </Link>
  );
}
