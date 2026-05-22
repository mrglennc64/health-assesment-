"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/primitives";

export function HistorySeedButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const run = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/suite/seed", { method: "POST" });
      const data = (await res.json()) as { ok?: boolean; inserted?: number; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || "Failed to load demo data.");
      } else {
        router.refresh();
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <Button variant="primary" size="sm" icon={Sparkles} onClick={run} disabled={loading}>
        {loading ? "Loading demo data…" : "Load demo data"}
      </Button>
      {error && (
        <span style={{ fontSize: 12, color: "var(--accent)" }}>{error}</span>
      )}
    </div>
  );
}
