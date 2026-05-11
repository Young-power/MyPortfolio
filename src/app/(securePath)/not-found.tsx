import ShowPath from "@/util/ShowPath";
import { FaRobot } from "react-icons/fa6";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import Link from "next/link";
export default function NotFound() {


    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50 -mt-3 lg:-mt-16">
                <div className="max-w-md">
                    <FaRobot className="text-8xl text-gray-700 mx-auto mb-6 animate-pulse" />
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-2xl font-semibold text-gray-700 mb-2">
                        Oups ! L&apos;id de produit est invalide.
                    </p>

                    <p className="text-gray-600 ">
                        Le produit que vous cherchez n&apos;existe pas ou a été supprimé.
                    </p>
                    <div className="flex flex-col space-y-1">
                        <ShowPath />
                        <Link
                            href={"/m2kGroup#store"}

                            className="px-6 py-3 mt-5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium shadow-md"
                        >
                            Retour à l&apos;accueil
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
