import Image from 'next/image'
import React from 'react'
import TippyShow from '../tippy/TippyShow'

const LogoLanguage = () => {
    return (

        <div className="flex relative w-full justify-center space-x-2  py-7">
            <TippyShow message="Python" placement='top' animation='scale' >
                <div>
                    <Image src="/assets/python.png" alt="legend" width={150} height={150} className=" object-cover rounded-4xl " />
                </div>
            </TippyShow>


            <TippyShow message="Next.js" placement='top' animation='scale' >
                <div>
                    <Image src="/assets/next.png" alt="legend" width={150} height={150} className=" bg-white rounded-full object-cover  " />

                </div>
            </TippyShow>

            <TippyShow message="Linux" placement='top' animation='scale' >
                <div>
                    <Image src="/assets/linux.jpeg" alt="legend" width={150} height={150} className=" bg-white rounded-full object-cover " />

                </div>
            </TippyShow>

            <TippyShow message="Nest.js" placement='top' animation='scale' >
                <div>
                    <Image src="/assets/nest.png" alt="legend" width={150} height={150} className=" w-52 object-cover " />

                </div>
            </TippyShow>

            <TippyShow message="React" placement='top' animation='scale' >
                <div>
                    <Image src="/assets/react.png" alt="legend" width={150} height={150} className=" object-cover " />

                </div>
            </TippyShow>
            <TippyShow message="JavaScript" placement='top' animation='scale' >
                <div>
                    <Image src="/assets/js.png" alt="legend" width={150} height={150} className=" object-cover " />

                </div>

            </TippyShow>
            

        </div>
    )
}

export default LogoLanguage
