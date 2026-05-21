"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/primitives";

type State = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("success");
      } else {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(data.error || "Something went wrong.");
        setState("error");
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : String(err));
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--line)",
          borderRadius: 14,
          padding: 28,
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--accent)",
            fontWeight: 600,
            letterSpacing: "0.14em",
            marginBottom: 12,
          }}
        >
          ON THE LIST
        </div>
        <h2
          className="serif"
          style={{ fontSize: 28, fontWeight: 500, margin: "0 0 8px" }}
        >
          You&apos;re on the list.
        </h2>
        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
          We&apos;ll be in touch when the dashboard and monitoring features launch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 14,
        padding: 28,
      }}
    >
      <label
        htmlFor="waitlist-email"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--ink-2)",
          marginBottom: 12,
          display: "block",
        }}
      >
        Email
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        disabled={state === "submitting"}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: 8,
          border: "1px solid var(--line-2)",
          fontSize: 14,
          fontFamily: "inherit",
          background: "var(--paper)",
          color: "var(--ink)",
          outline: "none",
          marginBottom: 16,
        }}
      />
      <Button
        variant="primary"
        icon={ArrowRight}
        type="submit"
        disabled={state === "submitting" || !email.trim()}
      >
        {state === "submitting" ? "Joining…" : "Join the waitlist"}
      </Button>
      {state === "error" && (
        <p
          style={{
            marginTop: 12,
            fontSize: 13,
            color: "var(--accent)",
          }}
        >
          {errorMsg || "Try again."}
        </p>
      )}
    </form>
  );
}
