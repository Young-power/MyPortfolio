import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'


type Props = {
    message: React.ReactNode
}
const Success = ({ message }: Props) => {
    return (
        <div className="items-center justify-center flex mt-5">
            <p className="relative border border-green-500  px-5 gap-x-3 bg-green-100/80 py-1 w-[300px] rounded-lg text-center">
               <span className='italic font-semibold'> {message}</span>
            </p>

        </div>
    )
}

export default Success