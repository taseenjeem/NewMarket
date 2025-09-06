import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCategories from "@/json/categories.json";
import { ArrowRight } from "lucide-react";
import { ProductCategoryType } from "@/types";

export default function CategoryButtonList() {
  return (
    <>
      {ProductCategories.map((product: ProductCategoryType) => (
        <Link className="w-full" key={product.id} href={product.slug}>
          <Button
            variant={"ghost"}
            className="hover:bg-primary hover:text-primary-foreground dark:hover:text-primary flex w-full items-center justify-between"
          >
            {product.category_name}
            <ArrowRight />
          </Button>
        </Link>
      ))}
    </>
  );
}
