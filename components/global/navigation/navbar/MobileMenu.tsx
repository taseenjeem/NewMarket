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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu } from "lucide-react";
import MenuTabContents from "./MenuTabContents";
import CategoryTabContents from "./CategoryTabContents";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-0">
          <SheetTitle>New Market</SheetTitle>
          <SheetDescription>
            Find the best shortcuts to make you shopping more easier.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="px-4">
          <Tabs defaultValue="menu" className="w-full">
            <TabsList>
              <TabsTrigger value="menu">Menu</TabsTrigger>
              <TabsTrigger value="shop by category">
                Shop By Category
              </TabsTrigger>
            </TabsList>
            <TabsContent value="menu">
              <MenuTabContents />
            </TabsContent>
            <TabsContent value="shop by category">
              <CategoryTabContents />
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
