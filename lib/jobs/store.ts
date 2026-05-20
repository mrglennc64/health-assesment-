import type { Run } from "./types";

declare global {
  var __haeRunStore: Map<string, Run> | undefined;
}

const store: Map<string, Run> =
  globalThis.__haeRunStore ?? new Map<string, Run>();
globalThis.__haeRunStore = store;

export function saveRun(run: Run) {
  store.set(run.id, run);
}

export function getRun(id: string): Run | undefined {
  return store.get(id);
}

export function listRuns(): Run[] {
  return [...store.values()].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );
}

export function newRunId(): string {
  const ts = Date.now().toString(36);
  const rnd = Math.random().toString(36).slice(2, 6);
  return `${ts}${rnd}`;
}
