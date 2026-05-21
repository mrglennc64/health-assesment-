"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/primitives";

export function ComingSoon({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ maxWidth: 840, margin: "0 auto", padding: "96px 32px" }}>
      <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
        {kicker}
      </div>
      <h1 className="serif" style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.02, margin: "0 0 18px" }}>
        {title}
      </h1>
      <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, maxWidth: 580, marginBottom: 32 }}>
        {description}
      </p>

      <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 36, marginBottom: 24, display: "flex", alignItems: "center", gap: 20 }}>
        <Sparkles size={32} strokeWidth={1.5} color="var(--accent)" style={{ flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <h2 className="serif" style={{ fontSize: 22, fontWeight: 500, margin: "0 0 8px" }}>
            Coming soon
          </h2>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
            This view becomes available once accounts and history are wired up. The audit engine is
            live and runnable today — start a single audit and download the PDF.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/scan" style={{ textDecoration: "none" }}>
          <Button variant="primary" icon={ArrowRight}>Run a free scan</Button>
        </Link>
        <Link href="/report" style={{ textDecoration: "none" }}>
          <Button variant="secondary">Open full report</Button>
        </Link>
      </div>
    </div>
  );
}
