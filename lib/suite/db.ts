import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import type { SuiteRecord, ToolId } from "./types";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "suite.db");

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (_db) return _db;
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS outputs (
      id TEXT PRIMARY KEY,
      tool TEXT NOT NULL,
      title TEXT NOT NULL,
      input_json TEXT NOT NULL,
      output_json TEXT NOT NULL,
      source_file_name TEXT,
      source_file_text TEXT,
      created_at TEXT NOT NULL,
      model TEXT,
      provider TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_outputs_tool_created
      ON outputs(tool, created_at DESC);
  `);
  _db = db;
  return db;
}

function rowToRecord(row: Record<string, unknown>): SuiteRecord {
  return {
    id: row.id as string,
    tool: row.tool as ToolId,
    title: row.title as string,
    inputJson: row.input_json as string,
    outputJson: row.output_json as string,
    sourceFileName: (row.source_file_name as string) ?? null,
    sourceFileText: (row.source_file_text as string) ?? null,
    createdAt: row.created_at as string,
    model: (row.model as string) ?? null,
    provider: (row.provider as string) ?? null,
  };
}

export function insertOutput(rec: Omit<SuiteRecord, "createdAt"> & { createdAt?: string }): SuiteRecord {
  const db = getDb();
  const createdAt = rec.createdAt ?? new Date().toISOString();
  db.prepare(
    `INSERT INTO outputs
       (id, tool, title, input_json, output_json, source_file_name, source_file_text, created_at, model, provider)
     VALUES (@id, @tool, @title, @inputJson, @outputJson, @sourceFileName, @sourceFileText, @createdAt, @model, @provider)`,
  ).run({
    id: rec.id,
    tool: rec.tool,
    title: rec.title,
    inputJson: rec.inputJson,
    outputJson: rec.outputJson,
    sourceFileName: rec.sourceFileName,
    sourceFileText: rec.sourceFileText,
    createdAt,
    model: rec.model,
    provider: rec.provider,
  });
  return { ...rec, createdAt } as SuiteRecord;
}

export function getOutput(id: string): SuiteRecord | null {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM outputs WHERE id = ?`).get(id) as
    | Record<string, unknown>
    | undefined;
  if (!row) return null;
  return rowToRecord(row);
}

export function listOutputs(opts: { tool?: ToolId; limit?: number; sinceISO?: string } = {}): SuiteRecord[] {
  const db = getDb();
  const limit = opts.limit ?? 100;
  const since = opts.sinceISO;
  let sql = `SELECT * FROM outputs WHERE 1=1`;
  const params: (string | number)[] = [];
  if (opts.tool) {
    sql += ` AND tool = ?`;
    params.push(opts.tool);
  }
  if (since) {
    sql += ` AND created_at >= ?`;
    params.push(since);
  }
  sql += ` ORDER BY created_at DESC LIMIT ?`;
  params.push(limit);
  const rows = db.prepare(sql).all(...params) as Record<string, unknown>[];
  return rows.map(rowToRecord);
}

export function deleteOutput(id: string): boolean {
  const db = getDb();
  const result = db.prepare(`DELETE FROM outputs WHERE id = ?`).run(id);
  return result.changes > 0;
}

export function generateId(tool: ToolId): string {
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const rand = Math.random().toString(36).slice(2, 8);
  return `${tool}-${ts}-${rand}`;
}
