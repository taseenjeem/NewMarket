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
import {
  ListCollapse,
  ReceiptText,
  ScanLine,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <Card>
      <CardHeader className="space-y-3.5">
        <div className="relative h-[314px] w-full rounded-lg">
          <Image
            fill
            src={"https://i.ibb.co.com/8nMqbXt9/laptop.webp"}
            alt=""
            className="rounded-lg object-cover object-center"
          />
        </div>
        <CardTitle>Laptop Asus Vivobook I5 1355U, 8GB RAM, 512GB SSD</CardTitle>
        <Link href={"#"} className="w-full">
          <Button className="w-full" variant={"outline"}>
            <ReceiptText />
            Show Details
          </Button>
        </Link>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-1.5">
            <p className="text-3xl font-semibold">$120</p>
            <p className="text-muted-foreground text-lg line-through">$320</p>
          </div>
          <Badge variant={"destructive"}>20%</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1">
          <ShoppingCart />
          Add To Cart
        </Button>
        <Button className="flex-1">
          <ScanLine />
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
