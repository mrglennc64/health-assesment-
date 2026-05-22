"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/primitives";

export function HistoryDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const doDelete = async () => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/suite/history/${id}`, { method: "DELETE" });
      if (res.ok) {
        router.push("/suite/history");
        router.refresh();
      } else {
        setDeleting(false);
        setConfirming(false);
      }
    } catch {
      setDeleting(false);
      setConfirming(false);
    }
  };

  if (confirming) {
    return (
      <div style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "var(--accent)" }}>Delete this record?</span>
        <Button variant="accent" size="sm" onClick={doDelete} disabled={deleting}>
          {deleting ? "Deleting…" : "Yes, delete"}
        </Button>
        <Button variant="secondary" size="sm" onClick={() => setConfirming(false)} disabled={deleting}>
          Cancel
        </Button>
      </div>
    );
  }

  return (
    <Button variant="secondary" size="sm" icon={Trash2} onClick={() => setConfirming(true)}>
      Delete
    </Button>
  );
}
