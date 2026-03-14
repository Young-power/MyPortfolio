"use client";
import Image from "next/image";
import { ArticleType } from "./dataArticle";
import { CancelColor, CircleChevronLeft, CircleChevronRight } from "next-mahine-icon";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

type DatailProps = {
    product: ArticleType;
    close: () => void;
};

const DetailCard = ({ product, close }: DatailProps) => {
    const [index, setIndex] = useState<number>(0);


    const route = useRouter();

    const handleCommand = () => {
        route.push(`/commandeStore?productId=${product.id}`);
    }



    const handlePrev = () => {
        setIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl flex flex-col lg:flex-row shadow-2xl
        w-full lg:w-3/4 gap-8 max-h-screen overflow-hidden"
            >

                {/* IMAGE SECTION */}
                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-6">

                    <div className="relative w-full h-72 flex items-center justify-center overflow-hidden bg-gray-50 rounded-xl">

                        <CircleChevronLeft
                            onClick={handlePrev}
                            width={40}
                            height={40}
                            className="absolute z-10 cursor-pointer text-gray-600 left-3 top-1/2 -translate-y-1/2 hover:text-blue-500 transition"
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -80 }}
                                transition={{ duration: 0.35 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <Image
                                    src={product.images[index].link}
                                    fill
                                    alt="image produit"
                                    className="object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>

                        <CircleChevronRight
                            onClick={handleNext}
                            width={40}
                            height={40}
                            className="absolute z-10 cursor-pointer text-gray-600 right-3 top-1/2 -translate-y-1/2  hover:text-blue-500 transition"
                        />

                    </div>

                </div>

                {/* INFO SECTION */}
                <div className="flex flex-col w-full lg:w-1/2 overflow-y-auto p-6">

                    <div className="flex justify-between items-start">

                        <h2 className="text-2xl font-bold text-gray-800">
                            {product.name}
                        </h2>

                        <CancelColor
                            width={35}
                            height={35}
                            onClick={close}
                            className="cursor-pointer text-gray-500 hover:text-red-500 transition"
                        />

                    </div>

                    <span
                        className={`mt-2 w-fit px-3 py-1 text-sm rounded-full font-semibold ${product.stock.status === "disponible"
                                ? "bg-green-100 text-green-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                    >
                        ● {product.stock.status}
                    </span>

                    <div className="mt-5">
                        <h3 className="text-gray-500 text-sm mb-2">
                            Description du produit
                        </h3>

                        <p className="text-gray-700 leading-relaxed line-clamp-4 md:line-clamp-6 lg:line-clamp-none">
                            {product.description}
                        </p>
                    </div>

                    <p className="text-gray-600 mt-4">
                        Quantité disponible :
                        <span className="font-semibold ml-1">
                            {product.stock.quantity}
                        </span>
                    </p>

                    <div className="mt-6 text-3xl font-bold text-blue-400">
                        {product.price}
                        <span className="text-sm text-gray-500 ml-1">
                            CFA
                        </span>
                    </div>

                    <button
                        onClick={handleCommand}
                        className="mt-6 w-full select-none cursor-pointer bg-blue-400 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
                    >
                        Commander maintenant
                    </button>

                </div>

            </div>

        </div>
    );
};

export default DetailCard;