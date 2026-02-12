"use client"
import { usePathname } from 'next/navigation'

const ShowPath = () => {

    const path = usePathname(); // récupère le chemin actuel

    return (
        <p className="text-gray-500 mt-4">
            Chemin actuel : <span className="font-mono">{path}</span>
        </p>
    );
}

export default ShowPath
