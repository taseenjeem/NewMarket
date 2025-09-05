import { Button } from "@/components/ui/button";
import {
  Building2,
  CirclePercent,
  Compass,
  GalleryVerticalEnd,
  HatGlasses,
  Info,
  LogOut,
  Settings,
  Undo2,
  User,
} from "lucide-react";
import Link from "next/link";

type MenuItem = {
  href: string;
  label: string;
  icon: React.ElementType;
  variant?: "outline" | "destructive";
};

function MenuSection({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <>
      <div className="text-muted-foreground w-full border-b pb-1.5 text-xs font-bold uppercase">
        {title}
      </div>
      <div className="mb-4 mt-2 flex flex-col gap-y-2">
        {items.map(({ href, label, icon: Icon, variant = "outline" }) => (
          <Link key={label} href={href}>
            <Button className="w-full" size="sm" variant={variant}>
              <Icon /> {label}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}

export default function MenuTabContents() {
  return (
    <>
      <MenuSection
        title="Accounts"
        items={[
          { href: "", label: "My Account", icon: User },
          { href: "", label: "Settings", icon: Settings },
          { href: "", label: "Sign Out", icon: LogOut, variant: "destructive" },
        ]}
      />
      <MenuSection
        title="Shopping"
        items={[
          { href: "", label: "All Products", icon: GalleryVerticalEnd },
          { href: "", label: "Track Product", icon: Compass },
          { href: "", label: "Discounts & Coupons", icon: CirclePercent },
        ]}
      />
      <MenuSection
        title="About Us"
        items={[
          { href: "", label: "Help & Support", icon: Info },
          { href: "", label: "About Us", icon: Building2 },
          { href: "", label: "Returns & Refunds", icon: Undo2 },
          { href: "", label: "Privacy & Policy", icon: HatGlasses },
        ]}
      />
    </>
  );
}
