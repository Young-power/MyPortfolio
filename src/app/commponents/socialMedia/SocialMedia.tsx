import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialMedia = () => {
    return (
        <div className=" flex flex-col lg:flex-row space-y-3 lg:space-x-3">
            <Link href={"https://www.youtube.com/channel/UCQ1mIm1NdyxmQeR79Kqw50Q/about"}><FaYoutube className="text-red-600 text-4xl  " /></Link>
            <Link href={"https://www.facebook.com/mahaman.kamagate.50/"}><FaFacebook className="text-blue-600 text-4xl bg-white rounded-full" /></Link>
            <Link href={"https://github.com/dashboard"}><FaGithub className="bg-white rounded-full text-4xl b" /></Link>
        </div>
    )
}

export default SocialMedia