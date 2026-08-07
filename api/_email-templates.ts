const BRAND_VIOLET = "#7c3aed";
const BRAND_BLUE = "#3b82f6";
const BRAND_INK = "#0b0b14";

interface BaseLayoutOptions {
  previewText: string;
  bodyHtml: string;
}

function baseLayout({ previewText, bodyHtml }: BaseLayoutOptions) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QueryReply AI</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <span style="display:none;font-size:1px;color:#f4f4f7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${previewText}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="max-width:480px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:linear-gradient(90deg,${BRAND_VIOLET},${BRAND_BLUE});padding:24px 32px;">
                <span style="color:#ffffff;font-size:16px;font-weight:700;letter-spacing:-0.01em;">QueryReply AI</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#fafafa;border-top:1px solid #eee;">
                <p style="margin:0;font-size:12px;color:#8a8a97;">
                  © ${new Date().getFullYear()} QueryReply AI · <a href="mailto:hello@queryreply.ai" style="color:#8a8a97;">hello@queryreply.ai</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function ctaButton(label: string, url: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0 4px;">
    <tr>
      <td style="border-radius:10px;background:linear-gradient(90deg,${BRAND_VIOLET},${BRAND_BLUE});">
        <a href="${url}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:10px;">${label}</a>
      </td>
    </tr>
  </table>`;
}

export interface WelcomeEmailOptions {
  name?: string;
}

export function welcomeEmail({ name }: WelcomeEmailOptions) {
  const greeting = name ? `Hi ${name},` : "Hi there,";
  const subject = "Welcome to QueryReply AI";
  const html = baseLayout({
    previewText: "You're all set — QueryReply AI is ready to start replying for you.",
    bodyHtml: `
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:${BRAND_INK};">${greeting}</h1>
      <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#3f3f4a;">
        Thanks for installing QueryReply AI. Your extension is ready — it'll start generating accurate, listing-specific replies to your customers automatically.
      </p>
      <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#3f3f4a;">
        You're on the Free plan, which works on 1 website with 1 automated saved reply, no credit card required. Upgrade any time for unlimited websites and replies.
      </p>
      ${ctaButton("Open QueryReply AI", "https://queryreply.ai/pricing")}
    `,
  });
  return { subject, html };
}

export interface OtpEmailOptions {
  code: string;
  expiresInMinutes?: number;
}

export function otpEmail({ code, expiresInMinutes = 10 }: OtpEmailOptions) {
  const subject = `${code} is your QueryReply AI verification code`;
  const html = baseLayout({
    previewText: `Your verification code is ${code}`,
    bodyHtml: `
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:${BRAND_INK};">Verify your email</h1>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#3f3f4a;">
        Use the code below to finish signing in to QueryReply AI. This code expires in ${expiresInMinutes} minutes.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        <tr>
          <td style="border-radius:12px;background-color:#f4f4f7;padding:18px 28px;">
            <span style="font-size:32px;font-weight:700;letter-spacing:8px;color:${BRAND_INK};">${code}</span>
          </td>
        </tr>
      </table>
      <p style="margin:0;font-size:13px;line-height:1.6;color:#8a8a97;">
        Didn't request this code? You can safely ignore this email.
      </p>
    `,
  });
  return { subject, html };
}

export interface OfferEmailOptions {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaUrl: string;
  subject: string;
}

export function offerEmail({ heading, body, ctaLabel, ctaUrl, subject }: OfferEmailOptions) {
  const html = baseLayout({
    previewText: heading,
    bodyHtml: `
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:${BRAND_INK};">${heading}</h1>
      <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#3f3f4a;">${body}</p>
      ${ctaButton(ctaLabel, ctaUrl)}
    `,
  });
  return { subject, html };
}
