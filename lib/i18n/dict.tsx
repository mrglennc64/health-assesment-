import type { ReactNode } from "react";
import Link from "next/link";

export type Lang = "en" | "sv";

type SuiteToolCopy = {
  cardDesc: string;
  cardBullets: string[];
  pageKicker: string;
  pageTitle: string;
  pageBody: ReactNode; // may contain a link to history
  cta: string;
  loadingCta: string;
};

type MarketingPage = {
  home: {
    heroKicker: string;
    heroTitle: ReactNode;
    heroBody: string;
    ctaRunAudit: string;
    ctaExploreSuite: string;
    badgeLLM: string;
    badgeExport: string;
    badgeIntegration: string;

    twoProductsKicker: string;
    twoProductsTitle: ReactNode;

    productOneKicker: string;
    productOneName: string;
    productOneBody: string;
    productOneList: string[];
    productOneCTA: string;

    productTwoKicker: string;
    productTwoName: string;
    productTwoBody: string;
    productTwoList: string[];
    productTwoCTA: string;

    suiteKicker: string;
    suiteTitle: ReactNode;
    suiteBody: string;
    suiteCTA: string;

    suiteTools: { title: string; desc: string }[];

    engineKicker: string;
    engineTitle: ReactNode;
    engineBody: string;
    engineCTA: string;

    whoKicker: string;
    whoTitle: ReactNode;
    whoBody: string;
    whoCards: { label: string; sub: string }[];

    safetyKicker: string;
    safetyTitle: ReactNode;
    safetyBody: string;
    safetyCards: { title: string; desc: string }[];
    safetyCTA: string;

    pricingKicker: string;
    pricingTitle: string;
    pricingBody: string;
    pricingCTA: string;

    closingTitle: ReactNode;
    closingBody: string;
  };
  about: {
    kicker: string;
    title: string;
    para1: string;
    para2: string;
    para3: string;
    ctaAudit: string;
    ctaSuite: string;
  };
  contact: {
    kicker: string;
    title: string;
    generalLabel: string;
    salesLabel: string;
    founderLabel: string;
    location: string;
  };
  nav: {
    product: string;
    pricing: string;
    whoItsFor: string;
    suite: string;
    requestAccess: string;
  };
  settingsPage: {
    kicker: string;
    title: string;
    body: string;
    account: {
      title: string;
      subtitle: string;
      nameLabel: string;
      emailLabel: string;
      planLabel: string;
    };
    providers: {
      title: string;
      subtitle: string;
      configured: string;
      missing: string;
      rotateNote: ReactNode;
    };
    team: {
      title: string;
      subtitle: string;
      invite: string;
    };
    notifications: {
      title: string;
      subtitle: string;
      email: { label: string; sub: string };
      weekly: { label: string; sub: string };
      critical: { label: string; sub: string };
    };
    pdf: {
      title: string;
      subtitle: string;
      logoLabel: string;
      noLogo: string;
      upload: string;
      accentLabel: string;
      change: string;
      footerLabel: string;
      footerValue: string;
      edit: string;
    };
    danger: {
      title: string;
      subtitle: string;
      deleteLabel: string;
      deleteBody: string;
      deleteCta: string;
    };
  };
  reportsPage: {
    kicker: string;
    title: string;
    body: string;
    downloadsLine: ReactNode;
  };
  suiteHistoryList: {
    backToSuite: string;
    kicker: string;
    title: string;
    body: string;
    freeTierBanner: (days: number) => ReactNode;
    empty: {
      title: string;
      body: string;
      openSuite: string;
    };
    toolLabels: {
      "audit-plan": string;
      "standards-mapping": string;
      "gap-analysis": string;
      "risk-assessment": string;
      "policy": string;
    };
  };
  suiteHistoryDetail: {
    backToHistory: string;
    engagementHeading: string;
    inputHeading: string;
    sourceFileLabel: string;
  };
  securityPage: {
    kicker: string;
    title: string;
    sections: { heading: string; body?: string; bullets?: string[] }[];
  };
  privacyPage: {
    kicker: string;
    title: string;
    noPhiHeading: string;
    noPhiBody: ReactNode;
    inputsHeading: string;
    inputsList: ReactNode[];
    collectHeading: string;
    collectList: string[];
    notCollectHeading: string;
    notCollectList: string[];
    thirdPartyHeading: string;
    thirdPartyBody: string;
    deleteHeading: string;
    deleteBody: ReactNode;
  };
  termsPage: {
    kicker: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
  channels: {
    documentation: { label: string; desc: string };
    hipaa: { label: string; desc: string };
    claims: { label: string; desc: string };
    communication: { label: string; desc: string };
    content: { label: string; desc: string };
    synthetic: { label: string; desc: string };
  };
  productPage: {
    kicker: string;
    title: string;
    auditsHeading: string;
    auditsBody: string;
    auditsList: string[];
    auditsOutputs: string;
    auditsCta: string;
    suiteHeading: string;
    suiteBody: string;
    suiteList: string[];
    suiteCta: string;
    monitoringHeading: string;
    monitoringBody: string;
    monitoringCta: string;
  };
  statusPage: {
    kicker: string;
    title: string;
    allOperational: string;
    operationalSuffix: string; // "Operational" / "Operativ"
    systems: { auditEngine: string; complianceSuite: string; monitoring: string; fileUploads: string; exports: string };
    maintenanceHeading: string;
    maintenanceBody: string;
  };
  waitlistPage: {
    kicker: string;
    title: string;
    body: string;
  };
  waitlistForm: {
    emailLabel: string;
    emailPlaceholder: string;
    submitIdle: string;
    submitBusy: string;
    successKicker: string;
    successTitle: string;
    successBody: string;
    errorDefault: string;
    tryAgain: string;
  };
  paymentPage: {
    backToPricing: string;
    kicker: string;
    title: string;
    body: string;
    questionsLead: string; // "Questions about the payment? Email "
  };
  payNow: {
    title: string;
    option1Heading: string;
    option1Body: (amount: string) => string;
    option1Cta: (amount: string) => string;
    option2Heading: string;
    option2Body: string;
  };
  paymentSuccessPage: {
    kicker: string;
    title: (amount: string) => string;
    body: string;
    runAuditCta: string;
    openSuiteCta: string;
  };
  scanPage: {
    sampleInputs: string[];
    kicker: string;
    kickerResults: string;
    title: string;
    titleResults: string;
    body: string;
    bodyResults: string;
    inputLabel: string;
    inputPlaceholder: string;
    uploadIdle: string;
    uploadBusy: string;
    uploadOrTry: string;
    uploadNoText: string;
    uploadLoaded: (name: string) => string;
    noStoreBadge: string;
    runCta: string;
    runningStatus: string;
    runningTitle: string;
    runningBody: string;
    elapsedPrefix: string;
    overallKicker: (runId: string) => string;
    severityCritical: string;
    severityWatch: string;
    severityInfo: string;
    noCriticalBody: string;
    unlockTitle: (extra: number) => string;
    unlockBody: string;
    unlockCta: string;
    subscribeCta: string;
    runErrorDefault: string;
    uploadErrorPrefix: (status: number) => string;
  };
  reportPage: {
    kicker: string;
    kickerRun: (runId: string) => string;
    title: string;
    titleDone: string;
    body: string;
    bodyDone: string;
    inputLabel: string;
    inputPlaceholder: string;
    useSampleInput: string;
    runCta: string;
    runningCta: string;
    runningBody: string;
    overallLabel: string;
    severityCritical: string;
    severityWatch: string;
    severityInfo: string;
    downloadPdf: string;
    runAgain: string;
    bookDemo: string;
    joinWaitlist: string;
    failedBadge: string;
    noFindings: string;
    requiredActionsLabel: string;
    runErrorDefault: string;
    pdfErrorDefault: string;
  };
  safetyPage: {
    kicker: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
  pricingPage: {
    kicker: string;
    title: ReactNode;
    body: string;
    inviteOnly: string;
    freeTierKicker: string;
    freeName: string;
    freeBody: string;
    freeCta: string;
    freeFeatures: string[];
    perDocKicker: string;
    perDocTitle: string;
    perDocBody: string;
    perDocSuffix: {
      document: string;
      mapping: string;
      assessment: string;
    };
    payCta: string;
    subsKicker: string;
    subsTitle: string;
    subsBody: string;
    perMonth: string;
    mostPopular: string;
    waitlistCta: string;
    contactSalesCta: string;
    cards: {
      clinic: { name: string; tagline: string; features: string[] };
      network: { name: string; tagline: string; features: string[] };
      enterprise: { name: string; tagline: string; features: string[] };
    };
  };
  whoItsForPage: {
    kicker: string;
    title: string;
    items: string[];
  };
  docsPage: {
    kicker: string;
    title: string;
    groups: { heading: string; items: string[] }[];
  };
  historyPage: {
    kicker: string;
    title: string;
    body: string;
    suiteDocsTitle: string;
    suiteDocsBody: string;
    openLabel: string;
    auditRunsTitle: string;
    auditRunsBody: string;
    soonLabel: string;
  };
  internalPage: {
    kicker: string;
    title: string;
    body: string;
    badge: string;
  };
  adminPage: {
    kicker: string;
    title: string;
    body: string;
    badge: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    cols: {
      product: { heading: string; productOverview: string; complianceSuite: string; pricing: string; freeAudit: string; sampleReport: string };
      company: { heading: string; company: string; whoItsFor: string; contact: string; waitlist: string };
      resources: { heading: string; documentation: string; status: string; safety: string; security: string; monitoring: string };
      legal: { heading: string; privacy: string; terms: string };
    };
  };
  dashboard: {
    mockRuns: { target: string; date: string }[];
    mockActions: { channel: string; message: string }[];
    kicker: string;
    greeting: (name: string) => string;
    summary: (audits: number, critical: number) => string;
    kpi: {
      avgScore7d: string;
      avgScore30d: string;
      openCritical: string;
      resolved7d: string;
    };
    trend: {
      label: string; // OVERALL SCORE · 8 WEEKS
      sinceWeek1: (delta: number) => string; // "+21 since week 1"
      weeks: string[]; // 8 entries: WK 1..WK 7, NOW
    };
    channelHealth: string;
    pendingActions: {
      title: string;
      subtitle: (count: number) => string;
      timesAcrossRuns: string; // "ACROSS RUNS" suffix or full "across runs" word
    };
    recentAudits: {
      title: string;
      subtitle: (count: number) => string;
      seeAll: string;
      channelsSuffix: string; // "CHANNELS"
    };
    newAudit: string;
  };
  monitoring: {
    kicker: string;
    title: string;
    body: string;
    features: { title: string; desc: string }[]; // 4 cards
    pricingKicker: string;
    pricingBody: ReactNode; // includes link to /pricing
    pricingPageLink: string; // inline link text "pricing page" / "prissidan"
    pricingBodyAfter: string; // trailing text after the link, e.g. " for what each tier includes."
    ctaWaitlist: string;
    ctaOneOff: string;
  };
  suite: {
    index: {
      kicker: string;
      title: ReactNode;
      body: string;
      history: string;
      backToScan: string;
      aboutLabel: string;
      aboutBody: ReactNode; // includes link to history
      tierFree: string;
    };
    tools: {
      auditPlan: SuiteToolCopy;
      standardsMapping: SuiteToolCopy;
      gapAnalysis: SuiteToolCopy;
      riskAssessment: SuiteToolCopy;
      policy: SuiteToolCopy;
    };
    common: {
      backToSuite: string;
      // Field labels
      organisation: string;
      type: string;
      scope: string;
      periodCovered: string;
      systemsInScope: string;
      leadAuditor: string;
      documentType: string;
      framework: string;
      context: string;
      contextOptional: string;
      query: string;
      ephiInventory: string;
      priorIncidents: string;
      knownGaps: string;
      policyTitle: string;
      policyType: string;
      primaryFramework: string;
      ownerRole: string;
      effectiveDate: string;
      requirements: string;
      // Tabs + upload
      uploadFile: string;
      pasteText: string;
      clickToSelect: string;
      replaceFile: string;
      fileFormats: string;
      pasteHere: string;
      // CTAs
      downloadPdf: string;
      downloadWord: string;
      viewHistory: string;
      generateAnother: string;
      runAnother: string;
      analyseAnother: string;
      draftAnother: string;
      mapAnother: string;
      generatedBy: string;
      source: string;
      // Result section headings (UPPERCASE in UI)
      sections: {
        scope: string;
        objectives: string;
        methodology: string;
        schedule: string;
        checklist: string;
        riskAreas: string;
        findings: string;
        references: string;
        notes: string;
        query: string;
        applicableClauses: string;
        documentSummary: string;
        sectionsPresent: string;
        missingOrWeak: string;
        assumptions: string;
        riskRegister: string;
        topRecommendations: string;
      };
      // Risk register table headers
      riskCols: {
        asset: string;
        threat: string;
        vulnerability: string;
        likelihood: string;
        impact: string;
        inherent: string;
        residual: string;
        recommendedControls: string;
      };
      // Try examples helper
      tryLabel: string;
      // Dropdown option label maps — keyed by the English ID that backend receives.
      // Display label changes per language; backend always gets the EN key.
      orgTypeLabels: Record<string, string>;
      scopeLabels: Record<string, string>;
      documentTypeLabels: Record<string, string>;
      frameworkLabels: Record<string, string>;
      policyTypeLabels: Record<string, string>;
      policyFrameworkLabels: Record<string, string>;
    };
    phi: {
      heading: string;
      body: string;
      confirm: string;
    };
    findings: {
      none: string;
      clauses: string;
      action: string;
      remediation: string;
    };
  };
  audits: {
    list: {
      kicker: string;
      title: string;
      body: string;
      searchPlaceholder: string;
      filters: { all: string; critical: string; watch: string; pass: string };
      cols: { score: string; target: string; runId: string; date: string; channels: string };
      countSuffix: string; // e.g. "OF" in "12 OF 30 RUNS" or "AV" in Swedish
      runsLabel: string;  // "RUNS" / "GRANSKNINGAR"
      empty: string;
      newAudit: string;
    };
    new: {
      kicker: string;
      title: string;
      body: string;
      targetLabel: string;
      targetPlaceholder: string;
      targetHelp: string;
      typeLabel: string;
      notesLabel: string;
      notesPlaceholder: string;
      summaryLabel: string;
      channelsLabel: string;
      total: string;
      starting: string;
      start: string;
      hint: string;
    };
    types: {
      claims: { label: string; desc: string; price: string };
      full: { label: string; desc: string; price: string };
      exceptions: { label: string; desc: string; price: string };
    };
    channelShort: {
      documentation: string;
      hipaa: string;
      claims: string;
      communication: string;
      content: string;
      synthetic: string;
    };
  };
};

export type Dict = MarketingPage;

const em = (c: ReactNode) => (
  <em style={{ color: "var(--accent)", fontStyle: "italic" }}>{c}</em>
);

export const dict: Record<Lang, Dict> = {
  en: {
    nav: {
      product: "Product",
      pricing: "Pricing",
      whoItsFor: "Who it's for",
      suite: "MediReady Suite",
      requestAccess: "Request access",
    },
    home: {
      heroKicker: "AUDIT ENGINE + COMPLIANCE SUITE",
      heroTitle: (
        <>
          One platform for
          <br />
          healthcare audits and
          <br />
          {em("compliance documentation")}.
        </>
      ),
      heroBody:
        "Run six-channel audits, generate HIPAA-aligned documents, map standards, and close gaps — all in minutes.",
      ctaRunAudit: "Run a free audit",
      ctaExploreSuite: "Explore the compliance suite",
      badgeLLM: "LLM + SYNTHETIC BROWSER",
      badgeExport: "WORD + PDF EXPORT",
      badgeIntegration: "ZERO INTEGRATION",

      twoProductsKicker: "TWO PRODUCTS · ONE PLATFORM",
      twoProductsTitle: (
        <>
          Find the gaps.<br />
          {em("Then close them.")}
        </>
      ),

      productOneKicker: "PRODUCT ONE",
      productOneName: "MediReady Audits",
      productOneBody:
        "Six parallel audit channels that surface what payers, auditors, and regulators will find first.",
      productOneList: [
        "Claims",
        "HIPAA & security",
        "Documentation",
        "Patient communication",
        "Clinical content",
        "Synthetic browser behavior",
      ],
      productOneCTA: "Run a free audit",

      productTwoKicker: "PRODUCT TWO",
      productTwoName: "MedReady Suite",
      productTwoBody: "Compliance documentation generated in minutes.",
      productTwoList: [
        "Audit plans",
        "Standards mapping",
        "Document gap analysis",
        "HIPAA risk assessments",
        "Policy & SOP generator",
      ],
      productTwoCTA: "View the full suite",

      suiteKicker: "THE SUITE",
      suiteTitle: (
        <>
          Compliance<br />
          documents,<br />
          {em("generated in minutes")}.
        </>
      ),
      suiteBody:
        "Five tools that share the same engine and the same data model. Inputs are structured. Outputs cite real clauses. Every artifact downloads as a polished PDF and an editable Word document.",
      suiteCTA: "Open the suite",
      suiteTools: [
        { title: "Audit Plan Generator", desc: "Complete internal audit plans — scope, objectives, methodology, schedule, checklist, and risk areas. Word + JSON export." },
        { title: "Standards Mapping", desc: "Paste a finding or requirement and get the exact HIPAA, CMS, OCR, NIST, and ISO clauses that apply." },
        { title: "Document Gap Analysis", desc: "Upload an SOP or policy. AI flags missing sections, weak language, and clause gaps." },
        { title: "HIPAA Risk Assessment", desc: "NIST 800-30 methodology with full risk register, likelihood/impact scoring, and recommended controls." },
        { title: "Policy / SOP Generator", desc: "Draft complete HIPAA-aligned policies and SOPs with required sections and clause references." },
      ],

      engineKicker: "THE AUDIT ENGINE",
      engineTitle: (
        <>
          File in.<br />Report out.<br />
          {em("That's it.")}
        </>
      ),
      engineBody:
        "Upload a file, paste text, or enter a URL. Six bounded audit channels run in parallel. Export structured findings, required actions, and a PDF/JSON report. No integration, no SDK, no agent installed on your network.",
      engineCTA: "Run a free audit",

      whoKicker: "WHO IT'S FOR",
      whoTitle: (
        <>
          Anyone with<br />
          {em("regulatory exposure")}.
        </>
      ),
      whoBody:
        "If you generate clinical documentation, submit claims, handle patient data, write policies, or run audits — this platform gives you the same view your reviewers will have, before they have it.",
      whoCards: [
        { label: "Clinics", sub: "Primary care, specialty, dental, mental health." },
        { label: "Billing companies", sub: "Audit client workflows; reduce denials." },
        { label: "Healthcare SaaS", sub: "EHR add-ons, AI documentation, portals." },
        { label: "Networks", sub: "IDNs, ACOs, multi-location practices." },
        { label: "Consultants", sub: "White-label audit + documentation layer." },
        { label: "Compliance officers", sub: "Recurring audits + policy upkeep." },
        { label: "Internal audit teams", sub: "Plans, evidence, defensible reports." },
        { label: "Regulators", sub: "Independent verification workflows." },
      ],

      safetyKicker: "WHY IT'S SAFE",
      safetyTitle: (
        <>
          Built for<br />
          {em("healthcare data")}.
        </>
      ),
      safetyBody:
        "We designed for the only regulated data class that matters here: PHI. Everything below is the default — no checkboxes to flip, no enterprise tier required to get safety basics.",
      safetyCards: [
        { title: "No PHI stored on the audit side", desc: "Scan inputs are processed and discarded — not retained, not indexed, not aggregated." },
        { title: "Inputs deleted after processing", desc: "Audit run inputs are not persisted beyond the run. The engine is stateless by design." },
        { title: "Encrypted in transit", desc: "TLS 1.2+ on every endpoint. HSTS enforced. No mixed content. No plaintext fallback." },
        { title: "Local SQLite for Suite outputs", desc: "Suite documents live on your server, not in a third-party cloud index. You hold the file." },
        { title: "Not used for training", desc: "Inference runs against providers with signed BAAs. Inputs are not shared with training pipelines." },
        { title: "HIPAA-aligned workflows", desc: "Audit logging, least-privilege access, retention controls, and breach reporting are first-class." },
      ],
      safetyCTA: "Learn more about safety",

      pricingKicker: "PRICING",
      pricingTitle: "Pay for what you need.",
      pricingBody: "Run a one-off audit, generate a single document, or subscribe for unlimited.",
      pricingCTA: "View pricing",

      closingTitle: (
        <>See what your {em("auditors")} would.</>
      ),
      closingBody: "Run a free audit now. Top critical findings shown in the UI, no signup required.",
    },
    about: {
      kicker: "COMPANY",
      title: "Company",
      para1:
        "MediReady builds file-based healthcare audit and compliance tools that surface issues before payers, auditors, or regulators do. No integrations. No IT projects. File in → report out.",
      para2:
        "Founded by Glenn Carter, MediReady combines healthcare workflow experience, audit-grade data handling, HIPAA-aligned architecture, and deterministic validation logic.",
      para3: "Our goal is simple: make healthcare compliance fast, accurate, and accessible.",
      ctaAudit: "Run a free audit",
      ctaSuite: "Explore the suite",
    },
    contact: {
      kicker: "CONTACT",
      title: "Contact",
      generalLabel: "General inquiries:",
      salesLabel: "Sales:",
      founderLabel: "Founder:",
      location: "Stockholm, Sweden",
    },
    audits: {
      list: {
        kicker: "AUDITS",
        title: "Run history.",
        body: "Every audit you've run. Filter by score band, search by target or run ID.",
        searchPlaceholder: "Search target or run id",
        filters: { all: "All", critical: "Critical", watch: "Watch", pass: "Pass" },
        cols: { score: "SCORE", target: "TARGET", runId: "RUN ID", date: "DATE", channels: "CHANNELS" },
        countSuffix: "OF",
        runsLabel: "RUNS",
        empty: "No audits match this filter.",
        newAudit: "New audit",
      },
      new: {
        kicker: "NEW AUDIT",
        title: "Start a fresh audit.",
        body: "Pick the audit type, name your target, and start the run. Each audit fans out across the selected channels in parallel.",
        targetLabel: "TARGET",
        targetPlaceholder: "patient-portal.example.com · billing-workflow-v2 · COPD encounter notes",
        targetHelp: "Free-form label that identifies what you're auditing. URL, system name, encounter ID — anything.",
        typeLabel: "AUDIT TYPE",
        notesLabel: "NOTES · OPTIONAL",
        notesPlaceholder: "Anything that helps reviewers understand context: department, payer mix, system version, sample size.",
        summaryLabel: "SUMMARY",
        channelsLabel: "CHANNELS",
        total: "Total",
        starting: "Starting…",
        start: "Start audit",
        hint: "You'll be redirected to the report screen where you paste the actual content (clinical notes, workflow, URL) and the engine kicks off in parallel.",
      },
      types: {
        claims: {
          label: "Claims Audit",
          desc: "Single channel · fast. Taxonomy, NPI, payer ID, clearinghouse, EDI 837.",
          price: "$49",
        },
        full: {
          label: "Full Compliance Audit",
          desc: "All six channels. HIPAA + documentation + claims + content + communication + synthetic.",
          price: "$149",
        },
        exceptions: {
          label: "Exceptions & Denial Audit",
          desc: "Deep dive into denials, missing fields, payer-specific rules.",
          price: "$199",
        },
      },
      channelShort: {
        documentation: "Documentation",
        hipaa: "HIPAA",
        claims: "Claims",
        communication: "Communication",
        content: "Content",
        synthetic: "Synthetic",
      },
    },
    channels: {
      documentation: { label: "Clinical documentation", desc: "ICD-10, CPT, HCPCS, modifiers, NPI, taxonomy, encounter completeness" },
      hipaa:         { label: "HIPAA & security",       desc: "PHI exposure, headers, encryption, trackers, consent" },
      claims:        { label: "Claims workflow",        desc: "Payer rules, clearinghouse, EDI 837, payer IDs, denials" },
      communication: { label: "Patient communication",  desc: "Reminders, denial notices, opt-outs, privacy signals" },
      content:       { label: "Clinical content",       desc: "Guideline currency, evidence alignment, red-flag instructions" },
      synthetic:     { label: "Synthetic browser check", desc: "JS errors, network failures, payer API calls, performance" },
    },
    settingsPage: {
      kicker: "SETTINGS",
      title: "Account & preferences.",
      body: "Manage your account, model providers, team, notifications, and PDF branding.",
      account: {
        title: "Account",
        subtitle: "Your basic profile.",
        nameLabel: "Name",
        emailLabel: "Email",
        planLabel: "Plan",
      },
      providers: {
        title: "Model providers",
        subtitle: "Read-only. Keys are set as environment variables on the server.",
        configured: "CONFIGURED",
        missing: "MISSING",
        rotateNote: (
          <>
            Provider priority is Mistral → OpenRouter → Gemini → stub. To rotate a key, update
            <span className="mono" style={{ background: "var(--card)", padding: "1px 6px", borderRadius: 4, marginInline: 6 }}>
              /srv/health-assesment-/.env.local
            </span>
            on the server and restart the service.
          </>
        ),
      },
      team: {
        title: "Team",
        subtitle: "Members who can view audits and run new ones.",
        invite: "Invite member",
      },
      notifications: {
        title: "Notifications",
        subtitle: "When and how you hear from MediReady.",
        email: { label: "Email summaries", sub: "Audit completes, weekly digest, account events." },
        weekly: { label: "Weekly trend digest", sub: "Friday afternoon summary of score changes and resolved actions." },
        critical: { label: "Critical findings", sub: "Real-time email when any audit returns a critical finding." },
      },
      pdf: {
        title: "PDF branding",
        subtitle: "What appears on downloaded reports.",
        logoLabel: "Logo",
        noLogo: "No logo uploaded",
        upload: "Upload",
        accentLabel: "Accent color",
        change: "Change",
        footerLabel: "Footer text",
        footerValue: "MediReady · Stockholm",
        edit: "Edit",
      },
      danger: {
        title: "Danger zone",
        subtitle: "Permanent actions. Read twice before clicking.",
        deleteLabel: "Delete account",
        deleteBody: "Removes your account, all team members, and every audit. This cannot be undone.",
        deleteCta: "Delete account",
      },
    },
    reportsPage: {
      kicker: "REPORTS",
      title: "Reports library",
      body: "A consolidated view of every PDF + Word export you've generated — across audits and the Compliance Suite. Coming with the monitoring tier.",
      downloadsLine: (
        <>
          For now, downloads live with each individual run — see your{" "}
          <Link href="/suite/history" style={{ color: "var(--accent)" }}>suite history</Link>.
        </>
      ),
    },
    suiteHistoryList: {
      backToSuite: "Suite",
      kicker: "HISTORY",
      title: "Every generation, saved.",
      body: "Audit plans, mappings, and gap analyses you've created. Click an entry to re-download or review.",
      freeTierBanner: (days) => (
        <>
          <strong style={{ color: "var(--ink)" }}>Free tier — last {days} days.</strong>{" "}
          Older runs are hidden.{" "}
          <Link href="/contact" style={{ color: "var(--accent)" }}>Contact us</Link>{" "}
          to enable full history.
        </>
      ),
      empty: {
        title: "No history yet.",
        body: "Run any of the suite tools to populate your history — or load demo records to explore the suite without burning API credits.",
        openSuite: "Open the suite",
      },
      toolLabels: {
        "audit-plan": "Audit Plan",
        "standards-mapping": "Standards Mapping",
        "gap-analysis": "Gap Analysis",
        "risk-assessment": "Risk Assessment",
        "policy": "Policy / SOP",
      },
    },
    suiteHistoryDetail: {
      backToHistory: "History",
      engagementHeading: "Engagement",
      inputHeading: "Input",
      sourceFileLabel: "Source file:",
    },
    securityPage: {
      kicker: "SECURITY",
      title: "Security",
      sections: [
        {
          heading: "No PHI stored",
          body: "MediReady does not store or retain PHI. Inputs are processed ephemerally and deleted as soon as the audit completes.",
        },
        {
          heading: "Encrypted in transit",
          body: "All uploads and downloads use HTTPS/TLS 1.2+.",
        },
        {
          heading: "Local storage for Suite outputs",
          body: "Compliance Suite documents are stored locally in an isolated SQLite database. They are never shared and are not used for training.",
        },
        {
          heading: "HIPAA-aligned workflows",
          bullets: [
            "No persistent PHI",
            "No integration with clinical systems",
            "No EHR access",
            "No background data collection",
          ],
        },
        {
          heading: "Minimal data",
          body: "Only the data needed to produce the requested result is processed.",
        },
      ],
    },
    privacyPage: {
      kicker: "PRIVACY",
      title: "Privacy",
      noPhiHeading: "No PHI",
      noPhiBody: (
        <>
          Aegis is designed for de-identified content and does not knowingly receive Protected Health Information (PHI). Submitting PHI violates our{" "}
          <Link href="/terms" style={{ color: "var(--accent)" }}>Terms of Service</Link>. See <Link href="/security" style={{ color: "var(--accent)" }}>Security</Link> for the full data-flow architecture.
        </>
      ),
      inputsHeading: "How your inputs are handled",
      inputsList: [
        (<><strong>/scan (free audit):</strong> processed in process memory and discarded when the response returns. Nothing is written to disk.</>),
        (<><strong>/suite/* (compliance documents):</strong> form input and generated output are stored locally in a SQLite database so you can re-download documents. You can permanently delete any entry from the{" "}<Link href="/suite/history" style={{ color: "var(--accent)" }}>history page</Link> at any time.</>),
      ],
      collectHeading: "Data we collect",
      collectList: [
        "Email address (only if you provide it — waitlist, contact form)",
        "Payment information, processed by Revolut (we do not store card data)",
        "Non-PHI operational logs from the server (request timing, errors)",
      ],
      notCollectHeading: "Data we do not collect",
      notCollectList: [
        "Patient identifiers or medical records",
        "EHR data or clinical-system content",
        "Background analytics, telemetry, or behavioural tracking",
      ],
      thirdPartyHeading: "Third-party processors",
      thirdPartyBody:
        "Inputs you submit are sent to one or more AI providers (Google Gemini, Mistral, OpenRouter) for analysis. None of these providers operate under a HIPAA Business Associate Agreement with Aegis. Do not submit PHI.",
      deleteHeading: "Deleting your data",
      deleteBody: (
        <>
          For Suite documents, use the trash icon on the{" "}
          <Link href="/suite/history" style={{ color: "var(--accent)" }}>history page</Link> to permanently remove a record. To request deletion of other data (email address, contact-form messages), write to{" "}
          <a href="mailto:mrglenncarter@gmail.com" style={{ color: "var(--accent)" }}>mrglenncarter@gmail.com</a>.
        </>
      ),
    },
    termsPage: {
      kicker: "TERMS OF USE",
      title: "Terms of Use",
      intro: "By using MediReady, you agree to the following terms.",
      sections: [
        {
          heading: "1. No Medical Advice",
          body: "MediReady provides audit and compliance automation tools. It does not provide medical, legal, or regulatory advice.",
        },
        {
          heading: "2. User Responsibility",
          body: "You are responsible for ensuring that any data you upload does not contain PHI or other sensitive information that violates your internal policies or applicable laws.",
        },
        {
          heading: "3. Data Handling",
          body: "MediReady processes inputs ephemerally and does not store PHI. Compliance Suite outputs are stored locally and never shared or used for training.",
        },
        {
          heading: "4. Payment & Billing",
          body: "Payments are handled via secure third-party processors. All fees are non-refundable unless required by law.",
        },
        {
          heading: "5. Limitation of Liability",
          body: "MediReady is provided “as is” without warranties. We are not liable for indirect, incidental, or consequential damages.",
        },
      ],
    },
    productPage: {
      kicker: "PRODUCT",
      title: "Product",
      auditsHeading: "MediReady Audits",
      auditsBody:
        "Six-channel healthcare audits that surface what payers, auditors, and regulators will find first.",
      auditsList: [
        "Claims reimbursement",
        "HIPAA & security",
        "Documentation quality",
        "Patient communication",
        "Clinical content",
        "Synthetic reviewer behavior",
      ],
      auditsOutputs:
        "Outputs include overall and per-channel scores, severity-rated findings, required actions, and PDF/JSON export.",
      auditsCta: "Run a free audit",
      suiteHeading: "MediReady Suite",
      suiteBody:
        "Compliance documentation generated in minutes. No templates. No manual formatting.",
      suiteList: [
        "Audit Plan Generator",
        "Standards Mapping",
        "Document Gap Analysis",
        "HIPAA Risk Assessment",
        "Policy & SOP Generator",
      ],
      suiteCta: "Open the suite",
      monitoringHeading: "Monitoring",
      monitoringBody: "Weekly automated audits with trend tracking and historical comparisons.",
      monitoringCta: "Join the waitlist",
    },
    statusPage: {
      kicker: "STATUS",
      title: "Status",
      allOperational: "All systems operational",
      operationalSuffix: "Operational",
      systems: {
        auditEngine: "Audit Engine",
        complianceSuite: "Compliance Suite",
        monitoring: "Monitoring",
        fileUploads: "File uploads",
        exports: "Exports",
      },
      maintenanceHeading: "Scheduled Maintenance",
      maintenanceBody: "None at this time.",
    },
    waitlistPage: {
      kicker: "WAITLIST",
      title: "Be first when monitoring launches.",
      body:
        "Continuous monitoring, weekly runs, and trend tracking for the six audit channels. Drop your email — we'll let you know when it's live.",
    },
    waitlistForm: {
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      submitIdle: "Join the waitlist",
      submitBusy: "Joining…",
      successKicker: "ON THE LIST",
      successTitle: "You're on the list.",
      successBody: "We'll be in touch when the dashboard and monitoring features launch.",
      errorDefault: "Something went wrong.",
      tryAgain: "Try again.",
    },
    paymentPage: {
      backToPricing: "Pricing",
      kicker: "PAYMENT",
      title: "Complete your payment.",
      body:
        "Two ways to pay. Online via Revolut Checkout (fastest, automatic reconciliation), or by USD bank transfer for organisations that prefer it.",
      questionsLead: "Questions about the payment? Email ",
    },
    payNow: {
      title: "Complete your payment",
      option1Heading: "Option 1 — Pay online (recommended)",
      option1Body: (amount) => `Pay ${amount} securely via Revolut Checkout.`,
      option1Cta: (amount) => `Pay ${amount} via Revolut`,
      option2Heading: "Option 2 — Bank transfer (USD)",
      option2Body: "Use these details if you prefer a manual bank transfer.",
    },
    paymentSuccessPage: {
      kicker: "PAYMENT RECEIVED",
      title: (amount) => `Thanks — your ${amount} payment has been recorded.`,
      body:
        "A confirmation email will be sent shortly. If you don't see it within a few minutes, check your spam folder.",
      runAuditCta: "Run an audit",
      openSuiteCta: "Open the suite",
    },
    scanPage: {
      sampleInputs: [
        "Patient evaluated for Type 2 diabetes on 2026-06-01. ICD-10 E11.9 recorded. CPT 99214 correct. Modifier 25 applied. NPI present, POS 11 entered.",
        "Website uses HTTPS with HSTS, CSP, and secure cookies. No PHI in URLs. Consent banner loads before analytics.",
        "Claim submitted with payer ID, taxonomy, NPI, and EDI 837 generated. Clearinghouse response 200. No denial notification workflow configured.",
      ],
      kicker: "FREE SCAN",
      kickerResults: "FREE SCAN · RESULTS",
      title: "Start a free audit.",
      titleResults: "Critical findings.",
      body: "Paste a clinical note, claim workflow, or URL. MediReady runs all six channels in parallel — typically 15–40 seconds.",
      bodyResults: "Top critical issues across the six channels. Full report — all findings, required actions, PDF export — unlocks for $49.",
      inputLabel: "Input — clinical note, workflow description, or URL",
      inputPlaceholder: "Paste a clinical note, claim workflow description, or healthcare URL...",
      uploadIdle: "Upload file (PDF, DOCX, TXT, MD)",
      uploadBusy: "Reading file…",
      uploadOrTry: "or try:",
      uploadNoText: "No readable text found in this file.",
      uploadLoaded: (name) => `Loaded ${name} — review the text above, then run the scan.`,
      noStoreBadge: "INPUT IS NOT STORED OR USED FOR TRAINING",
      runCta: "Run scan",
      runningStatus: "STATUS",
      runningTitle: "Running six audit channels…",
      runningBody: "Fanning out in parallel. Typical run: 15–40 seconds.",
      elapsedPrefix: "ELAPSED",
      overallKicker: (runId) => `OVERALL · RUN ${runId}`,
      severityCritical: "CRITICAL",
      severityWatch: "WATCH",
      severityInfo: "INFO",
      noCriticalBody: "No critical findings detected in this run. Unlock the full report to see all watch and info-level items.",
      unlockTitle: (extra) => `${extra} more findings · PDF export`,
      unlockBody: "Unlock the full audit to see every finding, required action, and download the PDF for auditors.",
      unlockCta: "Unlock full report",
      subscribeCta: "Subscribe instead",
      runErrorDefault: "Failed to run audit.",
      uploadErrorPrefix: (status) => `Upload failed (HTTP ${status})`,
    },
    reportPage: {
      kicker: "HEALTH REPORT",
      kickerRun: (runId) => `REPORT · RUN ${runId}`,
      title: "Run a full audit.",
      titleDone: "Audit complete.",
      body: "Paste a clinical note, claim workflow, or URL. The engine fans out to six channels and returns the full report.",
      bodyDone: "Six channels analyzed. Expand a channel to see findings and required actions.",
      inputLabel: "Input — clinical note, workflow description, or URL",
      inputPlaceholder: "Paste a clinical note, claim workflow description, or healthcare URL...",
      useSampleInput: "Use sample input",
      runCta: "Run full audit",
      runningCta: "Analyzing six channels…",
      runningBody: "Running clinical, HIPAA, claims, communication, content, and synthetic checks in parallel… typically 15–40 seconds.",
      overallLabel: "OVERALL",
      severityCritical: "CRITICAL",
      severityWatch: "WATCH",
      severityInfo: "INFO",
      downloadPdf: "Download PDF",
      runAgain: "Run again",
      bookDemo: "Book a 15-min demo",
      joinWaitlist: "Join the waitlist",
      failedBadge: "FAILED",
      noFindings: "No findings for this channel.",
      requiredActionsLabel: "REQUIRED ACTIONS",
      runErrorDefault: "Failed to run audit.",
      pdfErrorDefault: "PDF generation failed.",
    },
    safetyPage: {
      kicker: "SAFETY",
      title: "Safety",
      intro:
        "MediReady is designed to minimize risk by eliminating PHI storage, reducing integration complexity, and ensuring all processing is ephemeral and encrypted.",
      sections: [
        { heading: "Ephemeral Processing", body: "Uploaded files and text inputs are processed in memory and deleted immediately after the audit completes." },
        { heading: "No PHI Retention", body: "MediReady does not store PHI, clinical notes, or patient identifiers. This eliminates the need for BAAs and reduces compliance overhead." },
        { heading: "Local Document Storage", body: "Compliance Suite outputs are stored locally in an isolated SQLite database and never shared or used for training." },
      ],
    },
    pricingPage: {
      kicker: "PRICING",
      title: (
        <>
          One audit, or a full<br />
          {em("compliance suite")}. You choose.
        </>
      ),
      body: "Free tier for invited users. Per-document pricing for one-offs. Subscriptions for teams.",
      inviteOnly: "INVITE ONLY",
      freeTierKicker: "FREE TIER",
      freeName: "Free",
      freeBody:
        "For early users evaluating MediReady. Every tool, gated by invite — request access and we'll set you up.",
      freeCta: "Request access",
      freeFeatures: [
        "3 full audits per month",
        "1 document per tool per month",
        "Unlimited standards mapping (short inputs)",
        "7-day history",
        "Demo monitoring dashboard",
      ],
      perDocKicker: "PER-DOCUMENT",
      perDocTitle: "Per-document pricing",
      perDocBody: "For one-off needs. Pay only for what you generate.",
      perDocSuffix: {
        document: "/document",
        mapping: "/mapping",
        assessment: "/assessment",
      },
      payCta: "Pay",
      subsKicker: "SUITE SUBSCRIPTIONS",
      subsTitle: "For teams that generate often",
      subsBody:
        "Subscriptions are not yet active. Join the waitlist to be notified when they launch.",
      perMonth: "/month",
      mostPopular: "MOST POPULAR",
      waitlistCta: "Join the waitlist",
      contactSalesCta: "Contact sales",
      cards: {
        clinic: {
          name: "Clinic",
          tagline: "Single-site practices and small clinics.",
          features: [
            "10 documents/month",
            "Unlimited standards mapping",
            "Unlimited audit plans",
            "Priority queue",
            "PDF + Word export",
          ],
        },
        network: {
          name: "Network / SaaS",
          tagline: "Multi-site networks and healthcare SaaS providers.",
          features: [
            "50 documents/month",
            "Unlimited risk assessments",
            "Unlimited gap analysis",
            "Team accounts",
            "Shared history",
          ],
        },
        enterprise: {
          name: "Enterprise",
          tagline: "IDNs, large consultancies, high-volume operators.",
          features: [
            "Unlimited everything",
            "API access",
            "Weekly monitoring",
            "Dedicated support",
            "Custom integrations",
          ],
        },
      },
    },
    whoItsForPage: {
      kicker: "WHO IT'S FOR",
      title: "Who It's For",
      items: [
        "Clinics",
        "Billing companies",
        "Healthcare SaaS",
        "Networks & groups",
        "Consultants",
        "Internal audit teams",
        "Regulators",
      ],
    },
    docsPage: {
      kicker: "DOCUMENTATION",
      title: "Documentation",
      groups: [
        {
          heading: "Getting Started",
          items: ["Run your first audit", "Generate compliance documents", "Use standards mapping", "Export reports"],
        },
        {
          heading: "Audit Engine",
          items: ["Claims audit", "Full compliance audit", "Denial audit", "Severity model", "Required actions"],
        },
        {
          heading: "Compliance Suite",
          items: ["Audit Plan Generator", "Standards Mapping", "Document Gap Analysis", "HIPAA Risk Assessment", "Policy & SOP Generator"],
        },
      ],
    },
    historyPage: {
      kicker: "HISTORY",
      title: "History",
      body: "Past generations across the platform. Choose a section below.",
      suiteDocsTitle: "Suite documents",
      suiteDocsBody: "Audit plans, mappings, gap analyses, risk assessments, and policies you've generated.",
      openLabel: "Open",
      auditRunsTitle: "Audit runs",
      auditRunsBody: "Coming soon. Past scans and full audits will appear here when persistent run history ships.",
      soonLabel: "SOON",
    },
    internalPage: {
      kicker: "INTERNAL",
      title: "Internal tools",
      body: "Engineering surface. Not for customer use.",
      badge: "INTERNAL · ACCESS REQUIRED",
    },
    adminPage: {
      kicker: "ADMIN",
      title: "Admin console",
      body: "Customer accounts, payments, audit history, system metrics. Reserved area.",
      badge: "INTERNAL · ACCESS REQUIRED",
    },
    footer: {
      tagline:
        "One platform for healthcare audits and compliance documentation. Six-channel audit engine plus a suite of HIPAA-aligned document generators. File in. Report out.",
      copyright: "© 2026 MEDIREADY",
      cols: {
        product: {
          heading: "Product",
          productOverview: "Product overview",
          complianceSuite: "Compliance suite",
          pricing: "Pricing",
          freeAudit: "Free audit",
          sampleReport: "Sample report",
        },
        company: {
          heading: "Company",
          company: "Company",
          whoItsFor: "Who it's for",
          contact: "Contact",
          waitlist: "Waitlist",
        },
        resources: {
          heading: "Resources",
          documentation: "Documentation",
          status: "Status",
          safety: "Safety",
          security: "Security",
          monitoring: "Monitoring",
        },
        legal: {
          heading: "Legal",
          privacy: "Privacy",
          terms: "Terms of use",
        },
      },
    },
    dashboard: {
      mockRuns: [
        { target: "COPD exacerbation follow-up · workflow + portal", date: "May 20, 2026 · 20:58 UTC" },
        { target: "patient-portal.example.com",                       date: "May 19, 2026 · 14:23 UTC" },
        { target: "billing-workflow-v2",                              date: "May 12, 2026 · 09:14 UTC" },
        { target: "telehealth-app · subset",                          date: "May 5, 2026 · 17:02 UTC" },
        { target: "ambulatory-discharge-summary",                     date: "Apr 28, 2026 · 11:40 UTC" },
        { target: "pediatric-encounter-notes (sample of 50)",         date: "Apr 21, 2026 · 08:55 UTC" },
        { target: "claim-form-v3-staging",                            date: "Apr 14, 2026 · 19:11 UTC" },
      ],
      mockActions: [
        { channel: "HIPAA",   message: "Patient identifiers (MRN/DOB) appearing in 14 distinct URL patterns" },
        { channel: "CLAIMS",  message: "Provider taxonomy code missing on outpatient claim workflow" },
        { channel: "COMM.",   message: "No queued denial-notification workflow for 277CA rejections" },
        { channel: "CONTENT", message: "Patient education pages cite superseded clinical guidelines" },
        { channel: "SYNTH.",  message: "Synthetic submission fails 4.1% during clearinghouse window" },
        { channel: "HIPAA",   message: "Analytics fires on /login before consent banner resolves" },
      ],
      kicker: "OVERVIEW",
      greeting: (name) => `Good morning, ${name}.`,
      summary: (audits, critical) =>
        `${audits} audits this week · ${critical} open critical findings across all targets.`,
      kpi: {
        avgScore7d: "Avg score · 7d",
        avgScore30d: "Avg score · 30d",
        openCritical: "Open critical",
        resolved7d: "Resolved · 7d",
      },
      trend: {
        label: "OVERALL SCORE · 8 WEEKS",
        sinceWeek1: (delta) => `+${delta} since week 1`,
        weeks: ["WK 1", "WK 2", "WK 3", "WK 4", "WK 5", "WK 6", "WK 7", "NOW"],
      },
      channelHealth: "CHANNEL HEALTH",
      pendingActions: {
        title: "Pending actions",
        subtitle: (count) => `${count} open across your targets`,
        timesAcrossRuns: "ACROSS RUNS",
      },
      recentAudits: {
        title: "Recent audits",
        subtitle: (count) => `${count} runs in the last 4 weeks`,
        seeAll: "See all",
        channelsSuffix: "CHANNELS",
      },
      newAudit: "New audit",
    },
    monitoring: {
      kicker: "MONITORING",
      title: "Weekly audits. Trend tracking. Alerts.",
      body:
        "One-off audits surface today's findings. Monitoring tells you whether they're getting better or worse over time — and pages you when something regresses.",
      features: [
        { title: "Weekly automated audits", desc: "Set a target once. Receive a fresh report every week, no manual re-run required." },
        { title: "Trend tracking", desc: "Per-channel score history across runs. See regressions early; see improvements clearly." },
        { title: "Regression alerts", desc: "Get notified by email when overall score drops or a new critical finding appears." },
        { title: "Historical comparisons", desc: "Diff the current run against the last 4 weeks. Track which findings recurred and which closed." },
      ],
      pricingKicker: "PRICING",
      pricingBody: (
        <>
          Clinics from $49/mo · Networks from $199/mo · SaaS from $499/mo · Enterprise $999+/mo. See the full{" "}
        </>
      ),
      pricingPageLink: "pricing page",
      pricingBodyAfter: " for what each tier includes.",
      ctaWaitlist: "Join the waitlist",
      ctaOneOff: "Run a one-off audit first",
    },
    suite: {
      index: {
        kicker: "MEDIREADY SUITE",
        title: (
          <>
            Compliance documents,
            <br />
            {em("generated in minutes")}.
          </>
        ),
        body: "Tools for healthcare audit plans, standards mapping, and document gap analysis. Outputs save to your local history and download as Word documents.",
        history: "History",
        backToScan: "Back to free audit",
        aboutLabel: "About this suite —",
        aboutBody: (
          <> outputs are saved locally on the server in a SQLite database. They are not shared, indexed, or used for training. Your inputs stay in your </>
        ),
        tierFree: "FREE",
      },
      tools: {
        auditPlan: {
          cardDesc:
            "Generate a complete internal audit plan — scope, objectives, methodology, schedule, checklist, and risk areas. Exports to Word.",
          cardBullets: [
            "HIPAA + healthcare-aligned scope",
            "Critical / High / Medium / Low risk classification",
            "Auto-generated methodology + schedule",
            "Word + JSON export",
          ],
          pageKicker: "AUDIT PLAN GENERATOR",
          pageTitle: "Generate a full internal audit plan.",
          pageBody:
            "Scope, methodology, schedule, checklist, and severity-rated risk areas — written for healthcare operators under HIPAA. Saves to your history; download as Word.",
          cta: "Generate audit plan",
          loadingCta: "Generating…",
        },
        standardsMapping: {
          cardDesc:
            "Paste a finding, gap, or requirement and get the exact HIPAA, CMS, OCR, NIST, ISO clauses that apply.",
          cardBullets: [
            "HIPAA Security & Privacy Rules",
            "NIST 800-66 / 800-53 / 800-30",
            "ISO 27001, ISO 13485 (where relevant)",
            "OCR & CMS guidance references",
          ],
          pageKicker: "STANDARDS MAPPING",
          pageTitle: "Find the exact clause.",
          pageBody:
            "Paste a finding, gap, or compliance question. Get the specific HIPAA, NIST, ISO, CMS, OCR or CFR clauses that govern it.",
          cta: "Map to clauses",
          loadingCta: "Mapping…",
        },
        gapAnalysis: {
          cardDesc:
            "Upload an existing SOP, policy, or compliance document. AI flags missing sections, weak language, and clause gaps.",
          cardBullets: [
            "PDF, DOCX, or plain text upload",
            "Section completeness check",
            "Severity-rated findings",
            "Remediation suggestions",
          ],
          pageKicker: "DOCUMENT GAP ANALYSIS",
          pageTitle: "Upload a doc. See what's missing.",
          pageBody:
            "Accepts PDF, DOCX, TXT, or pasted text (up to 5 MB). AI flags missing sections, weak language, and missing clause references against your chosen framework.",
          cta: "Run gap analysis",
          loadingCta: "Analysing…",
        },
        riskAssessment: {
          cardDesc:
            "The annual risk analysis required under 45 CFR §164.308(a)(1)(ii)(A). NIST 800-30 methodology with full risk register.",
          cardBullets: [
            "Likelihood × impact scoring",
            "Inherent vs residual risk",
            "Recommended controls per row",
            "OCR-ready format",
          ],
          pageKicker: "HIPAA RISK ASSESSMENT",
          pageTitle: "The annual document OCR will ask for.",
          pageBody:
            "Required under 45 CFR §164.308(a)(1)(ii)(A). NIST 800-30 methodology, full risk register with likelihood × impact, inherent vs residual risk, recommended controls, and clause citations.",
          cta: "Run risk analysis",
          loadingCta: "Running risk analysis…",
        },
        policy: {
          cardDesc:
            "Draft a complete HIPAA-aware policy or SOP with all required sections — purpose, scope, roles, procedure, training, sanctions, review.",
          cardBullets: [
            "9-section structure",
            "Operational, signable language",
            "Clause references included",
            "Word + PDF export",
          ],
          pageKicker: "POLICY / SOP GENERATOR",
          pageTitle: "Draft the policy. Edit, sign, file.",
          pageBody:
            "Complete policy or SOP with purpose, scope, roles, procedure, training, sanctions, records, review cycle, and clause references. Output is a structured Word + PDF you can edit and sign.",
          cta: "Generate policy",
          loadingCta: "Drafting policy…",
        },
      },
      common: {
        backToSuite: "Suite",
        organisation: "Organisation",
        type: "Type",
        scope: "Scope",
        periodCovered: "Period covered",
        systemsInScope: "Systems and processes in scope",
        leadAuditor: "Lead auditor (optional)",
        documentType: "Document type",
        framework: "Framework",
        context: "Context",
        contextOptional: "Context (optional)",
        query: "Finding, gap, or question",
        ephiInventory: "ePHI inventory",
        priorIncidents: "Prior incidents (optional)",
        knownGaps: "Known gaps (optional)",
        policyTitle: "Policy title",
        policyType: "Policy type",
        primaryFramework: "Primary framework",
        ownerRole: "Owner (role)",
        effectiveDate: "Effective date",
        requirements: "Specific requirements / scenarios to cover",
        uploadFile: "Upload file",
        pasteText: "Paste text",
        clickToSelect: "Click to select a file",
        replaceFile: "click to replace",
        fileFormats: "PDF, DOCX, TXT, MD · up to 5 MB",
        pasteHere: "Paste the document text here…",
        downloadPdf: "Download PDF",
        downloadWord: "Download Word",
        viewHistory: "View history",
        generateAnother: "Generate another",
        runAnother: "Run another",
        analyseAnother: "Analyse another",
        draftAnother: "Draft another",
        mapAnother: "Map another",
        generatedBy: "GENERATED BY",
        source: "source",
        sections: {
          scope: "Scope",
          objectives: "Objectives",
          methodology: "Methodology",
          schedule: "Schedule",
          checklist: "Checklist",
          riskAreas: "Risk Areas",
          findings: "Findings",
          references: "References",
          notes: "Notes",
          query: "QUERY",
          applicableClauses: "Applicable clauses",
          documentSummary: "Document summary",
          sectionsPresent: "Sections present",
          missingOrWeak: "Missing or weak",
          assumptions: "Assumptions",
          riskRegister: "Risk register",
          topRecommendations: "Top recommendations",
        },
        riskCols: {
          asset: "Asset",
          threat: "Threat",
          vulnerability: "Vulnerability",
          likelihood: "Likeli.",
          impact: "Impact",
          inherent: "Inherent",
          residual: "Residual",
          recommendedControls: "Recommended controls",
        },
        tryLabel: "Try:",
        orgTypeLabels: {
          "Clinic": "Clinic",
          "Billing Company": "Billing Company",
          "Telehealth": "Telehealth",
          "Healthcare SaaS": "Healthcare SaaS",
          "Hospital / IDN": "Hospital / IDN",
          "Consultant": "Consultant",
        },
        scopeLabels: {
          "HIPAA only": "HIPAA only",
          "Claims only": "Claims only",
          "HIPAA + Claims": "HIPAA + Claims",
          "Full operations audit": "Full operations audit",
          "Custom": "Custom",
        },
        documentTypeLabels: {
          "HIPAA SOP": "HIPAA SOP",
          "Privacy Policy": "Privacy Policy",
          "Notice of Privacy Practices": "Notice of Privacy Practices",
          "Business Associate Agreement (BAA)": "Business Associate Agreement (BAA)",
          "Incident Response Plan": "Incident Response Plan",
          "Risk Analysis": "Risk Analysis",
          "Workforce Training Policy": "Workforce Training Policy",
          "Access Control Policy": "Access Control Policy",
          "Other": "Other",
        },
        frameworkLabels: {
          "auto-detect": "auto-detect",
          "HIPAA Security + Privacy Rules": "HIPAA Security + Privacy Rules",
          "NIST 800-66 Rev 2": "NIST 800-66 Rev 2",
          "NIST 800-53": "NIST 800-53",
          "ISO 27001": "ISO 27001",
          "MDCG 2020-13": "MDCG 2020-13",
        },
        policyTypeLabels: {
          "HIPAA Privacy Policy": "HIPAA Privacy Policy",
          "HIPAA Security Policy": "HIPAA Security Policy",
          "Access Control Policy": "Access Control Policy",
          "Workforce Training Policy": "Workforce Training Policy",
          "Incident Response Plan": "Incident Response Plan",
          "Sanction Policy": "Sanction Policy",
          "Information System Activity Review": "Information System Activity Review",
          "Contingency Plan": "Contingency Plan",
          "Device & Media Controls": "Device & Media Controls",
          "Other (specify in title)": "Other (specify in title)",
        },
        policyFrameworkLabels: {
          "HIPAA Security + Privacy Rules": "HIPAA Security + Privacy Rules",
          "NIST 800-66 Rev 2": "NIST 800-66 Rev 2",
          "NIST 800-53": "NIST 800-53",
          "ISO 27001": "ISO 27001",
          "Custom": "Custom",
        },
      },
      phi: {
        heading: "Do not paste real patient data.",
        body: "Aegis is designed for de-identified content, sample text, policies, and synthetic examples. Do not submit protected health information (PHI) — names, dates of birth, MRNs, addresses, or any of the 18 HIPAA identifiers tied to a real person. Inputs are processed by third-party AI providers.",
        confirm: "I confirm this input contains no protected health information.",
      },
      findings: {
        none: "No findings.",
        clauses: "CLAUSES",
        action: "Action:",
        remediation: "Remediation:",
      },
    },
  },

  sv: {
    nav: {
      product: "Produkt",
      pricing: "Prissättning",
      whoItsFor: "För vem",
      suite: "MediReady Suite",
      requestAccess: "Begär åtkomst",
    },
    home: {
      heroKicker: "AUDIT ENGINE + COMPLIANCE SUITE",
      heroTitle: (
        <>Ett system för vårdgranskning och {em("compliance‑dokumentation")}.</>
      ),
      heroBody:
        "Kör sexkanalsgranskningar, generera underlag, mappa krav och stäng identifierade gap. Allt i samma system.",
      ctaRunAudit: "Kör en gratis granskning",
      ctaExploreSuite: "Öppna dokumentationsmodulen",
      badgeLLM: "LLM + SYNTETISK WEBBLÄSARE",
      badgeExport: "WORD + PDF‑EXPORT",
      badgeIntegration: "INGA INTEGRATIONER",

      twoProductsKicker: "TVÅ PRODUKTER · ETT SYSTEM",
      twoProductsTitle: (
        <>
          Hitta gapen.<br />
          {em("Stäng dem.")}
        </>
      ),

      productOneKicker: "PRODUKT ETT",
      productOneName: "MediReady Audits",
      productOneBody:
        "Sex parallella granskningskanaler som visar vad regioner, IVO eller interna kvalitetsgranskare hittar först.",
      productOneList: [
        "Claims",
        "HIPAA & säkerhet",
        "Dokumentation",
        "Patientkommunikation",
        "Kliniskt innehåll",
        "Syntetiskt webbläsarbeteende",
      ],
      productOneCTA: "Kör en gratis granskning",

      productTwoKicker: "PRODUKT TVÅ",
      productTwoName: "MediReady Suite",
      productTwoBody: "Dokumentation genererad på minuter.",
      productTwoList: [
        "Granskningsplaner",
        "Kravmappning",
        "Gap‑analys av dokument",
        "HIPAA‑riskbedömningar",
        "Policy & SOP‑generator",
      ],
      productTwoCTA: "Öppna hela sviten",

      suiteKicker: "SVITEN",
      suiteTitle: (
        <>
          Compliance‑dokument,<br />
          {em("genererade på minuter")}.
        </>
      ),
      suiteBody:
        "Fem verktyg som delar samma motor och datamodell. Inmatning är strukturerad. Utdata hänvisar till faktiska kravpunkter. Alla dokument laddas ned som PDF och Word.",
      suiteCTA: "Öppna sviten",
      suiteTools: [
        { title: "Granskningsplan‑generator", desc: "Kompletta interna granskningsplaner — omfattning, mål, metodik, schema, checklista och riskområden. Word + JSON‑export." },
        { title: "Kravmappning", desc: "Klistra in ett fynd eller krav och få exakta HIPAA‑, CMS‑, OCR‑, NIST‑ och ISO‑klausuler som gäller." },
        { title: "Gap‑analys av dokument", desc: "Ladda upp en SOP eller policy. AI flaggar saknade avsnitt, svag formulering och klausulgap." },
        { title: "HIPAA‑riskbedömning", desc: "NIST 800‑30‑metodik med fullständigt riskregister, sannolikhets‑/konsekvensbedömning och rekommenderade kontroller." },
        { title: "Policy‑ / SOP‑generator", desc: "Utforma kompletta HIPAA‑anpassade policyer och SOP:er med obligatoriska avsnitt och klausulreferenser." },
      ],

      engineKicker: "GRANSKNINGSMOTORN",
      engineTitle: (
        <>
          Fil in.<br />Rapport ut.<br />
          {em("Så enkelt.")}
        </>
      ),
      engineBody:
        "Ladda upp en fil, klistra in text eller ange en URL. Sex avgränsade granskningskanaler körs parallellt. Exportera fynd, åtgärdskrav och PDF/JSON‑rapport. Ingen integration. Ingen agent. Ingen SDK.",
      engineCTA: "Kör en gratis granskning",

      whoKicker: "FÖR VEM",
      whoTitle: (
        <>
          Alla med<br />
          {em("regulatorisk exponering")}.
        </>
      ),
      whoBody:
        "Om du skriver klinisk dokumentation, skickar anspråk, hanterar patientdata, skriver rutiner eller gör interna granskningar — systemet visar samma bild som dina granskare ser, innan de ser den.",
      whoCards: [
        { label: "Kliniker", sub: "Primärvård, specialist, tandvård, psykiatri." },
        { label: "Billing‑bolag", sub: "Claims‑stöd och validering." },
        { label: "Healthcare SaaS", sub: "EHR‑tillägg, AI‑dokumentation, portaler." },
        { label: "Nätverk", sub: "IDN, ACO, flerplatsverksamheter." },
        { label: "Konsulter", sub: "White‑label granskning + dokumentation." },
        { label: "Compliance‑ansvariga", sub: "Återkommande granskningar + policyunderhåll." },
        { label: "Interna revisionsteam", sub: "Planer, evidens, rapporter." },
        { label: "Regulatorer", sub: "Oberoende verifieringsflöden." },
      ],

      safetyKicker: "BYGGT FÖR VÅRDDATA",
      safetyTitle: (
        <>
          Utformat<br />
          {em("för PHI")}.
        </>
      ),
      safetyBody:
        "Allt nedan är standard. Inga inställningar. Ingen enterprise‑nivå krävs.",
      safetyCards: [
        { title: "Ingen PHI lagras i granskningsmotorn", desc: "Inmatning bearbetas och raderas. Inte sparad. Inte indexerad. Inte aggregerad." },
        { title: "Inmatning raderas efter körning", desc: "Granskningsmotorn är stateless. Ingen kvarhållning." },
        { title: "Kryptering i transit", desc: "TLS 1.2+. HSTS. Ingen plaintext." },
        { title: "Lokal SQLite för Suite‑utdata", desc: "Dokument lagras lokalt. Ingen tredjepartsindexering. Du äger filerna." },
        { title: "Inte använt för träning", desc: "Körningar sker mot leverantörer med BAA. Inmatning delas inte med träningspipelines." },
        { title: "HIPAA‑anpassade arbetsflöden", desc: "Audit‑loggar, åtkomstkontroller, retention och incidentrutiner är standard." },
      ],
      safetyCTA: "Läs mer om säkerhet",

      pricingKicker: "PRIS",
      pricingTitle: "Betala för det du behöver.",
      pricingBody: "Kör en engångsgranskning, generera ett dokument eller abonnera för obegränsat.",
      pricingCTA: "Visa prissättning",

      closingTitle: (
        <>Se vad dina {em("granskare")} ser.</>
      ),
      closingBody: "Kör en gratis granskning. Kritiska fynd visas direkt i gränssnittet. Ingen inloggning krävs.",
    },
    about: {
      kicker: "FÖRETAG",
      title: "Företag",
      para1:
        "MediReady bygger filbaserade gransknings‑ och compliance‑verktyg för vården. Verktygen identifierar problem innan regioner, revisorer eller tillsynsmyndigheter gör det. Inga integrationer. Inga IT‑projekt. Fil in → rapport ut.",
      para2:
        "Grundat av Glenn Carter. MediReady kombinerar erfarenhet av vårdarbetsflöden, granskningssäker datahantering, HIPAA‑anpassad arkitektur och deterministisk valideringslogik.",
      para3: "Målet är enkelt: göra healthcare‑compliance snabb, korrekt och tillgänglig.",
      ctaAudit: "Kör en gratis granskning",
      ctaSuite: "Utforska sviten",
    },
    contact: {
      kicker: "KONTAKT",
      title: "Kontakt",
      generalLabel: "Allmänna förfrågningar:",
      salesLabel: "Försäljning:",
      founderLabel: "Grundare:",
      location: "Stockholm, Sverige",
    },
    audits: {
      list: {
        kicker: "GRANSKNINGAR",
        title: "Historik.",
        body: "Alla granskningar du har kört. Filtrera på poängband, sök på mål eller körnings‑ID.",
        searchPlaceholder: "Sök mål eller körnings‑ID",
        filters: { all: "Alla", critical: "Kritisk", watch: "Observation", pass: "Pass" },
        cols: { score: "POÄNG", target: "MÅL", runId: "KÖRNINGS‑ID", date: "DATUM", channels: "KANALER" },
        countSuffix: "AV",
        runsLabel: "GRANSKNINGAR",
        empty: "Inga granskningar matchar filtret.",
        newAudit: "Ny granskning",
      },
      new: {
        kicker: "NY GRANSKNING",
        title: "Starta en ny granskning.",
        body: "Välj granskningstyp, namnge mål och starta körningen. Varje granskning körs parallellt över valda kanaler.",
        targetLabel: "MÅL",
        targetPlaceholder: "patient-portal.example.com · billing-workflow-v2 · KOL‑anteckningar",
        targetHelp: "Fritt textfält som identifierar vad som granskas. URL, systemnamn, ärende‑ID — vad som helst.",
        typeLabel: "GRANSKNINGSTYP",
        notesLabel: "ANTECKNINGAR · VALFRITT",
        notesPlaceholder: "Allt som hjälper granskare att förstå kontext: avdelning, payer‑mix, systemversion, urval.",
        summaryLabel: "SAMMANFATTNING",
        channelsLabel: "KANALER",
        total: "Total",
        starting: "Startar…",
        start: "Starta granskning",
        hint: "Du skickas till rapportvyn där du klistrar in faktiskt innehåll (kliniska anteckningar, flöde, URL) och motorn startar parallellt.",
      },
      types: {
        claims: {
          label: "Claims Audit",
          desc: "En kanal · snabb. Taxonomi, NPI, payer‑ID, clearinghouse, EDI 837.",
          price: "49 USD",
        },
        full: {
          label: "Full Compliance Audit",
          desc: "Alla sex kanaler. Dokumentation, HIPAA, claims, kommunikation, innehåll, syntetisk webbläsare.",
          price: "149 USD",
        },
        exceptions: {
          label: "Exceptions & Denial Audit",
          desc: "Fördjupning i avslag, saknade fält och payer‑specifika regler.",
          price: "199 USD",
        },
      },
      channelShort: {
        documentation: "Dokumentation",
        hipaa: "HIPAA",
        claims: "Claims",
        communication: "Kommunikation",
        content: "Innehåll",
        synthetic: "Syntetisk",
      },
    },
    channels: {
      documentation: { label: "Klinisk dokumentation", desc: "ICD‑10, CPT, HCPCS, modifierare, NPI, taxonomi, ärendefullständighet" },
      hipaa:         { label: "HIPAA & säkerhet",       desc: "PHI‑exponering, headers, kryptering, trackers, samtycke" },
      claims:        { label: "Claims‑flöde",           desc: "Payer‑regler, clearinghouse, EDI 837, payer‑ID, avslag" },
      communication: { label: "Patientkommunikation",   desc: "Påminnelser, avslagsmeddelanden, opt‑outs, integritetssignaler" },
      content:       { label: "Kliniskt innehåll",      desc: "Riktlinjeaktualitet, evidens, varningsinstruktioner" },
      synthetic:     { label: "Syntetisk webbläsarkontroll", desc: "JS‑fel, nätverksfel, payer‑API‑anrop, prestanda" },
    },
    settingsPage: {
      kicker: "INSTÄLLNINGAR",
      title: "Konto & preferenser.",
      body: "Hantera konto, modelleverantörer, team, aviseringar och PDF‑branding.",
      account: {
        title: "Konto",
        subtitle: "Din grundprofil.",
        nameLabel: "Namn",
        emailLabel: "E‑post",
        planLabel: "Plan",
      },
      providers: {
        title: "Modelleverantörer",
        subtitle: "Endast läsning. Nycklar sätts som miljövariabler på servern.",
        configured: "AKTIV",
        missing: "SAKNAS",
        rotateNote: (
          <>
            Prioritet: Mistral → OpenRouter → Gemini → fallback. För att rotera en nyckel: uppdatera
            <span className="mono" style={{ background: "var(--card)", padding: "1px 6px", borderRadius: 4, marginInline: 6 }}>
              /srv/health-assesment-/.env.local
            </span>
            och starta om tjänsten.
          </>
        ),
      },
      team: {
        title: "Team",
        subtitle: "Medlemmar som kan se granskningar och köra nya.",
        invite: "Bjud in medlem",
      },
      notifications: {
        title: "Aviseringar",
        subtitle: "När och hur du hör från MediReady.",
        email: { label: "E‑postsammanfattningar", sub: "Granskning klar, veckosammanfattning, kontohändelser." },
        weekly: { label: "Veckovis trendrapport", sub: "Fredag eftermiddag. Poängförändringar och åtgärdade punkter." },
        critical: { label: "Kritiska fynd", sub: "Direktavisering vid kritiskt resultat." },
      },
      pdf: {
        title: "PDF‑branding",
        subtitle: "Vad som syns på nedladdade rapporter.",
        logoLabel: "Logo",
        noLogo: "Ingen logo uppladdad",
        upload: "Ladda upp",
        accentLabel: "Accentfärg",
        change: "Ändra",
        footerLabel: "Sidfotstext",
        footerValue: "MediReady · Stockholm",
        edit: "Redigera",
      },
      danger: {
        title: "Farlig zon",
        subtitle: "Permanenta åtgärder. Läs två gånger.",
        deleteLabel: "Radera konto",
        deleteBody: "Tar bort ditt konto, alla teammedlemmar och alla granskningar. Detta kan inte ångras.",
        deleteCta: "Radera konto",
      },
    },
    reportsPage: {
      kicker: "RAPPORTER",
      title: "Rapportbibliotek",
      body: "Samlad vy över alla PDF‑ och Word‑exporter du genererat — över granskningar och sviten. Kommer med monitoring‑nivån.",
      downloadsLine: (
        <>
          För nu ligger nedladdningar på varje enskild körning — se din{" "}
          <Link href="/suite/history" style={{ color: "var(--accent)" }}>svithistorik</Link>.
        </>
      ),
    },
    suiteHistoryList: {
      backToSuite: "Sviten",
      kicker: "HISTORIK",
      title: "Alla genereringar, sparade.",
      body: "Granskningsplaner, kravmappningar och gap‑analyser du har skapat. Klicka på en post för att öppna eller ladda ned igen.",
      freeTierBanner: (days) => (
        <>
          <strong style={{ color: "var(--ink)" }}>Gratisnivå — senaste {days} dagarna.</strong>{" "}
          Äldre körningar är dolda.{" "}
          <Link href="/contact" style={{ color: "var(--accent)" }}>Kontakta oss</Link>{" "}
          för att aktivera full historik.
        </>
      ),
      empty: {
        title: "Ingen historik ännu.",
        body: "Kör något av svitverktygen för att fylla historiken — eller ladda demodata för att testa utan att använda API‑krediter.",
        openSuite: "Öppna sviten",
      },
      toolLabels: {
        "audit-plan": "Audit Plan",
        "standards-mapping": "Standards Mapping",
        "gap-analysis": "Gap Analysis",
        "risk-assessment": "Risk Assessment",
        "policy": "Policy / SOP",
      },
    },
    suiteHistoryDetail: {
      backToHistory: "Historik",
      engagementHeading: "Uppdrag",
      inputHeading: "Inmatning",
      sourceFileLabel: "Källfil:",
    },
    securityPage: {
      kicker: "SÄKERHET",
      title: "Säkerhet",
      sections: [
        {
          heading: "Ingen PHI lagras",
          body: "MediReady lagrar eller behåller inte PHI. Inmatningar bearbetas flyktigt och raderas direkt när granskningen är klar.",
        },
        {
          heading: "Krypterad överföring",
          body: "Alla uppladdningar och nedladdningar använder HTTPS/TLS 1.2+.",
        },
        {
          heading: "Lokal lagring för svitutdata",
          body: "Dokument från Compliance‑sviten lagras lokalt i en isolerad SQLite‑databas. De delas aldrig och används inte för träning.",
        },
        {
          heading: "HIPAA‑anpassade arbetsflöden",
          bullets: [
            "Ingen bestående PHI",
            "Ingen integration mot kliniska system",
            "Ingen åtkomst till EHR",
            "Ingen bakgrundsinsamling av data",
          ],
        },
        {
          heading: "Minimal datamängd",
          body: "Endast den data som krävs för att generera efterfrågat resultat bearbetas.",
        },
      ],
    },
    privacyPage: {
      kicker: "INTEGRITET",
      title: "Integritet",
      noPhiHeading: "Ingen PHI",
      noPhiBody: (
        <>
          Se{" "}
          <Link href="/terms" style={{ color: "var(--accent)" }}>användarvillkoren</Link>. Se även{" "}
          <Link href="/security" style={{ color: "var(--accent)" }}>Säkerhet</Link> för fullständig dataflödesarkitektur.
        </>
      ),
      inputsHeading: "Hur dina indata hanteras",
      inputsList: [
        (<><strong>/scan (gratis granskning):</strong> bearbetas i minnet och raderas när svaret skickas. Inget skrivs till disk.</>),
        (<><strong>/suite/* (compliance‑dokument):</strong> indata och genererade dokument sparas lokalt och kan raderas från{" "}<Link href="/suite/history" style={{ color: "var(--accent)" }}>historiksidan</Link>.</>),
      ],
      collectHeading: "Data vi samlar in",
      collectList: [
        "E‑postadress (endast om du lämnar den — väntelista, kontaktformulär)",
        "Betalningsinformation via Revolut (vi lagrar inte kortdata)",
        "Icke‑PHI driftloggar (tider, fel)",
      ],
      notCollectHeading: "Data vi inte samlar in",
      notCollectList: [
        "Patientidentifierare eller journaldata",
        "EHR‑innehåll",
        "Bakgrundsanalys, telemetri eller beteendespårning",
      ],
      thirdPartyHeading: "Tredjepartsleverantörer",
      thirdPartyBody:
        "Indata skickas till AI‑leverantörer (Gemini, Mistral, OpenRouter). Ingen av dem har HIPAA‑BAA. Skicka inte PHI.",
      deleteHeading: "Radera dina data",
      deleteBody: (
        <>
          Du kan radera poster via{" "}
          <Link href="/suite/history" style={{ color: "var(--accent)" }}>historiksidan</Link>. För ytterligare borttagning:{" "}
          <a href="mailto:mrglenncarter@gmail.com" style={{ color: "var(--accent)" }}>mrglenncarter@gmail.com</a>.
        </>
      ),
    },
    termsPage: {
      kicker: "ANVÄNDARVILLKOR",
      title: "Användarvillkor",
      intro: "Genom att använda MediReady godkänner du följande villkor.",
      sections: [
        {
          heading: "1. Ingen medicinsk rådgivning",
          body: "MediReady tillhandahåller gransknings‑ och compliance‑automatisering. Tjänsten ger inte medicinsk, juridisk eller regulatorisk rådgivning.",
        },
        {
          heading: "2. Användaransvar",
          body: "Du ansvarar för att data du laddar upp inte innehåller PHI eller annan känslig information som strider mot interna policyer eller gällande lag.",
        },
        {
          heading: "3. Datahantering",
          body: "MediReady bearbetar indata flyktigt och lagrar inte PHI. Utdata från Compliance‑sviten lagras lokalt och delas aldrig eller används för träning.",
        },
        {
          heading: "4. Betalning och fakturering",
          body: "Betalningar hanteras via säker tredjepartsleverantör. Alla avgifter är icke‑återbetalningsbara om inte lag kräver annat.",
        },
        {
          heading: "5. Ansvarsbegränsning",
          body: "MediReady tillhandahålls “i befintligt skick” utan garantier. Vi ansvarar inte för indirekta, tillfälliga eller följdskador.",
        },
      ],
    },
    productPage: {
      kicker: "PRODUKT",
      title: "Produkt",
      auditsHeading: "MediReady Audits",
      auditsBody:
        "Sexkanalsgranskningar för vård och ersättning. Visar det som regioner, revisorer och tillsynsmyndigheter hittar först.",
      auditsList: [
        "Claims‑ersättning",
        "HIPAA & säkerhet",
        "Dokumentationskvalitet",
        "Patientkommunikation",
        "Kliniskt innehåll",
        "Syntetiskt granskarbeteende",
      ],
      auditsOutputs:
        "Övergripande och kanalvisa poäng, fynd med allvarlighetsgrad, åtgärdskrav, PDF/JSON‑export.",
      auditsCta: "Kör en gratis granskning",
      suiteHeading: "MediReady Suite",
      suiteBody:
        "Compliance‑dokument genererade på minuter. Inga mallar. Ingen manuell formatering.",
      suiteList: [
        "Audit Plan Generator",
        "Standards Mapping",
        "Document Gap Analysis",
        "HIPAA Risk Assessment",
        "Policy & SOP‑generator",
      ],
      suiteCta: "Öppna sviten",
      monitoringHeading: "Monitoring",
      monitoringBody: "Veckovisa automatiserade granskningar med trendspårning och historiska jämförelser.",
      monitoringCta: "Gå med i väntelistan",
    },
    statusPage: {
      kicker: "STATUS",
      title: "Status",
      allOperational: "Alla system fungerar",
      operationalSuffix: "Operativ",
      systems: {
        auditEngine: "Audit Engine",
        complianceSuite: "Compliance‑svit",
        monitoring: "Monitoring",
        fileUploads: "Filuppladdningar",
        exports: "Exporter",
      },
      maintenanceHeading: "Planerat underhåll",
      maintenanceBody: "Inget just nu.",
    },
    waitlistPage: {
      kicker: "VÄNTELISTA",
      title: "Var först när monitoreringen lanseras.",
      body:
        "Kontinuerlig övervakning, veckovisa körningar och trendspårning för alla sex granskningskanaler. Lämna din e‑post — vi meddelar när funktionen är live.",
    },
    waitlistForm: {
      emailLabel: "E‑post",
      emailPlaceholder: "you@example.com",
      submitIdle: "Gå med i väntelistan",
      submitBusy: "Lägger till…",
      successKicker: "PÅ LISTAN",
      successTitle: "Du är på listan.",
      successBody: "Vi hör av oss när dashboarden och övervakningen lanseras.",
      errorDefault: "Något gick fel.",
      tryAgain: "Försök igen.",
    },
    paymentPage: {
      backToPricing: "Pris",
      kicker: "BETALNING",
      title: "Slutför din betalning.",
      body:
        "Två betalningssätt: online via Revolut Checkout (snabbast, automatisk avstämning) eller USD‑banköverföring för organisationer som föredrar det.",
      questionsLead: "Frågor om betalningen? Mejla ",
    },
    payNow: {
      title: "Slutför din betalning",
      option1Heading: "Alternativ 1 — Betala online (rekommenderas)",
      option1Body: (amount) => `Betala ${amount} säkert via Revolut Checkout.`,
      option1Cta: (amount) => `Betala ${amount} via Revolut`,
      option2Heading: "Alternativ 2 — Banköverföring (USD)",
      option2Body: "Använd dessa uppgifter om du föredrar manuell banköverföring.",
    },
    paymentSuccessPage: {
      kicker: "BETALNING MOTTAGEN",
      title: (amount) => `Tack — din betalning på ${amount} är registrerad.`,
      body:
        "Ett bekräftelsemejl skickas inom kort. Om det inte dyker upp inom några minuter, kolla skräpposten.",
      runAuditCta: "Kör en granskning",
      openSuiteCta: "Öppna sviten",
    },
    scanPage: {
      sampleInputs: [
        "Patient utvärderad för typ 2‑diabetes den 2026‑06‑01. ICD‑10 E11.9 registrerad. CPT 99214 korrekt. Modifier 25 tillämpad. NPI angiven, POS 11 inskriven.",
        "Webbplatsen använder HTTPS med HSTS, CSP och säkra cookies. Ingen PHI i URL:er. Samtyckesbanner laddas före analysverktyg.",
        "Claim inskickad med payer‑ID, taxonomi, NPI och genererad EDI 837. Clearinghouse‑svar 200. Inget workflow för avvisningsnotiser konfigurerat.",
      ],
      kicker: "GRATIS SCAN",
      kickerResults: "GRATIS SCAN · RESULTAT",
      title: "Starta en gratis granskning.",
      titleResults: "Kritiska fynd.",
      body: "Klistra in en klinisk anteckning, beskrivning av claim‑flöde eller vård‑URL. MediReady kör alla sex kanaler parallellt — normalt 15–40 sekunder.",
      bodyResults: "Översta kritiska fynden från sex kanaler. Full rapport — alla fynd, åtgärdskrav, PDF‑export — låses upp för 49 USD.",
      inputLabel: "Inmatning — klinisk anteckning, arbetsflödesbeskrivning eller URL",
      inputPlaceholder: "Klistra in en klinisk anteckning, claim‑flödesbeskrivning eller vård‑URL…",
      uploadIdle: "Ladda upp fil (PDF, DOCX, TXT, MD)",
      uploadBusy: "Läser fil…",
      uploadOrTry: "eller testa:",
      uploadNoText: "Ingen läsbar text hittades i filen.",
      uploadLoaded: (name) => `Inläst ${name} — granska texten ovan och kör sedan scan.`,
      noStoreBadge: "INMATNING SPARAS INTE OCH ANVÄNDS INTE FÖR TRÄNING",
      runCta: "Kör scan",
      runningStatus: "STATUS",
      runningTitle: "Kör sex granskningskanaler…",
      runningBody: "Körs parallellt. Normal tid: 15–40 sekunder.",
      elapsedPrefix: "FÖRFLUTEN TID",
      overallKicker: (runId) => `ÖVERGRIPANDE · KÖRNING ${runId}`,
      severityCritical: "KRITISK",
      severityWatch: "OBSERVATION",
      severityInfo: "INFO",
      noCriticalBody: "Inga kritiska fynd i denna körning. Lås upp full rapport för att se observationer och info‑nivå.",
      unlockTitle: (extra) => `${extra} ytterligare fynd · PDF‑export`,
      unlockBody: "Lås upp full granskning för att se alla fynd, åtgärdskrav och ladda ned PDF för granskare.",
      unlockCta: "Lås upp full rapport",
      subscribeCta: "Prenumerera istället",
      runErrorDefault: "Misslyckades att köra granskning.",
      uploadErrorPrefix: (status) => `Uppladdning misslyckades (HTTP ${status})`,
    },
    reportPage: {
      kicker: "HÄLSORAPPORT",
      kickerRun: (runId) => `RAPPORT · KÖRNING ${runId}`,
      title: "Kör en full granskning.",
      titleDone: "Granskning klar.",
      body: "Klistra in en klinisk anteckning, claim‑flöde eller URL. Motorn kör sex kanaler och returnerar full rapport.",
      bodyDone: "Sex kanaler analyserade. Expandera en kanal för att se fynd och åtgärdskrav.",
      inputLabel: "Inmatning — klinisk anteckning, arbetsflödesbeskrivning eller URL",
      inputPlaceholder: "Klistra in en klinisk anteckning, claim‑flödesbeskrivning eller vård‑URL…",
      useSampleInput: "Använd exempelinmatning",
      runCta: "Kör full granskning",
      runningCta: "Analyserar sex kanaler…",
      runningBody: "Kör kliniska, HIPAA‑, claims‑, kommunikations‑, innehålls‑ och syntetiska kontroller parallellt. Normal tid: 15–40 sekunder.",
      overallLabel: "ÖVERGRIPANDE",
      severityCritical: "KRITISK",
      severityWatch: "OBSERVATION",
      severityInfo: "INFO",
      downloadPdf: "Ladda ned PDF",
      runAgain: "Kör igen",
      bookDemo: "Boka 15‑min demo",
      joinWaitlist: "Gå med i väntelistan",
      failedBadge: "MISSLYCKADES",
      noFindings: "Inga fynd för denna kanal.",
      requiredActionsLabel: "ÅTGÄRDSKRAV",
      runErrorDefault: "Misslyckades att köra granskning.",
      pdfErrorDefault: "PDF‑generering misslyckades.",
    },
    safetyPage: {
      kicker: "SÄKERHET",
      title: "Säkerhet",
      intro:
        "MediReady är utformat för att minimera risk genom att undvika PHI‑lagring, reducera integrationskomplexitet och säkerställa att all bearbetning är flyktig och krypterad.",
      sections: [
        { heading: "Flyktig bearbetning", body: "Uppladdade filer och textinmatningar bearbetas i minnet och raderas direkt när granskningen är klar." },
        { heading: "Ingen PHI‑lagring", body: "MediReady lagrar inte PHI, kliniska anteckningar eller patientidentifierare. Detta eliminerar behovet av BAA och minskar compliance‑belastningen." },
        { heading: "Lokal dokumentlagring", body: "Utdata från Compliance‑sviten lagras lokalt i en isolerad SQLite‑databas och delas aldrig eller används för träning." },
      ],
    },
    pricingPage: {
      kicker: "PRIS",
      title: (
        <>
          En granskning, eller hela<br />
          {em("compliance‑sviten")}. Du väljer.
        </>
      ),
      body: "Gratisnivå för inbjudna användare. Per‑dokument‑pris för engångsbehov. Abonnemang för team.",
      inviteOnly: "ENDAST INBJUDAN",
      freeTierKicker: "GRATISNIVÅ",
      freeName: "Gratis",
      freeBody:
        "För tidiga användare som utvärderar MediReady. Alla verktyg, åtkomst via inbjudan — begär tillgång så sätter vi upp dig.",
      freeCta: "Begär tillgång",
      freeFeatures: [
        "3 fullständiga granskningar per månad",
        "1 dokument per verktyg per månad",
        "Obegränsad kravmappning (korta inmatningar)",
        "7‑dagars historik",
        "Demo‑dashboard för övervakning",
      ],
      perDocKicker: "PER DOKUMENT",
      perDocTitle: "Per‑dokument‑pris",
      perDocBody: "För engångsbehov. Betala endast för det du genererar.",
      perDocSuffix: {
        document: "/dokument",
        mapping: "/mappning",
        assessment: "/bedömning",
      },
      payCta: "Betala",
      subsKicker: "SVIT‑ABONNEMANG",
      subsTitle: "För team som genererar ofta",
      subsBody:
        "Abonnemang är inte aktiva än. Gå med i väntelistan för att bli aviserad när de lanseras.",
      perMonth: "/mån",
      mostPopular: "MEST POPULÄR",
      waitlistCta: "Gå med i väntelistan",
      contactSalesCta: "Kontakta försäljning",
      cards: {
        clinic: {
          name: "Klinik",
          tagline: "Enpunkts­verksamheter och små kliniker.",
          features: [
            "10 dokument/månad",
            "Obegränsad kravmappning",
            "Obegränsade granskningsplaner",
            "Prioriterad kö",
            "PDF + Word‑export",
          ],
        },
        network: {
          name: "Nätverk / SaaS",
          tagline: "Flerorts­nätverk och vård‑SaaS‑leverantörer.",
          features: [
            "50 dokument/månad",
            "Obegränsade riskbedömningar",
            "Obegränsad gap‑analys",
            "Teamkonton",
            "Delad historik",
          ],
        },
        enterprise: {
          name: "Enterprise",
          tagline: "IDN, större konsultbolag, högvolymsoperatörer.",
          features: [
            "Obegränsat allt",
            "API‑åtkomst",
            "Veckovis övervakning",
            "Dedikerad support",
            "Egna integrationer",
          ],
        },
      },
    },
    whoItsForPage: {
      kicker: "FÖR VEM",
      title: "För vem",
      items: [
        "Kliniker",
        "Billing‑bolag",
        "Healthcare SaaS",
        "Nätverk",
        "Konsulter",
        "Interna revisionsteam",
        "Regulatorer",
      ],
    },
    docsPage: {
      kicker: "DOKUMENTATION",
      title: "Dokumentation",
      groups: [
        {
          heading: "Kom igång",
          items: ["Kör din första granskning", "Generera compliance‑dokument", "Använd standards‑mapping", "Exportera rapporter"],
        },
        {
          heading: "Audit Engine",
          items: ["Claims‑granskning", "Full compliance‑granskning", "Denial‑granskning", "Allvarlighetsmodell", "Åtgärdskrav"],
        },
        {
          heading: "Compliance‑svit",
          items: ["Audit Plan Generator", "Standards Mapping", "Document Gap Analysis", "HIPAA Risk Assessment", "Policy & SOP‑generator"],
        },
      ],
    },
    historyPage: {
      kicker: "HISTORIK",
      title: "Historik",
      body: "Tidigare genereringar i systemet. Välj sektion nedan.",
      suiteDocsTitle: "Suite‑dokument",
      suiteDocsBody: "Granskningsplaner, kravmappningar, gap‑analyser, riskbedömningar och policyer du har genererat.",
      openLabel: "Öppna",
      auditRunsTitle: "Granskningskörningar",
      auditRunsBody: "Kommer snart. Tidigare körningar visas när persistent historik aktiveras.",
      soonLabel: "SNART",
    },
    internalPage: {
      kicker: "INTERNT",
      title: "Interna verktyg",
      body: "Ej för kundanvändning.",
      badge: "INTERN · ÅTKOMST KRÄVS",
    },
    adminPage: {
      kicker: "ADMIN",
      title: "Adminpanel",
      body: "Kundkonton, betalningar, granskningshistorik, systemmetrik. Endast internt.",
      badge: "INTERN · ÅTKOMST KRÄVS",
    },
    footer: {
      tagline:
        "En plattform för vårdgranskningar och compliance‑dokumentation. Sexkanals audit‑motor plus en svit av HIPAA‑anpassade dokumentgeneratorer. Fil in. Rapport ut.",
      copyright: "© 2026 MEDIREADY",
      cols: {
        product: {
          heading: "Produkt",
          productOverview: "Produktöversikt",
          complianceSuite: "Compliance‑svit",
          pricing: "Prissättning",
          freeAudit: "Gratis granskning",
          sampleReport: "Exempelrapport",
        },
        company: {
          heading: "Företag",
          company: "Företag",
          whoItsFor: "För vem",
          contact: "Kontakt",
          waitlist: "Väntelista",
        },
        resources: {
          heading: "Resurser",
          documentation: "Dokumentation",
          status: "Status",
          safety: "Säkerhet",
          security: "Security",
          monitoring: "Monitoring",
        },
        legal: {
          heading: "Juridik",
          privacy: "Integritet",
          terms: "Användarvillkor",
        },
      },
    },
    dashboard: {
      mockRuns: [
        { target: "KOL‑uppföljning · arbetsflöde + portal",       date: "20 maj 2026 · 20:58 UTC" },
        { target: "patient-portal.example.com",                    date: "19 maj 2026 · 14:23 UTC" },
        { target: "billing-workflow-v2",                           date: "12 maj 2026 · 09:14 UTC" },
        { target: "telehealth-app · urval",                        date: "5 maj 2026 · 17:02 UTC" },
        { target: "öppenvård-utskrivningssammanfattning",          date: "28 apr 2026 · 11:40 UTC" },
        { target: "pediatriska-besöksanteckningar (urval 50)",     date: "21 apr 2026 · 08:55 UTC" },
        { target: "claim-form-v3-staging",                         date: "14 apr 2026 · 19:11 UTC" },
      ],
      mockActions: [
        { channel: "HIPAA",    message: "Patientidentifierare (MRN/DOB) i 14 olika URL‑mönster" },
        { channel: "CLAIMS",   message: "Taxonomikod för vårdgivare saknas i öppenvårdsclaim‑flödet" },
        { channel: "KOMM.",    message: "Inget köat avvisningsnotis‑flöde för 277CA‑avslag" },
        { channel: "INNEHÅLL", message: "Patientutbildningssidor citerar föråldrade kliniska riktlinjer" },
        { channel: "SYNT.",    message: "Syntetisk inlämning fallerar 4,1 % under clearinghouse‑fönstret" },
        { channel: "HIPAA",    message: "Analytics laddar på /login innan samtyckesbanner är klar" },
      ],
      kicker: "ÖVERSIKT",
      greeting: (name) => `God morgon, ${name}.`,
      summary: (audits, critical) =>
        `${audits} granskningar den här veckan · ${critical} öppna kritiska fynd över alla mål.`,
      kpi: {
        avgScore7d: "Genomsnittlig poäng · 7 dagar",
        avgScore30d: "Genomsnittlig poäng · 30 dagar",
        openCritical: "Öppna kritiska",
        resolved7d: "Åtgärdade · 7 dagar",
      },
      trend: {
        label: "ÖVERGRIPANDE POÄNG · 8 VECKOR",
        sinceWeek1: (delta) => `+${delta} sedan vecka 1`,
        weeks: ["VECKA 1", "VECKA 2", "VECKA 3", "VECKA 4", "VECKA 5", "VECKA 6", "VECKA 7", "NU"],
      },
      channelHealth: "KANALHÄLSA",
      pendingActions: {
        title: "Pågående åtgärder",
        subtitle: (count) => `${count} öppna över dina mål`,
        timesAcrossRuns: "ÖVER KÖRNINGAR",
      },
      recentAudits: {
        title: "Senaste granskningar",
        subtitle: (count) => `${count} körningar de senaste 4 veckorna`,
        seeAll: "Visa alla",
        channelsSuffix: "KANALER",
      },
      newAudit: "Ny granskning",
    },
    monitoring: {
      kicker: "MONITORERING",
      title: "Veckovisa granskningar. Trendspårning. Aviseringar.",
      body:
        "Engångsgranskningar visar dagens läge. Monitorering visar om läget förbättras eller försämras — och meddelar dig när något går bakåt.",
      features: [
        { title: "Veckovisa automatiserade granskningar", desc: "Sätt ett mål en gång. Få en ny rapport varje vecka utan manuell körning." },
        { title: "Trendspårning", desc: "Historik per kanal över flera körningar. Tidiga regressionssignaler och tydliga förbättringar." },
        { title: "Regressionsaviseringar", desc: "E‑postavisering när totalpoängen sjunker eller ett nytt kritiskt fynd uppstår." },
        { title: "Historiska jämförelser", desc: "Jämför aktuell körning med de senaste fyra veckorna. Se vilka fynd som återkommer och vilka som stängts." },
      ],
      pricingKicker: "PRISSÄTTNING",
      pricingBody: (
        <>
          Kliniker från $49/mån · Nätverk från $199/mån · SaaS från $499/mån · Enterprise $999+/mån. Se hela{" "}
        </>
      ),
      pricingPageLink: "prissidan",
      pricingBodyAfter: " för vad varje nivå innehåller.",
      ctaWaitlist: "Gå med i väntelistan",
      ctaOneOff: "Kör en engångsgranskning först",
    },
    suite: {
      index: {
        kicker: "MEDIREADY SUITE",
        title: (
          <>
            Compliance‑dokument,
            <br />
            {em("genererade på minuter")}.
          </>
        ),
        body: "Verktyg för vårdgranskningsplaner, kravmappning och dokumentanalys. Utdata sparas i din lokala historik och laddas ned som Word.",
        history: "Historik",
        backToScan: "Tillbaka till gratis granskning",
        aboutLabel: "Om sviten —",
        aboutBody: (
          <> utdata sparas lokalt på servern i en SQLite‑databas. De delas inte, indexeras inte och används inte för träning. Din inmatning stannar i din </>
        ),
        tierFree: "GRATIS",
      },
      tools: {
        auditPlan: {
          cardDesc:
            "Genererar interna granskningsplaner med omfattning, mål, metodik, schema, checklista och riskområden. Export till Word.",
          cardBullets: [
            "HIPAA‑ och vårdanpassad omfattning",
            "Klassificering Kritisk / Hög / Medel / Låg",
            "Auto‑genererad metodik + schema",
            "Word + JSON‑export",
          ],
          pageKicker: "AUDIT PLAN GENERATOR",
          pageTitle: "Generera en komplett intern granskningsplan.",
          pageBody:
            "Omfattning, metodik, schema, checklista och riskområden med allvarlighetsgrad — skrivna för vårdoperatörer under HIPAA. Sparas i din historik; laddas ned som Word.",
          cta: "Generera granskningsplan",
          loadingCta: "Genererar…",
        },
        standardsMapping: {
          cardDesc:
            "Returnerar exakta kravpunkter från HIPAA, CMS, OCR, NIST och ISO.",
          cardBullets: [
            "HIPAA Security & Privacy Rules",
            "NIST 800‑66 / 800‑53 / 800‑30",
            "ISO 27001, ISO 13485 (där relevant)",
            "OCR‑ och CMS‑referenser",
          ],
          pageKicker: "STANDARDS MAPPING",
          pageTitle: "Hitta exakt kravpunkt.",
          pageBody:
            "Klistra in ett fynd, gap eller en compliance‑fråga. Få de specifika HIPAA‑, NIST‑, ISO‑, CMS‑, OCR‑ eller CFR‑klausuler som styr.",
          cta: "Mappa till kravpunkter",
          loadingCta: "Mappar…",
        },
        gapAnalysis: {
          cardDesc:
            "Identifierar saknade delar och svagheter i befintliga dokument.",
          cardBullets: [
            "PDF, DOCX eller text",
            "Kontroll av sektionsfullständighet",
            "Fynd med allvarlighetsgrad",
            "Förslag på åtgärd",
          ],
          pageKicker: "DOCUMENT GAP ANALYSIS",
          pageTitle: "Ladda upp ett dokument. Se vad som saknas.",
          pageBody:
            "Accepterar PDF, DOCX, TXT eller klistrad text (upp till 5 MB). AI flaggar saknade sektioner, svag formulering och saknade kravreferenser mot valt ramverk.",
          cta: "Kör gap‑analys",
          loadingCta: "Analyserar…",
        },
        riskAssessment: {
          cardDesc:
            "Riskanalys enligt NIST 800‑30 med riskregister och rekommenderade kontroller.",
          cardBullets: [
            "Sannolikhet × konsekvens",
            "Inherent vs residual risk",
            "Rekommenderade kontroller per rad",
            "OCR‑klart format",
          ],
          pageKicker: "HIPAA RISK ASSESSMENT",
          pageTitle: "Det årliga dokumentet OCR efterfrågar.",
          pageBody:
            "Krävs enligt 45 CFR §164.308(a)(1)(ii)(A). NIST 800‑30‑metodik, fullständigt riskregister med sannolikhet × konsekvens, inherent vs residual risk, rekommenderade kontroller och klausulreferenser.",
          cta: "Kör riskanalys",
          loadingCta: "Kör riskanalys…",
        },
        policy: {
          cardDesc:
            "Skapar kompletta policyer och SOP:er med kravreferenser.",
          cardBullets: [
            "9‑sektionsstruktur",
            "Operativt, signerbart språk",
            "Klausulreferenser inkluderade",
            "Word + PDF‑export",
          ],
          pageKicker: "POLICY / SOP GENERATOR",
          pageTitle: "Utforma policyn. Redigera, signera, arkivera.",
          pageBody:
            "Komplett policy eller SOP med syfte, omfattning, roller, procedur, utbildning, sanktioner, arkivering, granskningscykel och klausulreferenser. Utdata är strukturerad Word + PDF som kan redigeras och signeras.",
          cta: "Generera policy",
          loadingCta: "Utformar policy…",
        },
      },
      common: {
        backToSuite: "Sviten",
        organisation: "Organisation",
        type: "Organisationstyp",
        scope: "Omfattning",
        periodCovered: "Period",
        systemsInScope: "System och processer i omfattningen",
        leadAuditor: "Huvudgranskare (valfritt)",
        documentType: "Dokumenttyp",
        framework: "Ramverk",
        context: "Kontext",
        contextOptional: "Kontext (valfritt)",
        query: "Fynd, gap eller fråga",
        ephiInventory: "ePHI‑inventarie",
        priorIncidents: "Tidigare incidenter (valfritt)",
        knownGaps: "Kända brister (valfritt)",
        policyTitle: "Titel",
        policyType: "Policytyp",
        primaryFramework: "Primärt ramverk",
        ownerRole: "Ägare (roll)",
        effectiveDate: "Ikraftträdande",
        requirements: "Specifika krav / scenarier att täcka",
        uploadFile: "Uppladdad fil",
        pasteText: "Klistrad text",
        clickToSelect: "Klicka för att välja fil",
        replaceFile: "klicka för att byta",
        fileFormats: "PDF, DOCX, TXT, MD · upp till 5 MB",
        pasteHere: "Klistra in dokumenttexten här…",
        downloadPdf: "Exportera PDF",
        downloadWord: "Exportera Word",
        viewHistory: "Visa historik",
        generateAnother: "Generera ny",
        runAnother: "Kör ny",
        analyseAnother: "Analysera ny",
        draftAnother: "Utforma ny",
        mapAnother: "Mappa ny",
        generatedBy: "GENERERAD AV",
        source: "källa",
        sections: {
          scope: "Omfattning",
          objectives: "Mål",
          methodology: "Metodik",
          schedule: "Schema",
          checklist: "Checklista",
          riskAreas: "Riskområden",
          findings: "Fynd",
          references: "Referenser",
          notes: "Anteckningar",
          query: "INMATNING",
          applicableClauses: "Tillämpliga kravpunkter",
          documentSummary: "Dokumentsammanfattning",
          sectionsPresent: "Sektioner närvarande",
          missingOrWeak: "Saknade eller svaga",
          assumptions: "Antaganden",
          riskRegister: "Riskregister",
          topRecommendations: "Främsta rekommendationer",
        },
        riskCols: {
          asset: "Tillgång",
          threat: "Hot",
          vulnerability: "Sårbarhet",
          likelihood: "Sannol.",
          impact: "Konsekv.",
          inherent: "Inherent",
          residual: "Residual",
          recommendedControls: "Rekommenderade kontroller",
        },
        tryLabel: "Prova:",
        orgTypeLabels: {
          "Clinic": "Klinik",
          "Billing Company": "Faktureringsbolag",
          "Telehealth": "Telemedicin",
          "Healthcare SaaS": "Vård‑SaaS",
          "Hospital / IDN": "Sjukhus / IDN",
          "Consultant": "Konsult",
        },
        scopeLabels: {
          "HIPAA only": "Endast HIPAA",
          "Claims only": "Endast claims",
          "HIPAA + Claims": "HIPAA + claims",
          "Full operations audit": "Full driftsgranskning",
          "Custom": "Anpassad",
        },
        documentTypeLabels: {
          "HIPAA SOP": "HIPAA‑SOP",
          "Privacy Policy": "Integritetspolicy",
          "Notice of Privacy Practices": "Information om integritetsskydd",
          "Business Associate Agreement (BAA)": "Business Associate Agreement (BAA)",
          "Incident Response Plan": "Incidenthanteringsplan",
          "Risk Analysis": "Riskanalys",
          "Workforce Training Policy": "Utbildningspolicy",
          "Access Control Policy": "Åtkomstkontrollpolicy",
          "Other": "Annat",
        },
        frameworkLabels: {
          "auto-detect": "auto‑detektera",
          "HIPAA Security + Privacy Rules": "HIPAA Security + Privacy Rules",
          "NIST 800-66 Rev 2": "NIST 800‑66 Rev 2",
          "NIST 800-53": "NIST 800‑53",
          "ISO 27001": "ISO 27001",
          "MDCG 2020-13": "MDCG 2020‑13",
        },
        policyTypeLabels: {
          "HIPAA Privacy Policy": "HIPAA‑integritetspolicy",
          "HIPAA Security Policy": "HIPAA‑säkerhetspolicy",
          "Access Control Policy": "Åtkomstkontrollpolicy",
          "Workforce Training Policy": "Utbildningspolicy",
          "Incident Response Plan": "Incidenthanteringsplan",
          "Sanction Policy": "Sanktionspolicy",
          "Information System Activity Review": "Granskning av systemaktivitet",
          "Contingency Plan": "Kontinuitetsplan",
          "Device & Media Controls": "Enhets‑ och mediakontroller",
          "Other (specify in title)": "Annat (ange i titeln)",
        },
        policyFrameworkLabels: {
          "HIPAA Security + Privacy Rules": "HIPAA Security + Privacy Rules",
          "NIST 800-66 Rev 2": "NIST 800‑66 Rev 2",
          "NIST 800-53": "NIST 800‑53",
          "ISO 27001": "ISO 27001",
          "Custom": "Anpassad",
        },
      },
      phi: {
        heading: "Klistra inte in riktig patientdata.",
        body: "Aegis är utformat för avidentifierat innehåll, exempeltext, policyer och syntetiska exempel. Skicka inte skyddad patientinformation (PHI) — namn, födelsedatum, journalnummer, adresser eller någon av de 18 HIPAA‑identifierarna kopplade till en verklig person. Inmatning bearbetas av tredjeparts AI‑leverantörer.",
        confirm: "Jag bekräftar att inmatningen inte innehåller skyddad patientinformation.",
      },
      findings: {
        none: "Inga fynd.",
        clauses: "KRAVPUNKTER",
        action: "Åtgärd:",
        remediation: "Åtgärdsförslag:",
      },
    },
  },
};
