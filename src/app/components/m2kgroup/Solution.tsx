import { LockKeyhole } from 'next-mahine-icon'
import Image from 'next/image'
import Form from './Form'

const Solution = () => {
    return (
        <section className='text-black'>
            <div className="mt-6 flex flex-col justify-center items-center ">
                <h1 className="text-center text-black dark:text-white text-xl lg:text-3xl font-bold">
                    M²K-Group Solutions
                </h1>
                {/* Image */}
                <div className="w-full lg:w-[500px] mb-6 lg:mb-0 shrink-0 px-3">
                    <Image
                        src="/assets/m2kgroup/solution.png"
                        width={1200}
                        height={700}
                        alt="logo société"
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                </div>
                <p className="text-center text-gray-500 dark:text-gray-300 mt-3 lg:text-lg">
                    Création de sites web • Applications mobiles  • SaaS
                </p>
            </div>
            <div className="flex flex-col gap-12 w-full py-12 px-5">




                {/* Cartes services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Web */}
                    <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900">
                        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            🌐 Création de Sites Web
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Sites vitrines, e-commerce, plateformes sur mesure.
                            Nous développons des solutions rapides, modernes et optimisées SEO
                            adaptées au marché.
                        </p>
                    </div>

                    {/* Mobile */}
                    <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900">
                        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            📱 Applications Mobiles
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Applications Android et iOS performantes,
                            pensées pour offrir une expérience utilisateur fluide
                            et booster votre croissance.
                        </p>
                    </div>

                    {/* SaaS */}
                    <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900">
                        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            ☁️ Développement SaaS
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Création de logiciels en ligne (abonnement)
                            pour automatiser vos processus et générer des revenus récurrents.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900">
                        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            🚀 Incubation de Projets Innovants
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Vous avez une idée mais pas les moyens ? Nous vous accompagnons dans la création
                            et le développement de votre projet avec un modèle de partenariat équitable.
                        </p>
                    </div>



                    {/* Cybersécurité */}
                    <div className="relative group">

                        {/* CARD */}
                        <div className="
        p-6 rounded-2xl 
        shadow-lg 
        bg-white dark:bg-zinc-900
        border border-gray-200 dark:border-zinc-800
        opacity-70
        grayscale
        pointer-events-none
        select-none
        transition-all duration-300
    ">
                            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                                Cybersécurité
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Audit de sécurité, protection des données,
                                sécurisation d’applications et infrastructures.
                            </p>
                        </div>

                        {/* OVERLAY LOCK */}
                        <div className="
        absolute inset-0
        flex items-center justify-center
        rounded-2xl
        bg-white/30 dark:bg-black/30
        backdrop-blur-sm
    ">
                            <div className="flex flex-col items-center gap-2">
                                <LockKeyhole className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Bientôt disponible -   Cybersécurité
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="relative group">

                        {/* CARD */}
                        <div className="
        p-6 rounded-2xl 
        shadow-lg 
        bg-white dark:bg-zinc-900
        border border-gray-200 dark:border-zinc-800
        opacity-70
        grayscale
        pointer-events-none
        select-none
        transition-all duration-300
    ">
                            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                                Cybersécurité
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Audit de sécurité, protection des données,
                                sécurisation d’applications et infrastructures.
                            </p>
                        </div>

                        {/* OVERLAY LOCK */}
                        <div className="
        absolute inset-0
        flex items-center justify-center
        rounded-2xl
        bg-white/30 dark:bg-black/30
        backdrop-blur-sm
    ">
                            <div className="flex flex-col items-center gap-2">
                                <LockKeyhole className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Bientôt disponible 
                                </span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <Form />
        </section>
    )
}

export default Solution
