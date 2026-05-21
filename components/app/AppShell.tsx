"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  FileBarChart,
  Plus,
  FileText,
  Settings,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/ui/primitives";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const NAV: NavItem[] = [
  { href: "/dashboard", label: "Overview", icon: Activity },
  { href: "/audits", label: "Audits", icon: FileBarChart },
  { href: "/audits/new", label: "New audit", icon: Plus },
  { href: "/report", label: "Reports", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings },
];

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(href + "/");
}

export function AppShell({
  children,
  topbarRight,
}: {
  children: React.ReactNode;
  topbarRight?: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "240px 1fr", background: "var(--paper)" }}>
      <aside
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "24px 0",
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <div style={{ padding: "0 24px", marginBottom: 32 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo color="var(--paper)" />
          </Link>
        </div>

        <nav style={{ flex: 1, padding: "0 12px", display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname || "", item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  background: active ? "rgba(250, 248, 244, 0.08)" : "transparent",
                  color: active ? "var(--paper)" : "rgba(250, 248, 244, 0.65)",
                  transition: "background 0.15s ease, color 0.15s ease",
                }}
              >
                <Icon size={16} strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(250, 248, 244, 0.08)", marginTop: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 99,
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              GC
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Glenn Carter</div>
              <div className="mono" style={{ fontSize: 10, color: "rgba(250,248,244,0.5)", letterSpacing: "0.04em" }}>RCM · PRO</div>
            </div>
          </div>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 6,
              fontSize: 13,
              color: "rgba(250,248,244,0.5)",
              textDecoration: "none",
              marginTop: 4,
            }}
          >
            <LogOut size={14} strokeWidth={1.75} />
            Sign out
          </Link>
        </div>
      </aside>

      <main style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
        {topbarRight && (
          <header
            style={{
              borderBottom: "1px solid var(--line)",
              background: "rgba(250, 248, 244, 0.85)",
              backdropFilter: "saturate(180%) blur(10px)",
              padding: "16px 32px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 12,
              position: "sticky",
              top: 0,
              zIndex: 40,
            }}
          >
            {topbarRight}
          </header>
        )}
        <div style={{ padding: "32px 40px 64px", flex: 1 }}>{children}</div>
      </main>
    </div>
  );
}
