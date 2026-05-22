import { NextResponse } from "next/server";
import { getUsernameFromRequest, isAdmin } from "./identity";
import { currentPeriod } from "./period";
import { getUsage, incrementUsage } from "./db";
import {
  FREE_TIER_LIMITS,
  LIMIT_MESSAGES,
  STANDARDS_INPUT_MAX_CHARS,
  FREE_TIER_HISTORY_DAYS,
  type CounterKey,
} from "./limits";

export type QuotaCheckOk = {
  ok: true;
  userId: string;
  used: number;
  limit: number;
};

export type QuotaCheckBlocked = {
  ok: false;
  status: 429;
  response: NextResponse;
};

export type QuotaCheckResult = QuotaCheckOk | QuotaCheckBlocked;

/**
 * Check and increment the quota counter for an authenticated user.
 *
 * Behavior:
 *   - Anonymous requests (no Basic Auth username) → "no quota applied",
 *     returns ok with userId "anonymous". This preserves public-demo
 *     behavior on /api/runs called by /scan.
 *   - Admin users (Glenn) → tracked but never blocked.
 *   - Free-tier users → blocked at the configured limit, with a 429
 *     response prepared.
 *
 * Increment happens only when the request is allowed. On block, no
 * state changes.
 */
export function checkAndIncrementQuota(
  req: Request,
  counterKey: CounterKey,
): QuotaCheckResult {
  const userId = getUsernameFromRequest(req);
  if (userId == null) {
    return { ok: true, userId: "anonymous", used: 0, limit: Infinity };
  }

  const limit = FREE_TIER_LIMITS[counterKey];
  if (limit === Infinity) {
    return { ok: true, userId, used: 0, limit };
  }

  const admin = isAdmin(userId);
  const period = currentPeriod();
  const used = getUsage(userId, period, counterKey);

  if (!admin && used >= limit) {
    return {
      ok: false,
      status: 429,
      response: NextResponse.json(
        {
          error: "quota_exceeded",
          counter: counterKey,
          message: LIMIT_MESSAGES[counterKey],
          limit,
          used,
        },
        { status: 429 },
      ),
    };
  }

  const newCount = incrementUsage(userId, period, counterKey);
  return { ok: true, userId, used: newCount, limit };
}

export {
  FREE_TIER_LIMITS,
  LIMIT_MESSAGES,
  STANDARDS_INPUT_MAX_CHARS,
  FREE_TIER_HISTORY_DAYS,
  type CounterKey,
};

export { getUsernameFromRequest, isAdmin } from "./identity";
export { currentPeriod } from "./period";
export { getUsage, listUsageForUser } from "./db";
