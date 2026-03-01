"use client"
import { useEffect, useRef, useState } from "react";
import { PieChart, Pie } from "recharts";

interface Props {
  years: number;
  showText:boolean;
}

export default function AnimatedCircle({ years, showText }: Props) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Observer pour déclencher l'animation quand l'élément est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // 50% de l'élément visible
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Animation du compteur
  useEffect(() => {
    if (!startAnimation) return;
    let start = 0;
    const duration = 1500; // durée en ms
    const increment = years / (duration / 16); // approx 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= years) {
        setCount(years);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [startAnimation, years]);

  const data = [
    { name: "exp", value: count, fill: "#3b82f6" },
    { name: "rest", value: 100 - count, fill: "#6e747a" }
  ];

  return (
    <div ref={ref} className="relative w-32 h-32">
      <PieChart width={128} height={128}>
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          innerRadius={50}
          outerRadius={60}
          stroke="none"
        />
      </PieChart>
      <div className="absolute text-muted-foreground dark:text-white text-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold ">
        + {count}{ showText && " mois"}
      </div>
    </div>
  );
}
