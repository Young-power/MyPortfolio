
"use client"
import Image from 'next/image'
import { ArticleType } from './dataArticle';

type ArticleProps = ArticleType & {
    onclick: () => void;
}

const ArticleCard = ({ name, description, images, stock, price, onclick }: ArticleProps) => {




    return (
        <div
            onClick={onclick}
            className="group w-full lg:w-96 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
            {/* IMAGE */}
            <div className="relative h-80 flex items-center justify-center bg-gray-50 overflow-hidden">
                <Image
                    src={images[0].link || ""}
                    width={1200}
                    height={700}
                    alt={images[0]?.alt || "image produit"}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge statut */}
                <span
                    className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-semibold shadow-sm ${stock.status === "disponible"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                >
                    ● {stock.status.charAt(0).toUpperCase() + stock.status.slice(1)}
                </span>
            </div>

            {/* CONTENU */}
            <div className="p-5 space-y-3">

                {/* Nom */}
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {name}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-2">
                    {description}
                </p>

                {/* Quantité */}
                <p className="text-sm text-gray-600">
                    Quantité : <span className="font-semibold">{stock.quantity}</span>
                </p>

                {/* PRIX + BOUTON */}
                <div className="flex items-center justify-between pt-3 border-t">

                    <p className="text-xl font-bold text-blue-400">
                        {price}
                        <span className="text-sm font-medium text-gray-500 ml-1">CFA</span>
                    </p>

                    <button className="text-sm italic cursor-pointer font-medium text-white bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                        Voir détails
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ArticleCard
