import Link from "next/link"
import { usePathname } from "next/navigation";
import TippyShow from "../tippy/TippyShow";
import { FaGithub } from "react-icons/fa6";
import TextMotion from "../motion/TextMotion";

const NavbarPhone = () => {
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/onlineProject", label: "Online_Project" },
    { href: "/cv", label: "CV" },
  ];

  return (
    <div className="w-full">
      <nav className="w-full flex flex-col justify-center items-center text-md font-bold italic ">
        <ul className="w-full flex flex-col justify-center items-center space-y-3">
          {links.map((link, index) => (

            <TextMotion  key={link.href} delay={index * 0.3}>

              <li
               
                className={`cursor-pointer w-full text-center hover:text-white hover:bg-linear-to-tl hover:from-blue-600 hover:to-blue-800 duration-300 ease-in-out ${pathName === link.href ? "text-blue-500" : ""
                  }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            </TextMotion>

          ))}

        </ul>
        <TextMotion delay={links.length * 0.12 + 0.2} style="my-5">
          <Link href={"https://github.com/Young-power"}>
            <TippyShow message="Github" placement='top' animation='scale' >
              <FaGithub className=" rounded-full text-3xl " />
            </TippyShow>
          </Link>
        </TextMotion>

      </nav>
    </div>
  );
};

export default NavbarPhone;
