"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image"


type SkillProps = {
    urlImage: string;
    detail: string;
    title: string;
    alt?: string;
}
const SkillGrid = ({ urlImage, detail, title, alt }: SkillProps) => {
    return (
        <div className="flex w-full flex-col justify-center bg-white items-center pb-3 rounded-3xl transition-transform hover:translate-y-3 duration-300 ease-in-out cursor-pointer">

            <div className="pt-3">
                <Image src={urlImage} alt={`${alt}`} width={150} height={150} />
            </div>
            <h2 className="text-xl lg:text-2xl font-bold mt-3 lg:mt-1 text-center lg:text-left">
                {title}
            </h2>

            <p className="mt-2 px-3 lg:pl-10 text-base lg:text-2xl text-gray-700 tracking-wide leading-relaxed text-center  ">
                {detail.replace(/'/g, "&apos;")}
            </p>

            <div>
                <FaCheck className="text-green-500 text-2xl"/>
            </div>

        </div>



    )
}

export default SkillGrid