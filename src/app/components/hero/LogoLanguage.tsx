import Image from 'next/image'
import React from 'react'
import TippyShow from '../tippy/TippyShow'
import TextMotion from '../motion/TextMotion'

const LogoLanguage = () => {


    return (

        <div className="flex relative w-full justify-center space-x-2  py-7  ">

            <TextMotion delay={0.2}>
                <TippyShow message="Python" placement='top' animation='scale' >
                    <div>
                        <Image src="/assets/python.png" alt="legend" width={150} height={150} className=" object-cover rounded-4xl  " />
                    </div>
                </TippyShow>
            </TextMotion>


            <TextMotion delay={0.3}>
                <TippyShow message="Next.js" placement='top' animation='scale' >
                    <div>
                        <Image src="/assets/next.png" alt="legend" width={150} height={150} className=" bg-white rounded-full object-cover  " />

                    </div>
                </TippyShow>
            </TextMotion>



            <TextMotion delay={0.4}>
                <TippyShow message="Linux" placement='top' animation='scale' >
                    <div>
                        <Image src="/assets/linux.jpeg" alt="legend" width={150} height={150} className=" bg-white rounded-full object-cover " />

                    </div>
                </TippyShow>
            </TextMotion>


            <TextMotion delay={0.5}>
                <TippyShow message="Nest.js" placement='top' animation='scale' >
                    <div>
                        <Image src="/assets/nest.png" alt="legend" width={150} height={150} className=" w-52 object-cover " />

                    </div>
                </TippyShow>
            </TextMotion>

            <TextMotion delay={0.6}>
                <TippyShow message="React" placement='top' animation='scale' >
                    <div>
                        <Image src="/assets/react.png" alt="legend" width={150} height={150} className=" object-cover " />

                    </div>
                </TippyShow>
            </TextMotion>

            <TextMotion delay={0.7}>
                <TippyShow message="JavaScript" placement='top' animation='scale' >
                    <div>
                        <Image src="/assets/js.png" alt="legend" width={150} height={150} className=" object-cover " />

                    </div>

                </TippyShow>
            </TextMotion>



        </div>
    )
}

export default LogoLanguage
