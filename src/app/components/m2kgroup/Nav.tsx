"use client";
import Link from "next/link";
import { useState } from "react";

interface NavItemType {
    link: string;
    href: string;
}

const Nav = () => {
    const navItems: NavItemType[] = [
        { link: "M²K-Group", href: "#group" },
        { link: "M²k-Solution", href: "#solutuion" },
        { link: "M²k-Store", href: "#store" },
    ];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    return (
        <div className="sticky top-0 left-0 w-full flex justify-center items-center z-40 ">
            <nav className="flex justify-center items-center bg-white/80 backdrop-blur-lg rounded-lg lg:px-7 py-3 shadow-lg " >
                <ul className="flex items-center space-x-5">
                    {navItems.map((item, index) => (
                        <li key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`lg:px-3 px-2 py-1 rounded-md cursor-pointer font-semibold text-[13px] text-nowrap lg:text-md transition-colors duration-300 ease-in-out  ${selectedIndex === index ? "bg-blue-600/70 dark:text-white text-white" : "bg-transparent dark:text-slate-800"
                                }`}
                        >
                            <Link href={item.href}>{item.link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Nav;