import Link from "next/link";
import { FaRobot } from "react-icons/fa6";
export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page introuvable</h1>
            <FaRobot className="text-4xl" />
            <p className="text-gray-600 mb-6">Oups, la page que vous cherchez n’existe pas.</p>
            <Link
                href="/"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Retour à l’accueil
            </Link>
        </div>
    );
}
