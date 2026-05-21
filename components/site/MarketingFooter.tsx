import { Logo } from "@/components/ui/primitives";

const cols = [
  { h: "Product", l: ["Channels", "Sample report", "Pricing", "Free scan"] },
  { h: "Company", l: ["Who it's for", "Customers", "Security", "Contact"] },
  { h: "Resources", l: ["Documentation", "Changelog", "Status", "Privacy"] },
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
            Six-channel automated audits for healthcare documentation, HIPAA,
            claims, communication, content, and browser behavior. File in.
            Report out.
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
        {cols.map((col) => (
          <div key={col.h}>
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
              {col.h.toUpperCase()}
            </h4>
            {col.l.map((item) => (
              <div
                key={item}
                style={{
                  fontSize: 13,
                  color: "var(--ink-2)",
                  marginBottom: 9,
                  cursor: "pointer",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
