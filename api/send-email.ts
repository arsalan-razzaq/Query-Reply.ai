import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { welcomeEmail, offerEmail, otpEmail } from "./_email-templates.js";

const FROM = "QueryReply AI <hello@queryreply.ai>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = req.headers["x-api-key"];
  if (!process.env.INTERNAL_API_SECRET || apiKey !== process.env.INTERNAL_API_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const body = req.body ?? {};
  const { type, to } = body;

  if (typeof to !== "string" || !EMAIL_RE.test(to)) {
    return res.status(400).json({ error: "A valid 'to' email address is required" });
  }

  let email: { subject: string; html: string };

  if (type === "welcome") {
    email = welcomeEmail({ name: typeof body.name === "string" ? body.name : undefined });
  } else if (type === "otp") {
    const { code, expiresInMinutes } = body;
    if (typeof code !== "string" || !/^\d{4,8}$/.test(code)) {
      return res.status(400).json({ error: "OTP emails require a numeric 'code' (4-8 digits)" });
    }
    email = otpEmail({
      code,
      expiresInMinutes: typeof expiresInMinutes === "number" ? expiresInMinutes : undefined,
    });
  } else if (type === "offer") {
    const { heading, offerBody, ctaLabel, ctaUrl, subject } = body;
    if (
      typeof heading !== "string" ||
      typeof offerBody !== "string" ||
      typeof ctaLabel !== "string" ||
      typeof ctaUrl !== "string" ||
      typeof subject !== "string"
    ) {
      return res.status(400).json({
        error: "Offer emails require heading, offerBody, ctaLabel, ctaUrl, and subject",
      });
    }
    email = offerEmail({ heading, body: offerBody, ctaLabel, ctaUrl, subject });
  } else {
    return res.status(400).json({ error: "'type' must be 'welcome', 'otp', or 'offer'" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: FROM,
    to,
    subject: email.subject,
    html: email.html,
  });

  if (error) {
    return res.status(502).json({ error: error.message });
  }

  return res.status(200).json({ id: data?.id });
}
