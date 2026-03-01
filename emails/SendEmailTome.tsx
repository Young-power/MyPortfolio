import {
    Body,
    Container,
    Html,
    Img,
    Section,
    Text,
    Hr,
} from "@react-email/components";

type Props = {
    name: string;
    email: string;
    phone: string;
    project: string;
    description: string;
};

export const SendEmailToMe = ({ name, email, phone, project, description }: Props) => {
    const AvatarImg = "https://www.mahine.site/assets/Mahine.jpg";
    const M2kLogo = "https://www.mahine.site/assets/m2kgroup/mkgroup.png";

    return (
        <Html>
            <Body className="bg-gray-100 font-sans p-6">
                <Container className="bg-white rounded-xl shadow-lg max-w-[600px] mx-auto p-6">

                    {/* Logo */}
                    <Section className="text-center mb-6">
                        <Img
                            src={M2kLogo}
                            width="150"
                            height="150"
                            alt="M²K-Group"
                            className="mx-auto"
                        />
                    </Section>

                    {/* Header */}
                    <Section className="text-center mb-6">
                        <Img
                            src={AvatarImg}
                            width="80"
                            height="80"
                            alt="Avatar"
                            className="mx-auto rounded-full border-4 border-gray-200"
                        />
                        <Text className="text-2xl font-bold mt-2">Nouvelle soumission de projet</Text>
                    </Section>

                    <Hr className="border-gray-300 my-4" />

                    {/* Contenu */}
                    <Section className="mb-4">
                        <Text className="text-gray-700 mb-2"><strong>Nom :</strong> {name}</Text>
                        <Text className="text-gray-700 mb-2"><strong>Email :</strong> {email}</Text>
                        <Text className="text-gray-700 mb-2"><strong>Téléphone :</strong> {phone}</Text>
                        <Text className="text-gray-700 mb-2"><strong>Projet :</strong> {project}</Text>
                        <Text className="text-gray-700 mb-2"><strong>Description :</strong></Text>
                        <Text className="bg-gray-200 p-3 rounded text-gray-800 leading-relaxed">{description}</Text>
                    </Section>

                    <Hr className="border-gray-300 my-4" />

                    {/* Footer */}
                    <Section className="text-center text-gray-500 text-sm">
                        <Text>M²K-Group – Tous droits réservés © 2026</Text>
                        <Text>Contact : <a href="mailto:m2k-group@mahine.site" className="text-blue-500">m2k-group@mahine.site</a></Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};