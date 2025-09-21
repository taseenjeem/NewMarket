import CartPage from "@/components/page/cart-page/CartPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | NewMarket",
  description:
    "Review and manage items in your shopping cart. Update quantities, remove items, and proceed to checkout.",
  keywords: [
    "shopping cart",
    "cart",
    "checkout",
    "ecommerce",
    "online shopping",
  ],
  openGraph: {
    title: "Shopping Cart | NewMarket",
    description:
      "Review and manage items in your shopping cart. Update quantities, remove items, and proceed to checkout.",
    type: "website",
  },
};

export default function Page() {
  return <CartPage />;
}
