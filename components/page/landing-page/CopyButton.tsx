"use client";
import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  couponCode: string;
}

export function CopyButton({ couponCode }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
    }
  }, [couponCode]);

  return (
    <Button
      onClick={copyToClipboard}
      size="sm"
      variant="ghost"
      className="h-8 w-8 flex-shrink-0 p-0 text-neutral-600 transition-all duration-200 hover:bg-neutral-300/50 dark:text-white dark:hover:bg-white/20"
      title={copied ? "Copied!" : "Copy code"}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}
