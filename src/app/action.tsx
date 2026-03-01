// submitForm.tsx
"use server";

import { Resend } from "resend";
import EmailTemplate from "../../emails/Email-template";
import { FormDataType } from "./components/m2kgroup/Form";
import { SendEmailToMe } from "../../emails/SendEmailTome";

type FormResponse = {
  success: boolean,
  message: string
}


export async function submitForm(data: FormDataType): Promise<FormResponse> {

  const { name, phone, email, project, describe } = data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);


    await Promise.all([
      resend.emails.send({
        from: "M²K-Group <m2k-group@mahine.site>",
        to: ["mahinekamagate@gmail.com"],
        subject: `Nouvelle soumission : ${name}`,
        react: <SendEmailToMe name={name} email={email} phone={phone} project={project} description={describe} />,
      }),

      resend.emails.send({
        from: "M²K-Group <m2k-group@mahine.site>",
        to: [email],
        subject: "Merci pour votre soumission – M²K-Group",
        react: <EmailTemplate name={name} email={email} phone={phone} projectTitle={project} />,
      })
    ]);



    return { success: true, message: "Formulaire envoyé, vérifiez votre boîte mail!" }
  } catch (error) {

    return { success: false, message: "Formulaire non envoyé." }
  }

}