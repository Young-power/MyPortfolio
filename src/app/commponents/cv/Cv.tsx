import Image from 'next/image'
import { FaFilePdf } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
const Cv = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center mt-16'>
            <div className='w-96 h-[500px] p-10 rounded-4xl flex flex-col justify-center items-center gap-7 bg-gradient-to-br from-slate-800 to-slate-950  border border-white'>
                <div className="w-52 h-52 md:w-72 md:h-72 rounded-full  overflow-hidden border-2 shadow-white-500  border-white-500">
                    <Image
                        src="/assets/m.jpeg"
                        alt="cv image"
                        width={500}
                        height={500}
                        className="object-cover w-96 h-96 pb-32 md:pb-0 md:pt-[2px] bg-white"
                    />
                </div>
                <a
                    href={"/assets/files/myCv.pdf"}
                    download={"cv.pdf"}
                    className="bg-gradient-to-tl from-blue-600 to-blue-800 text-white text-md lg:text-xl px-5 py-3 rounded-4xl cursor-pointer inline-flex items-center gap-2 transition-transform hover:translate-y-1 duration-300 ease-in-out"
                >
                    <FaFilePdf size={25} className="text-red-400" />
                    Télécharger mon CV
                    <IoMdDownload size={30} className="text-white rounded-full" />

                </a>
                <p className="text-white text-sm lg:text-md italic">
                    Un aperçu complet de mon parcours et de mes compétences.
                </p>



            </div>
        </div>




    )
}

export default Cv