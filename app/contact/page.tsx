"use client";

import Link from "next/link";
import { Mail, Calendar, ListChecks, ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { CALENDLY_URL, WAITLIST_NOTIFY_EMAIL } from "@/lib/config";

export default function ContactPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          CONTACT
        </div>
        <h1 className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          Get in touch.
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, marginBottom: 48, maxWidth: 640 }}>
          Three ways to reach us. Pick whichever fits — we read all three.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 32 }}>
          <ContactCard
            icon={Mail}
            title="Email"
            body={WAITLIST_NOTIFY_EMAIL}
            href={`mailto:${WAITLIST_NOTIFY_EMAIL}`}
            cta="Send an email"
          />
          <ContactCard
            icon={Calendar}
            title="Book a 15-min demo"
            body="Live walkthrough of the audit engine and the suite."
            href={CALENDLY_URL}
            cta="Open Calendly"
            external
          />
          <ContactCard
            icon={ListChecks}
            title="Join the waitlist"
            body="Get notified when monitoring + team accounts launch."
            href="/waitlist"
            cta="Join waitlist"
          />
        </div>

        <div style={{ marginTop: 56, padding: "20px 24px", background: "var(--paper-2)", borderRadius: 10, fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>
          For security and HIPAA questions, please include &quot;security&quot; in your subject line so we can route it to the right person quickly.
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}

function ContactCard({ icon: Icon, title, body, href, cta, external }: { icon: typeof Mail; title: string; body: string; href: string; cta: string; external?: boolean }) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <div
      className="lift"
      style={{
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: 24,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 36, height: 36, borderRadius: 9,
          background: "var(--accent-soft)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <Icon size={18} strokeWidth={1.75} color="var(--accent)" />
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>{title}</h3>
      <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.55, margin: "0 0 18px", flex: 1 }}>{body}</p>
      <Link href={href} {...linkProps} style={{ textDecoration: "none" }}>
        <Button variant="secondary" size="sm" icon={ArrowRight}>{cta}</Button>
      </Link>
    </div>
  );
}
