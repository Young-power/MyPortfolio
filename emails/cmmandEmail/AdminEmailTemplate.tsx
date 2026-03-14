import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Img,
    Text,
    Heading,
    Hr,
    Row,
    Column,
    Tailwind,
} from "@react-email/components";

type AdminEmailProps = {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    neighborhood: string;
    productName: string;
    productImageUrl: string;
    price: string;
    quantity: string;
    orderNumber: string;
};

const AdminEmailTemplate = ({
    customerName,
    customerEmail,
    customerPhone,
    neighborhood,
    productName,
    productImageUrl,
    price,
    quantity,
    orderNumber,
}: AdminEmailProps) => {
    const logo = "https://www.mahine.site/assets/m2kgroup/store.png";
    const productImg = `https://www.mahine.site/assets/m2kgroup/${productImageUrl}`;

    return (
        <Html>
            <Head />
            <Preview>Nouvelle commande reçue</Preview>

            <Tailwind>
                <Body className="bg-gray-100 font-sans py-10">
                    <Container className="bg-white mx-auto p-6 rounded-lg max-w-xl shadow">

                        {/* Logo */}
                        <Section className="mb-6">
                            <Img src={logo} alt="logo" width="120" className="object-contain" />
                        </Section>

                        {/* Heading */}
                        <Section className="mb-4">
                            <Heading className="text-2xl font-bold">Nouvelle Commande Reçue</Heading>
                            <Text className="text-gray-700">Commande n° {orderNumber}</Text>
                        </Section>

                        <Hr className="my-4" />

                        {/* Client info */}
                        <Section className="mb-4">
                            <Heading className="text-lg font-semibold mb-2">Informations du client</Heading>
                            <Text>Nom : {customerName}</Text>
                            <Text>Email : {customerEmail}</Text>
                            <Text>Téléphone : {customerPhone}</Text>
                            <Text>Quartier : {neighborhood}</Text>
                        </Section>

                        <Hr className="my-4" />

                        {/* Product info */}
                        <Section>
                            <Heading className="text-lg font-semibold mb-2">Produit Commandé</Heading>
                            <Img src={productImg} alt={productName} className="rounded-lg w-full mb-2" />
                            <Row>
                                <Column>
                                    <Text className="font-semibold">Produit</Text>
                                    <Text>{productName}</Text>
                                </Column>
                                <Column>
                                    <Text className="font-semibold">Prix</Text>
                                    <Text>{price}</Text>
                                </Column>
                                <Column>
                                    <Text className="font-semibold">Quantité</Text>
                                    <Text>{quantity}</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="my-6" />

                        <Text className="text-gray-700">
                            Vérifiez la commande et préparez l’expédition.
                        </Text>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default AdminEmailTemplate;