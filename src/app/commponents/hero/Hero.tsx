"use client"
import Image from "next/image"
import SocialMedia from "../socialMedia/SocialMedia"
const Hero = () => {
    return (
        <div className="w-full  py-3">

            <div className="flex relative w-full justify-center space-x-2  py-7">
                <div>
                    <Image src="/assets/python.png" alt="legend" width={150} height={150} className=" object-cover rounded-4xl " />

                </div>

                <div>
                    <Image src="/assets/next.png" alt="legend" width={150} height={150} className=" bg-white rounded-full object-cover r " />

                </div>
                <div>
                    <Image src="/assets/linux.jpeg" alt="legend" width={150} height={150} className=" bg-white rounded-full object-cover " />

                </div>
                <div>
                    <Image src="/assets/nest.png" alt="legend" width={150} height={150} className=" w-52 object-cover " />

                </div>
                <div>
                    <Image src="/assets/react.png" alt="legend" width={150} height={150} className=" object-cover " />

                </div>
                <div>
                    <Image src="/assets/js.png" alt="legend" width={150} height={150} className=" object-cover " />

                </div>


            </div>

            {/* Hero*/}
            <div className="flex w-full flex-col lg:flex-row justify-between  rounded-3xl sm:px-16 lg:px-20 pt-10 border-b-2 border-white">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-x-5 pb-10">
                    <div className="flex flex-row lg:flex-col justify-center items-center space-x-3 lg:space-y-3 ">
                        <Image src="/assets/Mahine.jpg" alt="legend" width={200} height={100} className=" object-cover lg:w-96 rounded-full " />
                        <SocialMedia />
                    </div>
                    <div className=" flex flex-col items-center justify-center lg:mr-5">
                        <span className=" italic text-3xl lg:text-4xl   font-bold bg-gradient-to-r from-white via-yellow-500 to-yellow-600 bg-clip-text text-transparent lg:text-nowrap">Mahaman Kamagaté</span>
                        <Image src="/assets/coffe.png" alt="legend" width={150} height={150} className=" object-cover md:w-md lg:w-32  " />
                    </div>
                </div>

                <div className="w-full flex flex-col  justify-center items-center lg:max-w-1/2 lg:border-l-5  lg:border-white text-xl">
                    <h1 className="text-white text-lg pb-3 font-bold italic text-nowrap pl-3 lg:text-xl  ">« Développeur Web & Mobile <span className=" hidden md:inline-block">Passionné</span>  »</h1>
                    <p className="w-full text-sm md:text-md text-wrap text-center lg:text-wrap text-white lg:px-10 lg:text-2xl lg:text-justify ">
                         Je suis Mahaman Mainnou Kamagaté, développeur full-stack passionné par la création d’applications web et mobiles modernes.
                        J&apos;aime transformer des idées en solutions concrètes, en alliant performance, design et innovation.
                        Mon objectif : concevoir des expériences numériques utiles, fluides et accessibles à tous. »
                    </p>
                    <div>
                        <Image src="/assets/html.png" alt="legend" width={150} height={150} className=" object-cover bg-white p-3  my-10 lg:mt-3 rounded-full " />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Hero