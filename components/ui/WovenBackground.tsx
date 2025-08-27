"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function WovenBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const style: React.CSSProperties = {
    backgroundColor: isDark ? "#0A0A0A" : "#ffffff",
    backgroundImage: isDark
      ? `
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
      `
      : `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
    backgroundSize: "40px 40px",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="relative min-h-screen w-full" style={style}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
