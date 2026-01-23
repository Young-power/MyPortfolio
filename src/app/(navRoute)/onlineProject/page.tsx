import OnlineProjectCard from "@/app/commponents/onlineProject/OnlineProjectCard"
import Image from "next/image"
import { FaJsSquare } from "react-icons/fa"
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io"
import MyTypewriter from "./TypeWriter"

const Page = () => {
  return (

    <div className=' relative min-h-screen  '>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-x-5 px-10 py-7  ">
        <OnlineProjectCard
          title="Mon premier site web "
          description="
        Ce projet est le tout premier site que j&rsquo;ai créé lorsque j&rsquo;ai commencé le développement web.
        Son objectif était de proposer un site de culture générale basé sur le football, le calcul et la politique ivoirienne.     
"
          month={11}
          url="https://young-power.github.io/Monprojet/"
          img="/assets/schoolProject.png"
          alt="first project culture général"
          icons={[
            <IoLogoHtml5 key="html" className="text-2xl hover:text-orange-500 transition-colors" />,
            <IoLogoCss3 key="css"    className="text-2xl hover:text-blue-500 transition-colors" />,
            <FaJsSquare  key="js" className=" text-2xl hover:text-yellow-400 transition-colors" />

          ]}
        />

        <div className='flex flex-col justify-center items-center'>
          <Image src={"/assets/work.gif"}
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
