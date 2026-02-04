"use client";

import Captcha from '@/app/commponents/cv/Captcha'
import Cv from '@/app/commponents/cv/Cv'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import { AnimatePresence } from "framer-motion";
const Page = () => {
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);

  const handleDownload = async () => {
    try {
      const res = await fetch("/assets/files/MahamanCv.pdf");
      if (!res.ok) throw new Error('Impossible de récupérer le fichier');

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = url;
      a.download = "mahine_cv.pdf";
      a.click();

      window.URL.revokeObjectURL(url);
      toast.success('Téléchargement réuissi !');
    } catch {
      toast.error('Erreur : le téléchargement a échoué !');
    }
  };


  return (
    <div className=' relative min-h-screen  flex justify-center items-center'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnHover={false}
        draggable={false}
      />
      <Cv onclick={() => setShowCaptcha(true)} />


      < AnimatePresence>
        {
          showCaptcha &&

          <Captcha
            onClose={() => setShowCaptcha(false)}
            onSuccess={() => {
              setShowCaptcha(false);
              handleDownload();
            }}

          />

        }
      </AnimatePresence>



    </div>
  )
}

export default Page