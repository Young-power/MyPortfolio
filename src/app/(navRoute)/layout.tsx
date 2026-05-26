// src/app/(securePath)/layout.tsx
import { ReactNode } from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

type Props = {
    children: ReactNode;
};

export default function SecureLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            <main className="bg-white dark:bg-zinc-800">
                {/* Ici, pas de Header ni Footer */}
                <main>{children}</main>
            </main>
            <Footer />
        </>
    );
}