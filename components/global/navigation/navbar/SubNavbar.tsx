import Link from "next/link";
import CategorySheet from "./CategorySheet";
import { Button } from "@/components/ui/button";
import {
  Building2,
  CirclePercent,
  Compass,
  GalleryVerticalEnd,
  HatGlasses,
  Info,
  Undo2,
} from "lucide-react";
import SearchInput from "./SearchInput";

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
  {
    id: "7",
    link_label: "Privacy & Policy",
    icon: <HatGlasses />,
    href: "/privacy-and-policy",
  },
];

export default function SubNavbar() {
  return (
    <nav className="bg-secondary-foreground dark:bg-primary-foreground mt-[72px] lg:my-[79px]">
      <div className="container mx-auto px-4 py-4 lg:py-2">
        <div className="text-primary-foreground dark:text-primary hidden w-full items-center gap-10 lg:flex">
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
        <div className="block lg:hidden">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}
