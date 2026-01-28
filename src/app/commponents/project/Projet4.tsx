'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FaCode } from "react-icons/fa6";
import TippyShow from '../tippy/TippyShow';
const Projet4 = () => {
  return (
    <div className='w-full flex flex-col lg:gap-7 space-y-10 lg:space-y-0 lg:flex-row px-7 text-white mt-10 lg:justify-center lg:items-center'>


      {/* text */}
      <div className='lg:w-1/2 border border-amber-50 p-10 rounded-3xl shadow-lg dark:shadow-amber-50 '>
        <h2 className='text-center text-lg lg:text-2xl my-5 font-bold italic text-muted-foreground dark:text-white'>🛠️ Application mobile de génération de tokens sécurisés</h2>
        <p className='w-full opacity-95 italic text-lg text-muted-foreground dark:text-white'>Cette application mobile React Native génère et gère
          des tokens temporaires pour l’authentification et la vérification
          d’identité. Son interface fluide et sécurisée offre une expérience rapide.
          Les algorithmes de génération aléatoire assurent l’unicité des tokens, et son architecture adaptable permet divers usages :
          connexion multi-facteurs, validation d’accès ou sécurisation d’API.
        </p>
        <code className='text-center text-muted-foreground dark:text-white font-bold'>v1.0.0</code>
        <div className="w-full flex flex-col justify-center items-center mt-5 space-y-3text-center text-white">
          <FaGithub className="text-black dark:text-white text-5xl mb-2 cursor-pointer animate-bounce duration-1000" />


          <TippyShow message="click pour voir" placement='right' animation='scale' >
            <button className="btn btn-outline border px-3 hover:text-white lg:px-5 py-0.5 text-muted-foreground dark:text-white text-nowrap  rounded-4xl ">
              <Link href={"https://github.com/Young-power/reactNtive_jwtToken.git"} className='rounded-4xl font-bold ' > Voir le code <FaCode className='inline-block' /></Link>
            </button>
          </TippyShow>


          <p className="mt-2 text-sm opacity-80 text-muted-foreground dark:text-white">Consultez le repo sur GitHub</p>

        </div>

      </div>
      <div className='w-full lg:w-1/2 flex flex-col md:flex-row md:gap-3 justify-center items-center '>
        <Image src={'/assets/reactNative.jpeg'} alt='reactapp' width={150} height={150} className='w-96 h-auto rounded-4xl shadow-xl' />
        <Image src={'/assets/projet4.jpeg'} alt='reactapp' width={150} height={150} className='w-96 h-auto rounded-4xl shadow-xl' />

      </div>

    </div>
  )
}

export default Projet4