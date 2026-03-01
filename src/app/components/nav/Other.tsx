"use client"
import Link from 'next/link';
import CardMotion from '../motion/CardMotion'
import { usePathname } from 'next/navigation';
import ZoomElement from '../motion/ZoomElement';
import { FiExternalLink } from "react-icons/fi";
import { SquareArrowOutUpRight } from 'next-mahine-icon';

const Other = () => {
    const pathName = usePathname();

    const links = [
        { name: "Online Project", href: "/onlineProject" },
        { name: "M²K-Group", href: "/m2kGroup" },
    ];

    return (
        <ZoomElement>
            <div className='
                absolute right-0 top-10 w-56 
                flex flex-col gap-2 p-3
                rounded-2xl 
                bg-white/70 dark:bg-gray-900/70 
                backdrop-blur-lg 
                shadow-xl border border-gray-200 dark:border-gray-700
                z-50
            '>

                {links.map((link, index) => (
                    <CardMotion key={index} delay={0.1 * index}>
                        <Link href={link.href}>
                            <div
                                className={`
                                    flex items-center justify-between
                                    px-4 py-2 rounded-xl
                                    cursor-pointer
                                    transition-all duration-300 ease-in-out
                                    hover:bg-blue-500 hover:text-white hover:scale-[1.03]
                                    ${pathName === link.href 
                                        ? "bg-blue-500 text-white shadow-md" 
                                        : "text-gray-700 dark:text-gray-300"
                                    }
                                `}
                            >
                                <span className="font-medium">
                                    {link.name}
                                </span>

                                <SquareArrowOutUpRight width={20} height={20} className="opacity-70" />
                            </div>
                        </Link>
                    </CardMotion>
                ))}

            </div>
        </ZoomElement>
    )
}

export default Other