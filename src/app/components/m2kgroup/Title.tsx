import Image from "next/image";
import { Lightbulb, MapPinHouse, Shield } from "next-mahine-icon";

const Title = () => {
    return (
        <section className="flex flex-col lg:items-center lg:flex-row w-full py-8 px-5 lg:gap-12 items-start">
            {/* Image */}
            <div className="w-full lg:w-[500px] mb-6 lg:mb-0 shrink-0">
                <Image
                    src="/assets/m2kgroup/m2kGroup.jpeg"
                    width={1200}
                    height={700}
                    priority
                    alt="logo société"
                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
            </div>

            {/* Texte */}
            <div className="flex-1 flex flex-col gap-6">
                {/* Description courte */}
                <div>
                    <h3 className="flex items-center gap-3 text-black dark:text-white font-semibold text-xl underline">
                        <MapPinHouse
                            width={28}
                            height={28}
                            className="text-yellow-400 dark:text-yellow-300 animate-bounce"
                        />
                        Qui sommes-nous ?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                        M²K-Group est une société mère technologique qui accompagne la transformation digitale en Afrique,
                        en développant des solutions web, mobiles et cybersécurisées,
                        tout en soutenant les porteurs d’idées innovantes à travers un modèle de partenariat équitable.
                    </p>

                </div>

                {/* Mission */}
                <div className="flex flex-col gap-3">
                    <h3 className="flex items-center gap-3 text-black dark:text-white font-semibold text-xl underline">
                        <Lightbulb
                            width={28}
                            height={28}
                            className="text-yellow-400 dark:text-yellow-300 animate-bounce"
                        />
                        Mission
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                        Fournir des solutions numériques complètes en création de sites web et d’applications mobiles,
                        tout en permettant aux porteurs de projets innovants, même sans moyens financiers, de concrétiser leurs idées
                        via un accompagnement collaboratif et un partage équitable des bénéfices (50/50),
                        afin de favoriser l’innovation et la transformation digitale accessible à tous.
                    </p>
                </div>

                {/* Valeurs */}
                <div className="flex flex-col gap-3">
                    <h3 className="flex items-center gap-3 text-black dark:text-white font-semibold text-xl underline">
                        <Shield
                            width={28}
                            height={28}
                            className="text-yellow-400 dark:text-yellow-300 animate-bounce"
                        />
                        Valeurs
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 lg:grid lg:grid-cols-2 gap-2">
                        <div>
                            <li>Innovation constante pour proposer des solutions uniques</li>
                            <li>Collaboration et accompagnement des porteurs de projets</li>
                        </div>
                        <div>
                            <li>Éthique et transparence dans tous nos partenariats</li>
                            <li>Accessibilité pour permettre à tous de bénéficier de la technologie</li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Title;