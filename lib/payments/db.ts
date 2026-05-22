// Payments database — separate SQLite file from the Suite's history so
// concerns stay isolated. Schema mirrors what the Revolut webhook needs
// plus enough fields to reconcile manual bank transfers later.

import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import { randomUUID } from "crypto";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "payments.db");

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (_db) return _db;
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS payments (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      email TEXT NOT NULL,
      amount_cents INTEGER NOT NULL,
      currency TEXT NOT NULL DEFAULT 'USD',
      method TEXT NOT NULL,
      status TEXT NOT NULL,
      revolut_payment_id TEXT UNIQUE,
      reference TEXT,
      raw_event_json TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_payments_email ON payments(email);
    CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
  `);
  _db = db;
  return db;
}

export type PaymentMethod = "revolut_checkout" | "bank_transfer";
export type PaymentStatus = "pending" | "completed" | "failed";

export type PaymentRecord = {
  id: string;
  userId: string | null;
  email: string;
  amountCents: number;
  currency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  revolutPaymentId: string | null;
  reference: string | null;
  rawEventJson: string | null;
  createdAt: string;
  updatedAt: string;
};

function rowToRecord(row: Record<string, unknown>): PaymentRecord {
  return {
    id: row.id as string,
    userId: (row.user_id as string) ?? null,
    email: row.email as string,
    amountCents: row.amount_cents as number,
    currency: row.currency as string,
    method: row.method as PaymentMethod,
    status: row.status as PaymentStatus,
    revolutPaymentId: (row.revolut_payment_id as string) ?? null,
    reference: (row.reference as string) ?? null,
    rawEventJson: (row.raw_event_json as string) ?? null,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

export function insertPayment(p: {
  email: string;
  amountCents: number;
  currency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  revolutPaymentId?: string | null;
  reference?: string | null;
  userId?: string | null;
  rawEventJson?: string | null;
}): PaymentRecord {
  const db = getDb();
  const now = new Date().toISOString();
  const id = randomUUID();
  db.prepare(
    `INSERT INTO payments
       (id, user_id, email, amount_cents, currency, method, status,
        revolut_payment_id, reference, raw_event_json, created_at, updated_at)
     VALUES
       (@id, @userId, @email, @amountCents, @currency, @method, @status,
        @revolutPaymentId, @reference, @rawEventJson, @createdAt, @updatedAt)`,
  ).run({
    id,
    userId: p.userId ?? null,
    email: p.email,
    amountCents: p.amountCents,
    currency: p.currency,
    method: p.method,
    status: p.status,
    revolutPaymentId: p.revolutPaymentId ?? null,
    reference: p.reference ?? null,
    rawEventJson: p.rawEventJson ?? null,
    createdAt: now,
    updatedAt: now,
  });
  return {
    id,
    userId: p.userId ?? null,
    email: p.email,
    amountCents: p.amountCents,
    currency: p.currency,
    method: p.method,
    status: p.status,
    revolutPaymentId: p.revolutPaymentId ?? null,
    reference: p.reference ?? null,
    rawEventJson: p.rawEventJson ?? null,
    createdAt: now,
    updatedAt: now,
  };
}

export function findByRevolutPaymentId(revolutPaymentId: string): PaymentRecord | null {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM payments WHERE revolut_payment_id = ?`).get(revolutPaymentId) as
    | Record<string, unknown>
    | undefined;
  return row ? rowToRecord(row) : null;
}

export function upsertCompletedRevolutPayment(p: {
  revolutPaymentId: string;
  email: string;
  amountCents: number;
  currency: string;
  rawEventJson: string;
}): PaymentRecord {
  const existing = findByRevolutPaymentId(p.revolutPaymentId);
  const db = getDb();
  const now = new Date().toISOString();

  if (existing) {
    db.prepare(
      `UPDATE payments
         SET status = 'completed',
             email = COALESCE(NULLIF(?, ''), email),
             amount_cents = ?,
             currency = ?,
             raw_event_json = ?,
             updated_at = ?
       WHERE revolut_payment_id = ?`,
    ).run(p.email, p.amountCents, p.currency, p.rawEventJson, now, p.revolutPaymentId);
    return findByRevolutPaymentId(p.revolutPaymentId)!;
  }

  return insertPayment({
    email: p.email,
    amountCents: p.amountCents,
    currency: p.currency,
    method: "revolut_checkout",
    status: "completed",
    revolutPaymentId: p.revolutPaymentId,
    rawEventJson: p.rawEventJson,
  });
}

export function listPayments(opts: { limit?: number } = {}): PaymentRecord[] {
  const db = getDb();
  const limit = opts.limit ?? 100;
  const rows = db.prepare(`SELECT * FROM payments ORDER BY created_at DESC LIMIT ?`).all(limit) as Record<
    string,
    unknown
  >[];
  return rows.map(rowToRecord);
}
