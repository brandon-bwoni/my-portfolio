import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;
  const accessKey = process.env.NEXT_PUBLIC_API_KEY;

  console.log("Access Key:", accessKey);
  console.log("Email:", email);

  if (!accessKey) {
    return res.status(500).json({ message: "API key is not defined." });
  }
  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const response = await fetch(
      `https://apilayer.net/api/check?access_key=${accessKey}&email=${email}`
    );
  
    if (!response.ok) {
      const errorText = await response.text(); // Read the raw response (likely HTML)
      console.error("MailboxLayer API Error:", errorText);
      return res.status(500).json({ message: "MailboxLayer API error", error: errorText });
    }
  
    const data = await response.json(); // Safe to parse as JSON now
    console.log("MailboxLayer response:", data);
  
    res.status(200).json({ isValid: data.format_valid && data.smtp_check });
  } catch (error) {
    console.error("Email validation error:", error);
    res.status(500).json({
      message: "Email validation failed",
      error: error instanceof Error ? error.message : error,
    });
  }
  
}
