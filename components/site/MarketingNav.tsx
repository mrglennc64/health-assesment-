"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo, Button } from "@/components/ui/primitives";

const navLink: React.CSSProperties = {
  fontSize: 13.5,
  color: "var(--ink-2)",
  cursor: "pointer",
  textDecoration: "none",
  fontWeight: 500,
};

export function MarketingNav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(180%) blur(12px)",
        background: "rgba(250, 248, 244, 0.82)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link href="/product" style={navLink}>Product</Link>
          <Link href="/pricing" style={navLink}>Pricing</Link>
          <Link href="/who-its-for" style={navLink}>Who it&apos;s for</Link>
          <Link href="/documentation" style={navLink}>Documentation</Link>
          <Link href="/security" style={navLink}>Security</Link>
          <Link href="/contact" style={navLink}>Contact</Link>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="sm" icon={ArrowRight}>Request access</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
