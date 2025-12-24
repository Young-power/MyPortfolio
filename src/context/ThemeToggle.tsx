"use client";

import { useState, useEffect } from "react";
import CardMotion from "@/app/commponents/motion/CardMotion";
import { useTheme } from "next-themes";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { toast} from "react-toastify";
// import { sleep } from "@/util/sleep"; // optionnel

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // évite le flash SSR
    setMounted(true);

    // si tu veux garder le delay volontaire, utilise sleep :
    // const run = async () => { await sleep(300); setMounted(true); }
    // run();
  }, []);

  if (!mounted)
    return (
      <div className="flex items-center justify-center p-2">
        <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
      </div>
    );

  const isDark = theme === "dark";

  const message = () => {
    toast.info('This option is not available for now.');
  }
  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")} className="p-2">
     
      {isDark ? (
        <CardMotion delay={0.2}>
          <BsLightbulbOffFill className="text-gray-300 text-2xl md:text-3xl cursor-pointer" />
        </CardMotion>
      ) : (
        <CardMotion delay={0.2}>
          <BsLightbulbFill onClick={message} className="text-yellow-400 text-2xl md:text-3xl cursor-pointer" />
        </CardMotion>
      )}



    </button>
  );
};

export default ThemeToggle;
