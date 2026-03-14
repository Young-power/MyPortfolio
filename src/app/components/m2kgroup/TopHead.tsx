import { titleFont } from "@/font/font";
import React from "react";

const TopHead = () => {
    return (
        <div className="mt-10 " >
            <h1 className={`text-center ${titleFont.className} text-black dark:text-white text-4xl lg:text-5xl font-bold`} id="group">
                M²K-Group
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-300 mt-3 lg:text-xl">
                Solutions Digitales • Cybersécurité • Incubateur de Projets
            </p>
        </div>
    );
};

export default TopHead;