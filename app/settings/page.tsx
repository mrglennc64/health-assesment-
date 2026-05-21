"use client";

import { useState } from "react";
import {
  Check,
  Key,
  User,
  Bell,
  Palette,
  Trash2,
  Users,
} from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { Button } from "@/components/ui/primitives";

type ProviderState = {
  key: string;
  label: string;
  model: string;
  configured: boolean;
};

const PROVIDERS: ProviderState[] = [
  { key: "MISTRAL_API_KEY",    label: "Mistral AI",  model: "mistral-large-latest",       configured: true },
  { key: "OPENROUTER_API_KEY", label: "OpenRouter",  model: "openrouter/owl-alpha",       configured: true },
  { key: "GOOGLE_AI_KEY",      label: "Gemini",      model: "gemini-2.0-flash",           configured: true },
];

const TEAM = [
  { name: "Glenn Carter", email: "glenn@example.com", role: "OWNER",  initials: "GC" },
];

export default function SettingsPage() {
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifyWeekly, setNotifyWeekly] = useState(true);
  const [notifyCritical, setNotifyCritical] = useState(true);

  return (
    <AppShell>
      <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 8 }}>
        SETTINGS
      </div>
      <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.05, margin: "0 0 6px" }}>
        Account & preferences.
      </h1>
      <p style={{ fontSize: 14.5, color: "var(--muted)", margin: "0 0 32px", maxWidth: 580 }}>
        Manage your account, model providers, team, notifications, and PDF branding.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 880 }}>
        {/* Account */}
        <SettingsCard icon={User} title="Account" subtitle="Your basic profile.">
          <Row label="Name" value="Glenn Carter" />
          <Row label="Email" value="glenn@example.com" />
          <Row
            label="Plan"
            value={
              <span className="mono" style={{ fontSize: 11, padding: "4px 9px", background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 4, fontWeight: 600, letterSpacing: "0.06em" }}>
                RCM · PRO
              </span>
            }
          />
        </SettingsCard>

        {/* Providers */}
        <SettingsCard
          icon={Key}
          title="Model providers"
          subtitle="Read-only. Keys are set as environment variables on the server."
        >
          {PROVIDERS.map((p, i) => (
            <div
              key={p.key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 0",
                borderBottom: i < PROVIDERS.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{p.label}</div>
                <div className="mono" style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 2, letterSpacing: "0.02em" }}>
                  {p.model}
                </div>
              </div>
              <span className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.04em" }}>
                {p.key}
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 10.5,
                  padding: "4px 9px",
                  background: p.configured ? "var(--good-soft)" : "var(--accent-soft)",
                  color: p.configured ? "var(--good)" : "var(--accent)",
                  borderRadius: 4,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                {p.configured && <Check size={11} strokeWidth={2.5} />}
                {p.configured ? "CONFIGURED" : "MISSING"}
              </span>
            </div>
          ))}
          <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5, marginTop: 12, padding: "12px 14px", background: "var(--paper-2)", borderRadius: 8 }}>
            Provider priority is Mistral → OpenRouter → Gemini → stub. To rotate a key, update
            <span className="mono" style={{ background: "var(--card)", padding: "1px 6px", borderRadius: 4, marginInline: 6 }}>
              /srv/health-assesment-/.env.local
            </span>
            on the server and restart the service.
          </div>
        </SettingsCard>

        {/* Team */}
        <SettingsCard icon={Users} title="Team" subtitle="Members who can view audits and run new ones.">
          {TEAM.map((m, i) => (
            <div
              key={m.email}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 0",
                borderBottom: i < TEAM.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 99,
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--paper)",
                  flexShrink: 0,
                }}
              >
                {m.initials}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{m.name}</div>
                <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 1 }}>{m.email}</div>
              </div>
              <span className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.06em", fontWeight: 600 }}>
                {m.role}
              </span>
            </div>
          ))}
          <Button variant="secondary" size="sm" style={{ marginTop: 14 }}>
            Invite member
          </Button>
        </SettingsCard>

        {/* Notifications */}
        <SettingsCard
          icon={Bell}
          title="Notifications"
          subtitle="When and how you hear from Aegis."
        >
          <Toggle
            label="Email summaries"
            sub="Audit completes, weekly digest, account events."
            on={notifyEmail}
            onChange={setNotifyEmail}
          />
          <Toggle
            label="Weekly trend digest"
            sub="Friday afternoon summary of score changes and resolved actions."
            on={notifyWeekly}
            onChange={setNotifyWeekly}
          />
          <Toggle
            label="Critical findings"
            sub="Real-time email when any audit returns a critical finding."
            on={notifyCritical}
            onChange={setNotifyCritical}
          />
        </SettingsCard>

        {/* PDF branding */}
        <SettingsCard
          icon={Palette}
          title="PDF branding"
          subtitle="What appears on downloaded reports."
        >
          <Row label="Logo" value={<span style={{ fontSize: 13, color: "var(--muted)" }}>No logo uploaded</span>} action={<Button variant="secondary" size="sm">Upload</Button>} />
          <Row label="Accent color" value={<span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 16, height: 16, borderRadius: 4, background: "var(--accent)" }} /><span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>#B8442E</span></span>} action={<Button variant="secondary" size="sm">Change</Button>} />
          <Row label="Footer text" value="Aegis Health Audit · Stockholm" action={<Button variant="secondary" size="sm">Edit</Button>} />
        </SettingsCard>

        {/* Danger */}
        <SettingsCard
          icon={Trash2}
          title="Danger zone"
          subtitle="Permanent actions. Read twice before clicking."
          danger
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Delete account</div>
              <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>
                Removes your account, all team members, and every audit. This cannot be undone.
              </div>
            </div>
            <Button variant="accent" size="sm">Delete account</Button>
          </div>
        </SettingsCard>
      </div>
    </AppShell>
  );
}

function SettingsCard({
  icon: Icon,
  title,
  subtitle,
  children,
  danger,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <section
      style={{
        background: "var(--card)",
        border: danger ? "1px solid var(--accent-soft)" : "1px solid var(--line)",
        borderRadius: 14,
        padding: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 18 }}>
        <Icon size={18} strokeWidth={1.5} color={danger ? "var(--accent)" : "var(--accent)"} />
        <div>
          <h2 className="serif" style={{ fontSize: 20, fontWeight: 500, margin: "0 0 2px" }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: 12.5, color: "var(--muted)", margin: 0 }}>{subtitle}</p>
          )}
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}

function Row({
  label,
  value,
  action,
}: {
  label: string;
  value: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 0",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.06em", width: 110, flexShrink: 0 }}>
        {label.toUpperCase()}
      </div>
      <div style={{ flex: 1, fontSize: 14, color: "var(--ink-2)" }}>{value}</div>
      {action}
    </div>
  );
}

function Toggle({
  label,
  sub,
  on,
  onChange,
}: {
  label: string;
  sub?: string;
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 14,
        padding: "14px 0",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{label}</div>
        {sub && <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2, maxWidth: 520 }}>{sub}</div>}
      </div>
      <button
        onClick={() => onChange(!on)}
        style={{
          width: 38,
          height: 22,
          borderRadius: 999,
          background: on ? "var(--ink)" : "var(--line-2)",
          border: "none",
          padding: 2,
          cursor: "pointer",
          transition: "background 0.15s ease",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            display: "block",
            width: 18,
            height: 18,
            borderRadius: 99,
            background: "var(--paper)",
            transform: on ? "translateX(16px)" : "translateX(0)",
            transition: "transform 0.15s cubic-bezier(0.2, 0.7, 0.2, 1)",
          }}
        />
      </button>
    </div>
  );
}
