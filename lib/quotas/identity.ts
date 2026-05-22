// Extract the Basic Auth username from an incoming request.
// nginx applies Basic Auth on protected paths and passes the original
// Authorization header to the upstream app, so we can read the username here
// without re-authenticating.
//
// Returns null for anonymous requests (no Authorization header, or a non-Basic
// scheme like Bearer). Callers decide how to handle anonymous — typically
// "no quota applied" so public demo flows like /scan still work.

export function getUsernameFromRequest(req: Request): string | null {
  const auth = req.headers.get("authorization") ?? req.headers.get("Authorization");
  if (!auth) return null;
  if (!auth.toLowerCase().startsWith("basic ")) return null;
  const b64 = auth.slice(6).trim();
  let decoded: string;
  try {
    decoded = Buffer.from(b64, "base64").toString("utf8");
  } catch {
    return null;
  }
  const colon = decoded.indexOf(":");
  if (colon === -1) return null;
  const username = decoded.slice(0, colon).trim();
  return username.length > 0 ? username : null;
}

// The shared admin account that should bypass per-user quotas (Glenn).
// Anyone using this username sees their usage tracked but never blocked.
export const ADMIN_USERS = new Set(["Glenn", "glenn"]);

export function isAdmin(userId: string | null): boolean {
  return userId != null && ADMIN_USERS.has(userId);
}
