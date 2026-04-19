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

    const emailBody = [
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
      from: "Clover Inquiry <onboarding@resend.dev>",
      to: "cloverbarco@gmail.com",
      subject: `New Clover inquiry: ${eventType} on ${eventDate}`,
      text: emailBody,
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
