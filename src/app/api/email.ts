import type { NextApiRequest, NextApiResponse } from 'next'

import * as z from "zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  user_name: z.string().min(1, "Name is required"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const serviceID: string | undefined = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID: string | undefined = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey: string | undefined = process.env.NEXT_PUBLIC_KEY;

const message = async (data: z.infer<typeof schema>) => {
  const validatedData = schema.safeParse(data);
  if(!validatedData.success){
    throw new Error("Invalid fields.");
  }

  return {success:"Email sent successfully!"}
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try{
   
      res.status(200).json({ message: "Email sent" });
    }
    catch (error) {
      res.status(500).json({ error: "Failed to send email" });
    }
  }
   
  }

     // if (serviceID && templateID && publicKey) {
      //   emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      //     (result) => {
      //       if (result.status === 200) {
             
      //       }
      //     },
      //     (error) => {
          
      //     }
      //   );
      // }