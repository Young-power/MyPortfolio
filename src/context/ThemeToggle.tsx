"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import CardMotion from "@/app/commponents/motion/CardMotion";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center p-2">
        <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
      </div>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };



  return (
    <button onClick={handleToggle} className="p-2">
      {isDark ? (
        <CardMotion delay={0.2}>
          <BsLightbulbOffFill className="text-gray-300 text-3xl md:text-4xl cursor-pointer" />
        </CardMotion>
      ) : (
        <CardMotion delay={0.2}>
          <BsLightbulbFill
         
            className="text-yellow-400 text-3xl md:text-4xl cursor-pointer "
          />
        </CardMotion>
      )}
    </button>
  );
};

export default ThemeToggle;
