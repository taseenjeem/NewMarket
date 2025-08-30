import Link from "next/link";
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

const NavLinks = [
  {
    id: "1",
    link_label: "All Product",
    icon: <GalleryVerticalEnd />,
    href: "/all-product",
  },
  {
    id: "2",
    link_label: "Track Product",
    icon: <Compass />,
    href: "/track-product",
  },
  {
    id: "3",
    link_label: "Discounts & Coupons",
    icon: <CirclePercent />,
    href: "/discount-and-coupons",
  },
  {
    id: "4",
    link_label: "Help & Support",
    icon: <Info />,
    href: "/help-and-support",
  },
  {
    id: "5",
    link_label: "About Us",
    icon: <Building2 />,
    href: "/about-us",
  },
  {
    id: "6",
    link_label: "Returns & Refunds",
    icon: <Undo2 />,
    href: "/returns-and-refunds",
  },
];

export default function SubNavbar() {
  return (
    <nav className="bg-secondary-foreground dark:bg-primary-foreground mt-[79px] hidden lg:block">
      <div className="container mx-auto px-4 py-2">
        <div className="text-primary-foreground dark:text-primary flex w-full items-center gap-10">
          <CategorySheet />
          <div>
            {NavLinks.map((i) => (
              <Link key={i.id} href={i.href}>
                <Button
                  variant={"link"}
                  className="text-primary-foreground dark:text-primary"
                >
                  {i.icon}
                  {i.link_label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
