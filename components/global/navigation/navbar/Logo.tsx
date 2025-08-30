"use client";
import Image from "next/image";
import darkModeLogo from "@/public/images/new-market-logo-white.png";
import lightModeLogo from "@/public/images/new-market-logo-black.png";
import { useTheme } from "next-themes";

export default function Logo() {
  const { theme, systemTheme } = useTheme();
  let currentTheme;

  if (theme === "system" && systemTheme === "dark") {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }

  return (
    <div className="relative h-10 w-28">
      <Image
        fill
        src={currentTheme === "dark" ? darkModeLogo : lightModeLogo}
        alt="New Market Logo"
        className="absolute object-cover object-center"
      />
    </div>
  );
}
