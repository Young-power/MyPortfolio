"use client";

import Loading from "@/lib/Loading";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full bg-linear-to-r ${pending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-6 rounded-xl transition duration-200 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg`}
        >
            {pending ? <>Envoi<Loading /> </> : <p className="select-none">Commander maintenant</p>}
        </button>
    )
}

export default SubmitBtn
