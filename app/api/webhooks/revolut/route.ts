import { NextResponse, type NextRequest } from "next/server";
import { verifyRevolutWebhook } from "@/lib/payments/revolut";
import { upsertCompletedRevolutPayment } from "@/lib/payments/db";

export const runtime = "nodejs";
export const maxDuration = 30;

type RevolutPaymentCompletedEvent = {
  type: string;
  data?: {
    id?: string;
    amount?: number; // minor units
    currency?: string;
    customer_email?: string;
    customer?: { email?: string };
  };
};

export async function POST(req: NextRequest) {
  // We need the raw body for signature verification — req.json() consumes the
  // stream, so we read text first and JSON.parse manually.
  const rawBody = await req.text();

  const signatureHeader = req.headers.get("revolut-signature");
  const timestampHeader = req.headers.get("revolut-request-timestamp");

  const verification = verifyRevolutWebhook({
    rawBody,
    signatureHeader,
    timestampHeader,
  });
  if (!verification.ok) {
    console.warn(`[revolut-webhook] rejected: ${verification.reason}`);
    return NextResponse.json({ error: verification.reason }, { status: verification.status });
  }

  let event: RevolutPaymentCompletedEvent;
  try {
    event = JSON.parse(rawBody) as RevolutPaymentCompletedEvent;
  } catch {
    return NextResponse.json({ error: "invalid JSON body" }, { status: 400 });
  }

  if (event.type !== "payment.completed") {
    // Acknowledge other event types but don't act on them.
    return NextResponse.json({ ok: true, ignored: event.type ?? "unknown" });
  }

  const data = event.data ?? {};
  const revolutPaymentId = data.id;
  const amountCents = data.amount;
  const currency = data.currency;
  const email = data.customer_email ?? data.customer?.email ?? "";

  if (!revolutPaymentId || typeof amountCents !== "number" || !currency) {
    console.warn("[revolut-webhook] payment.completed missing required fields:", { revolutPaymentId, amountCents, currency });
    return NextResponse.json({ error: "missing required fields in payment.completed" }, { status: 400 });
  }

  const record = upsertCompletedRevolutPayment({
    revolutPaymentId,
    email,
    amountCents,
    currency,
    rawEventJson: rawBody,
  });

  return NextResponse.json({ ok: true, id: record.id, status: record.status });
}
