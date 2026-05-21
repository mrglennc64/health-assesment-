import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { isValidEmail } from "@/lib/email";
import { WAITLIST_NOTIFY_EMAIL } from "@/lib/config";

const FROM_ADDRESS = "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  let body: { email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const email = body.email as string;
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    console.warn(
      `[waitlist] RESEND_API_KEY not set — signup from ${email} was not emailed`,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(key);
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: WAITLIST_NOTIFY_EMAIL,
      subject: "New waitlist signup",
      text: `New signup: ${email}\nAt: ${new Date().toISOString()}`,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.warn("[waitlist] Resend send failed:", (err as Error).message);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
