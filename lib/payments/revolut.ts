// Revolut webhook signature verification.
//
// Revolut signs webhook payloads with HMAC-SHA256, using a per-webhook secret
// configured in the Revolut Business dashboard. The headers are:
//
//   Revolut-Signature        — value formatted as "v1=<sha256_hex>"
//                              (multiple comma-separated versions may appear)
//   Revolut-Request-Timestamp — Unix timestamp (seconds)
//
// The signed string is: `${version}.${timestamp}.${rawBody}` per Revolut docs.
// We accept v1 and reject if the secret env var is missing.

import { createHmac, timingSafeEqual } from "crypto";

const SIGNATURE_TOLERANCE_SECONDS = 60 * 5; // 5 minutes

export type VerificationResult =
  | { ok: true }
  | { ok: false; status: 401 | 503; reason: string };

export function verifyRevolutWebhook(opts: {
  rawBody: string;
  signatureHeader: string | null;
  timestampHeader: string | null;
}): VerificationResult {
  const secret = process.env.REVOLUT_WEBHOOK_SECRET;
  if (!secret) {
    return { ok: false, status: 503, reason: "REVOLUT_WEBHOOK_SECRET not configured" };
  }
  if (!opts.signatureHeader || !opts.timestampHeader) {
    return { ok: false, status: 401, reason: "missing signature or timestamp header" };
  }

  const tsNum = Number(opts.timestampHeader);
  if (!Number.isFinite(tsNum)) {
    return { ok: false, status: 401, reason: "invalid timestamp header" };
  }
  const ageSec = Math.abs(Math.floor(Date.now() / 1000) - tsNum);
  if (ageSec > SIGNATURE_TOLERANCE_SECONDS) {
    return { ok: false, status: 401, reason: `timestamp outside tolerance (${ageSec}s)` };
  }

  // Header may contain "v1=...,v2=..." — only v1 is currently defined.
  const parts = opts.signatureHeader.split(",").map((s) => s.trim());
  const v1Part = parts.find((p) => p.startsWith("v1="));
  if (!v1Part) {
    return { ok: false, status: 401, reason: "no v1 signature in header" };
  }
  const providedHex = v1Part.slice(3);

  const signedString = `v1.${opts.timestampHeader}.${opts.rawBody}`;
  const expectedHex = createHmac("sha256", secret).update(signedString).digest("hex");

  const providedBuf = safeHexBuf(providedHex);
  const expectedBuf = Buffer.from(expectedHex, "hex");
  if (!providedBuf || providedBuf.length !== expectedBuf.length) {
    return { ok: false, status: 401, reason: "signature length mismatch" };
  }
  if (!timingSafeEqual(providedBuf, expectedBuf)) {
    return { ok: false, status: 401, reason: "signature mismatch" };
  }

  return { ok: true };
}

function safeHexBuf(hex: string): Buffer | null {
  if (!/^[0-9a-fA-F]+$/.test(hex)) return null;
  try {
    return Buffer.from(hex, "hex");
  } catch {
    return null;
  }
}
