import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import CategoryButtonList from "./CategoryButtonList";

export default function CategorySheet() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="text-primary font-semibold uppercase"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Shop By Category</SheetTitle>
            <SheetDescription>
              Find exactly what you're looking for in NEW MARKET
            </SheetDescription>
          </SheetHeader>
          <Separator />
          <div className="grid flex-1 auto-rows-min px-4">
            <CategoryButtonList />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
