"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={scrollToTop}
      className="flex items-center space-x-1"
    >
      <ArrowUp className="h-4 w-4" />
      <span className="hidden sm:inline">Top</span>
    </Button>
  );
}