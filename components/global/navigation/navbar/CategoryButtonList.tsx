import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCategories from "@/json/categories.json";
import { ProductCategoryInterface } from "@/interfaces";
import { ArrowRight } from "lucide-react";

export default function CategoryButtonList() {
  return (
    <>
      {ProductCategories.map((product: ProductCategoryInterface) => (
        <Link className="w-full" key={product.id} href={product.link}>
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
