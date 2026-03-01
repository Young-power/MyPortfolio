import React from 'react'
import { AiOutlineCaretRight, AiOutlineCloseCircle } from 'react-icons/ai'
type Props = {
    message: string | string[] | null,
    marginTop?: string
}
const ErrorMessage = ({ message, marginTop }: Props) => {
    return (
        <div className={`items-center justify-center flex ${marginTop}`}>
            <div className="relative border border-red-500  px-5  bg-red-100/80 py-1 w-[300px] rounded-lg text-center">
                <AiOutlineCloseCircle className="absolute left-3 top-1 inline-block mr-1 text-2xl  text-red-500 font-extrabold" />

                {Array.isArray(message) ? (
                    message.map((data, index) => (
                        <div className='flex flex-col items-center justify-center'>
                            <p key={index} className="italic font-medium px-7">
                                <AiOutlineCaretRight className='inline-block' />
                                {data}
                            </p>
                        </div>

                    ))
                ) : message ? (
                    <span className="italic font-medium px-7">{message}</span>
                ) : null}
            </div>

        </div>
    )
}

export default ErrorMessage