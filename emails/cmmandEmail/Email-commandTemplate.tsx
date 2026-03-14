

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

type EmailCommandProps = {
  customerName: string;
  productName: string;
  productImage: string;
  price: string;
  orderNumber: string;
};

const EmailCommandConfirm = ({
  customerName,
  productName,
  productImage,
  price,
  orderNumber,
}: EmailCommandProps) => {
       const logo = "https://www.mahine.site/assets/m2kgroup/store.png";
       const productImg = `https://www.mahine.site/assets/m2kgroup/${productImage}`;
  return (
    <Html>
      <Head />
      <Preview>Confirmation de votre commande</Preview>

      <Tailwind>
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="bg-white mx-auto p-6 rounded-lg max-w-xl shadow">

            {/* Logo */}
            <Section className="mb-6">
              <Img
                src={logo}
                alt="logo"
                width="120"
                className="object-contain"
              />
            </Section>

            {/* Image produit */}
            <Section className="mb-6">
              <Img
                src={productImg}
                alt={productName}
                className="rounded-lg w-full"
              />
            </Section>

            {/* Content */}
            <Section>

              <Heading className="text-2xl font-bold mb-4">
                Confirmation de commande
              </Heading>

              <Text className="text-gray-700 mb-3">
                Bonjour {customerName},
              </Text>

              <Text className="text-gray-700 mb-4">
                Merci pour votre commande. Votre paiement a été confirmé.
              </Text>

              <Hr className="my-4" />

              <Row className="mb-3">
                <Column>
                  <Text className="font-semibold text-gray-600">
                    Produit
                  </Text>
                  <Text>{productName}</Text>
                </Column>

                <Column>
                  <Text className="font-semibold text-gray-600">
                    Prix
                  </Text>
                  <Text>{price}</Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Text className="font-semibold text-gray-600">
                    Numéro de commande
                  </Text>
                  <Text>{orderNumber}</Text>
                </Column>
              </Row>

              <Hr className="my-6" />

              <Text className="text-gray-700">
                Nous vous informerons dès que votre commande sera expédiée.
              </Text>

              <Text className="text-sm text-gray-500 mt-6">
                Merci pour votre confiance ❤️
              </Text>

            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailCommandConfirm;


