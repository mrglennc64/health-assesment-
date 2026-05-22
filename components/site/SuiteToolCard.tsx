"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Tier = "FREE" | "PRO";

export function SuiteToolCard({
  href,
  icon: Icon,
  iconColor,
  tier,
  title,
  description,
  bullets,
}: {
  href: string;
  icon: LucideIcon;
  iconColor: string;
  tier: Tier;
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <div
        className="lift"
        style={{
          background: "var(--card)",
          border: "1px solid var(--line)",
          borderRadius: 14,
          padding: 28,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <span
          className="mono"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            fontSize: 10,
            fontWeight: 600,
            padding: "4px 9px",
            borderRadius: 4,
            letterSpacing: "0.08em",
            background: tier === "FREE" ? "var(--good-soft, rgba(60, 138, 90, 0.12))" : "var(--accent-soft)",
            color: tier === "FREE" ? "var(--good, #3c8a5a)" : "var(--accent)",
          }}
        >
          {tier}
        </span>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: `${iconColor}1a`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Icon size={22} strokeWidth={1.75} color={iconColor} />
        </div>
        <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, margin: "0 0 8px" }}>
          {title}
        </h3>
        <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.55, margin: "0 0 18px" }}>
          {description}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
          {bullets.map((b) => (
            <li key={b} style={{ fontSize: 12.5, color: "var(--ink-2)", display: "flex", gap: 8 }}>
              <span style={{ color: iconColor, flexShrink: 0 }}>✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
