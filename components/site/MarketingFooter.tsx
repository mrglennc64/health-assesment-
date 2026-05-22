import Link from "next/link";
import { Logo } from "@/components/ui/primitives";

type FooterLink = { label: string; href: string; external?: boolean };
type FooterCol = { heading: string; links: FooterLink[] };

const COLS: FooterCol[] = [
  {
    heading: "Product",
    links: [
      { label: "Free audit", href: "/scan" },
      { label: "Compliance suite", href: "/suite" },
      { label: "Sample report", href: "/report" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Safety", href: "/safety" },
      { label: "Contact", href: "/contact" },
      { label: "Waitlist", href: "/waitlist" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "Audit plans", href: "/suite/audit-plan" },
      { label: "Standards mapping", href: "/suite/standards-mapping" },
      { label: "Gap analysis", href: "/suite/gap-analysis" },
      { label: "Risk assessment", href: "/suite/risk-assessment" },
      { label: "Policy / SOP", href: "/suite/policy" },
    ],
  },
];

export function MarketingFooter() {
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
          gridTemplateColumns: "2.2fr 1fr 1fr 1fr",
          gap: 48,
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
            One platform for healthcare audits and compliance documentation. Six-channel audit
            engine plus a suite of HIPAA-aligned document generators. File in. Report out.
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
            © 2026 AEGIS HEALTH AUDIT
          </p>
        </div>
        {COLS.map((col) => (
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
