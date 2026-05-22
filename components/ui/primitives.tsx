"use client";

import React from "react";
import {
  AlertCircle,
  AlertTriangle,
  Check,
  Info,
  Layers,
  type LucideIcon,
} from "lucide-react";
import type { DisplaySeverity } from "@/components/site/data";

// ──────────────────────────────────────────────────────────────────────────────
// Logo
// ──────────────────────────────────────────────────────────────────────────────

export function Logo({
  size = "md",
  color,
}: {
  size?: "sm" | "md" | "lg";
  color?: string;
}) {
  const fontSize = size === "lg" ? 22 : size === "sm" ? 14 : 17;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        color: color || "var(--ink)",
      }}
    >
      <svg
        width={fontSize + 6}
        height={fontSize + 6}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2 L21 6 V12 C21 17 17 21 12 22 C7 21 3 17 3 12 V6 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 12 L11 15 L16 9"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="serif" style={{ fontSize, fontWeight: 600 }}>
        MediReady<span style={{ color: "var(--accent)" }}>.</span>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Button
// ──────────────────────────────────────────────────────────────────────────────

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconLeft: IconLeft,
  onClick,
  type = "button",
  style,
  disabled,
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconLeft?: LucideIcon;
  onClick?: () => void;
  type?: "button" | "submit";
  style?: React.CSSProperties;
  disabled?: boolean;
}) {
  const sizes: Record<ButtonSize, React.CSSProperties> = {
    sm: { padding: "8px 14px", fontSize: 13 },
    md: { padding: "11px 20px", fontSize: 14 },
    lg: { padding: "14px 26px", fontSize: 15 },
  };
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    fontWeight: 500,
    cursor: disabled ? "not-allowed" : "pointer",
    border: "none",
    transition: "transform 0.15s ease, background 0.2s ease, color 0.2s ease",
    opacity: disabled ? 0.5 : 1,
    lineHeight: 1,
    fontFamily: "inherit",
    ...sizes[size],
  };
  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary: { background: "var(--ink)", color: "var(--paper)" },
    secondary: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--line-2)",
    },
    accent: { background: "var(--accent)", color: "white" },
    ghost: { background: "transparent", color: "var(--ink-2)" },
    inverse: { background: "var(--paper)", color: "var(--ink)" },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {IconLeft && <IconLeft size={size === "sm" ? 14 : 16} strokeWidth={2} />}
      {children}
      {Icon && <Icon size={size === "sm" ? 14 : 16} strokeWidth={2} />}
    </button>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// SevBadge
// ──────────────────────────────────────────────────────────────────────────────

function sevMeta(s: DisplaySeverity): {
  label: string;
  color: string;
  bg: string;
  icon: LucideIcon;
} {
  switch (s) {
    case "critical":
      return {
        label: "CRITICAL",
        color: "var(--accent)",
        bg: "var(--accent-soft)",
        icon: AlertCircle,
      };
    case "watch":
      return {
        label: "WATCH",
        color: "var(--warn)",
        bg: "var(--warn-soft)",
        icon: AlertTriangle,
      };
    case "info":
      return {
        label: "INFO",
        color: "var(--info)",
        bg: "var(--info-soft)",
        icon: Info,
      };
    case "pass":
      return {
        label: "PASS",
        color: "var(--good)",
        bg: "var(--good-soft)",
        icon: Check,
      };
  }
}

export function SevBadge({
  severity,
  size = "sm",
}: {
  severity: DisplaySeverity;
  size?: "sm" | "lg";
}) {
  const m = sevMeta(severity);
  const Icon = m.icon;
  const sizing =
    size === "lg"
      ? { padding: "5px 10px", fontSize: 11 }
      : { padding: "3px 8px", fontSize: 10 };
  return (
    <span
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: m.bg,
        color: m.color,
        borderRadius: 4,
        fontWeight: 600,
        letterSpacing: "0.04em",
        ...sizing,
      }}
    >
      <Icon size={size === "lg" ? 13 : 11} strokeWidth={2.5} />
      {m.label}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// ModelPill
// ──────────────────────────────────────────────────────────────────────────────

export function ModelPill({
  model,
  fallback,
}: {
  model: string;
  fallback?: string | null;
}) {
  const isFallback = !!fallback;
  return (
    <span
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 8px",
        fontSize: 10.5,
        fontWeight: 500,
        background: isFallback ? "var(--warn-soft)" : "var(--paper-2)",
        color: isFallback ? "var(--warn)" : "var(--muted)",
        borderRadius: 4,
        letterSpacing: "0.02em",
      }}
    >
      <Layers size={10} strokeWidth={2} />
      {model}
      {isFallback && <span style={{ opacity: 0.7 }}>· fallback</span>}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// ScoreRing
// ──────────────────────────────────────────────────────────────────────────────

export function ScoreRing({
  score,
  size = 80,
  stroke = 6,
  label,
  mini,
}: {
  score: number;
  size?: number;
  stroke?: number;
  label?: string;
  mini?: boolean;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * (score / 100);
  const color =
    score >= 80
      ? "var(--good)"
      : score >= 65
        ? "var(--warn)"
        : "var(--accent)";
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--paper-2)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={`${dash} ${c}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
        }}
      >
        <div
          className="serif"
          style={{ fontSize: size * (mini ? 0.36 : 0.34), fontWeight: 500 }}
        >
          {score}
        </div>
        {label && (
          <div
            className="mono"
            style={{
              fontSize: 9,
              color: "var(--muted-2)",
              marginTop: 3,
              letterSpacing: "0.06em",
            }}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
