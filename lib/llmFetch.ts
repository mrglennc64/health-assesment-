/**
 * fetch wrapper that retries up to 2 times on 429 / 503 with exponential
 * backoff (1s, then 2s). After the third attempt fails, the caller's
 * callModelWithFallback() takes over and switches providers.
 *
 * Honors Retry-After when the server sends one, capped at MAX_RETRY_DELAY_MS
 * to avoid stalling a whole run on a single provider asking us to wait
 * minutes.
 */

const MAX_RETRIES = 2;
const BASE_BACKOFF_MS = 1_000;
const MAX_RETRY_DELAY_MS = 30_000;

export async function fetchWithRetry(
  input: string,
  init: RequestInit
): Promise<Response> {
  let res = await fetch(input, init);
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    if (res.status !== 429 && res.status !== 503) return res;

    const delayMs = pickDelayMs(res, attempt);
    if (delayMs > MAX_RETRY_DELAY_MS) return res;

    await new Promise((r) => setTimeout(r, delayMs));
    res = await fetch(input, init);
  }
  return res;
}

function pickDelayMs(res: Response, attempt: number): number {
  const retryAfter = res.headers.get("retry-after");
  if (retryAfter) {
    const secs = Number(retryAfter);
    if (Number.isFinite(secs) && secs > 0) {
      return Math.min(secs * 1000, MAX_RETRY_DELAY_MS);
    }
  }
  // exponential backoff: 1s, 2s
  return Math.min(BASE_BACKOFF_MS * 2 ** (attempt - 1), MAX_RETRY_DELAY_MS);
}
