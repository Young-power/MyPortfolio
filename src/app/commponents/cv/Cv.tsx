'use client';
import Image from 'next/image'
import { FaFilePdf } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
import { toast } from 'react-toastify'
import TippyShow from '../tippy/TippyShow';
import { useState } from 'react';


type CaptchaProps = {

  onclick:()=>void
};
const Cv = ({onclick}:CaptchaProps) => {


 



  return (
    <div className='w-full flex flex-col justify-center items-center mt-16 '>
      <div className='w-full md:w-full lg:w-[800px] h-[500px]  md:flex md:flex-row p-10 rounded-4xl flex flex-col justify-center items-center gap-7 bg-linear-to-br from-slate-800 to-slate-950 border border-white'>
        <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-2 shadow-white-500 border-white-500">
          <Image
            src="/assets/m.jpeg"
            alt="cv image"
            width={500}
            height={500}
            className="object-cover w-96 h-96 pb-32 md:pb-0 md:pt-0.5 bg-white"
          />
        </div>

        <div className='flex flex-col justify-center items-center md:gap-3'>
          <TippyShow message="Download" placement='bottom' animation='scale'>
            <button
              onClick={onclick}
              className="bg-linear-to-tl from-blue-600 to-blue-800 text-white text-md lg:text-xl px-5 py-3 rounded-4xl cursor-pointer inline-flex items-center gap-2 transition-transform hover:translate-y-1 duration-300 ease-in-out"
            >
              <FaFilePdf size={25} className="text-red-400" />
              Télécharger mon CV
              <IoMdDownload size={30} className="text-white rounded-full" />
            </button>
          </TippyShow>

          <p className="text-white text-sm italic text-center md:text-lg">
            Un aperçu complet de mon parcours et de mes compétences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cv;
