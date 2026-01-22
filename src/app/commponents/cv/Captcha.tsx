"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // sans 0,O,I,1
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

type CaptchaProps = {
    onSuccess: () => void;
    onClose: () => void;
};

const Captcha = ({ onSuccess, onClose }: CaptchaProps) => {
    const [captcha, setCaptcha] = useState<string>(generateCaptcha());
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: any) => {
        // Force majuscule + enlève caractères chelous
        const value = e.target.value
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, "");

        setInput(value);
    };

    const verifyCaptcha = () => {
        if (input === captcha) {
            onSuccess();
            setError("");
        } else {
            setError("❌ Code incorrect, réessaie.");
            setCaptcha(generateCaptcha());
            setInput("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}

            className="absolute  w-full h-full flex justify-center items-center px-3">
            <div className="bg-white w-full md:w-[500px] -mt-36 flex flex-col items-center justify-center py-3 rounded-md">


                <div className="text-black my-1">
                    <p className="text-center text-lg">Vérifier le captcha pour la sécurité</p>
                    <span className="text-sm text-center block">
                        Pour continuer le téléchargement !
                    </span>
                </div>

                <div className="flex gap-3 flex-col md:flex-row items-center w-full px-4">
                    <div className="bg-linear-to-br from-slate-800 to-slate-950 font-semibold italic text-lg text-white px-7 py-3 rounded-md select-none tracking-widest">
                        {captcha}
                    </div>

                    <input
                        type="text"
                        id="captcha"
                        value={input}
                        onChange={handleChange}
                        maxLength={5}
                        className="
              border outline-0 rounded-md border-black text-black px-3 py-3 w-full
              uppercase placeholder:normal-case tracking-widest text-center
            "
                        placeholder="Entrez le code ici"
                    />
                </div>

                {error && (
                    <p className="text-red-600 text-sm mt-2 font-semibold">{error}</p>
                )}

                <div className="flex gap-3 mt-3">
                    <button
                        onClick={verifyCaptcha}
                        className="bg-blue-500 px-7 py-3 cursor-pointer rounded-md text-white font-bold italic text-md hover:bg-blue-600 transition"
                    >
                        Vérifier
                    </button>

                    <button
                        onClick={() => {
                            setCaptcha(generateCaptcha());
                            setInput("");
                            setError("");
                        }}
                        className="bg-gray-400 cursor-pointer px-4 py-3 rounded-md text-white font-bold italic text-md hover:bg-gray-500 transition"
                    >
                        🔄
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 cursor-pointer px-4 py-3 rounded-md text-white font-bold italic text-md hover:bg-red-400 transition"
                    >
                        Fermer
                    </button>

                </div>
            </div>
        </motion.div>
    );
};

export default Captcha;
