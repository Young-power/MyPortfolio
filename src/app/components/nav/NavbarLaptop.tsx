"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaGithub } from 'react-icons/fa6';
import TippyShow from '../tippy/TippyShow';
import CardMotion from '../motion/CardMotion';
import ZoomElement from '../motion/ZoomElement';
import { useState } from 'react';
import Other from './Other';
import { AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight } from 'next-mahine-icon';
const NavbarLaptop = () => {
    const pathName = usePathname();

    const [openOther, setOpenOther] = useState<boolean>(false);
    const handleOpenOther = ():void => {
        setOpenOther(!openOther)

    }
    return (
        <nav className="w-full relative flex justify-center ">



            <ul className="flex items-center space-x-16 font-bold italic text-lg">
                <li>
                    <ZoomElement>
                        <Link href="https://github.com/Young-power" target="_blank">
                            <TippyShow message="Github" placement="top" animation="scale">
                                <FaGithub className="text-3xl" />
                            </TippyShow>
                        </Link>
                    </ZoomElement>
                </li>

                <CardMotion delay={0.3}>
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/' ? "text-blue-500" : null}`}>
                        <Link href="/"> Home</Link>
                    </li>
                </CardMotion>



                <CardMotion delay={0.5}> <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/about' ? "text-blue-500" : null}`}>
                    <Link href="/about">About</Link>
                </li>
                </CardMotion>

                <CardMotion delay={0.6}>
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/contact' ? "text-blue-500" : null}`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </CardMotion>


                <CardMotion delay={0.8}>
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/library' ? "text-blue-500" : null}`}>
                        <Link href="/library">Libraries</Link>
                    </li>
                </CardMotion>


                <CardMotion delay={0.9}>
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/cv' ? "text-blue-500" : null}`}>
                        <Link href="/cv">CV</Link>
                    </li>
                </CardMotion>
                <CardMotion delay={0.9}>
                    <li onClick={handleOpenOther} className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/onlineProject' || pathName === "/m2kGroup" ? "text-blue-500" : null}`}>
                        Other  {openOther ? <ChevronDown className='inline-flex' /> : <ChevronRight className='inline-flex' />}
                    </li>

                </CardMotion>


                <AnimatePresence>
                    {
                        openOther &&
                        <Other />
                    }
                </AnimatePresence>



            </ul>
        </nav >
    )
}

export default NavbarLaptop