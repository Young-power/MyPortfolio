import Link from "next/link"

const NotFoundProduct = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
            {/* Illustration */}
            <div className="mb-8 text-gray-300">
                <svg
                    className="w-32 h-32 md:w-40 md:h-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>

            {/* Titre */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
                Produit introuvable
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-lg md:text-xl mb-6 text-center max-w-md">
                Désolé, nous n&apos;avons pas trouvé le produit que vous cherchez.
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-8 text-center">
                Vérifiez l&apos;URL ou retournez à la boutique pour découvrir nos articles.
            </p>

            {/* Bouton d'action */}
            <button

                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                <Link href="/m2kGroup#store" className="flex items-center gap-2">
                    Retour à la boutique
                </Link>
            </button>

        </div>
    )
}

export default NotFoundProduct
