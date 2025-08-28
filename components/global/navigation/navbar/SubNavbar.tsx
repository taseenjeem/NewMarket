import Link from "next/link";
import Container from "../../container/Container";
import CategorySheet from "./CategorySheet";
import { Button } from "@/components/ui/button";
import {
  Building2,
  CirclePercent,
  Compass,
  GalleryVerticalEnd,
  Info,
  Undo2,
} from "lucide-react";

export default function SubNavbar() {
  return (
    <nav className="bg-secondary-foreground dark:bg-primary-foreground mt-[78px]">
      <Container size="full" paddingX="2xl" paddingY="md">
        <div className="text-primary-foreground dark:text-primary flex w-full items-center gap-10">
          <CategorySheet />
          <div>
            <Link href={"/all-products"}>
              <Button
                variant={"link"}
                className="text-primary-foreground dark:text-primary"
              >
                <GalleryVerticalEnd />
                All Products
              </Button>
            </Link>
            <Link href={"/track-product"}>
              <Button
                variant={"link"}
                className="text-primary-foreground dark:text-primary"
              >
                <Compass />
                Track Product
              </Button>
            </Link>
            <Link href={"/discount-and-coupons"}>
              <Button
                variant={"link"}
                className="text-primary-foreground dark:text-primary"
              >
                <CirclePercent />
                Discounts & Coupons
              </Button>
            </Link>
            <Link href={"/help-and-support"}>
              <Button
                variant={"link"}
                className="text-primary-foreground dark:text-primary"
              >
                <Info />
                Help & Support
              </Button>
            </Link>
            <Link href={"/about-us"}>
              <Button
                variant={"link"}
                className="text-primary-foreground dark:text-primary"
              >
                <Building2 />
                About Us
              </Button>
            </Link>
            <Link href={"/returns-and-refunds"}>
              <Button
                variant={"link"}
                className="text-primary-foreground dark:text-primary"
              >
                <Undo2 />
                Returns & Refunds
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
