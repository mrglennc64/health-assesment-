"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export function DeleteHistoryButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const onClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (busy) return;
    const ok = window.confirm(`Delete "${title}"? This cannot be undone.`);
    if (!ok) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/suite/history/${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        alert(`Delete failed: ${data.error || `HTTP ${res.status}`}`);
        setBusy(false);
        return;
      }
      router.refresh();
    } catch (err) {
      alert(`Delete failed: ${err instanceof Error ? err.message : String(err)}`);
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={busy}
      aria-label={`Delete ${title}`}
      title="Delete"
      style={{
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: 8,
        border: "1px solid var(--line-2)",
        background: "transparent",
        color: "var(--muted)",
        cursor: busy ? "not-allowed" : "pointer",
        opacity: busy ? 0.4 : 1,
      }}
    >
      <Trash2 size={14} strokeWidth={1.75} />
    </button>
  );
}
