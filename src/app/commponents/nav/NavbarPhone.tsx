import Link from "next/link"
import { usePathname } from "next/navigation";
import TippyShow from "../tippy/TippyShow";
import { FaGithub } from "react-icons/fa6";

const NavbarPhone = () => {
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/cv", label: "CV" },
  ];

  return (
    <div className="w-full">
      <nav className="w-full flex flex-col justify-center items-center text-md font-bold italic">
        <ul className="w-full flex flex-col justify-center items-center space-y-3">
          {links.map((link) => (
            <li
              key={link.href}
              className={`cursor-pointer w-full text-center hover:text-white hover:bg-linear-to-tl hover:from-blue-600 hover:to-blue-800 duration-300 ease-in-out ${pathName === link.href ? "text-blue-500" : ""
                }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

        </ul>
        <Link href={"https://github.com/Young-power"} className='mt-3'>
          <TippyShow message="Github" placement='top' animation='scale' >
            <FaGithub className=" rounded-full text-3xl "/>
          </TippyShow>

        </Link>
      </nav>
    </div>
  );
};

export default NavbarPhone;
