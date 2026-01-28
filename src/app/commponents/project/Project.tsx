import Image from 'next/image'
import React from 'react'

const Project = () => {
    return (
        <div className='w-full grid grid-cols-1  lg:grid-cols-2 mt-24 justify-center items-center space-y-7 '>
            <div className='text-muted-foreground dark:text-white flex flex-col  justify-center items-center'>
                <h1 className='text-center text-muted-foreground dark:text-white  text-xl font-bold italic underline underline-offset-4 lg:text-4xl mb-3'>
                    Projet en cours – soutienScolaire.com
                </h1>
                <p className="w-full  text-sm md:text-md sm:text-wrap text-center lg:text-wrap text-muted-foreground dark:text-white lg:px-10 lg:text-2xl lg:text-justify ">
                    Je développe actuellement soutienScolaire.com, une plateforme web dédiée à l&apos;éducation.
                </p>
                <p className="w-full text-muted-foreground dark:text-white  text-sm md:text-md sm:text-wrap text-center lg:text-wrap lg:px-10 lg:text-2xl lg:text-justify ">
                    Ce site a pour objectif de faciliter l&apos;accès aux ressources pédagogiques et de proposer un espace interactif où les étudiants peuvent apprendre, échanger et progresser.
                </p>

                <p className="w-full text-sm md:text-md sm:text-wrap text-center lg:text-wrap text-muted-foreground dark:text-white lg:px-10 lg:text-2xl lg:text-justify ">
                    Le projet met en avant mes compétences en développement web full-stack (React, Next.js, TypeScript, NestJS, MySQL) ainsi qu&apos;en design avec Figma.
                </p>

                <div className='mt-7 space-y-3 flex flex-col justify-center items-center'>
                    <p className=' w-fit border-b-2 py-2 rounded-4xl text-center text-xl lg:text-2xl  font-bold italic text-muted-foreground dark:text-white px-7 shadow-md  '>LA MAQUETTE DU SITE</p>
                    <div className='w-full'>
                        <Image src={"/assets/figma.png"} alt='project phone' width={500} height={500} className='w-full h-auto lg:w-[450px] rounded-4xl' />

                    </div>
                    <span className='text-center font-bold text-muted-foreground dark:text-white '>Réalisé avec Figma</span>
                </div>

            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
                <div className="w-full max-w-sm">
                    <Image
                        src="/assets/phone1.png"
                        alt="project phone"
                        width={500}
                        height={500}  // Garde un ratio carré ou selon ton image originale
                        className="w-full h-auto rounded-4xl"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <Image
                        src="/assets/phone2.png"
                        alt="project phone"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-4xl"
                    />
                </div>
            </div>

        </div>
    )
}

export default Project