"use server";

import { Resend } from "resend";
import EmailCommandConfirm from "../../emails/cmmandEmail/Email-commandTemplate";
import AdminEmailTemplate from "../../emails/cmmandEmail/AdminEmailTemplate";

type prevType = {
    success?: string;
    error?: string;
};
export const formData = async (prev: prevType | null, data: FormData): Promise<prevType> => {

    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const phone = data.get("phone")?.toString();
    const quantity = data.get("quantity")?.toString();
    const totalPrice = data.get("totalPrice")?.toString();
    const neighborhood = data.get("neighborhood")?.toString();
    const productName = data.get("nameProduct")?.toString();
    const img = data.get("img")?.toString();






    //simulate loading
    await new Promise(resolve => setTimeout(resolve, 5000));

    if (!name || !email || !phone || !neighborhood  || !quantity) {
        return { ...prev, error: "Tous les champs sont obligatoires." };
    }
    const orderNumber = `M2K-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
    )}`;

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);


        await Promise.all([
            resend.emails.send({
                from: "M²K-Group <m2k-group@mahine.site>",
                to: ["mahinekamagate@gmail.com"],
                subject: `Nouvelle Commande de  : ${name}`,
                react: <AdminEmailTemplate
                    customerName={name}
                    customerEmail={email}
                    customerPhone={phone}
                    neighborhood={neighborhood}
                    productName={productName || "Produit"}
                    productImageUrl={img || ""}
                    price={totalPrice || "N/A"}
                    quantity={quantity}
                    orderNumber={orderNumber}
                />
            }),



            resend.emails.send({
                from: "M²K-Group <m2k-group@mahine.site>",
                to: [email],
                subject: "Merci pour votre commande – M²K-Group",
                react: <EmailCommandConfirm
                    customerName={name}
                    productName={productName || "Produit"}
                    productImage={img || ""}
                    price={totalPrice || "N/A"}
                    orderNumber={orderNumber}
                />
            })
        ]);



        return { ...prev, success: "Commande Validée, vérifiez votre boîte mail!" }
    } catch {

        return { ...prev, error: "L'envoi de la commande a échoué." }
    }

}



