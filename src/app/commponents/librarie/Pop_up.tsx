"use client"

import { AiOutlineCloseCircle } from "react-icons/ai"
import { iconType, libType } from '@/app/commponents/librarie/librariesData'
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { toast } from "react-toastify";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

type Props = libType & {
    disabledPop: () => void;
}
export const inProduction = (): void => {
    toast.info("In production");
}
const PopUp = ({
    disabledPop,
    name,
    description,
    command,
    website,
    version,
    stars,
    tags,
    features,
    author,
    creatorLogo,
    preview,
    createdAt,
    license,
    icons,
    screenshot,
    logo,
    status
}: Props) => {


    const copied = async () => {
        try {
            await navigator.clipboard.writeText(command);
            toast.success("Copied successfully!");
        } catch  {
            toast.error("Impossible de copier ❌");
        }
    };



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  p-4">

            {/* Card */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl animate-scaleIn">

                {/* Close */}
                <button
                    onClick={disabledPop}
                    className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-red-500 transition"
                >
                    <AiOutlineCloseCircle className="text-3xl" />
                </button>


                {/* Header */}
                <div className="flex items-center gap-4 p-6 border-b">
                    {logo && (
                        <Image src={logo} width={50} height={50} alt={name} className="w-12 h-12 rounded-lg" />
                    )}
                    <div>
                        <h2 className="text-2xl font-bold lg:text-nowrap text-black">{name}</h2>
                        <p className="text-sm text-gray-500 italic">{description}</p>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">

                    {/* Command */}
                    <div className="bg-gray-100 rounded-lg p-3 font-mono text-sm flex justify-between items-center">
                        <span className="text-gray-700">{command}</span>
                        <button
                            onClick={copied}
                            className="cursor-pointer"
                        >
                            <IoCopyOutline className="text-blue-600 text-2xl" />

                        </button>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        {version && <span>📦 Version: {version}</span>}
                        {stars && <span>⭐ Stars: {stars}</span>}
                        {license && <span>📄 License: {license}</span>}
                        {createdAt && <span>🗓️ Created: {createdAt}</span>}
                        <span className={`font-semibold bg-gray-100 px-3 py-1 rounded-2xl ${status === "active" ? "text-green-600" : "text-orange-500"}`}>
                            ● {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                    </div>

                    {/* Icons */}
                    {icons && icons.length > 0 && (
                        <div className="flex gap-3 text-2xl">
                            {icons.map((icon, index) => (

                                <Link href={icon.link} key={index} onClick={(e) => e.stopPropagation()}>
                                    <span className='text-black' >{icon.logo}</span>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    {creatorLogo && (
                        <div className="flex  items-center  gap-3">
                            <Image src={creatorLogo} alt={"creator picture"} width={50} height={50} className="w-12 h-12 rounded-lg" />
                            <div>
                                <span className="text-gray-400 italic font-bold">autor</span>
                                <p className="text-gray-600 font-bold italic ">{author}</p>
                            </div>
                        </div>

                    )}

                    {/* Features */}
                    <div>
                        <h3 className="font-semibold mb-2">✨ Features</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {features.map((f: string, i: number) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>


                    {/* Screenshot */}
                    {screenshot && (
                       <div>
  <h3 className="font-semibold mb-2 text-black lg:text-xl">📸 Preview</h3>

 <div className="relative w-full mb-2">
  <Image
    src={preview.photo}
    alt={preview.alt}
    width={1200}
    height={800}
    className="w-full border object-cover rounded-2xl"
    priority
  />
</div>


  <a
    href={preview.photo}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-semibold select-none"
  >
    🔍 Ouvrir en grand
  </a>
</div>

                    )}

                    {/* Links */}
                    <div className="flex gap-4 pt-4 justify-around items-center g">
                        {website && (
                            <div className='flex flex-col  items-center ' onClick={inProduction}>
                                <Link href={""}>
                                    <TbWorld className='text-4xl animate-pulse duration-1000 text-gray-400 hover:text-blue-400 transition-colors' />
                                </Link>
                                <p className='text-sm text-gray-400'>web site</p>
                            </div>
                        )}

                        {icons && icons.length > 0 && (
                            <div className="flex gap-5 text-2xl ">
                                {icons.map((icon:iconType, i: number) => (
                                    <Link href={icon.link} key={i}>
                                        <span  >{icon.logo}</span>
                                    </Link>
                                ))}
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopUp
