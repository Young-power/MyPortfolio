import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

interface EmailProps {
    name: string;
    email: string;
    phone: string;
    projectTitle?: string;
}

const tailwindConfig = {
    theme: {
        extend: {
            colors: {
                airbnb: "#ff5a5f",
                darkText: "#484848",
                lightGray: "#f2f3f3",
                borderGray: "#e5e5e5",
            },
            fontFamily: {
                sans: ["Helvetica", "Arial", "sans-serif"],
            },
        },
    },
};

export const EmailTemplate = ({
    name,
    email,
    phone,
    projectTitle,
}: EmailProps) => {
    const previewText = `Bienvenue chez M2K Group, ${name} ! Nous avons bien reçu votre idée de projet.`;
    const logoSrc = "https://www.mahine.site/assets/m2kgroup/mkgroup.png";
    const avatarSrc = "https://www.mahine.site/assets/Mahine.jpg"; // Vous pouvez remplacer par une image plus générique si besoin

    return (
        <Html>
            <Head />
            <Tailwind config={tailwindConfig}>
                <Body className="bg-gray-100 font-sans py-10">
                    <Preview>{previewText}</Preview>

                    <Container className="mx-auto bg-white rounded-xl shadow-lg p-8 max-w-150">
                        {/* Logo */}
                        <Section className="text-center mb-6">
                            <Img
                                src={logoSrc}
                                width="150"
                                height="150"
                                alt="M2K Group"
                                className="mx-auto"
                            />
                        </Section>

                        {/* Avatar (illustration) */}
                        <Section className="text-center mb-6">
                            <Img
                                src={avatarSrc}
                                width="96"
                                height="96"
                                alt="Avatar"
                                className="mx-auto rounded-full border-4 border-gray-200"
                            />
                        </Section>

                        {/* Contenu principal */}
                        <Section>
                            <Text className="text-3xl font-bold text-darkText mb-4">
                                Bienvenue chez M²K-Group, {name} ! 👋
                            </Text>

                            <Text className="text-base text-darkText bg-lightGray p-6 rounded-lg leading-relaxed mb-6">
                                Nous avons bien reçu votre idée de projet{" "}
                                <span className="font-semibold">« {projectTitle} »</span>. Merci
                                de partager votre vision avec nous.
                            </Text>

                            {/* Carte récapitulative des informations */}
                            <Section className="bg-lightGray rounded-lg p-6 mb-6 border border-borderGray">
                                <Text className="text-lg font-bold text-darkText mb-3">
                                    📬 Récapitulatif de votre soumission
                                </Text>
                                <Text className="text-darkText mb-2">
                                    <span className="font-semibold">Nom :</span> {name}
                                </Text>
                                <Text className="text-darkText mb-2">
                                    <span className="font-semibold">Email :</span> {email}
                                </Text>
                                <Text className="text-darkText mb-2">
                                    <span className="font-semibold">Téléphone :</span> {phone}
                                </Text>
                                <Text className="text-darkText">
                                    <span className="font-semibold">Titre du projet :</span>{" "}
                                    {projectTitle}
                                </Text>
                            </Section>

                            <Text className="text-xl font-bold text-darkText mb-3">
                                🔜 Prochaines étapes
                            </Text>

                            <Text className="text-base text-darkText mb-4 leading-relaxed">
                                Notre équipe analyse actuellement les idées reçues. Vous
                                recevrez un retour personnalisé sous 48 à 72 heures. En
                                attendant, voici ce que vous pouvez faire :
                            </Text>

                            <Section className="mb-6">
                                <Text className="flex items-start gap-2 text-darkText mb-2">
                                    <span className="text-blue-400 font-bold text-lg">1.</span>
                                    <span>
                                        Explorez notre site pour découvrir les projets déjà
                                        accompagnés par M2K Group.
                                    </span>
                                </Text>
                                <Text className="flex items-start gap-2 text-darkText mb-2">
                                    <span className="text-blue-400 font-bold text-lg">2.</span>
                                    <span>
                                        Suivez-nous sur les réseaux sociaux pour ne rien rater des
                                        actualités.
                                    </span>
                                </Text>
                                <Text className="flex items-start gap-2 text-darkText mb-2">
                                    <span className="text-blue-400 font-bold text-lg">3.</span>
                                    <span>
                                        Préparez un complément d’information si nécessaire ; nous
                                        pourrions vous recontacter pour approfondir.
                                    </span>
                                </Text>
                            </Section>

                            <Button
                                href="http://mahine.site/m2kGroup"
                                className="bg-blue-400 text-white text-lg font-semibold py-4 px-8 rounded-lg text-center block"
                            >
                                En savoir plus sur M2KGroup
                            </Button>
                        </Section>

                        <Hr className="border-borderGray my-8" />

                        {/* Footer avec liens utiles */}
                        <Section>
                            <Text className="text-lg font-bold text-darkText mb-4">
                                Restons connectés
                            </Text>

                            <Link
                                href="https://www.facebook.com/mahaman.kamagate.50/"
                                className="text-blue-400 text-base block mb-2"
                            >
                                📘 Facebook
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/mahinekamagate?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                className="text-blue-400 text-base block mb-2"
                            >
                                💼 LinkedIn
                            </Link>
                           
                            <Hr className="border-borderGray my-6" />

                            <Text className="text-gray-500 text-sm leading-6 mb-2">
                                M2K Group · 123 Avenue des Projets · 75001  Abidjan
                            </Text>

                            <Link
                                href="https://www.mahine.site"
                                className="text-sm text-gray-500 underline"
                            >
                                🌐 www.mahine.site
                            </Link>
                            {" · "}
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;