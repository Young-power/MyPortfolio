// hooks/useIsDark.js
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useIsDark() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return { isDark: false, mounted: false };

  const currentTheme = theme === "system" ? systemTheme : theme;
  return { isDark: currentTheme === "dark", mounted: true };
}
