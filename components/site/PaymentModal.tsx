"use client";

import { useEffect } from "react";
import { PayNow } from "./PayNow";

export function PaymentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(11, 18, 32, 0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--paper)",
          borderRadius: 12,
          boxShadow: "0 24px 56px -8px rgba(11, 18, 32, 0.35)",
          padding: 24,
          maxWidth: 520,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>Complete payment</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--muted)",
              fontSize: 13,
              cursor: "pointer",
              padding: "4px 8px",
            }}
          >
            Close
          </button>
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 16px", lineHeight: 1.55 }}>
          You can pay online via Revolut Checkout or by bank transfer.
        </p>
        <PayNow />
      </div>
    </div>
  );
}
