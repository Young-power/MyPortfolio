"use client"
import { FiMenu } from "react-icons/fi";
import { useState } from "react"
import NavbarLaptop from "./NavbarLaptop"
import NavbarPhone from "./NavbarPhone"
import { CgClose } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import Image from "next/image";
import TextMotion from "../motion/TextMotion";
import ThemeToggle from "@/context/ThemeToggle";
const Navbar = () => {


    const [shadowNav, SetShadowNav] = useState<boolean>(false);




    const handleShowNavbar = (): void => {
        SetShadowNav(!shadowNav);
    };
    const urlImg = "/assets/fire.png";


    return (
        <header className='w-full  relative dark:bg-white    grid grid-cols-1  lg:px-42  bg-linear-to-br from-stone-900 to-stone-950 text-white  py-5 lg:py-10  '>

            <div className="w-full flex lg:flex-col justify-between lg:justify-center items-center px-7">

                <TextMotion delay={0.2}>
                    <div className="flex flex-col  justify-center items-center font-bold italic ">
                        <span className=" text-white    ">Mahine_K</span>
                        <FaCode className="text-4xl" />
                        <Image src={urlImg} width={50} height={50} alt="fire" className="w-16 lg:w-12" />
                    </div>
                </TextMotion>

                <div className=" lg:hidden">
                    <div className="flex flex-col justify-center items-center ">
                        <div className="-mt-24 absolute ">
                            <ThemeToggle />
                        </div>
                        {

                            shadowNav ? <CgClose className="text-3xl cursor-pointer" onClick={handleShowNavbar} /> : <FiMenu className="text-3xl cursor-pointer" onClick={handleShowNavbar} />
                        }
                    </div>

                </div>



                <div className="hidden lg:flex">
                    <NavbarLaptop />
                    <div className=" absolute right-16 top-[35%]">
                        <ThemeToggle />
                    </div>
                </div>
            </div>








            {/*navbarPhone*/}
            <div
                className={` lg:hidden  text-white transition-transform duration-300 
                 ${shadowNav ? "translate-y-0" : "-translate-y-full"}`}>
                {shadowNav ? <NavbarPhone /> : null}
            </div>


        </header>
    )
}

export default Navbar