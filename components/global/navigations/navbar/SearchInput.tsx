"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <form>
      <div className="flex gap-1.5">
        <Input type="text" placeholder="Search" />
        <Button type="submit" size="icon">
          <Search />
        </Button>
      </div>
    </form>
  );
}
