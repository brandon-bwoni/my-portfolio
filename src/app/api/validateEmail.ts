import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;
  const accessKey = process.env.NEXT_PRIVATE_API_KEY;

  console.log(accessKey);

  try {
    const response = await fetch(`https://apilayer.net/api/check?access_key=${accessKey}&email=${email}`);
    const data = await response.json();

    res.status(200).json({ isValid: data.format_valid && data.smtp_check });
  } catch (error) {
    res.status(500).json({ message: "Email validation failed" });
  }
}
