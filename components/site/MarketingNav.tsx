"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo, Button } from "@/components/ui/primitives";
import { useLang } from "@/lib/i18n/LanguageContext";
import type { Lang } from "@/lib/i18n/dict";

const navLink: React.CSSProperties = {
  fontSize: 13.5,
  color: "var(--ink-2)",
  cursor: "pointer",
  textDecoration: "none",
  fontWeight: 500,
};

export function MarketingNav() {
  const { lang, setLang, t } = useLang();

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
          <Link href="/product" style={navLink}>{t.nav.product}</Link>
          <Link href="/pricing" style={navLink}>{t.nav.pricing}</Link>
          <Link href="/who-its-for" style={navLink}>{t.nav.whoItsFor}</Link>
          <Link href="/suite" prefetch={false} style={navLink}>{t.nav.suite}</Link>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="sm" icon={ArrowRight}>{t.nav.requestAccess}</Button>
          </Link>
          <LangToggle lang={lang} setLang={setLang} />
        </nav>
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const seg: React.CSSProperties = {
    fontSize: 11.5,
    fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
    fontWeight: 600,
    letterSpacing: "0.08em",
    padding: "5px 9px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "var(--muted-2)",
    borderRadius: 5,
    lineHeight: 1,
  };
  const active: React.CSSProperties = {
    ...seg,
    background: "var(--ink)",
    color: "var(--paper)",
  };
  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: 2,
        border: "1px solid var(--line)",
        borderRadius: 7,
        background: "var(--paper)",
        marginLeft: 4,
      }}
    >
      <button
        type="button"
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        style={lang === "en" ? active : seg}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={lang === "sv"}
        onClick={() => setLang("sv")}
        style={lang === "sv" ? active : seg}
      >
        SV
      </button>
    </div>
  );
}
