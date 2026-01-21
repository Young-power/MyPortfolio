import Image from 'next/image'
import Link from 'next/link';
import { ReactNode } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';



interface Props {
    img: string;
    description: string,
    month: number;
    alt: string;
    url: string;
    title: string;
    icons: ReactNode[];
}

const OnlineProjectCard = ({ img, description, month, alt, url, title, icons }: Props) => {
    return (
        <div className='flex flex-col w-ful lg:w-[400px] overflow-hidden hover:cursor-pointer bg-gray-50 border-0.5 border-gray-300 rounded-2xl group  transition-transform duration-300 hover:translate-y-2 shadow-md hover:shadow-lg'>
            <div className=' overflow-hidden'>
                {/* <Image src={img} width={100} height={100} alt={alt} />*/}
                <Image src={img}
                    width={1200}
                    height={700} alt={alt}
                    className='w-full h-auto rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-105 '
                />
            </div>
            <div className='text-black px-1'>
                <div className='flex justify-between items-center'>
                    <h1 className="text-xl font-semibold italic py-1 text-gray-500  ">{title}</h1>
                    <span className='text-sm text-gray-400 italic'>{month} mois</span>
                </div>

                <div className="text-sm lg:text-md text-gray-600 mt-2">
                    {description}
                </div>
                <div className='w-full flex  justify-between items-center px-3 py-1  '>
                    <div className='flex items-center gap-3 '>
                        {icons.map((icon, index) => (
                            <span key={index}>{icon}</span>
                        ))}

                    </div>
                    <div className='flex flex-col  items-center '>
                        <div className='animate-bounce'> <FaArrowDown /></div>
                        <Link href={url}>
                            <TbWorld className='text-4xl animate-pulse duration-1000 text-gray-400 hover:text-blue-400 transition-colors' />
                        </Link>
                        <p className='text-sm text-gray-400'>voir le site</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OnlineProjectCard

/*
import Image from "next/image";
import Link from "next/link";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

interface Props {
  img: string;
  alt: string;
  link: string;
}

const OnlineProjectCard = () => {
  return (
    <div className="group w-full lg:w-[380px] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

   
      <div className="overflow-hidden">
        <Image
          src={"/assets/schoolProject.png"}
          width={800}
          height={500}
          alt={"jj"}
          className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>


      <div className="p-5 flex flex-col gap-3">

        <h2 className="text-lg font-semibold text-gray-800">
          Mon premier site web
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          Ce projet est le tout premier site que j’ai créé lorsque j’ai commencé le
          développement web. Il avait pour but de proposer un site de culture générale
          autour du football, du calcul et de la politique ivoirienne.
        </p>

      
        <div className="mt-4 flex items-center justify-between">

        
          <div className="flex items-center gap-3 text-xl text-gray-500">
            <IoLogoHtml5 className="hover:text-orange-500 transition-colors" />
            <IoLogoCss3 className="hover:text-blue-500 transition-colors" />
            <FaJsSquare className="hover:text-yellow-400 transition-colors" />
          </div>

        
          <Link
            href={""}
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
          >
            <TbWorld className="text-2xl" />
            <span className="font-medium">Voir le site</span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default OnlineProjectCard;
*/