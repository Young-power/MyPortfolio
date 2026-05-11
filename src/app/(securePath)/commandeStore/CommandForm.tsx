"use client";

import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import { ArticleType } from "@/app/components/m2kgroup/store/dataArticle";
import SubmitBtn from "./SubmitBtn";
import { AnimatePresence, motion } from "framer-motion";
import Success from "@/app/components/message_success_error/Success";
import ErrorMessage from "@/app/components/message_success_error/ErrorMessage";
import { formData } from "@/app/store.action";
import { ArrowBigLeft } from "next-mahine-icon";
import { useRouter } from "next/navigation";


type ProducProps = {
  product: ArticleType;
};
const CommandForm = ({ product }: ProducProps) => {
  const [state, formAction] = useActionState(formData, null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const route = useRouter();

  // ✅ Tous les Hooks doivent être appelés avant tout return conditionnel
  useEffect(() => {
    if (state?.success) {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      const timer = setTimeout(() => setShowSuccessMessage(false), 5000);
      return () => clearTimeout(timer);
    }

    if (state?.error) {
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
      const timer = setTimeout(() => setShowErrorMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);


  const goToArticle = () => route.push("/m2kGroup#store");

  const total = product?.price ? product.price * quantity : 0;
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="-mt-10 lg:mt-0 py-3">
        <ArrowBigLeft
          width={30}
          height={30}
          className="font-bold cursor-pointer  text-black"
          onClick={goToArticle}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Finalisez votre commande
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Partie gauche : produit */}
            <div className="md:w-2/5 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 text-white flex flex-col">
              <div className="relative h-48 md:h-56 w-full mb-6 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <Image
                  src={product.images[0].link || ""}
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-blue-100 text-sm mb-4 line-clamp-3">
                {product.description}
              </p>

              <div className="mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">{product.price} CFA</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${product.stock.status === "disponible"
                        ? "bg-green-400 text-green-900"
                        : "bg-orange-400 text-orange-900"
                      }`}
                  >
                    {product.stock.status}
                  </span>
                </div>
                {product.stock.quantity > 0 && (
                  <p className="text-blue-200 text-sm mt-2">
                    {product.stock.quantity} unité
                    {product.stock.quantity > 1 ? "s" : ""} en stock
                  </p>
                )}
              </div>
            </div>

            {/* Partie droite : formulaire */}
            <div className="md:w-3/5 p-8 bg-white">
              <form action={formAction} noValidate className="space-y-6">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="exemple: koffi bernard"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="mahine@exemple.com"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]+"
                    title="Uniquement des chiffres"
                    placeholder="0141311165"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
                  />
                </div>

                {/* Commune & Quartier */}
                <div>
                  <label htmlFor="commune" className="block text-sm font-medium text-gray-700 mb-1">
                    Commune & Quartier <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="commune"
                    name="neighborhood"
                    required
                    placeholder="Ex: Abidjan, Cocody, Riviera"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
                  />
                </div>

                {/* Quantité et total */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                  <div className="flex-1">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Quantité <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={1}
                      max={product.stock.quantity}
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.min(product.stock.quantity, Math.max(1, Number(e.target.value))))
                      }
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
                    />
                  </div>
                  <div className="text-right pb-3">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-2xl font-extrabold text-gray-800">{total} CFA</p>
                  </div>
                </div>

                {/* Champs cachés */}
                <input type="hidden" name="img" value={product.images[0]?.link || ""} />
                <input type="hidden" name="nameProduct" value={product.name || ""} />
                <input type="hidden" name="totalPrice" value={total} />

                {/* Messages succès/erreur */}
                <AnimatePresence>
                  {showSuccessMessage && (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Success message={state?.success} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {showErrorMessage && (
                    <motion.div
                      key="error-message"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ErrorMessage message={state?.error || "Une erreur est survenue."} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <SubmitBtn />
              </form>
            </div>
          </div>
        </div>

        {/* Note de bas de page */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Tous les champs sont obligatoires. Vous recevrez un email de confirmation.
        </p>
      </div>
    </div>
  );
};

export default CommandForm;