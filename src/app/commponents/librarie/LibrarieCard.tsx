
import Image from 'next/image'
import { libType } from './librariesData';
import { TbWorld } from 'react-icons/tb';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa6';

type Props = libType & {
    onclick: () => void;
}

const LibrarieCard = ({ name, description,  screenshot, status, icons,website, onclick }: Props) => {




    return (
        <div onClick={onclick} className='flex border  flex-col w-full px-3 lg:w-[400px] overflow-hidden hover:cursor-pointer bg-gray-50  border-gray-300 rounded-2xl group  transition-transform duration-300 hover:translate-y-2 shadow-md hover:shadow-2xl'>
           
            <div className=' overflow-hidden pt-3'>
                <Image src={screenshot?.photo || ''}
                    width={1200}
                    height={700} alt={screenshot?.alt || "no found img"}
                    className='w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 '
                />
            </div>

            <div className='text-black '>
                <div className='flex justify-between items-center'>
                    <h1 className="text-xl font-semibold italic py-1 text-gray-500  ">{name}</h1>

                    <span className={`text-xs px-3 py-1 text-nowrap rounded-full font-bold ${status === "active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                        }`}>
                          ●  {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                </div>

                <div className="text-sm lg:text-md text-gray-600 mt-2">
                    {description}
                </div>
                <div className='w-full flex  justify-between items-center px-3 py-1  '>
                    <div className='flex items-center gap-3 ' >
                        {icons.map((icon, index) => (

                            <Link href={icon.link} key={index}  onClick={(e) => e.stopPropagation()}>
                                <span className='text-black' >{icon.logo}</span>
                            </Link>
                        ))}

                    </div>


                    <div className='flex flex-col  items-center  ' onClick={(e)=>{
                        e.stopPropagation();
                       

                    }}  >
                        <div className='animate-bounce text-gray-600'> <FaArrowDown /></div>
                        <Link href={website || ""} target='_bank'>
                            <TbWorld className=' text-3xl  animate-pulse duration-1000 text-gray-400 hover:text-blue-400 transition-colors' />
                        </Link>
                        <p className='text-sm text-gray-400'>voir le doc</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LibrarieCard
