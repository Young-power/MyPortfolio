import { CgArrowLongDownC } from "react-icons/cg";
const SchoolSection = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center text-white space-x-7 mt-10  " >

            <div className="flex flex-col justify-center items-center">
                <div>
                    < CgArrowLongDownC
                        className="text-white text-4xl flex flex-col" />
                </div>
                <div className="flex space-x-3">
                    <span className="text-3xl font-bold">CEPE</span>
                    <span className="text-3xl">2016</span>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    < CgArrowLongDownC
                        className="text-white text-4xl flex flex-col" />
                </div>
                <div className="flex space-x-3">
                    <span className="text-3xl font-bold">BEPC</span>
                    <span className="text-3xl">2020</span>
                </div>

            </div>
             <div className="flex flex-col justify-center items-center">
                <div>
                    < CgArrowLongDownC
                        className="text-white text-4xl flex flex-col" />
                </div>
                <div className="flex space-x-3">
                    <span className="text-3xl font-bold">BAC</span>
                    <span className="text-3xl">2023</span>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    < CgArrowLongDownC
                        className="text-white text-4xl flex flex-col" />
                </div>
                <div className="flex space-x-3">
                    <span className="text-3xl font-bold">BTS</span>
                    <span className="text-3xl">2025</span>
                </div>

            </div>
             <div className="flex flex-col justify-center items-center lg:hidden">
                <div>
                    < CgArrowLongDownC
                        className="text-white text-4xl flex flex-col" />
                </div>
            
            </div>

        </div>
    )
}

export default SchoolSection