/* RESEND_API_KEY must be set in Vercel production environment variables before launch.
   During local development, add it to .env.local as RESEND_API_KEY=re_xxxxxxxx */

import { NextResponse } from "next/server";
import { Resend } from "resend";

const REQUIRED_FIELDS = [
  "fullName",
  "email",
  "phone",
  "eventDate",
  "guestCount",
  "startTime",
  "endTime",
  "eventLocation",
  "eventType",
] as const;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    // Server-side validation
    const missing = REQUIRED_FIELDS.filter((f) => !body[f]?.toString().trim());
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phone,
      eventDate,
      guestCount,
      startTime,
      endTime,
      eventLocation,
      eventType,
      budget,
      details,
    } = body;

    const row = (label: string, value: string) =>
      `<tr>
        <td style="padding:10px 12px;font-family:sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#0F3D2E;white-space:nowrap;vertical-align:top;">${label}</td>
        <td style="padding:10px 12px;font-family:sans-serif;font-size:15px;color:#1A1A1A;vertical-align:top;">${value}</td>
      </tr>`;

    const rows = [
      row("Name", fullName),
      row("Email", `<a href="mailto:${email}" style="color:#2E7D4F;text-decoration:none;">${email}</a>`),
      row("Phone", `<a href="tel:${phone}" style="color:#2E7D4F;text-decoration:none;">${phone}</a>`),
      row("Event Date", eventDate),
      row("Start Time", startTime),
      row("End Time", endTime),
      row("Location", eventLocation),
      row("Event Type", eventType),
      row("Guests", guestCount),
      budget ? row("Budget", budget) : "",
      details ? row("Details", details.replace(/\n/g, "<br/>")) : "",
    ].join("");

    const htmlBody = `
      <div style="background-color:#F5F1EA;padding:40px 20px;font-family:sans-serif;">
        <div style="max-width:560px;margin:0 auto;background-color:#FFFFFF;border-radius:4px;overflow:hidden;">
          <div style="background-color:#0F3D2E;padding:28px 32px;">
            <span style="font-size:20px;font-weight:600;color:#FFFFFF;letter-spacing:-0.01em;">clover</span>
          </div>
          <div style="padding:32px;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.15em;color:#2E7D4F;">New Inquiry</p>
            <p style="margin:0 0 24px;font-size:22px;font-weight:400;color:#1A1A1A;">${eventType} on ${eventDate}</p>
            <table style="width:100%;border-collapse:collapse;">
              <tbody>
                ${rows}
              </tbody>
            </table>
          </div>
          <div style="border-top:1px solid #E8E5DF;padding:20px 32px;">
            <p style="margin:0;font-size:12px;color:#1A1A1A99;">Reply directly to this email to respond to ${fullName}.</p>
          </div>
        </div>
      </div>`;

    const textFallback = [
      `Full name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Event date: ${eventDate}`,
      `Event start time: ${startTime}`,
      `Event end time: ${endTime}`,
      `Event location: ${eventLocation}`,
      `Type of event: ${eventType}`,
      `Estimated guests: ${guestCount}`,
      budget ? `Budget: ${budget}` : null,
      details ? `Additional details: ${details}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: "Clover Inquiry <noreply@cloverbarco.com>",
      to: "cloverbarco@gmail.com",
      subject: `New Clover inquiry: ${eventType} on ${eventDate}`,
      html: htmlBody,
      text: textFallback,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
