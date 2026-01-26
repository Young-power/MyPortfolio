import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaGithub } from 'react-icons/fa6';
import TippyShow from '../tippy/TippyShow';
import CardMotion from '../motion/CardMotion';
const NavbarLaptop = () => {
    const pathName = usePathname();

    return (
        <nav className="flex text-lg items-center justify-center">
          
            <Link href={"https://github.com/Young-power"} target="_blank" className='mr-7'>
                <TippyShow message="Github" placement='top' animation='scale' >
                    <FaGithub className=" rounded-full text-3xl " />
                </TippyShow>

            </Link>

            <ul className="flex   space-x-16 font-bold italic">

                <CardMotion delay={0.3}>
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/' ? "text-blue-500" : null}`}>
                        <Link href="/"> Home</Link>
                    </li>
                </CardMotion>



                <CardMotion delay={0.5}> <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/about' ? "text-blue-500" : null}`}>
                    <Link href="/about">About</Link>
                </li>
                </CardMotion>

                <CardMotion delay={0.6}>
                        <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/contact' ? "text-blue-500" : null}`}>
                            <Link href="/contact">Contact</Link>
                    </li>
                </CardMotion>

                 <CardMotion delay={0.7}>
                        <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/onlineProject' ? "text-blue-500" : null}`}>
                            <Link href="/onlineProject">Online_Project</Link>
                    </li>
                </CardMotion>
                 <CardMotion delay={0.8}>
                        <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/librarie' ? "text-blue-500" : null}`}>
                            <Link href="/librarie">Libraries</Link>
                    </li>
                </CardMotion>


                <CardMotion delay={0.9}>
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/cv' ? "text-blue-500" : null}`}>
                        <Link href="/cv">CV</Link>
                    </li>
                </CardMotion>

            </ul>
        </nav >
    )
}

export default NavbarLaptop