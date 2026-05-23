"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/primitives";
import { useLang } from "@/lib/i18n/LanguageContext";
import type { Dict } from "@/lib/i18n/dict";

type FooterLink = { label: string; href: string };
type FooterCol = { heading: string; links: FooterLink[] };

const PROTECTED_PREFIXES = ["/audit", "/suite", "/monitoring", "/history", "/reports", "/admin", "/internal"];
function isProtected(href: string): boolean {
  return PROTECTED_PREFIXES.some((p) => href === p || href.startsWith(`${p}/`));
}

function buildCols(f: Dict["footer"]): FooterCol[] {
  return [
    {
      heading: f.cols.product.heading,
      links: [
        { label: f.cols.product.productOverview, href: "/product" },
        { label: f.cols.product.complianceSuite, href: "/suite" },
        { label: f.cols.product.pricing, href: "/pricing" },
        { label: f.cols.product.freeAudit, href: "/scan" },
        { label: f.cols.product.sampleReport, href: "/report" },
      ],
    },
    {
      heading: f.cols.company.heading,
      links: [
        { label: f.cols.company.company, href: "/company" },
        { label: f.cols.company.whoItsFor, href: "/who-its-for" },
        { label: f.cols.company.contact, href: "/contact" },
        { label: f.cols.company.waitlist, href: "/waitlist" },
      ],
    },
    {
      heading: f.cols.resources.heading,
      links: [
        { label: f.cols.resources.documentation, href: "/documentation" },
        { label: f.cols.resources.status, href: "/status" },
        { label: f.cols.resources.safety, href: "/safety" },
        { label: f.cols.resources.security, href: "/security" },
        { label: f.cols.resources.monitoring, href: "/monitoring" },
      ],
    },
    {
      heading: f.cols.legal.heading,
      links: [
        { label: f.cols.legal.privacy, href: "/privacy" },
        { label: f.cols.legal.terms, href: "/terms" },
      ],
    },
  ];
}

export function MarketingFooter() {
  const { t } = useLang();
  const f = t.footer;
  const cols = buildCols(f);
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        marginTop: 96,
        padding: "56px 32px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <Logo />
          <p
            style={{
              fontSize: 13,
              color: "var(--muted)",
              marginTop: 14,
              maxWidth: 320,
              lineHeight: 1.6,
            }}
          >
            {f.tagline}
          </p>
          <p
            className="mono"
            style={{
              fontSize: 10.5,
              color: "var(--muted-2)",
              marginTop: 28,
              letterSpacing: "0.04em",
            }}
          >
            {f.copyright}
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.heading}>
            <h4
              className="mono"
              style={{
                fontSize: 10.5,
                color: "var(--muted-2)",
                fontWeight: 600,
                marginTop: 0,
                marginBottom: 14,
                letterSpacing: "0.1em",
              }}
            >
              {col.heading.toUpperCase()}
            </h4>
            {col.links.map((link) => (
              <div key={link.label} style={{ marginBottom: 9 }}>
                <Link
                  href={link.href}
                  prefetch={isProtected(link.href) ? false : undefined}
                  style={{ fontSize: 13, color: "var(--ink-2)", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
