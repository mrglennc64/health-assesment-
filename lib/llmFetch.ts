/**
 * fetch wrapper that retries once on 429 (and 503) after Retry-After.
 *
 * Each LLM client uses this so a transient rate-limit doesn't immediately mark
 * a channel as failed. Capped at 30s to avoid stalling the whole run on a
 * provider that's asking us to wait minutes.
 */

const MAX_RETRY_DELAY_MS = 30_000;
const DEFAULT_RETRY_DELAY_MS = 2_000;

export async function fetchWithRetry(
  input: string,
  init: RequestInit
): Promise<Response> {
  const res = await fetch(input, init);
  if (res.status !== 429 && res.status !== 503) return res;

  const retryAfter = res.headers.get("retry-after");
  let delayMs = DEFAULT_RETRY_DELAY_MS;
  if (retryAfter) {
    const secs = Number(retryAfter);
    if (Number.isFinite(secs) && secs > 0) {
      delayMs = Math.min(secs * 1000, MAX_RETRY_DELAY_MS);
    }
  }
  if (delayMs > MAX_RETRY_DELAY_MS) return res;

  await new Promise((r) => setTimeout(r, delayMs));
  return fetch(input, init);
}
