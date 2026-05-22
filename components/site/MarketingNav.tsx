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
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Link href="/#channels" style={navLink}>Channels</Link>
          <Link href="/#pricing" style={navLink}>Pricing</Link>
          <Link href="/#who-its-for" style={navLink}>Who it&apos;s for</Link>
          <Link href="/suite" style={navLink}>Suite</Link>
          <Link href="/waitlist" style={navLink}>Join</Link>
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="sm">Sign in</Button>
          </Link>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="sm" icon={ArrowRight}>Free scan</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
