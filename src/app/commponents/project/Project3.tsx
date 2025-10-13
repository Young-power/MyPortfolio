import React from 'react'
import { IoLogoReact } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Title from '../Title';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa6';
const Project3 = () => {
    return (
        <section className='w-full mt-10'>
            <Title title="Projet Mobile" style="text-white text-center text-2xl mb-5" />
            <p className='text-white text-center mb-3 text-xl lg:text-2xl'>⭐ WhatsApp Clone (React Native)</p>

            <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className='w-full lg:w-1/2 '>
                    <Image src={"/assets/projet3.png"} alt="project1" width={600} height={400} className='w-full h-auto p-5 rounded-3xl block' />
                </div>


                <div className='w-full lg:w-1/2 flex justify-center items-center  '>
                    <div className='w-32 '>
                        <div className='flex flex-col justify-center items-center '>
                            <IoLogoReact className='text-[170px] lg:text-[200px]  text-blue-600' />
                            <p className='text-white text-xl lg:text-2xl text-nowrap font-medium italic'>React Native</p>
                        </div>
                        <div className='flex flex-col justify-center items-center mt-7 gap-y-1'>
                            <FaGithub className='text-white text-5xl ml-2 cursor-pointer animate-bounce duration-1000' />
                            <button className="btn btn-outline border px-3 lg:px-5 py-0.5 text-white text-nowrap  rounded-4xl ">
                                <Link href={"https://github.com/Young-power/whatsapp_ReactNative.git"} className='rounded-4xl' > Voir le code <FaCode className='inline-block' /></Link>
                            </button>
                            <p className="mt-2 text-sm opacity-80 text-nowrap">Consultez le repo sur GitHub</p>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Project3