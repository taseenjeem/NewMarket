import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReceiptText, ScanLine, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <Card className="h-full py-2 md:py-6">
      <CardHeader className="space-y-2 px-2 md:px-6">
        <div className="relative h-[180px] w-full rounded-lg md:h-[314px]">
          <Image
            fill
            src={"https://i.ibb.co.com/8nMqbXt9/laptop.webp"}
            alt=""
            className="rounded-lg object-cover object-center"
          />
        </div>
        <CardTitle className="text-sm leading-tight md:text-base md:leading-normal">
          Laptop Asus Vivobook I5 1355U, 8GB RAM, 512GB SSD
        </CardTitle>
        <Link href={"#"} className="w-full">
          <Button
            className="w-full text-xs md:text-sm"
            variant={"outline"}
            size="sm"
          >
            <ReceiptText className="h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Show Details</span>
            <span className="sm:hidden">Details</span>
          </Button>
        </Link>
      </CardHeader>
      <Separator />
      <CardContent className="px-2 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-1">
            <p className="text-lg font-semibold md:text-3xl">$120</p>
            <p className="text-muted-foreground text-sm line-through md:text-lg">
              $320
            </p>
          </div>
          <Badge variant={"destructive"} className="text-xs">
            20%
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex gap-1.5 px-2 md:gap-2 md:px-6">
        <Button className="flex-1 text-xs md:text-sm" size="sm">
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
          <span className="hidden sm:inline">Add To Cart</span>
          <span className="sm:hidden">Cart</span>
        </Button>
        <Button className="flex-1 text-xs md:text-sm" size="sm">
          <ScanLine className="h-3 w-3 md:h-4 md:w-4" />
          <span className="hidden sm:inline">Buy Now</span>
          <span className="sm:hidden">Buy</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
