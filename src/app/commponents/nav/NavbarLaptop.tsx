import Link from 'next/link'
import { usePathname } from 'next/navigation';
const NavbarLaptop = () => {
        const pathName = usePathname();

  return (
     <nav className="flex text-lg font-bold italic">
                <ul className="flex   space-x-16 ">
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/' ? "text-blue-500" : null}`}>
                        <Link href="/"> Home</Link>
                    </li>
                 
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/about' ? "text-blue-500" : null}`}>
                        <Link href="/about">About</Link>
                    </li>

                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/contact' ? "text-blue-500" : null}`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className={`cursor-pointer hover:text-blue-500 duration-300 ease-in-out ${pathName === '/cv' ? "text-blue-500" : null}`}>
                        <Link href="/cv">CV</Link>
                    </li>
                </ul>
            </nav>
  )
}

export default NavbarLaptop