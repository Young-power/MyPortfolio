import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";


const Mail = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-1 my-3 rounded-full gap-y-5 lg:gap-x-7  '>
            <div className='w-full relative flex flex-col justify-center items-center lg:w-full px-3 bg-linear-to-br from-slate-800 to-slate-950 rounded-2xl py-3'>
                <form 
                action="mailto:mahinekamagate@gmail.com"
                method='POST'
                encType='text/plain'
                 className='w-full lg:w-2/3 grid grid-cols-1 space-y-3 justify-center items-center   '>
                    <h1 className='text-white text-center text-xl font-bold italic lg:text-xl'>Contactez-moi par e-mail</h1>

                    <div className='w-full lg-w-52  flex text-white  rounded-full px-3 border border-gray-300 p-3'>
                        <label htmlFor="name" className='text-md lg:text-xl italic px-[18px]'>Nom:</label>
                        <input type="text" id='name' name='Nom' placeholder='@exemple Mahine' className='bg-gray-500/3 lg:w-96  w-full rounded-r-full pl-3 outline-0 border-l-1  border-l-gray-300' />
                    </div>
                    <div className='w-full lg-w-52 flex text-white  rounded-full px-3 border border-gray-300 p-3'>
                        <label htmlFor="Email" className='text-md lg:text-xl italic px-3 text-nowrap'>E-mail:</label>
                        <input type="email" id='Email' name='E-mail' placeholder='mahine@gmail.com' className='bg-gray-500/3 lg:w-96  w-full rounded-r-full pl-3 outline-0 border-l-1  border-l-gray-300' />
                    </div>
                    <div className='w-full lg-w-52 h-52 flex flex-col text-white  rounded-xl px-3 border border-gray-300 p-3'>
                        <label htmlFor="message" className='text-md lg:text-lg italic px-3 w-fit border-b-1 rounded-b-full mb-5 border-gray-300'>Votre message</label>
                        <textarea id='message' rows={7} name='Message' placeholder='Message...' className='bg-gray-500/3 resize-none   w-full pl-3 outline-0 ' />
                    </div>
                    <button
                        type='submit'
                        className='text-white bg-gradient-to-br from-blue-500 to-blue-800 w-fit mx-auto px-16 rounded-4xl my-1 cursor-pointer  py-2 font-bold text-md lg:text-xl'>
                        Envoyer
                    </button>

                </form>
            </div>


            <div className='w-full relative flex text-white flex-col justify-center italic pl-7 lg:pl-0 items-start lg:items-center lg:w-full space-y-2 bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl py-3'>
                <div className='flex justify-center items-center space-x-3'>
                    <IoLogoWhatsapp className='text-green-500 text-3xl lg:text-4xl bg-white rounded-full' />
                    <code className='text-xl'>+225 0141311165</code>
                </div>

                <div className='flex justify-center items-center space-x-3'>
                    <IoCall className=' text-3xl lg:text-4xl ' />
                    <div className=' flex flex-col'>
                        <code className='text-xl'>+225 0141311165</code>
                        <code className='text-xl'>+225 0595749572</code>

                    </div>
                </div>

                <div className='flex justify-center items-center space-x-3 lg:ml-16'>
                    <FaLinkedinIn className='text-blue-500 text-3xl lg:text-4xl ' />
                    <code className='text-sm lg:text-lg'>Mahaman Mahine Kamagaté</code>
                </div>





            </div>
        </div>

    )
}

export default Mail