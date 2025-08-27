import { Button } from "@/components/ui/button";
import { FileHeart } from "lucide-react";
import Link from "next/link";

export default function Wishlist() {
  return (
    <Link href={"/wishlist"}>
      <Button variant={"outline"}>
        <FileHeart /> Wishlist
      </Button>
    </Link>
  );
}
