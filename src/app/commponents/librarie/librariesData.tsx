import { ReactNode } from "react"
import { DiNpm } from "react-icons/di"
import { FaGithub } from "react-icons/fa6"


export type iconType = {
        type: string;
        logo: ReactNode;
        link: string;
    }

export type libType = {
    id: number
    name: string
    description: string
    shortDescription: string
    command: string
    npm: string
    github: string
    website?: string

    version?: string
    stars?: number

    tags: string[]
    features: string[]

    author: string
    creatorLogo: string
    createdAt?: string
    license?: string

    icons: iconType[] ;
    screenshot?: {
        alt: string,
        photo: string
    }
    logo?: string

    preview: {
        alt: string,
        photo: string
    }
    status: "active" | "maintenance",
    width?:number,
    height?: number
}
export const libraries: libType[] = [
    {
        id: 1,
        name: "Next Mahine RSC Inspector",
        shortDescription: "Analyse les projets Next.js App Router et détecte les composants Client et Server",
        description:
            "Une bibliothèque en ligne de commande (CLI) pour inspecter les projets Next.js utilisant l’App Router et analyser le ratio entre les composants Client et Server.",

        command: "npm install next-mahine-rsc-inspector",
        npm: "https://www.npmjs.com/package/next-mahine-rsc-inspector",
        github: "https://github.com/Young-power/next-mahine-rsc-inspector",
        website: "https://next-mahine-rsc-doc.vercel.app/",

        version: "1.0.3",
        stars: 3,       // optionnel

        tags: ["nextjs", "rsc", "cli", "analysis", "tooling"],
        features: [
            "Scan App Router project",
            "Detect Client and Server Components",
            "Compute ratios and statistics",
            "Export JSON report",
            "Beautiful CLI UI"
        ],
        creatorLogo: "/assets/Mahine.jpg",

        author: "Mahaman Mahine Kamagaté",
        createdAt: "2026-01-25",
        license: "MIT",

        logo: "/assets/lib1.jpeg",

        screenshot: {

            alt: "picture of next-mahine-rsc-inspector",
            photo: "/assets/lib1.jpeg"
        },

        preview: {

            alt: "preview pic",
            photo: "/assets/preview1.png"
        },
        icons: [
            {
                type: "npm",
                logo: <DiNpm key="npm" className="text-3xl text-red-500 hover:text-red-700 transition-colors" />,
                link:"https://www.npmjs.com/package/next-mahine-rsc-inspector"

            },

            {
                type: "github",
                logo: <FaGithub key="github" className="text-2xl hover:text-blue-500 transition-colors" />,
                link: "https://github.com/Young-power/next-mahine-rsc-inspector"
            }

        ],

        status: "active",
        width:1200,
    height:700

    },
    
    {
    id: 2,
    name: "Next Mahine Icon",
    shortDescription: "Une bibliothèque d’icônes SVG moderne pour Next.js et React, optimisée pour les Server Components",
    description:
        "Une collection d’icônes SVG conçue pour Next.js (App Router) et React. Optimisée pour les React Server Components (RSC), cette bibliothèque offre des composants légers, personnalisables et sans JavaScript côté client.",

    command: "npm install next-mahine-icon",
    npm: "https://www.npmjs.com/package/next-mahine-icon",
    github: "https://github.com/Young-power/next-mahine-icon",
    website: "https://next-mahine-icon-doc.vercel.app/",

    version: "1.0.0",
    stars: 5, // optionnel (mets ton vrai score GitHub si tu veux)

    tags: ["nextjs", "icons", "svg", "rsc", "react", "ui"],
    features: [
        "SVG icons as React components",
        "Optimized for React Server Components (RSC)",
        "Zero client-side JavaScript",
        "Fully customizable (size, color, props)",
        "Lightweight and fast",
        "Easy integration with Next.js App Router"
    ],
    creatorLogo: "/assets/Mahine.jpg",

    author: "Mahaman Mahine Kamagaté",
    createdAt: "2026-02-23",
    license: "MIT",

    logo: "/assets/bib2.png",

    screenshot: {
        alt: "picture of next-mahine-icon",
        photo: "/assets/bib2.png"
    },

    preview: {
        alt: "preview pic",
        photo: "/assets/preview2.png"
    },

    icons: [
        {
            type: "npm",
            logo: <DiNpm key="npm" className="text-3xl text-red-500 hover:text-red-700 transition-colors" />,
            link: "https://www.npmjs.com/package/next-mahine-icon"
        },
        {
            type: "github",
            logo: <FaGithub key="github" className="text-2xl hover:text-blue-500 transition-colors" />,
            link: "https://github.com/Young-power/next-mahine-icon"
        }
    ],

    status: "active",
   
}
, {
    id: 3,
    name: "Next Mahine Icon",
    shortDescription: "Une bibliothèque d’icônes SVG moderne pour Next.js et React, optimisée pour les Server Components",
    description:
        "Une collection d’icônes SVG conçue pour Next.js (App Router) et React. Optimisée pour les React Server Components (RSC), cette bibliothèque offre des composants légers, personnalisables et sans JavaScript côté client.",

    command: "npm install next-mahine-icon",
    npm: "https://www.npmjs.com/package/next-mahine-icon",
    github: "https://github.com/Young-power/next-mahine-icon",
    website: "https://next-mahine-icon-doc.vercel.app/",

    version: "1.0.0",
    stars: 5, // optionnel (mets ton vrai score GitHub si tu veux)

    tags: ["nextjs", "icons", "svg", "rsc", "react", "ui"],
    features: [
        "SVG icons as React components",
        "Optimized for React Server Components (RSC)",
        "Zero client-side JavaScript",
        "Fully customizable (size, color, props)",
        "Lightweight and fast",
        "Easy integration with Next.js App Router"
    ],
    creatorLogo: "/assets/Mahine.jpg",

    author: "Mahaman Mahine Kamagaté",
    createdAt: "2026-02-23",
    license: "MIT",

    logo: "/assets/lib2.png",

    screenshot: {
        alt: "picture of next-mahine-icon",
        photo: "/assets/lib2.png"
    },

    preview: {
        alt: "preview pic",
        photo: "/assets/preview2.png"
    },

    icons: [
        {
            type: "npm",
            logo: <DiNpm key="npm" className="text-3xl text-red-500 hover:text-red-700 transition-colors" />,
            link: "https://www.npmjs.com/package/next-mahine-icon"
        },
        {
            type: "github",
            logo: <FaGithub key="github" className="text-2xl hover:text-blue-500 transition-colors" />,
            link: "https://github.com/Young-power/next-mahine-icon"
        }
    ],

    status: "maintenance",
   
}
]
