// Quota usage tracking. Lives in the same SQLite file as the suite outputs
// since they're related (suite tools are what consume quota). Read/write
// goes through its own better-sqlite3 connection (SQLite WAL mode supports
// multiple connections).

import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "suite.db");

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (_db) return _db;
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS quota_usage (
      user_id TEXT NOT NULL,
      period TEXT NOT NULL,
      counter_key TEXT NOT NULL,
      count INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL,
      PRIMARY KEY (user_id, period, counter_key)
    );
    CREATE INDEX IF NOT EXISTS idx_quota_usage_user_period
      ON quota_usage(user_id, period);
  `);
  _db = db;
  return db;
}

export function getUsage(userId: string, period: string, counterKey: string): number {
  const row = getDb()
    .prepare(
      `SELECT count FROM quota_usage WHERE user_id = ? AND period = ? AND counter_key = ?`,
    )
    .get(userId, period, counterKey) as { count: number } | undefined;
  return row?.count ?? 0;
}

export function incrementUsage(
  userId: string,
  period: string,
  counterKey: string,
  delta = 1,
): number {
  const db = getDb();
  const now = new Date().toISOString();
  db.prepare(
    `
    INSERT INTO quota_usage (user_id, period, counter_key, count, updated_at)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(user_id, period, counter_key)
    DO UPDATE SET count = count + excluded.count, updated_at = excluded.updated_at
  `,
  ).run(userId, period, counterKey, delta, now);
  return getUsage(userId, period, counterKey);
}

export type UsageRow = {
  userId: string;
  period: string;
  counterKey: string;
  count: number;
  updatedAt: string;
};

export function listUsageForUser(userId: string, period: string): UsageRow[] {
  const rows = getDb()
    .prepare(
      `SELECT user_id, period, counter_key, count, updated_at FROM quota_usage WHERE user_id = ? AND period = ?`,
    )
    .all(userId, period) as Record<string, unknown>[];
  return rows.map((r) => ({
    userId: r.user_id as string,
    period: r.period as string,
    counterKey: r.counter_key as string,
    count: r.count as number,
    updatedAt: r.updated_at as string,
  }));
}
