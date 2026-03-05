"use client";
import Image from "next/image"
import { useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { submitForm } from "@/app/action";
import Success from "../message_success_error/Success";
import { AnimatePresence, motion } from "framer-motion";
import ErrorMessage from "../message_success_error/ErrorMessage";
import Loading from "@/lib/Loading";

export type FormDataType = {
  name: string;
  email: string;
  phone: string;
  project: string;
  describe: string;
}

const Form = () => {

  const [selected, setSelected] = useState<boolean>(false);
  const [form, setForm] = useState<FormDataType>({ name: '', email: '', phone: '', project: '', describe: '' });
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation AVANT loading
    const isFormInvalid =
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.project.trim() ||
      !form.describe.trim();

    if (isFormInvalid) {
      setResponseMessage("Tous les champs doivent être remplis");
      setShowErrorMessage(true);
      setShowMessage(false);
      setTimeout(() => setShowErrorMessage(false), 5000);
      return;
    }

    // ✅ On démarre le loading ici
    setLoading(true);

    try {
      const res = await submitForm(form);

      if (res.success) {
        setResponseMessage(res.message);
        setForm({ name: '', email: '', phone: '', project: '', describe: '' });
        setShowMessage(true);
        setShowErrorMessage(false);
        setTimeout(() => setShowMessage(false), 5000);
      } else {
        setResponseMessage(res.message);
        setShowErrorMessage(true);
        setShowMessage(false);
        setTimeout(() => setShowErrorMessage(false), 5000);
      }

    } catch (error) {
      setResponseMessage("Une erreur est survenue");
      setShowErrorMessage(true);
    } finally {
      // ✅ On arrête le loading ici
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex lg:justify-center lg:items-center">
      {/* Image */}
      <div className="w-full lg:w-[500px] xl:w-[740px] mb-6 lg:mb-0 shrink-0 px-3 hidden lg:block">
        <Image
          src="/assets/m2kgroup/formIMG.png"
          width={1200}
          height={700}
          alt="logo société"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="w-full max-w-xl mx-auto px-6 py-8">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2 text-black dark:text-white">
          Formulaire de soumission de projet
        </h2>
        {/* Image */}
        <div className="w-full lg:w-[500px] mb-6 lg:mb-0 shrink-0 px-3 lg:hidden">
          <Image
            src="/assets/m2kgroup/formIMG.png"
            width={1200}
            height={700}
            alt="logo société"

            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        <p className="text-center text-gray-500 mb-6">
          Remplissez les informations ci-dessous
        </p>

        {/* Card */}
        <form onSubmit={handleSubmit} noValidate className="bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-6 w-full">

          <fieldset className="flex flex-col gap-5 w-full">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                Nom
              </label>

              <label className="input validator flex items-center gap-2 w-full bg-white text-black dark:bg-zinc-800 dark:text-white">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>

                <input
                  type="text"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  minLength={3}
                  placeholder="Votre nom"
                  pattern="[A-Za-z][A-Za-z0-9\-]*" title="Only letters, numbers or dash"
                  className="w-full placeholder:text-gray-400 dark:placeholder:text-gray-500" />
              </label>

              <p className="validator-hint text-xs mt-1">
                Au moins 3 caractères, votre nom uniquement
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                Email
              </label>

              <label className="input validator flex items-center gap-2 w-full bg-white text-black dark:bg-zinc-800 dark:text-white">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>

                <input
                  type="email"
                  placeholder="mahine@gmail.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full placeholder:text-gray-400 dark:placeholder:text-gray-500" />
              </label>

              <p className="validator-hint text-xs mt-1 hidden">
                Email invalide
              </p>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                Téléphone
              </label>

              <label className="input validator flex items-center gap-2 w-full bg-white text-black dark:bg-zinc-800 dark:text-white">              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none">
                  <path
                    d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>

                <input
                  type="tel"
                  className={`tabular-nums w-full  placeholder:text-gray-400 dark:placeholder:text-gray-500`}
                  required
                  name="phone"
                  placeholder="Téléphone"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[0-9]*"
                  title="Doit contenir uniquement des chiffres"

                />
              </label>

              <p className="validator-hint text-xs mt-1">
                Numéro valide requis
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                Nom du projet
              </label>

              <label className="input validator flex items-center gap-2 w-full bg-white text-black dark:bg-zinc-800 dark:text-white">

                {/* Icône projet */}
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2H3V6z" />
                  <path d="M3 10h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
                </svg>

                <input
                  type="text"
                  name="project"
                  placeholder="Le titre du projet"
                  value={form.project}
                  onChange={handleChange}
                  required
                  minLength={3}
                  className="w-full placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </label>
              <p className="validator-hint text-xs mt-1">
                Minimum 3 caractères requis
              </p>
            </div>
            <textarea
              rows={6}
              className={`textarea ${selected ? "" : "border "} w-full  bg-white text-black dark:bg-zinc-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500`}
              placeholder="Redigez votre idée..."
              name="describe"
              value={form.describe}
              onChange={handleChange}
              onFocus={() => setSelected(true)}
              onBlur={() => setSelected(false)}
            ></textarea>


            <AnimatePresence>
              {showMessage &&
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }} // tu peux ajuster la durée
                >
                  <Success message={responseMessage} />
                </motion.div>}

            </AnimatePresence>

            <AnimatePresence>
              {showErrorMessage &&
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }} // tu peux ajuster la durée
                >
                  <ErrorMessage message={responseMessage} />
                </motion.div>}

            </AnimatePresence>


            {/* BUTTON */}
            <button
              type="submit"

              className={`btn btn-primary font-extrabold ${loading ? "bg-blue-400" : ""}  text-md lg:text-lg text-white inline-flex justify-center items-center min-w-[120px]`}
            >
              {loading ? (<>
                Envoi <Loading />
              </>) :
                "Envoyer"}
            </button>
          </fieldset>
        </form>
      </div>

    </div>

  )
}

export default Form