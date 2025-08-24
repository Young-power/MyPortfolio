"use client";

import { FaCode } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";
import { PiCopyright } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
const Footer = () => {
    const year = new Date().getFullYear();




    return (
        <footer className=' grid grid-cols-2 lg:grid-cols-3  bg-gradient-to-br from-stone-900 to-stone-950 w-full  py-3 lg:py-10 text-white border-t-2 border-white mt-3'>
            <div className="flex flex-col justify-center items-center font-bold italic">
                <span>Mahine_K</span>
                <FaCode className="text-3xl lg:text-4xl" />
            </div>

            <div className='flex  justify-center items-center text-white '>
                <div className='flex flex-col justify-center lg:flex-row items-center lg:space-x-2'>
                    <div className='flex space-x-1 justify-center items-center'>
                        <PiCopyright className='font-bold text-lg' /> <span className='font-bold italic '>{year}</span>
                    </div>

                    <div className='flex flex-col text-white lg:hidden justify-center items-center'>
                        <p>Codé with</p>
                        <p> React <FaReact className='text-blue-500 inline' /></p>
                        <p>TypeScript <SiTypescript className='text-blue-500 inline' /> </p>
                        <p>Tailwind <SiTailwindcss className='text-blue-500 inline' /></p>
                    </div>


                    {/*laptop*/}
                    <span className='hidden lg:flex text-lg text-nowrap'>Mahine_K — Codé avec React & TypeScript & Tailwind ⚡</span>
                </div>
            </div>

            <div className='flex col-span-2 lg:col-span-1 py-7 lg:py-0 justify-center items-center '>
                <div className='flex flex-col '>
                    <p className='w-full text-center'>E-mail</p>
                    <code><MdEmail className='inline text-2xl' /> mahinekamagate@gmail.com</code>
                </div>
            </div>

        </footer>
    )
}

export default Footer