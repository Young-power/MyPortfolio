"use client"
import LibrarieCard from '@/app/commponents/librarie/LibrarieCard'
import { libraries, libType } from '@/app/commponents/librarie/librariesData'
import Pop_up from '@/app/commponents/librarie/Pop_up'
import Image from 'next/image'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import MyTypewriter from '../onlineProject/TypeWriter'

const Page = () => {


    const [selectCard, setSelectCard] = useState<libType | null>(null);
    const closePop_up = () => setSelectCard(null);




    const handleClickInfo = (id: number) => {

        const findCard = libraries.find((lib) => lib.id === id);

        if (findCard) {
            setSelectCard(findCard)
        }

    }



    const renderCard = libraries.map((data, index) => (

        <div key={index} >
            <LibrarieCard {...data} onclick={() => handleClickInfo(data.id)} />
        </div>

    ));


    return (

        <div className=' relative min-h-screen  '>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                pauseOnHover={false}
                draggable={false}
            />
            {selectCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
                    <Pop_up disabledPop={closePop_up} {...selectCard} />
                </div>
            )}
            <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-xl shadow-sm text-black">
                <span className="text-gray-500 font-medium">📦  Total libraries:</span>
                <span className="text-lg font-bold text-gray-400">{libraries.length}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-x-5 px-12 py-7  ">
                {renderCard}

                <div className='flex flex-col justify-center items-center'>
                    <Image src={"/assets/programmer.gif"}
                        width={100}
                        height={100}
                        alt={"Work gif"}
                        className='w-52 h-auto'
                    />
                    <MyTypewriter />
                </div>
            </div>
        </div>
    )
}

export default Page
