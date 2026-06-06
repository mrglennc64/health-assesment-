import type { ReactNode } from "react";
import Link from "next/link";

export type Lang = "en" | "sv";

type DpaBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "dl"; items: { term: string; def: string }[] }
  | { kind: "h3"; text: string }
  | { kind: "h4"; text: string }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "note"; text: string };

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

    // Hero demo card display strings (overlayed on SAMPLE_RUN_TEASER data).
    demoCard: {
      runLabel: string;          // "RUN" / "KÖRNING"
      target: string;            // e.g. "COPD exacerbation follow-up"
      timestamp: string;         // e.g. "Wed, 20 May 2026 · 20:58 UTC"
      overallLabel: string;      // ScoreRing label, e.g. "OVERALL" / "TOTALT"
      criticalLabel: string;
      watchLabel: string;
      infoLabel: string;
      previewRows: { ch: string; title: string }[]; // 4 rows
      footerTime: string;        // "~38s · 6/6 CHANNELS"
    };

    // Pricing preview cards (3 entries).
    pricingCards: { kicker: string; headline: string; body: string }[];
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
    inputsList: { heading: string; body: ReactNode }[];
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
  dpaPage: {
    kicker: string;
    title: string;
    subtitle: string;
    parties: { lead: string; controller: string; and: string; processor: string };
    effectiveLabel: string;
    effectiveValue: string;
    sections: {
      heading: string;
      blocks: DpaBlock[];
    }[];
    annexHeading: string;
    annexParts: {
      heading: string;
      intro?: string;
      blocks: DpaBlock[];
    }[];
    endOfAgreement: string;
  };
  classificationPage: {
    kicker: string;
    title: string;
    verdict: string;
    metaVersion: string;
    metaVersionValue: string;
    metaDate: string;
    metaDateValue: string;
    metaPreparedBy: string;
    metaPreparedByValue: string;
    tocHeading: string;
    sections: { heading: string; blocks: DpaBlock[] }[];
    endLabel: string;
  };
  regulatoryPage: {
    kicker: string;
    title: string;
    subtitle: string;
    leadHeading: string;
    leadPara1: string;
    leadPara2: string;
    intendedUseHeading: string;
    intendedUseIntro: string;
    intendedUseItems: { label: string; sub: string }[];
    intendedUseOutro: string;
    classificationHeading: string;
    mdrHeading: string;
    mdrBody1: string;
    mdrQuote: string;
    mdrQuoteAttribution: string;
    mdrConclusion: string;
    nmiHeading: string;
    nmiIntro: string;
    nmiCriteria: string[];
    nmiSupportLead: string;
    nmiSupportBody: string;
    nmiConclusion: string;
    gdprHeading: string;
    gdprIntro: string;
    gdprBlocks: { heading: string; body: ReactNode }[];
    nis2Heading: string;
    nis2Intro: string;
    nis2Criteria: string[];
    nis2Conclusion: string;
    ehdsHeading: string;
    ehdsBody: string;
    actionsHeading: string;
    actionsItems: { heading: string; body: ReactNode }[];
    summaryHeading: string;
    summaryBody: string;
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
    pdfCta: string;
    pdfBusy: string;
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
    items: { label: string; sub: string }[];
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
      legal: { heading: string; privacy: string; terms: string; regulatory: string; classification: string; dpa: string };
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
      detectedHeading: string;
      detectedBody: string;
      labelByType: {
        se_personnummer: string;
        us_ssn: string;
        labeled_id: string;
        dob_context: string;
        phone_se: string;
      };
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
      demoCard: {
        runLabel: "RUN",
        target: "COPD exacerbation follow-up",
        timestamp: "Wed, 20 May 2026 · 20:58 UTC",
        overallLabel: "OVERALL",
        criticalLabel: "CRITICAL",
        watchLabel: "WATCH",
        infoLabel: "INFO",
        previewRows: [
          { ch: "HIPAA",   title: "PHI in URL parameters" },
          { ch: "CLAIMS",  title: "Missing taxonomy code" },
          { ch: "COMM.",   title: "No denial notification workflow" },
          { ch: "CONTENT", title: "2025 GOLD guidelines referenced" },
        ],
        footerTime: "~38s · 6/6 CHANNELS",
      },
      pricingCards: [
        { kicker: "ONE-OFF AUDITS",    headline: "From $49", body: "Claims · Full · Denial." },
        { kicker: "COMPLIANCE SUITE",  headline: "From $29", body: "Per document, or $99/mo subscription." },
        { kicker: "BUNDLE",            headline: "$199/mo",  body: "4 audits + 10 documents per month." },
      ],
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
        {
          heading: "/scan (free audit)",
          body: "Processed in process memory and discarded when the response returns. Nothing is written to disk.",
        },
        {
          heading: "/suite/* (compliance documents)",
          body: (
            <>Form input and generated output are stored locally in a SQLite database so you can re-download documents. You can permanently delete any entry from the{" "}<Link href="/suite/history" style={{ color: "var(--accent)" }}>history page</Link> at any time.</>
          ),
        },
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
    dpaPage: {
      kicker: "DATA PROCESSING AGREEMENT",
      title: "Data Processing Agreement (DPA)",
      subtitle: "Between Company and MediReady (Processor)",
      parties: { lead: "Between:", controller: "Company (as defined in the Principal Agreement)", and: "and", processor: "MediReady (Processor)" },
      effectiveLabel: "Effective Date",
      effectiveValue: "[DATE]",
      sections: [
        {
          heading: "1. Definitions",
          blocks: [
            { kind: "p", text: "1.1 Unless otherwise defined herein, capitalized terms and expressions used in this Agreement shall have the following meaning:" },
            {
              kind: "dl",
              items: [
                { term: "1.1.1 “Agreement”", def: "this Data Processing Agreement and all Annexes." },
                { term: "1.1.2 “Company Personal Data”", def: "any Personal Data Processed by Processor on behalf of Company pursuant to or in connection with the Principal Agreement." },
                { term: "1.1.3 “Contracted Processor”", def: "a Subprocessor." },
                { term: "1.1.4 “Data Protection Laws”", def: "EU Data Protection Laws and, to the extent applicable, the data protection or privacy laws of any other country, including Sweden's supplementary national provisions." },
                { term: "1.1.5 “EEA”", def: "the European Economic Area." },
                { term: "1.1.6 “EU Data Protection Laws”", def: "EU Directive 95/46/EC, as transposed into domestic legislation of each Member State and as amended, replaced or superseded from time to time, including by the GDPR and laws implementing or supplementing the GDPR." },
                { term: "1.1.7 “GDPR”", def: "EU General Data Protection Regulation 2016/679." },
                { term: "1.1.8 “Services”", def: "the compliance documentation and audit analysis platform provided by MediReady." },
                { term: "1.1.9 “Subprocessor”", def: "any person appointed by or on behalf of Processor to process Personal Data on behalf of Company." },
              ],
            },
            { kind: "p", text: "1.2 The terms “Commission”, “Controller”, “Data Subject”, “Member State”, “Personal Data”, “Personal Data Breach”, “Processing” and “Supervisory Authority” shall have the same meaning as in the GDPR, and their cognate terms shall be construed accordingly." },
          ],
        },
        {
          heading: "2. Processing of Company Personal Data",
          blocks: [
            { kind: "p", text: "2.1 Processor shall:" },
            {
              kind: "ul",
              items: [
                "2.1.1 comply with all applicable Data Protection Laws in the Processing of Company Personal Data; and",
                "2.1.2 not Process Company Personal Data other than on the Company's documented instructions.",
              ],
            },
            { kind: "p", text: "2.2 The Company instructs Processor to Process Company Personal Data for the sole purpose of providing the Services as defined in the Principal Agreement." },
          ],
        },
        {
          heading: "3. Processor Personnel",
          blocks: [
            { kind: "p", text: "Processor shall take reasonable steps to ensure the reliability of any employee, agent or contractor who may have access to the Company Personal Data, ensuring in each case that access is strictly limited to those individuals who need to know or access the relevant Company Personal Data, as strictly necessary for the purposes of the Principal Agreement. All such individuals are subject to confidentiality undertakings or professional or statutory obligations of confidentiality." },
          ],
        },
        {
          heading: "4. Security",
          blocks: [
            { kind: "p", text: "4.1 Processor shall implement the following technical and organizational measures to secure Company Personal Data, taking into account the administrative nature of the Processing and the absence of sensitive patient data:" },
            { kind: "h3", text: "4.1.1 Technical Measures" },
            {
              kind: "ul",
              items: [
                "All data transmission occurs over TLS 1.2 or higher encryption",
                "HSTS (HTTP Strict Transport Security) enforced on all endpoints",
                "No mixed content (HTTP/HTTPS) allowed",
                "No cookies, trackers, or background data collection",
                "No storage of Company Personal Data on Processor systems after audit completion",
              ],
            },
            { kind: "h3", text: "4.1.2 Organizational Measures" },
            {
              kind: "ul",
              items: [
                "Stateless processing architecture: inputs are processed in memory only",
                "Inputs are deleted immediately upon audit completion, no retention",
                "Access to processing systems restricted to Processor personnel with documented need-to-know",
                "All personnel subject to confidentiality obligations (see §3)",
                "Audit logging of all processing activities for compliance verification",
                "No use of Company Personal Data for model training, improvement, or any purpose outside the documented audit instructions",
              ],
            },
            { kind: "h3", text: "4.1.3 Subprocessor Security" },
            {
              kind: "ul",
              items: [
                "Inference engine operates under signed Business Associate Agreement (BAA) with no training use of input data",
                "All Subprocessors maintain equivalent security controls as described in this section",
              ],
            },
            { kind: "p", text: "4.2 Processor acknowledges that the stateless, non-retention design significantly reduces data protection risk and is a central feature of this Security architecture." },
          ],
        },
        {
          heading: "5. Subprocessing",
          blocks: [
            { kind: "p", text: "5.1 Processor shall not appoint or disclose any Company Personal Data to any Subprocessor unless required or authorized by the Company in writing." },
            { kind: "h3", text: "5.2 Authorized Subprocessors" },
            { kind: "p", text: "The following subprocessors are pre-authorized to process Company Personal Data on behalf of Processor in connection with the Services:" },
            {
              kind: "table",
              headers: ["Subprocessor", "Function", "Location", "BAA/DPA", "Data Retention"],
              rows: [
                ["Mistral AI (mistral.ai)", "LLM inference for audit analysis", "EU", "Signed BAA, no training use", "None (stateless)"],
              ],
            },
            { kind: "h3", text: "5.3 No Other Subprocessors" },
            { kind: "p", text: "Processor uses no other subprocessors. There are no hosting providers, CDNs, analytics services, or any other third-party systems that receive Company Personal Data. All processing occurs within Processor's controlled environment." },
            { kind: "h3", text: "5.4 Notification of New Subprocessors" },
            { kind: "p", text: "Processor may add new subprocessors only with prior written consent from Company. Processor shall notify Company at least 30 days before any new subprocessor begins processing Company Personal Data, providing:" },
            {
              kind: "ul",
              items: [
                "Name and location of the subprocessor",
                "Description of processing activities",
                "Data protection safeguards (BAA, DPA, or equivalent)",
                "Data retention period",
              ],
            },
            { kind: "h3", text: "5.5 Objection Rights" },
            { kind: "p", text: "If Company objects to the appointment of a new subprocessor on reasonable data protection grounds, Company may:" },
            {
              kind: "ul",
              items: [
                "Terminate the affected Services without penalty",
                "Request an alternative subprocessor",
              ],
            },
            { kind: "h3", text: "5.6 Subprocessor Liability" },
            { kind: "p", text: "Processor remains fully liable to Company for the performance of any Subprocessor's obligations under this Agreement." },
          ],
        },
        {
          heading: "6. Data Subject Rights",
          blocks: [
            { kind: "p", text: "6.1 Taking into account the nature of the Processing, Processor shall assist the Company by implementing appropriate technical and organisational measures, insofar as this is possible, for the fulfilment of the Company's obligations to respond to requests to exercise Data Subject rights under the Data Protection Laws." },
            { kind: "p", text: "6.2 Processor shall:" },
            {
              kind: "ul",
              items: [
                "6.2.1 promptly notify Company if it receives a request from a Data Subject under any Data Protection Law in respect of Company Personal Data; and",
                "6.2.2 ensure that it does not respond to that request except on the documented instructions of Company or as required by Applicable Laws.",
              ],
            },
          ],
        },
        {
          heading: "7. Personal Data Breach",
          blocks: [
            { kind: "h3", text: "7.1 Breach Notification Timeline" },
            { kind: "p", text: "Processor shall notify Company of any suspected or confirmed Personal Data Breach affecting Company Personal Data within 24 hours of discovery, and in no case later than by end of business on the next calendar day. Notification shall be provided to Company's designated security contact via email." },
            { kind: "h3", text: "7.2 Breach Notification Content" },
            { kind: "p", text: "Notification shall include:" },
            {
              kind: "ul",
              items: [
                "Nature and scope of the breach",
                "Categories of Company Personal Data affected",
                "Likely consequences for the data subject(s)",
                "Measures taken or proposed to address the breach and mitigate harm",
                "Processor's point of contact for further information",
                "Estimated timeline for full investigation report",
              ],
            },
            { kind: "p", text: "This information shall be sufficient to enable Company to:" },
            {
              kind: "ul",
              items: [
                "Assess risk and determine whether notification to data subjects is required",
                "Notify the Swedish Data Protection Authority (IMY) within the GDPR Article 33 timeline (72 hours from discovery)",
                "Satisfy any regulatory or legal reporting obligations",
              ],
            },
            { kind: "h3", text: "7.3 Cooperation and Remediation" },
            { kind: "p", text: "Processor shall:" },
            {
              kind: "ul",
              items: [
                "Immediately suspend processing until the breach is contained",
                "Conduct a forensic investigation and provide a detailed written report within 5 business days",
                "Implement corrective actions to prevent recurrence",
                "Cooperate fully with Company's incident response, including provision of logs, forensic data, and witness statements",
                "Reimburse Company for reasonable costs of breach investigation and remediation",
                "Maintain documentation of the breach, investigation, and remediation for at least 3 years",
              ],
            },
            { kind: "h3", text: "7.4 Breach Prevention" },
            { kind: "p", text: "In light of the stateless architecture, Company acknowledges that Processor's default position is zero retention of Company Personal Data post-audit, which substantially mitigates breach risk." },
          ],
        },
        {
          heading: "8. Data Protection Impact Assessment and Prior Consultation",
          blocks: [
            { kind: "p", text: "Processor shall provide reasonable assistance to the Company with any data protection impact assessments, and prior consultations with Supervising Authorities or other competent data privacy authorities, which Company reasonably considers to be required by Article 35 or 36 of the GDPR, in each case solely in relation to Processing of Company Personal Data by Processor." },
          ],
        },
        {
          heading: "9. Deletion or Return of Company Personal Data",
          blocks: [
            { kind: "h3", text: "9.1 Deletion on Service Cessation" },
            { kind: "p", text: "Upon written termination notice from Company or upon cessation of Services, Processor shall execute the following deletion protocol:" },
            { kind: "h4", text: "9.1.1 Immediate Actions (within 24 hours)" },
            {
              kind: "ul",
              items: [
                "Cease all processing of Company Personal Data",
                "Delete all audit run data, inputs, and outputs from active production systems",
                "Disable all access to Company Personal Data by Processor personnel",
              ],
            },
            { kind: "h4", text: "9.1.2 Backup and Archive Purge (within 10 business days)" },
            {
              kind: "ul",
              items: [
                "Purge all backups containing Company Personal Data from all systems",
                "Delete all archived logs and audit trails containing references to Company Personal Data",
                "Certify completion in writing to Company",
              ],
            },
            { kind: "h4", text: "9.1.3 Subprocessor Coordination (within 10 business days)" },
            {
              kind: "ul",
              items: [
                "Instruct all Subprocessors (including Mistral AI) to delete Company Personal Data",
                "Obtain written confirmation of deletion from each Subprocessor",
                "Provide evidence of deletion to Company",
              ],
            },
            { kind: "h3", text: "9.2 Deletion on Request" },
            { kind: "p", text: "Company may request deletion of Company Personal Data at any time during the Services. Processor shall comply with the deletion protocol in §9.1 within 5 business days of such request." },
            { kind: "h3", text: "9.3 Certification of Deletion" },
            { kind: "p", text: "Within 15 business days of the Cessation Date or upon Company's deletion request, Processor shall provide Company with:" },
            {
              kind: "ul",
              items: [
                "Written certification that all Company Personal Data has been deleted",
                "List of all systems from which data was deleted",
                "Confirmation of Subprocessor deletion",
                "Any exceptions (e.g., legally required retention documented)",
              ],
            },
          ],
        },
        {
          heading: "9A. AI Processing and Transparency",
          blocks: [
            { kind: "h3", text: "9A.1 AI Model Disclosure" },
            { kind: "p", text: "Processor uses the following Large Language Model (LLM) for inference and audit analysis:" },
            {
              kind: "ul",
              items: [
                "Model: Mistral Large (latest version at time of audit)",
                "Provider: Mistral AI (mistral.ai)",
                "Jurisdiction: EU",
                "Purpose: Analysis of Company Personal Data for compliance findings and audit recommendations only",
              ],
            },
            { kind: "p", text: "Processor shall notify Company of any material change to the AI model (e.g., model upgrade, provider change) at least 30 days before implementation." },
            { kind: "h3", text: "9A.2 No Training Use" },
            { kind: "p", text: "Processor warrants that:" },
            {
              kind: "ul",
              items: [
                "Company Personal Data is not used to train, fine-tune, or improve the AI model",
                "Company Personal Data is not used for model evaluation or benchmarking",
                "Company Personal Data is not aggregated, anonymized, or used for any secondary purpose",
                "All inferences are performed under a signed Business Associate Agreement (BAA) with Mistral AI that explicitly prohibits training use",
              ],
            },
            { kind: "h3", text: "9A.3 Human Oversight" },
            { kind: "p", text: "Processor maintains the following human oversight controls:" },
            {
              kind: "ul",
              items: [
                "All findings flagged as “CRITICAL” are reviewed by a qualified human auditor before delivery to Company",
                "High-confidence findings (“HIGH”) are reviewed by automated quality checks before delivery",
                "All audit reports include metadata identifying which findings received human review",
                "Company may request human review of any specific finding",
              ],
            },
            { kind: "h3", text: "9A.4 Output Accuracy and Limitations" },
            { kind: "p", text: "Processor acknowledges that AI-generated audit findings may contain errors, false positives, or incomplete analysis. Processor therefore:" },
            {
              kind: "ul",
              items: [
                "Labels all findings with confidence levels (CRITICAL, HIGH, MEDIUM, LOW, INFO)",
                "Provides source citations for each finding",
                "Disclaims any warranty that findings are 100% accurate or complete",
                "Recommends that Company apply independent professional judgment before acting on findings",
                "Does not substitute for professional legal or compliance counsel",
              ],
            },
            { kind: "h3", text: "9A.5 Bias and Fairness" },
            { kind: "p", text: "Processor acknowledges potential for AI model bias and commits to:" },
            {
              kind: "ul",
              items: [
                "Monitoring for systematic bias in audit findings",
                "Disclosing known biases or limitations upon request",
                "Accepting feedback from Company regarding suspected bias and incorporating findings into model performance tracking",
                "Maintaining an audit log of all bias reports and remediation actions",
              ],
            },
            { kind: "h3", text: "9A.6 Transparency and Documentation" },
            { kind: "p", text: "Upon request, Processor shall provide Company with:" },
            {
              kind: "ul",
              items: [
                "Documentation of the Mistral Large model's training data, architecture, and known limitations",
                "Copy of the signed BAA with Mistral AI confirming no training use",
                "Audit logs showing which specific Company Personal Data was processed and when",
                "Explanation of how specific findings were derived",
              ],
            },
            { kind: "h3", text: "9A.7 Alignment with IMY Guidance" },
            { kind: "p", text: "Processor confirms that its use of AI aligns with the Swedish Data Protection Authority (IMY) guidance on AI and GDPR, including:" },
            {
              kind: "ul",
              items: [
                "Transparency about AI use in processing personal data",
                "Human oversight of consequential decisions",
                "Documented risk assessments and mitigation measures",
                "Regular audits of AI system performance and fairness",
              ],
            },
            { kind: "p", text: "Processor maintains documentation demonstrating compliance with these principles and provides such documentation to Company or IMY upon request." },
          ],
        },
        {
          heading: "10. Audit Rights",
          blocks: [
            { kind: "p", text: "10.1 Processor shall make available to the Company on request all information necessary to demonstrate compliance with this Agreement, and shall allow for and contribute to audits, including inspections, by the Company or an auditor mandated by the Company." },
            { kind: "p", text: "10.2 Information and audit rights of the Company only arise to the extent that this Agreement does not otherwise give them information and audit rights meeting the relevant requirements of Data Protection Law." },
          ],
        },
        {
          heading: "11. Data Transfer",
          blocks: [
            { kind: "p", text: "11.1 Processor may not transfer or authorize the transfer of Data to countries outside the EU and/or the European Economic Area (EEA) without the prior written consent of the Company." },
            { kind: "p", text: "11.2 All processing occurs within the European Economic Area (EEA). Mistral AI performs inference within the EU." },
            { kind: "p", text: "11.3 If any future data transfer occurs outside the EEA, EU Standard Contractual Clauses (SCCs) shall apply per GDPR Article 46." },
          ],
        },
        {
          heading: "12. General Terms",
          blocks: [
            { kind: "p", text: "12.1 Confidentiality. Each Party must keep this Agreement and information it receives about the other Party and its business in connection with this Agreement (“Confidential Information”) confidential and must not use or disclose that Confidential Information without the prior written consent of the other Party except to the extent that:" },
            {
              kind: "ul",
              items: [
                "(a) disclosure is required by law",
                "(b) the relevant information is already in the public domain",
              ],
            },
            { kind: "p", text: "12.2 Notices. All notices and communications given under this Agreement must be in writing and will be delivered personally, sent by post or sent by email to the address or email address set out in the heading of this Agreement." },
          ],
        },
        {
          heading: "13. Governing Law & Jurisdiction",
          blocks: [
            { kind: "p", text: "13.1 This Agreement is governed by the laws of Sweden." },
            { kind: "p", text: "13.2 Any dispute arising in connection with this Agreement, which the Parties will not be able to resolve amicably, will be submitted to the exclusive jurisdiction of the courts of Sweden, subject to possible appeal to the Swedish Federal Supreme Court in Stockholm." },
          ],
        },
      ],
      annexHeading: "Annex 1 — Technical Specifications and Subprocessors",
      annexParts: [
        {
          heading: "Part A: Processing Details",
          blocks: [
            {
              kind: "table",
              headers: ["Element", "Specification"],
              rows: [
                ["Defined Purpose", "Compliance documentation and administrative workflow audit"],
                ["Type of Processing", "Automated analysis of administrative documents, policies, procedures, and process workflows"],
                ["Scope of Data", "Administrative records only; no patient data (PHI), no medical decision-making data"],
                ["Categories of Data Subjects", "Healthcare administrators, quality managers, compliance officers, operations staff (not patients)"],
                ["Duration of Processing", "Real-time; inputs processed and deleted immediately upon audit completion (typically <2 minutes)"],
                ["Data Retention", "None; stateless architecture means no data persisted post-audit"],
                ["Frequency", "On-demand per Company instructions; no background or continuous processing"],
              ],
            },
          ],
        },
        {
          heading: "Part B: Security and Data Protection Measures",
          blocks: [
            {
              kind: "table",
              headers: ["Measure", "Details"],
              rows: [
                ["Encryption in Transit", "TLS 1.2 or higher on all endpoints; HSTS enforced"],
                ["Encryption at Rest", "N/A — no data stored at rest; stateless processing only"],
                ["Data Storage", "Inputs stored in memory during processing only; deleted upon completion"],
                ["Access Control", "Least-privilege access; personnel confidentiality obligations"],
                ["Audit Logging", "All processing activities logged for compliance verification"],
                ["Subprocessor Security", "All subprocessors maintain equivalent or higher security controls"],
                ["Backup & Disaster Recovery", "No backups of Company Personal Data retained; audit outputs (if stored by Company) are Company's responsibility"],
                ["Incident Response", "24-hour breach notification; forensic investigation within 5 business days"],
              ],
            },
          ],
        },
        {
          heading: "Part C: Authorized Subprocessors",
          blocks: [
            {
              kind: "table",
              headers: ["Subprocessor", "Function", "Location", "Data Protection", "No-Training Commitment"],
              rows: [
                ["Mistral AI (mistral.ai)", "LLM inference for audit analysis", "EU", "GDPR + AI safeguards (§9A)", "Yes — signed BAA"],
              ],
            },
            { kind: "note", text: "Note: Processor uses no other subprocessors. There are no hosting providers, CDNs, analytics services, or any other third-party systems that receive Company Personal Data." },
          ],
        },
        {
          heading: "Part D: Data Transfer Restrictions",
          blocks: [
            {
              kind: "table",
              headers: ["Aspect", "Commitment"],
              rows: [
                ["Geographic Scope", "All processing occurs within the European Economic Area (EEA)"],
                ["Subprocessor Location", "Mistral AI performs inference within EU; no non-EEA data transfer"],
                ["Standard Clauses", "If any future data transfer occurs outside EEA, EU Standard Contractual Clauses (SCCs) shall apply per GDPR Article 46"],
                ["Company Consent", "Company consent required in writing before any non-EEA transfer (§11)"],
              ],
            },
          ],
        },
        {
          heading: "Part E: Retention and Deletion Schedule",
          blocks: [
            {
              kind: "table",
              headers: ["Phase", "Timeline", "Action"],
              rows: [
                ["Active Processing", "<2 minutes typical", "Inputs held in memory; audit analysis performed"],
                ["Audit Completion", "Upon run completion", "Inputs deleted from memory; audit report generated"],
                ["Audit Report", "Per Company request", "Audit report retained in Company's control only (not Processor's)"],
                ["Service Termination", "Within 24 hours", "All active systems purged"],
                ["Backup Purge", "Within 10 business days", "All backup copies deleted"],
                ["Subprocessor Deletion", "Within 10 business days", "Confirmation obtained from Mistral AI"],
              ],
            },
          ],
        },
        {
          heading: "Part F: Company Responsibilities",
          blocks: [
            {
              kind: "table",
              headers: ["Responsibility", "Details"],
              rows: [
                ["Data Subject Notification", "Company is responsible for notifying data subjects of any breach (Processor assists per §7)"],
                ["Lawful Basis", "Company warrants it has lawful basis under GDPR Articles 6 and/or 9 for providing data to Processor"],
                ["Prior Consent", "Company warrants it has obtained necessary consent from data subjects or that processing is otherwise lawful"],
                ["Audit Report Storage", "Company is responsible for securing and managing audit reports after export; Processor's stateless architecture does not retain copies"],
                ["Policy Compliance", "Company warrants that use of MediReady Services complies with Company's own data protection policies and notices"],
              ],
            },
          ],
        },
        {
          heading: "Part G: Contact Information for Data Protection Matters",
          blocks: [
            {
              kind: "table",
              headers: ["Role", "Contact", "Availability"],
              rows: [
                ["Processor's Data Protection Contact", "[DPO NAME] / [EMAIL ADDRESS]", "[RESPONSE TIMEFRAME, e.g., “Within 2 business days”]"],
                ["Security Incident Reporting", "[SECURITY EMAIL]", "24/7 for breach notifications"],
              ],
            },
          ],
        },
      ],
      endOfAgreement: "End of Agreement",
    },
    classificationPage: {
      kicker: "CLASSIFICATION & READINESS",
      title: "MediReady — Swedish Market Classification & Readiness Document",
      verdict: "Assessment: not medical device software (MDSW) and not a national medical information system (NMI). Fully aligned with Swedish regulatory expectations for administrative compliance tools.",
      metaVersion: "Version",
      metaVersionValue: "2.0",
      metaDate: "Date",
      metaDateValue: "2026-05-24",
      metaPreparedBy: "Prepared by",
      metaPreparedByValue: "MediReady AB",
      tocHeading: "Table of contents",
      sections: [
        {
          heading: "1. Purpose",
          blocks: [
            { kind: "p", text: "This document establishes MediReady's formal classification and regulatory readiness for the Swedish market in relation to:" },
            {
              kind: "ul",
              items: [
                "EU Regulation (EU) 2017/745 (MDR) — medical devices and medical device software (MDSW)",
                "HSLF-FS 2022:42 — national medical information systems (NMI)",
                "GDPR (EU 2016/679) — data protection framework",
                "Patientdatalagen (2008:355) — Swedish patient data law",
                "IMY supervisory priorities — Swedish Data Protection Authority guidance",
                "NIS2 Directive (2022/2555) — cybersecurity for critical infrastructure",
                "EHDS Regulation (2023/2664) — European Health Data Space (future monitoring)",
              ],
            },
            { kind: "p", text: "The document describes MediReady's intended use, functional limitations, and regulatory boundaries as the basis for the assessment that the product is not within the scope of MDR and not within the scope of the NMI framework, while remaining fully aligned with Swedish data protection expectations." },
          ],
        },
        {
          heading: "2. Product Description",
          blocks: [
            { kind: "p", text: "MediReady is an administrative tool for compliance documentation and workflow audit. The system is used by administrators, quality leads, and operations managers to:" },
            {
              kind: "ul",
              items: [
                "generate policies, SOPs, and risk assessments",
                "perform administrative gap analyses",
                "map standards (HIPAA, ISO, NIST, etc.)",
                "perform non-clinical workflow audits",
                "produce reports for internal governance and compliance",
              ],
            },
            { kind: "p", text: "MediReady does not process medical decisions, does not influence patient care, and does not provide recommendations on diagnosis, treatment, or clinical actions." },
          ],
        },
        {
          heading: "3. Intended Purpose",
          blocks: [
            { kind: "p", text: "MediReady is intended for:" },
            {
              kind: "ul",
              items: [
                "administrative documentation",
                "compliance work",
                "internal workflow audits",
                "policy and governance document management",
                "non-clinical risk assessments",
              ],
            },
            { kind: "p", text: "MediReady is not intended to:" },
            {
              kind: "ul",
              items: [
                "be used for diagnosis, treatment, monitoring, or alleviation of disease",
                "be used for clinical decisions or patient-facing assessments",
                "process medical records or clinical parameters",
                "provide recommendations that affect patient care or treatment",
                "update or read authority registers in healthcare",
              ],
            },
          ],
        },
        {
          heading: "4. Assessment under MDR (EU 2017/745)",
          blocks: [
            { kind: "h3", text: "4.1 Relevant Criteria" },
            { kind: "p", text: "Under MDR, software is classified as a medical device if it has a medical purpose, for example to:" },
            { kind: "ul", items: ["diagnose", "prevent", "monitor", "treat", "alleviate disease"] },
            { kind: "h3", text: "4.2 Assessment" },
            { kind: "p", text: "MediReady meets none of MDR's medical purposes. The system:" },
            {
              kind: "ul",
              items: [
                "does not analyse patient data",
                "does not influence clinical decisions",
                "does not generate medical recommendations",
                "is not used by clinical staff in patient-facing work",
                "processes administrative information only",
              ],
            },
            { kind: "note", text: "“Software for administrative purposes is not covered.” — MDR interpretation per EU guidance" },
            { kind: "h3", text: "4.3 Conclusion" },
            { kind: "p", text: "MediReady is not a medical device and is not within the scope of MDR." },
          ],
        },
        {
          heading: "5. Assessment under HSLF-FS 2022:42 (National Medical Information Systems)",
          blocks: [
            { kind: "h3", text: "5.1 Relevant Criteria" },
            { kind: "p", text: "NMI covers systems that:" },
            {
              kind: "ul",
              items: [
                "process medical information of significance for an individual patient's care, or",
                "provide direct access to or update authority registers, or",
                "are used to dispense prescriptions at pharmacies",
              ],
            },
            { kind: "h3", text: "5.2 Exception in the Regulation" },
            { kind: "p", text: "HSLF-FS 2022:42 states that the following is not NMI:" },
            { kind: "note", text: "“Generic software used in a care environment, except where the software has been adapted in a way that meets the definition of a national medical information system.”" },
            { kind: "h3", text: "5.3 Assessment" },
            { kind: "p", text: "MediReady:" },
            {
              kind: "ul",
              items: [
                "does not process medical information",
                "does not affect patient care",
                "has no connection to authority registers",
                "is not used for prescriptions or dispensing",
                "is not adapted for clinical decisions",
                "is not a system of significance for an individual patient's care",
              ],
            },
            { kind: "h3", text: "5.4 Conclusion" },
            { kind: "p", text: "MediReady does not meet the definition of NMI and is not within the scope of HSLF-FS 2022:42." },
          ],
        },
        {
          heading: "6. Swedish Regulatory Framework Context",
          blocks: [
            { kind: "p", text: "MediReady operates in Sweden under the following regulatory framework:" },
            {
              kind: "table",
              headers: ["Regulation", "Reference", "Relevance"],
              rows: [
                ["GDPR", "EU 2016/679", "Data protection framework"],
                ["Patientdatalagen", "2008:355", "Swedish patient data law"],
                ["HSLF-FS 2022:42", "Swedish National Board of Health and Welfare", "Regulations on national medical information systems (NMI)"],
                ["MDR", "EU 2017/745", "EU medical device regulations (applicable in Sweden)"],
                ["IMY Supervisory Practices", "Integritetsskyddsmyndigheten", "Swedish DPA guidance on AI, healthcare, and sensitive data"],
              ],
            },
            { kind: "p", text: "Critical classification question for Swedish healthcare providers: Is MediReady a medical device (MDSW) or a national medical information system (NMI)?" },
            { kind: "p", text: "The answer is no to both. MediReady is subject to GDPR but not to medical device or NMI-specific regulations." },
          ],
        },
        {
          heading: "7. Data Protection and GDPR",
          blocks: [
            { kind: "p", text: "Even though MediReady is neither MDSW nor NMI, the system is subject to GDPR." },
            {
              kind: "table",
              headers: ["Aspect", "MediReady Commitment"],
              rows: [
                ["Data processing", "Inputs are processed ephemerally in memory and discarded immediately"],
                ["Data storage", "No PHI is stored; stateless architecture"],
                ["Collection", "No background collection, telemetry, or profiling"],
                ["Controller", "The healthcare provider is the controller"],
                ["Processor", "MediReady is the processor"],
                ["Agreement", "A data processing agreement under Article 28 is required (provided separately)"],
              ],
            },
          ],
        },
        {
          heading: "8. Swedish Data Protection Authority (IMY) Alignment",
          blocks: [
            { kind: "p", text: "IMY (Integritetsskyddsmyndigheten) has published supervisory priorities for 2024–2025 that include:" },
            {
              kind: "ul",
              items: [
                "AI use in healthcare and sensitive data processing",
                "Healthcare sector data protection practices",
                "Transparency and human oversight in automated decision-making",
              ],
            },
            { kind: "p", text: "MediReady's design aligns with IMY priorities as follows:" },
            { kind: "h3", text: "8.1 AI Transparency" },
            {
              kind: "table",
              headers: ["Requirement", "MediReady Commitment"],
              rows: [
                ["Model disclosure", "Mistral Large LLM with signed BAA (no training use)"],
                ["Human oversight", "Critical findings reviewed by qualified auditors"],
                ["Input deletion", "Stateless processing eliminates data retention risk"],
              ],
            },
            { kind: "h3", text: "8.2 Sensitive Data Minimization" },
            {
              kind: "table",
              headers: ["Aspect", "MediReady Position"],
              rows: [
                ["Data type", "Administrative data only, not patient medical records or PHI"],
                ["GDPR Article 9", "No categorization under special categories in normal use"],
                ["Incidental sensitive data", "Stateless architecture and immediate deletion mitigate risk"],
              ],
            },
            { kind: "h3", text: "8.3 Data Subject Rights" },
            { kind: "p", text: "MediReady assists the Company in responding to Data Subject Access Requests (DSAR) and other rights under GDPR Articles 12–22. (See §6 of the Data Processing Agreement.)" },
            { kind: "h3", text: "8.4 Accountability Documentation" },
            { kind: "p", text: "MediReady maintains:" },
            {
              kind: "ul",
              items: [
                "Audit logs",
                "Breach records",
                "Processing documentation as required by GDPR Article 5(2)",
              ],
            },
            { kind: "p", text: "Documentation is made available to IMY upon inspection request." },
            { kind: "h3", text: "8.5 Commitment to Swedish Law" },
            {
              kind: "table",
              headers: ["Element", "Commitment"],
              rows: [
                ["Governing law", "All disputes and legal questions governed by Swedish law"],
                ["DPA jurisdiction", "Swedish governing law and jurisdiction"],
              ],
            },
          ],
        },
        {
          heading: "9. NIS2 Directive — Scope and Applicability",
          blocks: [
            { kind: "p", text: "The EU NIS2 Directive (2022/2555) sets cybersecurity obligations for critical infrastructure operators and essential service providers." },
            { kind: "h3", text: "9.1 When NIS2 Applies" },
            { kind: "p", text: "NIS2 applies where a company:" },
            {
              kind: "ul",
              items: [
                "Has ≥ 50 employees, or",
                "Has annual turnover ≥ EUR 10 million, or",
                "Is classified as an “essential” actor in healthcare (e.g., operates an EHR system or national health-data platform)",
              ],
            },
            { kind: "h3", text: "9.2 MediReady's Position" },
            {
              kind: "table",
              headers: ["Question", "Answer"],
              rows: [
                ["Is MediReady automatically in scope for NIS2?", "No"],
                ["Why?", "Not an EHR system; does not maintain national health-data infrastructure; does not directly deliver healthcare services"],
              ],
            },
            { kind: "h3", text: "9.3 Important Note for Swedish Healthcare Providers" },
            { kind: "p", text: "If MediReady is used by a Swedish healthcare provider (e.g., region, clinic, hospital) that is itself a NIS2 essential actor, that provider's NIS2 obligations may extend to evaluating MediReady's security posture as part of their supply-chain risk management." },
            { kind: "h3", text: "9.4 MediReady's NIS2 Commitments" },
            {
              kind: "table",
              headers: ["Requirement", "MediReady Commitment"],
              rows: [
                ["Security measures", "Comply with NIST Cybersecurity Framework (CSF) principles"],
                ["Incident reporting", "Align with NIS2 reporting timelines (72-hour breach notification)"],
                ["Documentation", "Available upon request for healthcare providers' NIS2 compliance assessment"],
              ],
            },
          ],
        },
        {
          heading: "10. European Health Data Space (EHDS) — Future Monitoring",
          blocks: [
            { kind: "p", text: "The EHDS Regulation (2023/2664) is under implementation." },
            { kind: "h3", text: "10.1 What EHDS Addresses" },
            {
              kind: "ul",
              items: [
                "Secondary use of health data for research and policy",
                "Interoperability of electronic health records",
                "Rights to data portability in healthcare",
              ],
            },
            { kind: "h3", text: "10.2 MediReady's Position" },
            {
              kind: "table",
              headers: ["Question", "Answer"],
              rows: [
                ["Is EHDS currently applicable to MediReady?", "No"],
                ["Why?", "Applies to EHR systems and national data-sharing infrastructure, not compliance-audit tools"],
              ],
            },
            { kind: "h3", text: "10.3 Monitoring Commitment" },
            { kind: "p", text: "MediReady:" },
            {
              kind: "ul",
              items: [
                "Monitors EHDS implementation phases",
                "Will assess scope if EHDS interoperability requirements evolve to include compliance-audit tools",
                "Will implement as required",
              ],
            },
            { kind: "h3", text: "10.4 EHDS Implementation Timeline" },
            {
              kind: "table",
              headers: ["Phase", "Timeline", "Primary Focus"],
              rows: [
                ["Phase 1", "2025–2026", "EHR interoperability"],
                ["Phase 2", "2027+", "Secondary use and data-sharing frameworks"],
              ],
            },
            { kind: "p", text: "MediReady evaluation timeline: Q1–Q2 2026" },
          ],
        },
        {
          heading: "11. Data Residency and Geographic Processing",
          blocks: [
            { kind: "h3", text: "MediReady Guarantee" },
            {
              kind: "table",
              headers: ["Commitment", "Detail"],
              rows: [
                ["Processing location", "All processing of Company Personal Data occurs within the European Economic Area (EEA)"],
                ["Inference location", "Mistral AI occurs within EU data centers"],
                ["Non-EEA transfer", "No non-EEA data transfer without explicit Company written consent"],
                ["Restricted jurisdictions", "No data transferred to the United States, Asia, or any non-EEA jurisdiction"],
              ],
            },
            { kind: "p", text: "This commitment applies to all Company Personal Data, including administrative records, policies, and workflow documentation provided to MediReady." },
          ],
        },
        {
          heading: "12. Overall Conclusion",
          blocks: [
            { kind: "p", text: "Based on intended use, functionality, and regulatory criteria, MediReady is assessed as follows:" },
            {
              kind: "table",
              headers: ["Regulatory Area", "Status"],
              rows: [
                ["Medical device (MDSW) under MDR (EU 2017/745)", "✓ Not a medical device"],
                ["National medical information system (NMI) under HSLF-FS 2022:42", "✓ Not an NMI"],
                ["NIS2 Directive automatic scope", "✓ Not in automatic scope"],
                ["EHDS current scope", "✓ Not in current scope"],
                ["GDPR and Swedish data protection law", "✓ Subject to"],
                ["Patientdatalagen (2008:355)", "✓ Aligned with"],
                ["IMY supervisory authority", "✓ Subject to"],
                ["Swedish data-protection expectations for healthcare software", "✓ Aligned with"],
              ],
            },
            { kind: "h3", text: "For Swedish Healthcare Providers" },
            { kind: "p", text: "You can use MediReady as an administrative compliance and workflow tool. You must:" },
            {
              kind: "ul",
              items: [
                "Sign a GDPR-compliant Data Processing Agreement (provided separately)",
                "Assess MediReady's security posture for your own risk management (documentation available)",
                "Apply MediReady's findings with independent professional judgment",
              ],
            },
            { kind: "p", text: "The tool does not substitute for legal or clinical counsel." },
          ],
        },
      ],
      endLabel: "End of document",
    },
    regulatoryPage: {
      kicker: "REGULATORY POSITIONING",
      title: "Compliance Documentation & Workflow Audit Tool",
      subtitle: "Regulatory positioning statement",
      leadHeading: "MediReady is an administrative tool for compliance documentation and workflow audit",
      leadPara1: "MediReady is not a clinical decision-support system, not a medical device, and not a tool for diagnosis, treatment, or patient-facing decisions. The platform is designed for administrators, quality leads, and operations managers who need to structure, document, and audit internal workflows, policies, and compliance posture.",
      leadPara2: "The system processes administrative information only. It does not process medical decisions, clinical parameters, or patient records.",
      intendedUseHeading: "Defined and limited intended use",
      intendedUseIntro: "MediReady is intended for:",
      intendedUseItems: [
        { label: "Compliance documentation", sub: "Policies, SOPs, risk assessments, gap analyses, standards mapping." },
        { label: "Workflow audits", sub: "Administrative processes, internal routines, information flows." },
        { label: "Internal controls and quality work", sub: "Non-clinical audit activities, administrative risks, organisational weaknesses." },
        { label: "Administrative reporting", sub: "Non-patient-facing summaries, internal improvement plans." },
      ],
      intendedUseOutro: "MediReady does not influence medical decisions, does not process clinical data, and does not provide recommendations on diagnosis, treatment, or care.",
      classificationHeading: "Regulatory classification — why MediReady is not MDSW or NMI",
      mdrHeading: "1. Not medical device software (MDR 2017/745)",
      mdrBody1: "The EU MDR applies only where software has a medical purpose — for example diagnosis, treatment, monitoring, or alleviation of disease. MediReady does not meet these criteria.",
      mdrQuote: "“Software for administrative purposes is not covered.”",
      mdrQuoteAttribution: "— from the MDR administrative-purpose exclusion",
      mdrConclusion: "MediReady is an administrative compliance tool, not a clinical system.",
      nmiHeading: "2. Not a national medical information system (NMI) under HSLF-FS 2022:42",
      nmiIntro: "NMI covers systems that:",
      nmiCriteria: [
        "process medical information of significance for an individual patient's care, or",
        "provide direct access to or update authority registers.",
      ],
      nmiSupportLead: "Supporting reference:",
      nmiSupportBody: "NMI does not apply to generic software used in a care environment unless the software has been adapted for a medical purpose.",
      nmiConclusion: "MediReady does not process medical information, does not process patient data, and does not access registries.",
      gdprHeading: "GDPR — data protection architecture and accountability",
      gdprIntro: "MediReady is built to minimise data-protection risk and to align with IMY's published supervisory priorities.",
      gdprBlocks: [
        {
          heading: "Stateless processing",
          body: (
            <>
              Inputs are processed in memory and discarded immediately after the run. No PHI is stored. No background collection, no telemetry, no profiling.
            </>
          ),
        },
        {
          heading: "Role allocation",
          body: (
            <>
              The healthcare provider is the controller. MediReady is the processor. A GDPR-compliant Data Processing Agreement (DPA) is required under Article 28.
            </>
          ),
        },
        {
          heading: "IMY supervisory logic",
          body: (
            <>
              IMY prioritises AI use, children and young people, sensitive data, and the healthcare sector. MediReady does not process sensitive personal data, which lowers supervisory exposure.
            </>
          ),
        },
      ],
      nis2Heading: "NIS2 — applies only at certain company size",
      nis2Intro: "NIS2 applies where a company:",
      nis2Criteria: [
        "has ≥ 50 employees, or",
        "has annual turnover ≥ EUR 10 million, or",
        "is classified as an “essential” actor in healthcare.",
      ],
      nis2Conclusion: "MediReady is not an EHR system and is not automatically in scope. Assessment is made by company size, not by product function.",
      ehdsHeading: "EHDS — future interoperability requirements",
      ehdsBody: "EHDS is primarily directed at EHR systems and national health-data flows. MediReady is an administrative tool and is out of scope, but the regulatory development is tracked.",
      actionsHeading: "Recommended actions",
      actionsItems: [
        {
          heading: "1. Refine marketing language",
          body: (
            <>
              Avoid terms that imply clinical function. Use: <em>compliance documentation tool</em>, <em>workflow audit tool</em>, <em>administrative audit engine</em>.
            </>
          ),
        },
        {
          heading: "2. Document the classification",
          body: (
            <>
              Maintain an internal document that records why MediReady is not MDSW and not NMI. Reference the MDR administrative-purpose exclusion and the HSLF-FS 2022:42 definitions.
            </>
          ),
        },
        {
          heading: "3. Strengthen the data-protection architecture",
          body: (
            <>
              Highlight the stateless design in the DPA and security documentation. Make the no-PHI-stored statement explicit.
            </>
          ),
        },
        {
          heading: "4. Legal review before launch",
          body: (
            <>
              Recommended for regulatory reasons. Focus areas: marketing, intended use, DPA, risk analysis.
            </>
          ),
        },
      ],
      summaryHeading: "Summary",
      summaryBody: "MediReady is an administrative tool for compliance documentation and workflow audit, not a medical system. It falls outside MDR, outside NMI, and does not process PHI. GDPR is followed through stateless processing and clear role allocation. NIS2 and EHDS may become relevant depending on company size and future interoperability requirements.",
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
      pdfCta: "Download PDF report",
      pdfBusy: "Generating PDF…",
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
        { label: "Clinics", sub: "Primary care, specialty, dental, and mental-health practices that need structured self-checks, documentation review, and traceable remediation evidence." },
        { label: "Billing companies", sub: "Organisations handling reimbursement flows that need to verify claims handling, denials, coding, and documentation quality before submission." },
        { label: "Healthcare SaaS", sub: "Providers of EHR add-ons, AI documentation, patient portals, and other digital health services that need independent review of content, security, and communication." },
        { label: "Networks & groups", sub: "IDNs, ACOs, and multi-location organisations that require uniform audit processes, shared standards, and comparable reports across sites." },
        { label: "Consultants", sub: "Advisory and audit partners that need a white-label layer for review, documentation, and standardised reporting." },
        { label: "Internal audit teams", sub: "Teams running recurring controls, evidence collection, risk assessment, and traceable audit reports." },
        { label: "Regulators", sub: "Bodies performing independent verification of documentation, processes, information security, and clinical content." },
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
          regulatory: "Regulatory positioning",
          classification: "Classification document",
          dpa: "Data processing agreement",
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
        body: "MediReady is for de-identified policies, workflows, sample text, and synthetic examples — not a medical information system (NMI) and not for use in individual patient care. Do not submit protected health information (PHI) — names, dates of birth, personal identity numbers (personnummer), MRNs, addresses, or any of the 18 HIPAA identifiers tied to a real person. Inputs are processed by third-party AI providers.",
        confirm: "I confirm this input contains no protected health information and is not used for individual patient care.",
        detectedHeading: "Possible identifier detected — input blocked.",
        detectedBody: "Your input looks like it contains personal identifiers. Remove or redact the highlighted text before running the audit. If this is a false positive, edit the surrounding text to break the pattern.",
        labelByType: {
          se_personnummer: "Swedish personal identity number",
          us_ssn: "US Social Security Number",
          labeled_id: "Labeled personal identifier (MRN / Personnummer / Patient ID)",
          dob_context: "Date of birth with context",
          phone_se: "Swedish phone number",
        },
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
        <>En plattform för vårdgranskning och {em("compliance‑dokumentation")}.</>
      ),
      heroBody:
        "Kör sex parallella granskningskanaler, generera HIPAA‑anpassade dokument, kartlägg standarder och stäng identifierade gap — på några minuter.",
      ctaRunAudit: "Kör en kostnadsfri granskning",
      ctaExploreSuite: "Utforska compliance‑suiten",
      badgeLLM: "LLM + SYNTHETISK WEBBLÄSARE",
      badgeExport: "WORD + PDF‑EXPORT",
      badgeIntegration: "INGEN INTEGRATION",

      twoProductsKicker: "TVÅ PRODUKTER · EN PLATTFORM",
      twoProductsTitle: (
        <>
          Hitta gapen.<br />
          {em("Stäng dem.")}
        </>
      ),

      productOneKicker: "PRODUKT 1",
      productOneName: "MediReady Audits",
      productOneBody:
        "Sex parallella granskningskanaler som identifierar de brister som betalare, revisorer och tillsynsmyndigheter upptäcker först.",
      productOneList: [
        "Ersättnings- och kravhantering",
        "HIPAA och informationssäkerhet",
        "Dokumentation",
        "Patientkommunikation",
        "Kliniskt innehåll",
        "Syntetiskt webbläsarbeteende",
      ],
      productOneCTA: "Kör en kostnadsfri granskning",

      productTwoKicker: "PRODUKT 2",
      productTwoName: "MediReady Suite",
      productTwoBody: "Compliance‑dokument genererade på minuter.",
      productTwoList: [
        "Granskningsplaner",
        "Standardkartläggning",
        "Dokumentationsgap",
        "HIPAA‑riskbedömningar",
        "Policy- och rutinframtagning",
      ],
      productTwoCTA: "Visa hela suiten",

      suiteKicker: "SUITEN",
      suiteTitle: (
        <>
          Compliance‑dokument,<br />
          {em("genererade på minuter")}.
        </>
      ),
      suiteBody:
        "Fem verktyg som delar samma motor och datamodell. Inmatning är strukturerad. Utdata hänvisar till faktiska kravpunkter. Alla dokument kan laddas ned som färdig PDF och redigerbar Word‑fil.",
      suiteCTA: "Öppna suiten",
      suiteTools: [
        { title: "Audit Plan Generator", desc: "Fullständiga interna granskningsplaner — omfattning, mål, metodik, schema, checklistor och riskområden. Export: Word + JSON." },
        { title: "Standards Mapping", desc: "Klistra in ett fynd eller krav och få exakta HIPAA‑, CMS‑, OCR‑, NIST‑ och ISO‑referenser." },
        { title: "Document Gap Analysis", desc: "Ladda upp en rutin eller policy. Systemet markerar saknade avsnitt, svag formulering och kravgap." },
        { title: "HIPAA Risk Assessment", desc: "NIST 800‑30‑metodik med komplett riskregister, sannolikhet/konsekvens‑bedömning och rekommenderade kontroller." },
        { title: "Policy / SOP Generator", desc: "Skapar fullständiga HIPAA‑anpassade policys och rutiner med obligatoriska avsnitt och kravreferenser." },
      ],

      engineKicker: "GRANSKNINGSMOTORN",
      engineTitle: (
        <>
          Fil in.<br />Rapport ut.<br />
          {em("Det är allt.")}
        </>
      ),
      engineBody:
        "Ladda upp en fil, klistra in text eller ange en URL. Sex avgränsade granskningskanaler körs parallellt. Exportera strukturerade fynd, nödvändiga åtgärder och en PDF/JSON‑rapport. Ingen integration, inget SDK, ingen agent i nätverket.",
      engineCTA: "Kör en kostnadsfri granskning",

      whoKicker: "FÖR VEM",
      whoTitle: (
        <>
          Alla med<br />
          {em("regulatorisk exponering")}.
        </>
      ),
      whoBody:
        "Om du skapar klinisk dokumentation, skickar claims, hanterar patientdata, skriver policys eller genomför interna revisioner — då ger denna plattform dig samma bild som dina granskare kommer att ha, innan de har den.",
      whoCards: [
        { label: "Kliniker", sub: "Primärvård, specialistvård, tandvård, psykiatri." },
        { label: "Billing‑bolag", sub: "Granska kundflöden; minska avslag." },
        { label: "Healthcare SaaS", sub: "EHR‑tillägg, AI‑dokumentation, patientportaler." },
        { label: "Nätverk", sub: "IDN, ACO, flerplatsverksamheter." },
        { label: "Konsulter", sub: "White‑label‑granskning + dokumentationslager." },
        { label: "Compliance‑ansvariga", sub: "Återkommande revisioner + policyunderhåll." },
        { label: "Interna revisionsteam", sub: "Planer, evidens, spårbara rapporter." },
        { label: "Tillsynsmyndigheter", sub: "Oberoende verifieringsflöden." },
      ],

      safetyKicker: "VARFÖR DET ÄR SÄKERT",
      safetyTitle: (
        <>
          Byggt för<br />
          {em("vårddata")}.
        </>
      ),
      safetyBody:
        "Utformat för den enda dataklass som är relevant här: PHI. Allt nedan är standard — inga inställningar, inga premiumkrav.",
      safetyCards: [
        { title: "Ingen PHI lagras i granskningsmotorn", desc: "Inmatning bearbetas och raderas — inte sparad, inte indexerad, inte aggregerad." },
        { title: "Inmatning raderas efter körning", desc: "Audit‑inmatning sparas inte efter körning. Motorn är stateless." },
        { title: "Krypterat i transit", desc: "TLS 1.2+ på alla endpoints. HSTS. Ingen plaintext‑fallback." },
        { title: "Lokal SQLite för Suite‑dokument", desc: "Dokument lagras på din server — inte i extern molnindexering." },
        { title: "Inte använt för träning", desc: "Inferens körs mot leverantörer med BAA. Inmatning delas inte med träningspipelines." },
        { title: "HIPAA‑anpassade arbetsflöden", desc: "Audit‑loggar, least‑privilege, retention‑kontroller och incidentrapportering." },
      ],
      safetyCTA: "Läs mer om säkerhet",

      pricingKicker: "PRISSÄTTNING",
      pricingTitle: "Betala för det du behöver.",
      pricingBody: "Kör en enskild granskning, generera ett dokument eller abonnera för obegränsat.",
      pricingCTA: "Visa prissättning",

      closingTitle: (
        <>Se vad dina {em("granskare")} skulle se.</>
      ),
      closingBody: "Kör en kostnadsfri granskning. Kritiska fynd visas direkt i gränssnittet — ingen registrering krävs.",
      demoCard: {
        runLabel: "KÖRNING",
        target: "COPD‑uppföljning efter exacerbation",
        timestamp: "Ons 20 maj 2026 · 20:58 UTC",
        overallLabel: "TOTALT",
        criticalLabel: "KRITISKA",
        watchLabel: "OBSERVATIONER",
        infoLabel: "INFORMATION",
        previewRows: [
          { ch: "HIPAA",            title: "PHI i URL‑parametrar" },
          { ch: "CLAIMS",           title: "Saknad taxonomikod" },
          { ch: "KOMMUNIKATION",    title: "Ingen rutin för avslagshantering" },
          { ch: "KLINISKT INNEHÅLL", title: "Referens till 2025 GOLD‑riktlinjer" },
        ],
        footerTime: "~38 sek · 6/6 kanaler",
      },
      pricingCards: [
        { kicker: "ENGÅNGSGRANSKNINGAR", headline: "Från $49",  body: "Claims · Full · Denial." },
        { kicker: "COMPLIANCE SUITE",    headline: "Från $29",  body: "Per dokument, eller $99/mån." },
        { kicker: "PAKET",                headline: "$199/mån",  body: "4 granskningar + 10 dokument per månad." },
      ],
    },
    about: {
      kicker: "FÖRETAG",
      title: "Company",
      para1:
        "MediReady utvecklar filbaserade verktyg för vårdgranskning och compliance som identifierar avvikelser innan betalare, revisorer eller tillsynsmyndigheter gör det. Ingen integration. Inga IT‑projekt. Fil in → rapport ut.",
      para2:
        "Grundat av Glenn Carter. MediReady kombinerar erfarenhet av vårdflöden, granskningsklassad datahantering, HIPAA‑anpassad arkitektur och deterministisk valideringslogik.",
      para3: "Målet är enkelt: att göra compliance‑arbetet inom vården snabbt, korrekt och tillgängligt.",
      ctaAudit: "Kör en kostnadsfri granskning",
      ctaSuite: "Utforska suiten",
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
      documentation: { label: "Klinisk dokumentation", desc: "ICD‑10, CPT, HCPCS, modifierare, NPI, taxonomi, fullständighet i mötesdata" },
      hipaa:         { label: "HIPAA & säkerhet",       desc: "PHI‑exponering, headers, kryptering, trackers, samtycke" },
      claims:        { label: "Claims workflow",        desc: "Payer‑regler, clearinghouse, EDI 837, payer‑ID, avslag" },
      communication: { label: "Patientkommunikation",   desc: "Påminnelser, avslag, opt‑out, integritetssignaler" },
      content:       { label: "Kliniskt innehåll",      desc: "Riktlinjeaktualitet, evidensstöd, riskinstruktioner" },
      synthetic:     { label: "Syntetisk webbläsarkontroll", desc: "JS‑fel, nätverksfel, API‑anrop, prestanda" },
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
      body: "Samlad vy över samtliga PDF‑ och Word‑exporter du genererat — över granskningar och suiten. Tillgängligt med övervakningsnivån.",
      downloadsLine: (
        <>
          För närvarande ligger nedladdningar på varje enskild körning — se din{" "}
          <Link href="/suite/history" style={{ color: "var(--accent)" }}>suite‑historik</Link>.
        </>
      ),
    },
    suiteHistoryList: {
      backToSuite: "Suiten",
      kicker: "HISTORIK",
      title: "Samtliga genereringar, sparade.",
      body: "Granskningsplaner, kravmappningar och gap‑analyser du har skapat. Välj en post för att öppna eller ladda ned igen.",
      freeTierBanner: (days) => (
        <>
          <strong style={{ color: "var(--ink)" }}>Kostnadsfri nivå — senaste {days} dagarna.</strong>{" "}
          Äldre körningar är dolda.{" "}
          <Link href="/contact" style={{ color: "var(--accent)" }}>Kontakta oss</Link>{" "}
          för att aktivera fullständig historik.
        </>
      ),
      empty: {
        title: "Ingen historik ännu.",
        body: "Kör något av suite‑verktygen för att fylla historiken — eller ladda demodata för att testa utan att använda API‑krediter.",
        openSuite: "Öppna suiten",
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
      title: "Security",
      sections: [
        {
          heading: "Ingen lagring av PHI",
          body: "MediReady lagrar eller behåller inte PHI. Inmatningar bearbetas flyktigt och raderas när granskningen är slutförd.",
        },
        {
          heading: "Kryptering under överföring",
          body: "Alla uppladdningar och nedladdningar använder HTTPS/TLS 1.2+.",
        },
        {
          heading: "Lokal lagring av Suite‑utdata",
          body: "Dokument som genereras i Compliance‑suiten lagras lokalt i en isolerad SQLite‑databas. De delas aldrig och används inte för träning.",
        },
        {
          heading: "HIPAA‑anpassade arbetsflöden",
          bullets: [
            "Ingen bestående PHI",
            "Ingen integration med kliniska system",
            "Ingen åtkomst till EHR",
            "Ingen bakgrundsinsamling av data",
            "Minimal datamängd — endast den information som krävs för att generera efterfrågat resultat bearbetas",
          ],
        },
      ],
    },
    privacyPage: {
      kicker: "INTEGRITET",
      title: "Privacy",
      noPhiHeading: "Ingen PHI",
      noPhiBody: (
        <>
          MediReady är utformat för avidentifierat innehåll och tar inte emot skyddade hälsouppgifter (PHI). Inskick av PHI strider mot våra{" "}
          <Link href="/terms" style={{ color: "var(--accent)" }}>användarvillkor</Link>. Se{" "}
          <Link href="/security" style={{ color: "var(--accent)" }}>Security‑sidan</Link> för fullständig dataflödesarkitektur.
        </>
      ),
      inputsHeading: "Hur dina inmatningar hanteras",
      inputsList: [
        {
          heading: "/scan (kostnadsfri granskning)",
          body: "Bearbetas i processminnet och raderas när svaret returneras. Inget skrivs till disk.",
        },
        {
          heading: "/suite/* (compliance‑dokument)",
          body: (
            <>Formulärdata och genererade dokument lagras lokalt i en SQLite‑databas så att du kan ladda ned dokument igen. Du kan permanent ta bort poster via{" "}<Link href="/suite/history" style={{ color: "var(--accent)" }}>historiksidan</Link> när som helst.</>
          ),
        },
      ],
      collectHeading: "Data vi samlar in",
      collectList: [
        "E‑postadress (endast om du själv lämnar den — väntelista, kontaktformulär)",
        "Betalningsinformation, hanteras av Revolut (vi lagrar inte kortdata)",
        "Icke‑PHI driftloggar från servern (t.ex. svarstider, fel)",
      ],
      notCollectHeading: "Data vi inte samlar in",
      notCollectList: [
        "Patientidentifierare eller medicinska journaler",
        "EHR‑data eller innehåll från kliniska system",
        "Bakgrundsanalys, telemetri eller beteendespårning",
      ],
      thirdPartyHeading: "Tredjepartsleverantörer",
      thirdPartyBody:
        "Inmatningar du skickar bearbetas av en eller flera AI‑leverantörer (Google Gemini, Mistral, OpenRouter). Ingen av dessa leverantörer verkar under ett HIPAA Business Associate Agreement med MediReady. Lämna därför inte in PHI.",
      deleteHeading: "Radering av dina data",
      deleteBody: (
        <>
          För Suite‑dokument: använd papperskorgsikonen på{" "}
          <Link href="/suite/history" style={{ color: "var(--accent)" }}>historiksidan</Link> för att permanent ta bort en post. För radering av annan data (e‑postadress, meddelanden från kontaktformulär):{" "}
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
          body: "MediReady bearbetar indata flyktigt och lagrar inte PHI. Utdata från Compliance‑suiten lagras lokalt och delas aldrig eller används inte för träning.",
        },
        {
          heading: "4. Betalning och fakturering",
          body: "Betalningar hanteras via säker tredjepartsleverantör. Samtliga avgifter är icke‑återbetalningsbara om inte lag föreskriver annat.",
        },
        {
          heading: "5. Ansvarsbegränsning",
          body: "MediReady tillhandahålls “i befintligt skick” utan garantier. Vi ansvarar inte för indirekta, tillfälliga eller följdskador.",
        },
      ],
    },
    dpaPage: {
      kicker: "PERSONUPPGIFTSBITRÄDESAVTAL",
      title: "Personuppgiftsbiträdesavtal (DPA)",
      subtitle: "Mellan Företaget och MediReady (personuppgiftsbiträde)",
      parties: { lead: "Mellan:", controller: "Företaget (enligt definitionen i huvudavtalet)", and: "och", processor: "MediReady (personuppgiftsbiträde)" },
      effectiveLabel: "Ikraftträdandedatum",
      effectiveValue: "[DATUM]",
      sections: [
        {
          heading: "1. Definitioner",
          blocks: [
            { kind: "p", text: "1.1 Om inte annat anges nedan ska följande termer ha följande betydelse i detta avtal:" },
            {
              kind: "dl",
              items: [
                { term: "1.1.1 “Avtalet”", def: "detta personuppgiftsbiträdesavtal jämte samtliga bilagor." },
                { term: "1.1.2 “Företagets personuppgifter”", def: "samtliga personuppgifter som behandlas av personuppgiftsbiträdet för Företagets räkning enligt eller i samband med huvudavtalet." },
                { term: "1.1.3 “Anlitat biträde”", def: "ett underbiträde." },
                { term: "1.1.4 “Dataskyddslagstiftning”", def: "EU:s dataskyddslagstiftning samt, i tillämpliga delar, dataskydds‑ eller integritetslagstiftningen i andra länder, inklusive Sveriges kompletterande nationella bestämmelser." },
                { term: "1.1.5 “EES”", def: "Europeiska ekonomiska samarbetsområdet." },
                { term: "1.1.6 “EU:s dataskyddslagstiftning”", def: "EU:s direktiv 95/46/EG, såsom införlivat i varje medlemsstats nationella lagstiftning och med eventuella ändringar, ersättningar eller upphävanden över tid, inklusive genom GDPR och lagstiftning som genomför eller kompletterar GDPR." },
                { term: "1.1.7 “GDPR”", def: "Europaparlamentets och rådets förordning (EU) 2016/679." },
                { term: "1.1.8 “Tjänsterna”", def: "den plattform för compliance‑dokumentation och granskningsanalys som tillhandahålls av MediReady." },
                { term: "1.1.9 “Underbiträde”", def: "varje person som utses av eller på uppdrag av personuppgiftsbiträdet att behandla personuppgifter för Företagets räkning." },
              ],
            },
            { kind: "p", text: "1.2 Begreppen “Kommissionen”, “Personuppgiftsansvarig”, “Registrerad”, “Medlemsstat”, “Personuppgifter”, “Personuppgiftsincident”, “Behandling” och “Tillsynsmyndighet” har samma innebörd som i GDPR och relaterade termer ska tolkas i enlighet med detta." },
          ],
        },
        {
          heading: "2. Behandling av Företagets personuppgifter",
          blocks: [
            { kind: "p", text: "2.1 Personuppgiftsbiträdet ska:" },
            {
              kind: "ul",
              items: [
                "2.1.1 följa samtlig tillämplig dataskyddslagstiftning vid behandlingen av Företagets personuppgifter, och",
                "2.1.2 inte behandla Företagets personuppgifter på annat sätt än enligt Företagets dokumenterade instruktioner.",
              ],
            },
            { kind: "p", text: "2.2 Företaget instruerar personuppgiftsbiträdet att behandla Företagets personuppgifter uteslutande för att tillhandahålla Tjänsterna enligt huvudavtalet." },
          ],
        },
        {
          heading: "3. Personuppgiftsbiträdets personal",
          blocks: [
            { kind: "p", text: "Personuppgiftsbiträdet ska vidta rimliga åtgärder för att säkerställa tillförlitligheten hos varje anställd, ombud eller uppdragstagare som kan få tillgång till Företagets personuppgifter, och säkerställa att åtkomst i varje enskilt fall är strikt begränsad till de individer som behöver känna till eller komma åt de aktuella personuppgifterna för att fullgöra huvudavtalets syfte. Samtliga sådana individer omfattas av tystnadsåtaganden eller yrkesmässiga eller lagstadgade tystnadsplikter." },
          ],
        },
        {
          heading: "4. Säkerhet",
          blocks: [
            { kind: "p", text: "4.1 Personuppgiftsbiträdet ska genomföra följande tekniska och organisatoriska åtgärder för att skydda Företagets personuppgifter, med beaktande av behandlingens administrativa karaktär och frånvaron av känsliga patientuppgifter:" },
            { kind: "h3", text: "4.1.1 Tekniska åtgärder" },
            {
              kind: "ul",
              items: [
                "All dataöverföring sker över TLS 1.2 eller senare kryptering",
                "HSTS (HTTP Strict Transport Security) tillämpas på samtliga endpoints",
                "Blandat innehåll (HTTP/HTTPS) tillåts inte",
                "Inga cookies, spårare eller bakgrundsdatainsamling",
                "Företagets personuppgifter lagras inte på personuppgiftsbiträdets system efter slutförd granskning",
              ],
            },
            { kind: "h3", text: "4.1.2 Organisatoriska åtgärder" },
            {
              kind: "ul",
              items: [
                "Stateless arkitektur: inmatningar bearbetas enbart i minnet",
                "Inmatningar raderas omedelbart efter slutförd granskning, ingen lagring",
                "Åtkomst till bearbetningssystem är begränsad till personal hos personuppgiftsbiträdet med dokumenterat behov",
                "All personal omfattas av tystnadsplikt (se §3)",
                "Loggning av samtliga behandlingsaktiviteter för efterlevnadsverifiering",
                "Företagets personuppgifter används inte för modellträning, förbättring eller annat syfte utanför de dokumenterade granskningsinstruktionerna",
              ],
            },
            { kind: "h3", text: "4.1.3 Säkerhet hos underbiträden" },
            {
              kind: "ul",
              items: [
                "Inferensmotorn drivs under signerat Business Associate Agreement (BAA) utan att inmatningar används för träning",
                "Samtliga underbiträden upprätthåller motsvarande säkerhetskontroller som beskrivs i detta avsnitt",
              ],
            },
            { kind: "p", text: "4.2 Personuppgiftsbiträdet bekräftar att den stateless arkitekturen utan lagring väsentligt minskar dataskyddsrisken och utgör en central del av denna säkerhetsarkitektur." },
          ],
        },
        {
          heading: "5. Underbehandling",
          blocks: [
            { kind: "p", text: "5.1 Personuppgiftsbiträdet får inte utse eller röja Företagets personuppgifter till något underbiträde annat än om så krävs eller skriftligen godkänts av Företaget." },
            { kind: "h3", text: "5.2 Godkända underbiträden" },
            { kind: "p", text: "Följande underbiträden är förhandsgodkända att behandla Företagets personuppgifter för personuppgiftsbiträdets räkning i samband med Tjänsterna:" },
            {
              kind: "table",
              headers: ["Underbiträde", "Funktion", "Plats", "BAA/DPA", "Datalagring"],
              rows: [
                ["Mistral AI (mistral.ai)", "LLM‑inferens för granskningsanalys", "EU", "Signerat BAA, ingen träningsanvändning", "Ingen (stateless)"],
              ],
            },
            { kind: "h3", text: "5.3 Inga övriga underbiträden" },
            { kind: "p", text: "Personuppgiftsbiträdet anlitar inga andra underbiträden. Det finns inga värdtjänstleverantörer, CDN, analystjänster eller andra tredjepartssystem som mottar Företagets personuppgifter. All behandling sker i personuppgiftsbiträdets kontrollerade miljö." },
            { kind: "h3", text: "5.4 Underrättelse om nya underbiträden" },
            { kind: "p", text: "Personuppgiftsbiträdet får tillsätta nya underbiträden endast med skriftligt förhandsgodkännande från Företaget. Personuppgiftsbiträdet ska underrätta Företaget minst 30 dagar innan ett nytt underbiträde påbörjar behandling av Företagets personuppgifter och därvid ange:" },
            {
              kind: "ul",
              items: [
                "Underbiträdets namn och plats",
                "Beskrivning av behandlingsaktiviteterna",
                "Dataskyddsåtgärder (BAA, DPA eller motsvarande)",
                "Datalagringstid",
              ],
            },
            { kind: "h3", text: "5.5 Invändningsrätt" },
            { kind: "p", text: "Om Företaget invänder mot tillsättningen av ett nytt underbiträde på sakliga dataskyddsskäl får Företaget:" },
            {
              kind: "ul",
              items: [
                "Säga upp berörda Tjänster utan påföljd",
                "Begära ett alternativt underbiträde",
              ],
            },
            { kind: "h3", text: "5.6 Ansvar för underbiträden" },
            { kind: "p", text: "Personuppgiftsbiträdet är fullt ut ansvarigt gentemot Företaget för varje underbiträdes fullgörande av sina skyldigheter enligt detta avtal." },
          ],
        },
        {
          heading: "6. Den registrerades rättigheter",
          blocks: [
            { kind: "p", text: "6.1 Med beaktande av behandlingens karaktär ska personuppgiftsbiträdet bistå Företaget genom lämpliga tekniska och organisatoriska åtgärder, i den utsträckning det är möjligt, för att fullgöra Företagets skyldigheter att besvara begäranden om utövande av den registrerades rättigheter enligt dataskyddslagstiftningen." },
            { kind: "p", text: "6.2 Personuppgiftsbiträdet ska:" },
            {
              kind: "ul",
              items: [
                "6.2.1 utan dröjsmål underrätta Företaget om en begäran från en registrerad enligt dataskyddslagstiftningen avseende Företagets personuppgifter mottas, och",
                "6.2.2 säkerställa att begäran inte besvaras utan Företagets dokumenterade instruktion eller om det krävs enligt tillämplig lag.",
              ],
            },
          ],
        },
        {
          heading: "7. Personuppgiftsincident",
          blocks: [
            { kind: "h3", text: "7.1 Underrättelsetider vid incident" },
            { kind: "p", text: "Personuppgiftsbiträdet ska underrätta Företaget om varje misstänkt eller bekräftad personuppgiftsincident som påverkar Företagets personuppgifter inom 24 timmar från upptäckt och i inget fall senare än vid arbetsdagens slut nästa kalenderdag. Underrättelsen sker via e‑post till Företagets utsedda säkerhetskontakt." },
            { kind: "h3", text: "7.2 Underrättelsens innehåll" },
            { kind: "p", text: "Underrättelsen ska innehålla:" },
            {
              kind: "ul",
              items: [
                "Incidentens art och omfattning",
                "Kategorier av Företagets personuppgifter som påverkats",
                "Sannolika konsekvenser för den eller de registrerade",
                "Vidtagna eller föreslagna åtgärder för att hantera incidenten och mildra skadan",
                "Personuppgiftsbiträdets kontaktpunkt för ytterligare information",
                "Uppskattad tidsplan för slutlig utredningsrapport",
              ],
            },
            { kind: "p", text: "Informationen ska vara tillräcklig för att Företaget ska kunna:" },
            {
              kind: "ul",
              items: [
                "Bedöma risken och avgöra om underrättelse till de registrerade krävs",
                "Underrätta Integritetsskyddsmyndigheten (IMY) inom GDPR:s artikel 33‑frist (72 timmar från upptäckt)",
                "Uppfylla eventuella regulatoriska eller rättsliga rapporteringskrav",
              ],
            },
            { kind: "h3", text: "7.3 Samarbete och åtgärder" },
            { kind: "p", text: "Personuppgiftsbiträdet ska:" },
            {
              kind: "ul",
              items: [
                "Omedelbart avbryta behandlingen tills incidenten är inneslutet",
                "Genomföra en forensisk utredning och lämna detaljerad skriftlig rapport inom 5 arbetsdagar",
                "Vidta korrigerande åtgärder för att förhindra upprepning",
                "Samarbeta fullt ut med Företagets incidenthantering, inklusive tillhandahållande av loggar, forensiska data och vittnesutsagor",
                "Ersätta Företaget för skäliga kostnader för incidentutredning och åtgärder",
                "Bevara dokumentation om incidenten, utredningen och åtgärderna i minst 3 år",
              ],
            },
            { kind: "h3", text: "7.4 Incidentprevention" },
            { kind: "p", text: "Mot bakgrund av den stateless arkitekturen bekräftar Företaget att personuppgiftsbiträdets utgångsläge är noll lagring av Företagets personuppgifter efter slutförd granskning, vilket väsentligt minskar incidentrisken." },
          ],
        },
        {
          heading: "8. Konsekvensbedömning och förhandssamråd",
          blocks: [
            { kind: "p", text: "Personuppgiftsbiträdet ska skäligen bistå Företaget vid konsekvensbedömningar avseende dataskydd och vid förhandssamråd med tillsynsmyndigheter eller andra behöriga dataskyddsmyndigheter som Företaget skäligen anser krävs enligt artikel 35 eller 36 i GDPR, i varje fall endast i förhållande till personuppgiftsbiträdets behandling av Företagets personuppgifter." },
          ],
        },
        {
          heading: "9. Radering eller återlämning av Företagets personuppgifter",
          blocks: [
            { kind: "h3", text: "9.1 Radering vid upphörande av Tjänsterna" },
            { kind: "p", text: "Vid skriftlig uppsägning från Företaget eller vid upphörande av Tjänsterna ska personuppgiftsbiträdet utföra följande raderingsprotokoll:" },
            { kind: "h4", text: "9.1.1 Omedelbara åtgärder (inom 24 timmar)" },
            {
              kind: "ul",
              items: [
                "Upphöra med all behandling av Företagets personuppgifter",
                "Radera samtliga granskningsdata, inmatningar och utdata från aktiva produktionssystem",
                "Återkalla all åtkomst till Företagets personuppgifter för personal hos personuppgiftsbiträdet",
              ],
            },
            { kind: "h4", text: "9.1.2 Rensning av säkerhetskopior och arkiv (inom 10 arbetsdagar)" },
            {
              kind: "ul",
              items: [
                "Rensa samtliga säkerhetskopior som innehåller Företagets personuppgifter från alla system",
                "Radera samtliga arkiverade loggar och granskningsspår som hänvisar till Företagets personuppgifter",
                "Skriftligen intyga slutförandet till Företaget",
              ],
            },
            { kind: "h4", text: "9.1.3 Koordinering med underbiträden (inom 10 arbetsdagar)" },
            {
              kind: "ul",
              items: [
                "Instruera samtliga underbiträden (inklusive Mistral AI) att radera Företagets personuppgifter",
                "Inhämta skriftlig bekräftelse på radering från varje underbiträde",
                "Tillhandahålla bevis på radering till Företaget",
              ],
            },
            { kind: "h3", text: "9.2 Radering på begäran" },
            { kind: "p", text: "Företaget får när som helst under Tjänsternas löptid begära radering av Företagets personuppgifter. Personuppgiftsbiträdet ska iaktta raderingsprotokollet i §9.1 inom 5 arbetsdagar från sådan begäran." },
            { kind: "h3", text: "9.3 Intygande av radering" },
            { kind: "p", text: "Inom 15 arbetsdagar från upphörandedatumet eller Företagets begäran om radering ska personuppgiftsbiträdet tillhandahålla Företaget:" },
            {
              kind: "ul",
              items: [
                "Skriftligt intyg om att samtliga av Företagets personuppgifter har raderats",
                "Förteckning över samtliga system från vilka data har raderats",
                "Bekräftelse på underbiträdes radering",
                "Eventuella undantag (t.ex. dokumenterad lagstadgad bevarandeskyldighet)",
              ],
            },
          ],
        },
        {
          heading: "9A. AI‑behandling och transparens",
          blocks: [
            { kind: "h3", text: "9A.1 Redovisning av AI‑modell" },
            { kind: "p", text: "Personuppgiftsbiträdet använder följande Large Language Model (LLM) för inferens och granskningsanalys:" },
            {
              kind: "ul",
              items: [
                "Modell: Mistral Large (senaste versionen vid granskningstidpunkten)",
                "Leverantör: Mistral AI (mistral.ai)",
                "Jurisdiktion: EU",
                "Syfte: enbart analys av Företagets personuppgifter för compliance‑fynd och granskningsrekommendationer",
              ],
            },
            { kind: "p", text: "Personuppgiftsbiträdet ska underrätta Företaget om varje väsentlig förändring av AI‑modellen (t.ex. modelluppgradering, leverantörsbyte) minst 30 dagar före implementering." },
            { kind: "h3", text: "9A.2 Ingen träningsanvändning" },
            { kind: "p", text: "Personuppgiftsbiträdet garanterar att:" },
            {
              kind: "ul",
              items: [
                "Företagets personuppgifter inte används för att träna, finjustera eller förbättra AI‑modellen",
                "Företagets personuppgifter inte används för modellutvärdering eller benchmarking",
                "Företagets personuppgifter inte aggregeras, avidentifieras eller används för något sekundärt syfte",
                "Samtlig inferens utförs under signerat Business Associate Agreement (BAA) med Mistral AI som uttryckligen förbjuder träningsanvändning",
              ],
            },
            { kind: "h3", text: "9A.3 Mänsklig övervakning" },
            { kind: "p", text: "Personuppgiftsbiträdet upprätthåller följande kontroller för mänsklig övervakning:" },
            {
              kind: "ul",
              items: [
                "Samtliga fynd klassificerade som “KRITISK” granskas av kvalificerad mänsklig revisor före leverans till Företaget",
                "Fynd med hög konfidens (“HÖG”) granskas via automatiserade kvalitetskontroller före leverans",
                "Samtliga granskningsrapporter innehåller metadata som anger vilka fynd som genomgått mänsklig granskning",
                "Företaget får begära mänsklig granskning av varje enskilt fynd",
              ],
            },
            { kind: "h3", text: "9A.4 Utfallets korrekthet och begränsningar" },
            { kind: "p", text: "Personuppgiftsbiträdet bekräftar att AI‑genererade granskningsfynd kan innehålla felaktigheter, falska positiva eller ofullständig analys. Personuppgiftsbiträdet:" },
            {
              kind: "ul",
              items: [
                "Märker samtliga fynd med konfidensnivå (KRITISK, HÖG, MEDEL, LÅG, INFO)",
                "Tillhandahåller källhänvisningar för varje fynd",
                "Lämnar inga garantier om att fynden är 100 % korrekta eller fullständiga",
                "Rekommenderar att Företaget tillämpar oberoende professionell bedömning innan åtgärder vidtas baserat på fynden",
                "Ersätter inte professionell juridisk eller compliance‑rådgivning",
              ],
            },
            { kind: "h3", text: "9A.5 Bias och rättvisa" },
            { kind: "p", text: "Personuppgiftsbiträdet bekräftar att AI‑modellbias kan förekomma och åtar sig att:" },
            {
              kind: "ul",
              items: [
                "Bevaka systematisk bias i granskningsfynd",
                "Redovisa kända bias eller begränsningar på begäran",
                "Beakta synpunkter från Företaget om misstänkt bias och inarbeta dessa i uppföljningen av modellprestanda",
                "Föra logg över samtliga bias‑rapporter och åtgärder",
              ],
            },
            { kind: "h3", text: "9A.6 Transparens och dokumentation" },
            { kind: "p", text: "På begäran ska personuppgiftsbiträdet tillhandahålla Företaget:" },
            {
              kind: "ul",
              items: [
                "Dokumentation om Mistral Large‑modellens träningsdata, arkitektur och kända begränsningar",
                "Kopia av signerat BAA med Mistral AI som bekräftar att ingen träningsanvändning sker",
                "Granskningsloggar som visar vilka specifika personuppgifter som behandlats och när",
                "Förklaring av hur enskilda fynd härletts",
              ],
            },
            { kind: "h3", text: "9A.7 Anpassning till IMY:s vägledning" },
            { kind: "p", text: "Personuppgiftsbiträdet bekräftar att dess användning av AI överensstämmer med Integritetsskyddsmyndighetens (IMY) vägledning om AI och GDPR, inklusive:" },
            {
              kind: "ul",
              items: [
                "Transparens om AI‑användning vid behandling av personuppgifter",
                "Mänsklig övervakning av väsentliga beslut",
                "Dokumenterade riskbedömningar och åtgärder",
                "Regelbundna granskningar av AI‑systemets prestanda och rättvisa",
              ],
            },
            { kind: "p", text: "Personuppgiftsbiträdet upprätthåller dokumentation som visar efterlevnad av dessa principer och tillhandahåller sådan dokumentation till Företaget eller IMY på begäran." },
          ],
        },
        {
          heading: "10. Granskningsrätt",
          blocks: [
            { kind: "p", text: "10.1 Personuppgiftsbiträdet ska på begäran tillhandahålla Företaget all information som krävs för att visa efterlevnad av detta avtal samt möjliggöra och medverka vid granskningar, inklusive inspektioner, som Företaget eller av Företaget uppdragen revisor utför." },
            { kind: "p", text: "10.2 Företagets informations‑ och granskningsrätt uppkommer endast i den utsträckning detta avtal inte i övrigt ger Företaget motsvarande rättigheter som uppfyller dataskyddslagstiftningens krav." },
          ],
        },
        {
          heading: "11. Dataöverföring",
          blocks: [
            { kind: "p", text: "11.1 Personuppgiftsbiträdet får inte överföra eller tillåta överföring av data till länder utanför EU och/eller Europeiska ekonomiska samarbetsområdet (EES) utan Företagets skriftliga förhandsgodkännande." },
            { kind: "p", text: "11.2 All behandling sker inom Europeiska ekonomiska samarbetsområdet (EES). Mistral AI utför inferens inom EU." },
            { kind: "p", text: "11.3 Om framtida dataöverföring sker utanför EES ska EU:s standardavtalsklausuler (SCC) tillämpas enligt artikel 46 i GDPR." },
          ],
        },
        {
          heading: "12. Allmänna villkor",
          blocks: [
            { kind: "p", text: "12.1 Sekretess. Vardera parten ska hålla detta avtal samt information om den andra parten och dess verksamhet som mottas i samband med detta avtal (“Konfidentiell information”) konfidentiell och får inte använda eller röja sådan konfidentiell information utan den andra partens skriftliga förhandsgodkännande, utom i den utsträckning:" },
            {
              kind: "ul",
              items: [
                "(a) röjandet krävs enligt lag",
                "(b) den aktuella informationen redan är allmänt tillgänglig",
              ],
            },
            { kind: "p", text: "12.2 Underrättelser. Samtliga underrättelser och meddelanden enligt detta avtal ska ske skriftligen och tillhandahållas personligen, per post eller via e‑post till den adress eller e‑postadress som anges i avtalets ingress." },
          ],
        },
        {
          heading: "13. Tillämplig lag och jurisdiktion",
          blocks: [
            { kind: "p", text: "13.1 Detta avtal regleras av svensk rätt." },
            { kind: "p", text: "13.2 Eventuella tvister med anledning av detta avtal som parterna inte kan lösa i godo ska avgöras av svensk allmän domstol, med möjlighet till överklagande till Högsta domstolen i Stockholm." },
          ],
        },
      ],
      annexHeading: "Bilaga 1 — Tekniska specifikationer och underbiträden",
      annexParts: [
        {
          heading: "Del A: Behandlingsdetaljer",
          blocks: [
            {
              kind: "table",
              headers: ["Element", "Specifikation"],
              rows: [
                ["Definierat syfte", "Compliance‑dokumentation och administrativ workflow‑revision"],
                ["Typ av behandling", "Automatiserad analys av administrativa dokument, policyer, rutiner och processflöden"],
                ["Datas omfattning", "Endast administrativa uppgifter; inga patientuppgifter (PHI), inga uppgifter för medicinskt beslutsfattande"],
                ["Kategorier av registrerade", "Vårdadministratörer, kvalitetsansvariga, compliance‑ansvariga, driftspersonal (ej patienter)"],
                ["Behandlingens varaktighet", "I realtid; inmatningar bearbetas och raderas omedelbart efter slutförd granskning (vanligtvis <2 minuter)"],
                ["Datalagring", "Ingen; stateless arkitektur innebär att inga data lagras efter granskning"],
                ["Frekvens", "På begäran enligt Företagets instruktioner; ingen bakgrunds‑ eller kontinuerlig behandling"],
              ],
            },
          ],
        },
        {
          heading: "Del B: Säkerhets‑ och dataskyddsåtgärder",
          blocks: [
            {
              kind: "table",
              headers: ["Åtgärd", "Detaljer"],
              rows: [
                ["Kryptering under överföring", "TLS 1.2 eller senare på samtliga endpoints; HSTS tillämpas"],
                ["Kryptering vid lagring", "Ej tillämpligt — inga data lagras vid vila; enbart stateless behandling"],
                ["Datalagring", "Inmatningar lagras endast i minnet under behandling; raderas vid slutförande"],
                ["Åtkomstkontroll", "Minsta privilegium‑åtkomst; tystnadsplikt för personal"],
                ["Granskningsloggning", "Samtliga behandlingsaktiviteter loggas för efterlevnadsverifiering"],
                ["Säkerhet hos underbiträden", "Samtliga underbiträden upprätthåller motsvarande eller högre säkerhetskontroller"],
                ["Säkerhetskopior och katastrofåterställning", "Inga säkerhetskopior av Företagets personuppgifter bevaras; granskningsutdata (om Företaget lagrar dem) är Företagets ansvar"],
                ["Incidenthantering", "24‑timmars underrättelse vid incident; forensisk utredning inom 5 arbetsdagar"],
              ],
            },
          ],
        },
        {
          heading: "Del C: Godkända underbiträden",
          blocks: [
            {
              kind: "table",
              headers: ["Underbiträde", "Funktion", "Plats", "Dataskydd", "Åtagande om ingen träningsanvändning"],
              rows: [
                ["Mistral AI (mistral.ai)", "LLM‑inferens för granskningsanalys", "EU", "GDPR + AI‑skyddsåtgärder (§9A)", "Ja — signerat BAA"],
              ],
            },
            { kind: "note", text: "Notera: personuppgiftsbiträdet anlitar inga andra underbiträden. Det finns inga värdtjänstleverantörer, CDN, analystjänster eller andra tredjepartssystem som mottar Företagets personuppgifter." },
          ],
        },
        {
          heading: "Del D: Begränsningar vid dataöverföring",
          blocks: [
            {
              kind: "table",
              headers: ["Aspekt", "Åtagande"],
              rows: [
                ["Geografisk omfattning", "All behandling sker inom Europeiska ekonomiska samarbetsområdet (EES)"],
                ["Underbiträdets plats", "Mistral AI utför inferens inom EU; ingen dataöverföring utanför EES"],
                ["Standardklausuler", "Om framtida dataöverföring sker utanför EES ska EU:s standardavtalsklausuler (SCC) tillämpas enligt artikel 46 i GDPR"],
                ["Företagets samtycke", "Företagets skriftliga samtycke krävs före varje överföring utanför EES (§11)"],
              ],
            },
          ],
        },
        {
          heading: "Del E: Lagrings‑ och raderingsschema",
          blocks: [
            {
              kind: "table",
              headers: ["Fas", "Tidsram", "Åtgärd"],
              rows: [
                ["Aktiv behandling", "<2 minuter vanligen", "Inmatningar i minnet; granskningsanalys utförs"],
                ["Granskning slutförd", "Vid körningens slut", "Inmatningar raderas från minnet; granskningsrapport genereras"],
                ["Granskningsrapport", "Enligt Företagets begäran", "Granskningsrapporten finns endast under Företagets kontroll (ej hos personuppgiftsbiträdet)"],
                ["Tjänsterna upphör", "Inom 24 timmar", "Samtliga aktiva system rensas"],
                ["Rensning av säkerhetskopior", "Inom 10 arbetsdagar", "Samtliga säkerhetskopior raderas"],
                ["Radering hos underbiträde", "Inom 10 arbetsdagar", "Bekräftelse inhämtas från Mistral AI"],
              ],
            },
          ],
        },
        {
          heading: "Del F: Företagets ansvar",
          blocks: [
            {
              kind: "table",
              headers: ["Ansvar", "Detaljer"],
              rows: [
                ["Underrättelse till registrerade", "Företaget ansvarar för att underrätta registrerade vid varje incident (personuppgiftsbiträdet bistår enligt §7)"],
                ["Laglig grund", "Företaget garanterar att laglig grund enligt artikel 6 och/eller 9 i GDPR föreligger för att tillhandahålla data till personuppgiftsbiträdet"],
                ["Förhandssamtycke", "Företaget garanterar att nödvändigt samtycke har inhämtats från registrerade eller att behandlingen i övrigt är laglig"],
                ["Lagring av granskningsrapporter", "Företaget ansvarar för säker hantering av granskningsrapporter efter export; personuppgiftsbiträdets stateless arkitektur lagrar inga kopior"],
                ["Policyefterlevnad", "Företaget garanterar att användningen av MediReadys Tjänster överensstämmer med Företagets egna dataskyddspolicyer och information"],
              ],
            },
          ],
        },
        {
          heading: "Del G: Kontaktuppgifter för dataskyddsfrågor",
          blocks: [
            {
              kind: "table",
              headers: ["Roll", "Kontakt", "Tillgänglighet"],
              rows: [
                ["Personuppgiftsbiträdets dataskyddskontakt", "[DPO‑NAMN] / [E‑POSTADRESS]", "[SVARSTID, t.ex. “Inom 2 arbetsdagar”]"],
                ["Säkerhetsincidentanmälan", "[SÄKERHETS‑E‑POST]", "Dygnet runt för incidentanmälningar"],
              ],
            },
          ],
        },
      ],
      endOfAgreement: "Avtalets slut",
    },
    classificationPage: {
      kicker: "KLASSIFICERING OCH BEREDSKAP",
      title: "MediReady — Klassificerings‑ och beredskapsdokument för den svenska marknaden",
      verdict: "Bedömning: ej medicinteknisk programvara (MDSW) och ej nationellt medicinskt informationssystem (NMI). Fullt anpassad till svenska regulatoriska förväntningar på administrativa compliance‑verktyg.",
      metaVersion: "Version",
      metaVersionValue: "2.0",
      metaDate: "Datum",
      metaDateValue: "2026‑05‑24",
      metaPreparedBy: "Upprättad av",
      metaPreparedByValue: "MediReady AB",
      tocHeading: "Innehållsförteckning",
      sections: [
        {
          heading: "1. Syfte",
          blocks: [
            { kind: "p", text: "Detta dokument fastställer MediReadys formella klassificering och regulatoriska beredskap för den svenska marknaden i förhållande till:" },
            {
              kind: "ul",
              items: [
                "EU:s förordning (EU) 2017/745 (MDR) — medicintekniska produkter och medicinteknisk programvara (MDSW)",
                "HSLF‑FS 2022:42 — nationella medicinska informationssystem (NMI)",
                "GDPR (EU 2016/679) — dataskyddsramverk",
                "Patientdatalagen (2008:355) — svensk lag om patientdata",
                "IMY:s tillsynsprioriteringar — vägledning från Integritetsskyddsmyndigheten",
                "NIS2‑direktivet (2022/2555) — cybersäkerhet för kritisk infrastruktur",
                "EHDS‑förordningen (2023/2664) — Europeiska hälsodataområdet (framtida bevakning)",
              ],
            },
            { kind: "p", text: "Dokumentet beskriver MediReadys avsedda användning, funktionella begränsningar och regulatoriska avgränsningar som grund för bedömningen att produkten inte omfattas av MDR och inte omfattas av NMI‑regelverket, samtidigt som den fullt ut motsvarar svenska förväntningar på dataskydd." },
          ],
        },
        {
          heading: "2. Produktbeskrivning",
          blocks: [
            { kind: "p", text: "MediReady är ett administrativt verktyg för compliance‑dokumentation och workflow‑revision. Systemet används av administratörer, kvalitetsansvariga och verksamhetschefer för att:" },
            {
              kind: "ul",
              items: [
                "generera policyer, SOP:er och riskbedömningar",
                "genomföra administrativa gap‑analyser",
                "kartlägga standarder (HIPAA, ISO, NIST m.fl.)",
                "utföra icke‑kliniska workflow‑revisioner",
                "skapa rapporter för intern styrning och efterlevnad",
              ],
            },
            { kind: "p", text: "MediReady bearbetar inte medicinska beslut, påverkar inte patientvård och ger inga rekommendationer om diagnos, behandling eller kliniska åtgärder." },
          ],
        },
        {
          heading: "3. Avsedd användning",
          blocks: [
            { kind: "p", text: "MediReady är avsett för:" },
            {
              kind: "ul",
              items: [
                "administrativ dokumentation",
                "compliance‑arbete",
                "intern revision av arbetsflöden",
                "policy‑ och styrdokumentshantering",
                "icke‑kliniska riskbedömningar",
              ],
            },
            { kind: "p", text: "MediReady är inte avsett att:" },
            {
              kind: "ul",
              items: [
                "användas för diagnos, behandling, monitorering eller lindring av sjukdom",
                "användas för kliniska beslut eller patientnära bedömningar",
                "hantera journaluppgifter eller medicinska parametrar",
                "ge rekommendationer som påverkar patienters vård eller behandling",
                "uppdatera eller läsa myndighetsregister inom hälso‑ och sjukvård",
              ],
            },
          ],
        },
        {
          heading: "4. Bedömning enligt MDR (EU 2017/745)",
          blocks: [
            { kind: "h3", text: "4.1 Relevanta kriterier" },
            { kind: "p", text: "Enligt MDR klassas programvara som medicinteknisk produkt om den har ett medicinskt syfte, exempelvis att:" },
            { kind: "ul", items: ["diagnostisera", "förebygga", "övervaka", "behandla", "lindra sjukdom"] },
            { kind: "h3", text: "4.2 Bedömning" },
            { kind: "p", text: "MediReady uppfyller inga av MDR:s medicinska syften. Systemet:" },
            {
              kind: "ul",
              items: [
                "analyserar inte patientdata",
                "påverkar inte kliniska beslut",
                "genererar inte medicinska rekommendationer",
                "används inte av vårdpersonal i patientnära arbete",
                "hanterar endast administrativ information",
              ],
            },
            { kind: "note", text: "“Software for administrative purposes is not covered.” — MDR‑tolkning enligt EU:s vägledningar" },
            { kind: "h3", text: "4.3 Slutsats" },
            { kind: "p", text: "MediReady är inte en medicinteknisk produkt och omfattas inte av MDR." },
          ],
        },
        {
          heading: "5. Bedömning enligt HSLF‑FS 2022:42 (Nationella medicinska informationssystem)",
          blocks: [
            { kind: "h3", text: "5.1 Relevanta kriterier" },
            { kind: "p", text: "NMI omfattar system som:" },
            {
              kind: "ul",
              items: [
                "hanterar medicinsk information av betydelse för enskilda patienters vård, eller",
                "ger direkt åtkomst till eller uppdaterar myndighetsregister, eller",
                "används för expediering av recept på apotek",
              ],
            },
            { kind: "h3", text: "5.2 Undantag i föreskriften" },
            { kind: "p", text: "HSLF‑FS 2022:42 anger att följande inte är NMI:" },
            { kind: "note", text: "“Generell programvara som används i vårdmiljö, utom i fall då denna anpassats på sätt som uppfyller definitionen för nationella medicinska informationssystem.”" },
            { kind: "h3", text: "5.3 Bedömning" },
            { kind: "p", text: "MediReady:" },
            {
              kind: "ul",
              items: [
                "hanterar inte medicinsk information",
                "påverkar inte patienters vård",
                "har ingen koppling till myndighetsregister",
                "används inte för recept eller expediering",
                "är inte anpassat för kliniska beslut",
                "är inte ett system av betydelse för enskilda patienters vård",
              ],
            },
            { kind: "h3", text: "5.4 Slutsats" },
            { kind: "p", text: "MediReady uppfyller inte definitionen av NMI och omfattas inte av HSLF‑FS 2022:42." },
          ],
        },
        {
          heading: "6. Svensk regulatorisk kontext",
          blocks: [
            { kind: "p", text: "MediReady är verksamt i Sverige under följande regulatoriska ramverk:" },
            {
              kind: "table",
              headers: ["Regelverk", "Referens", "Relevans"],
              rows: [
                ["GDPR", "EU 2016/679", "Dataskyddsramverk"],
                ["Patientdatalagen", "2008:355", "Svensk lag om patientdata"],
                ["HSLF‑FS 2022:42", "Socialstyrelsen", "Föreskrift om nationella medicinska informationssystem (NMI)"],
                ["MDR", "EU 2017/745", "EU:s förordning om medicintekniska produkter (gäller i Sverige)"],
                ["IMY:s tillsynspraxis", "Integritetsskyddsmyndigheten", "Vägledning från svenska dataskyddsmyndigheten om AI, vård och känsliga uppgifter"],
              ],
            },
            { kind: "p", text: "Avgörande klassificeringsfråga för svenska vårdgivare: Är MediReady en medicinteknisk produkt (MDSW) eller ett nationellt medicinskt informationssystem (NMI)?" },
            { kind: "p", text: "Svaret är nej på båda. MediReady omfattas av GDPR men inte av regelverk specifika för medicintekniska produkter eller NMI." },
          ],
        },
        {
          heading: "7. Dataskydd och GDPR",
          blocks: [
            { kind: "p", text: "Även om MediReady inte är MDSW eller NMI omfattas systemet av GDPR." },
            {
              kind: "table",
              headers: ["Aspekt", "MediReadys åtagande"],
              rows: [
                ["Databearbetning", "Inmatningar bearbetas flyktigt i minnet och raderas omedelbart"],
                ["Datalagring", "Ingen PHI lagras; stateless arkitektur"],
                ["Insamling", "Ingen bakgrundsinsamling, telemetri eller profilering"],
                ["Personuppgiftsansvarig", "Vårdgivaren är personuppgiftsansvarig"],
                ["Personuppgiftsbiträde", "MediReady är personuppgiftsbiträde"],
                ["Avtal", "Personuppgiftsbiträdesavtal enligt artikel 28 krävs (tillhandahålls separat)"],
              ],
            },
          ],
        },
        {
          heading: "8. Anpassning till Integritetsskyddsmyndigheten (IMY)",
          blocks: [
            { kind: "p", text: "IMY (Integritetsskyddsmyndigheten) har publicerat tillsynsprioriteringar för 2024–2025 som omfattar:" },
            {
              kind: "ul",
              items: [
                "AI‑användning inom vård och behandling av känsliga uppgifter",
                "Vårdsektorns dataskyddspraxis",
                "Transparens och mänsklig övervakning vid automatiserat beslutsfattande",
              ],
            },
            { kind: "p", text: "MediReadys utformning är anpassad till IMY:s prioriteringar enligt följande:" },
            { kind: "h3", text: "8.1 AI‑transparens" },
            {
              kind: "table",
              headers: ["Krav", "MediReadys åtagande"],
              rows: [
                ["Redovisning av modell", "Mistral Large LLM med signerat BAA (ingen träningsanvändning)"],
                ["Mänsklig övervakning", "Kritiska fynd granskas av kvalificerade revisorer"],
                ["Radering av inmatning", "Stateless bearbetning eliminerar risk för datalagring"],
              ],
            },
            { kind: "h3", text: "8.2 Minimering av känsliga uppgifter" },
            {
              kind: "table",
              headers: ["Aspekt", "MediReadys position"],
              rows: [
                ["Datatyp", "Endast administrativa uppgifter, inga patientjournaler eller PHI"],
                ["GDPR artikel 9", "Ingen kategorisering som särskilda kategorier vid normal användning"],
                ["Tillfälligt känsliga uppgifter", "Stateless arkitektur och omedelbar radering minskar risken"],
              ],
            },
            { kind: "h3", text: "8.3 Den registrerades rättigheter" },
            { kind: "p", text: "MediReady bistår Företaget vid hantering av begäran om registerutdrag (DSAR) och övriga rättigheter enligt GDPR artiklarna 12–22 (se §6 i personuppgiftsbiträdesavtalet)." },
            { kind: "h3", text: "8.4 Ansvarsskyldighetsdokumentation" },
            { kind: "p", text: "MediReady upprätthåller:" },
            {
              kind: "ul",
              items: [
                "Granskningsloggar",
                "Incidentregister",
                "Behandlingsdokumentation enligt GDPR artikel 5(2)",
              ],
            },
            { kind: "p", text: "Dokumentation tillgängliggörs för IMY vid begäran om inspektion." },
            { kind: "h3", text: "8.5 Åtagande gentemot svensk rätt" },
            {
              kind: "table",
              headers: ["Element", "Åtagande"],
              rows: [
                ["Tillämplig lag", "Samtliga tvister och juridiska frågor regleras av svensk rätt"],
                ["DPA‑jurisdiktion", "Svensk tillämplig lag och jurisdiktion"],
              ],
            },
          ],
        },
        {
          heading: "9. NIS2‑direktivet — omfattning och tillämplighet",
          blocks: [
            { kind: "p", text: "EU:s NIS2‑direktiv (2022/2555) anger cybersäkerhetsskyldigheter för operatörer av kritisk infrastruktur och leverantörer av samhällsviktiga tjänster." },
            { kind: "h3", text: "9.1 När NIS2 gäller" },
            { kind: "p", text: "NIS2 gäller om företaget:" },
            {
              kind: "ul",
              items: [
                "har ≥ 50 anställda, eller",
                "omsätter ≥ 10 miljoner euro per år, eller",
                "klassas som “väsentlig” aktör inom vården (t.ex. driver ett EHR‑system eller nationell hälsodataplattform)",
              ],
            },
            { kind: "h3", text: "9.2 MediReadys position" },
            {
              kind: "table",
              headers: ["Fråga", "Svar"],
              rows: [
                ["Omfattas MediReady automatiskt av NIS2?", "Nej"],
                ["Varför?", "Inte ett EHR‑system; upprätthåller inte nationell hälsodatainfrastruktur; tillhandahåller inte vårdtjänster direkt"],
              ],
            },
            { kind: "h3", text: "9.3 Viktigt för svenska vårdgivare" },
            { kind: "p", text: "Om MediReady används av en svensk vårdgivare (t.ex. region, klinik, sjukhus) som själv är en väsentlig aktör enligt NIS2 kan vårdgivarens NIS2‑skyldigheter omfatta utvärdering av MediReadys säkerhetsläge som del av leverantörskedjans riskhantering." },
            { kind: "h3", text: "9.4 MediReadys NIS2‑åtaganden" },
            {
              kind: "table",
              headers: ["Krav", "MediReadys åtagande"],
              rows: [
                ["Säkerhetsåtgärder", "Följer NIST Cybersecurity Framework (CSF)‑principerna"],
                ["Incidentrapportering", "Följer NIS2:s rapporteringstider (72 timmars incidentanmälan)"],
                ["Dokumentation", "Tillgänglig på begäran för vårdgivares NIS2‑efterlevnadsbedömning"],
              ],
            },
          ],
        },
        {
          heading: "10. Europeiska hälsodataområdet (EHDS) — framtida bevakning",
          blocks: [
            { kind: "p", text: "EHDS‑förordningen (2023/2664) är under genomförande." },
            { kind: "h3", text: "10.1 Vad EHDS reglerar" },
            {
              kind: "ul",
              items: [
                "Sekundär användning av hälsodata för forskning och policy",
                "Interoperabilitet för elektroniska patientjournaler",
                "Rätt till dataportabilitet inom vården",
              ],
            },
            { kind: "h3", text: "10.2 MediReadys position" },
            {
              kind: "table",
              headers: ["Fråga", "Svar"],
              rows: [
                ["Är EHDS för närvarande tillämpligt för MediReady?", "Nej"],
                ["Varför?", "Gäller EHR‑system och nationell datadelningsinfrastruktur, inte verktyg för compliance‑granskning"],
              ],
            },
            { kind: "h3", text: "10.3 Bevakningsåtagande" },
            { kind: "p", text: "MediReady:" },
            {
              kind: "ul",
              items: [
                "Bevakar EHDS‑genomförandets faser",
                "Kommer att bedöma omfattningen om EHDS interoperabilitetskrav utvecklas till att omfatta compliance‑granskningsverktyg",
                "Kommer att implementera enligt krav",
              ],
            },
            { kind: "h3", text: "10.4 Tidsplan för EHDS‑genomförande" },
            {
              kind: "table",
              headers: ["Fas", "Tidsram", "Primärt fokus"],
              rows: [
                ["Fas 1", "2025–2026", "EHR‑interoperabilitet"],
                ["Fas 2", "2027+", "Sekundär användning och ramverk för datadelning"],
              ],
            },
            { kind: "p", text: "MediReadys utvärderingstidsplan: Q1–Q2 2026" },
          ],
        },
        {
          heading: "11. Dataresidens och geografisk bearbetning",
          blocks: [
            { kind: "h3", text: "MediReadys garanti" },
            {
              kind: "table",
              headers: ["Åtagande", "Detalj"],
              rows: [
                ["Bearbetningsplats", "All bearbetning av Företagets personuppgifter sker inom Europeiska ekonomiska samarbetsområdet (EES)"],
                ["Inferensplats", "Mistral AI utförs inom EU‑datacenter"],
                ["Överföring utanför EES", "Ingen dataöverföring utanför EES utan Företagets uttryckliga skriftliga samtycke"],
                ["Begränsade jurisdiktioner", "Inga data överförs till USA, Asien eller annan jurisdiktion utanför EES"],
              ],
            },
            { kind: "p", text: "Åtagandet omfattar samtliga av Företagets personuppgifter, inklusive administrativa register, policyer och workflow‑dokumentation som tillhandahålls MediReady." },
          ],
        },
        {
          heading: "12. Samlad slutsats",
          blocks: [
            { kind: "p", text: "Baserat på avsedd användning, funktionalitet och regulatoriska kriterier bedöms MediReady enligt följande:" },
            {
              kind: "table",
              headers: ["Regulatoriskt område", "Status"],
              rows: [
                ["Medicinteknisk produkt (MDSW) enligt MDR (EU 2017/745)", "✓ Inte en medicinteknisk produkt"],
                ["Nationellt medicinskt informationssystem (NMI) enligt HSLF‑FS 2022:42", "✓ Inte ett NMI"],
                ["Automatisk omfattning under NIS2‑direktivet", "✓ Inte automatiskt omfattat"],
                ["EHDS nuvarande omfattning", "✓ Inte inom nuvarande omfattning"],
                ["GDPR och svensk dataskyddsrätt", "✓ Omfattas"],
                ["Patientdatalagen (2008:355)", "✓ Anpassad till"],
                ["IMY som tillsynsmyndighet", "✓ Omfattas"],
                ["Svenska dataskyddsförväntningar på programvara för vård", "✓ Anpassad till"],
              ],
            },
            { kind: "h3", text: "För svenska vårdgivare" },
            { kind: "p", text: "Ni kan använda MediReady som administrativt compliance‑ och workflow‑verktyg. Ni måste:" },
            {
              kind: "ul",
              items: [
                "Teckna ett GDPR‑kompatibelt personuppgiftsbiträdesavtal (tillhandahålls separat)",
                "Bedöma MediReadys säkerhetsläge som del av er egen riskhantering (dokumentation tillgänglig)",
                "Tillämpa oberoende professionell bedömning när MediReadys fynd används",
              ],
            },
            { kind: "p", text: "Verktyget ersätter inte juridisk eller klinisk rådgivning." },
          ],
        },
      ],
      endLabel: "Dokumentets slut",
    },
    regulatoryPage: {
      kicker: "REGULATORISK POSITIONERING",
      title: "Compliance Documentation & Workflow Audit Tool",
      subtitle: "Regulatorisk svensk version för offentlig publicering",
      leadHeading: "MediReady är ett administrativt verktyg för compliance‑dokumentation och workflow‑revision",
      leadPara1: "MediReady är inte ett kliniskt beslutsstöd, inte ett medicintekniskt system och inte ett verktyg för diagnos, behandling eller patientnära beslut. Plattformen är utformad för administratörer, kvalitetsansvariga och verksamhetschefer som behöver strukturera, dokumentera och granska interna arbetsflöden, policyer och efterlevnad.",
      leadPara2: "Systemet hanterar endast administrativ information och bearbetar inte medicinska beslut, kliniska parametrar eller patientjournaler.",
      intendedUseHeading: "Avgränsad och tydlig avsedd användning",
      intendedUseIntro: "MediReady är avsett för:",
      intendedUseItems: [
        { label: "Compliance‑dokumentation", sub: "Policyer, SOP:er, riskbedömningar, gap‑analyser, standardkartläggning." },
        { label: "Workflow‑revisioner", sub: "Administrativa processer, interna rutiner, informationsflöden." },
        { label: "Interna kontroller och kvalitetsarbete", sub: "Icke‑kliniska granskningsmoment, administrativa risker, organisatoriska brister." },
        { label: "Administrativ rapportering", sub: "Icke‑patientnära sammanställningar, interna förbättringsplaner." },
      ],
      intendedUseOutro: "MediReady påverkar inte medicinska beslut, bearbetar inte kliniska data och ger inte rekommendationer om diagnos, behandling eller vård.",
      classificationHeading: "Regulatorisk klassificering — varför MediReady inte är MDSW eller NMI",
      mdrHeading: "1. Ej medicinteknisk programvara (MDR 2017/745)",
      mdrBody1: "EU:s MDR gäller endast om programvaran har ett medicinskt syfte, t.ex. diagnos, behandling, monitorering eller lindring av sjukdom. MediReady uppfyller inte dessa kriterier.",
      mdrQuote: "“Software for administrative purposes is not covered.”",
      mdrQuoteAttribution: "— ur MDR:s administrativa undantag",
      mdrConclusion: "MediReady är ett administrativt compliance‑verktyg, inte ett kliniskt system.",
      nmiHeading: "2. Ej nationellt medicinskt informationssystem (NMI) enligt HSLF‑FS 2022:42",
      nmiIntro: "NMI omfattar system som:",
      nmiCriteria: [
        "hanterar medicinsk information av betydelse för enskilda patienters vård, eller",
        "ger direkt åtkomst till eller uppdaterar myndighetsregister.",
      ],
      nmiSupportLead: "Stöd i föreskriften:",
      nmiSupportBody: "NMI gäller inte generell programvara som används i vårdmiljö om den inte anpassats för medicinskt syfte.",
      nmiConclusion: "MediReady hanterar inte medicinsk information, inte patientdata och inte registeråtkomst.",
      gdprHeading: "GDPR — dataskyddsarkitektur och ansvar",
      gdprIntro: "MediReady är byggt för att minimera dataskyddsrisker och följa IMY:s prioriteringar.",
      gdprBlocks: [
        {
          heading: "Stateless bearbetning",
          body: (
            <>
              Inmatningar bearbetas i minnet och raderas direkt efter körning. Ingen PHI lagras. Ingen bakgrundsinsamling, ingen telemetri, ingen profilering.
            </>
          ),
        },
        {
          heading: "Rollfördelning",
          body: (
            <>
              Vårdgivaren är personuppgiftsansvarig. MediReady är personuppgiftsbiträde. Ett GDPR‑kompatibelt biträdesavtal (DPA) krävs enligt Artikel 28.
            </>
          ),
        },
        {
          heading: "IMY:s tillsynslogik",
          body: (
            <>
              IMY prioriterar bl.a. AI‑användning, barn och unga, känsliga uppgifter samt vård och omsorg. MediReady hanterar inte känsliga personuppgifter, vilket minskar tillsynsrisken.
            </>
          ),
        },
      ],
      nis2Heading: "NIS2 — gäller endast vid viss bolagsstorlek",
      nis2Intro: "NIS2 gäller om företaget:",
      nis2Criteria: [
        "har ≥ 50 anställda, eller",
        "omsätter ≥ 10 miljoner euro, eller",
        "klassas som “väsentlig” aktör inom hälso‑ och sjukvård.",
      ],
      nis2Conclusion: "MediReady är inte ett EHR‑system och omfattas inte automatiskt. Bedömning görs utifrån bolagsstorlek, inte produktens funktion.",
      ehdsHeading: "EHDS — framtida interoperabilitetskrav",
      ehdsBody: "EHDS riktar sig primärt mot EHR‑system och nationella hälsodataflöden. MediReady är ett administrativt verktyg och omfattas inte, men utvecklingen följs.",
      actionsHeading: "Rekommenderade åtgärder",
      actionsItems: [
        {
          heading: "1. Förfina marknadsföringen",
          body: (
            <>
              Undvik termer som antyder klinisk funktion. Använd: <em>compliance documentation tool</em>, <em>workflow audit tool</em>, <em>administrativ granskningsmotor</em>.
            </>
          ),
        },
        {
          heading: "2. Dokumentera klassificeringen",
          body: (
            <>
              Skapa ett internt dokument som visar varför MediReady inte är MDSW eller NMI. Hänvisa till MDR:s administrativa undantag och HSLF‑FS 2022:42:s definitioner.
            </>
          ),
        },
        {
          heading: "3. Stärk dataskyddsarkitekturen",
          body: (
            <>
              Lyft fram stateless‑designen i DPA och säkerhetsdokumentation. Beskriv att ingen PHI lagras eller behandlas.
            </>
          ),
        },
        {
          heading: "4. Juridisk granskning innan lansering",
          body: (
            <>
              Rekommenderas av regulatoriska skäl. Fokus: marknadsföring, avsedd användning, DPA, riskanalys.
            </>
          ),
        },
      ],
      summaryHeading: "Sammanfattning",
      summaryBody: "MediReady är ett administrativt verktyg för compliance‑dokumentation och workflow‑revision, inte ett medicinskt system. Det faller utanför MDR, utanför NMI, och hanterar inte PHI. GDPR följs genom stateless‑bearbetning och tydlig rollfördelning. NIS2 och EHDS kan bli relevanta beroende på bolagsstorlek och framtida interoperabilitetskrav.",
    },
    productPage: {
      kicker: "PRODUKT",
      title: "Produkt",
      auditsHeading: "MediReady Audits",
      auditsBody:
        "Sexkanaliga vårdgranskningar som identifierar de brister som betalare, revisorer och tillsynsmyndigheter upptäcker först.",
      auditsList: [
        "Ersättnings- och kravhantering",
        "HIPAA och informationssäkerhet",
        "Dokumentationskvalitet",
        "Patientkommunikation",
        "Kliniskt innehåll",
        "Syntetiskt granskarbeteende",
      ],
      auditsOutputs:
        "Utdata inkluderar total- och kanalspecifika poäng, fynd med allvarlighetsgrad, nödvändiga åtgärder samt export i PDF/JSON.",
      auditsCta: "Kör en kostnadsfri granskning",
      suiteHeading: "MediReady Suite",
      suiteBody:
        "Compliance‑dokument genererade på minuter. Inga mallar. Ingen manuell formatering.",
      suiteList: [
        "Granskningsplaner",
        "Standardkartläggning",
        "Dokumentationsgap",
        "HIPAA‑riskbedömning",
        "Policy- och rutinframtagning",
      ],
      suiteCta: "Öppna suiten",
      monitoringHeading: "Övervakning",
      monitoringBody: "Veckovisa automatiserade granskningar med trendanalys och historiska jämförelser.",
      monitoringCta: "Gå med i väntelistan",
    },
    statusPage: {
      kicker: "STATUS",
      title: "Status",
      allOperational: "Alla system i drift",
      operationalSuffix: "I drift",
      systems: {
        auditEngine: "Granskningsmotor",
        complianceSuite: "Compliance‑suite",
        monitoring: "Övervakning",
        fileUploads: "Filuppladdningar",
        exports: "Exporter",
      },
      maintenanceHeading: "Planerat underhåll",
      maintenanceBody: "Inget planerat underhåll för närvarande.",
    },
    waitlistPage: {
      kicker: "VÄNTELISTA",
      title: "Be first when monitoring launches.",
      body:
        "Kontinuerlig övervakning, veckovisa körningar och trendanalys för samtliga sex granskningskanaler. Lämna din e‑postadress — vi meddelar när funktionen är tillgänglig.",
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
      openSuiteCta: "Öppna suiten",
    },
    scanPage: {
      sampleInputs: [
        "Patient utvärderad för typ 2‑diabetes den 2026‑06‑01. ICD‑10 E11.9 registrerad. CPT 99214 korrekt. Modifier 25 tillämpad. NPI angiven, POS 11 inskriven.",
        "Webbplatsen använder HTTPS med HSTS, CSP och säkra cookies. Ingen PHI i URL:er. Samtyckesbanner laddas före analysverktyg.",
        "Claim inskickad med payer‑ID, taxonomi, NPI och genererad EDI 837. Clearinghouse‑svar 200. Inget workflow för avvisningsnotiser konfigurerat.",
      ],
      kicker: "KOSTNADSFRI GRANSKNING",
      kickerResults: "KOSTNADSFRI GRANSKNING · RESULTAT",
      title: "Starta en kostnadsfri granskning.",
      titleResults: "Kritiska fynd.",
      body: "Klistra in en klinisk anteckning, beskrivning av claim‑flöde eller vård‑URL. MediReady kör samtliga sex kanaler parallellt — normalt 15–40 sekunder.",
      bodyResults: "De främsta kritiska fynden från sex kanaler. Fullständig rapport — samtliga fynd, åtgärdskrav och PDF‑export — låses upp för 49 USD.",
      inputLabel: "Inmatning — klinisk anteckning, arbetsflödesbeskrivning eller URL",
      inputPlaceholder: "Klistra in en klinisk anteckning, claim‑flödesbeskrivning eller vård‑URL…",
      uploadIdle: "Ladda upp fil (PDF, DOCX, TXT, MD)",
      uploadBusy: "Läser fil…",
      uploadOrTry: "eller testa:",
      uploadNoText: "Ingen läsbar text hittades i filen.",
      uploadLoaded: (name) => `Inläst ${name} — granska texten ovan och kör därefter granskningen.`,
      noStoreBadge: "INMATNING SPARAS INTE OCH ANVÄNDS INTE FÖR TRÄNING",
      runCta: "Kör granskning",
      runningStatus: "STATUS",
      runningTitle: "Kör sex granskningskanaler…",
      runningBody: "Körs parallellt. Normal tid: 15–40 sekunder.",
      elapsedPrefix: "FÖRFLUTEN TID",
      overallKicker: (runId) => `ÖVERGRIPANDE · KÖRNING ${runId}`,
      severityCritical: "KRITISK",
      severityWatch: "OBSERVATION",
      severityInfo: "INFO",
      noCriticalBody: "Inga kritiska fynd i denna körning. Lås upp fullständig rapport för att se observationer och info‑nivå.",
      unlockTitle: (extra) => `${extra} ytterligare fynd · PDF‑export`,
      unlockBody: "Lås upp fullständig granskning för att se samtliga fynd, åtgärdskrav och ladda ned PDF för revisor.",
      unlockCta: "Lås upp fullständig rapport",
      subscribeCta: "Prenumerera i stället",
      pdfCta: "Ladda ner PDF-rapport",
      pdfBusy: "Genererar PDF…",
      runErrorDefault: "Granskningen kunde inte slutföras.",
      uploadErrorPrefix: (status) => `Uppladdning misslyckades (HTTP ${status})`,
    },
    reportPage: {
      kicker: "HÄLSORAPPORT",
      kickerRun: (runId) => `RAPPORT · KÖRNING ${runId}`,
      title: "Kör en fullständig granskning.",
      titleDone: "Granskning slutförd.",
      body: "Klistra in en klinisk anteckning, claim‑flöde eller URL. Motorn kör sex kanaler och returnerar fullständig rapport.",
      bodyDone: "Sex kanaler analyserade. Expandera en kanal för att se fynd och åtgärdskrav.",
      inputLabel: "Inmatning — klinisk anteckning, arbetsflödesbeskrivning eller URL",
      inputPlaceholder: "Klistra in en klinisk anteckning, claim‑flödesbeskrivning eller vård‑URL…",
      useSampleInput: "Använd exempelinmatning",
      runCta: "Kör fullständig granskning",
      runningCta: "Analyserar sex kanaler…",
      runningBody: "Kör kliniska, HIPAA‑, claims‑, kommunikations‑, innehålls‑ och syntetiska kontroller parallellt. Normal tid: 15–40 sekunder.",
      overallLabel: "ÖVERGRIPANDE",
      severityCritical: "KRITISK",
      severityWatch: "OBSERVATION",
      severityInfo: "INFO",
      downloadPdf: "Ladda ned PDF",
      runAgain: "Kör igen",
      bookDemo: "Boka 15‑minuters demo",
      joinWaitlist: "Gå med i väntelistan",
      failedBadge: "MISSLYCKADES",
      noFindings: "Inga fynd för denna kanal.",
      requiredActionsLabel: "ÅTGÄRDSKRAV",
      runErrorDefault: "Granskningen kunde inte slutföras.",
      pdfErrorDefault: "PDF‑genereringen kunde inte slutföras.",
    },
    safetyPage: {
      kicker: "SÄKERHET",
      title: "Safety",
      intro:
        "MediReady är utformat för att minimera risk genom att undvika lagring av PHI, reducera integrationskomplexitet och säkerställa att all bearbetning är flyktig och krypterad.",
      sections: [
        { heading: "Flyktig bearbetning", body: "Uppladdade filer och textinmatningar bearbetas i minnet och raderas omedelbart när granskningen är slutförd." },
        { heading: "Ingen lagring av PHI", body: "MediReady lagrar inte PHI, kliniska anteckningar eller patientidentifierare. Detta eliminerar behovet av BAAs och minskar administrativt compliance‑arbete." },
        { heading: "Lokal dokumentlagring", body: "Utdata från Compliance‑suiten lagras lokalt i en isolerad SQLite‑databas och delas aldrig eller används för träning." },
      ],
    },
    pricingPage: {
      kicker: "PRISSÄTTNING",
      title: (
        <>
          Enstaka granskning eller full<br />
          {em("compliance‑suite")}. Du väljer.
        </>
      ),
      body: "Kostnadsfri nivå för inbjudna användare. Per‑dokument‑prissättning för enstaka behov. Abonnemang för team.",
      inviteOnly: "ENDAST VIA INBJUDAN",
      freeTierKicker: "KOSTNADSFRI NIVÅ",
      freeName: "Gratis",
      freeBody:
        "För tidiga användare som utvärderar MediReady. Alla verktyg, åtkomst via inbjudan — begär åtkomst så aktiverar vi kontot.",
      freeCta: "Begär åtkomst",
      freeFeatures: [
        "3 fullständiga granskningar per månad",
        "1 dokument per verktyg per månad",
        "Obegränsad standardkartläggning (korta inmatningar)",
        "7 dagars historik",
        "Demo‑dashboard för övervakning",
      ],
      perDocKicker: "PER DOKUMENT",
      perDocTitle: "Per‑dokument‑prissättning",
      perDocBody: "För enstaka behov. Betala endast för det du genererar.",
      perDocSuffix: {
        document: "/dokument",
        mapping: "/kartläggning",
        assessment: "/bedömning",
      },
      payCta: "Betala",
      subsKicker: "SUITE‑ABONNEMANG",
      subsTitle: "För team med återkommande behov",
      subsBody:
        "Abonnemang är ännu inte aktiva. Gå med i väntelistan för att få information vid lansering.",
      perMonth: "/månad",
      mostPopular: "Mest populär",
      waitlistCta: "Gå med i väntelistan",
      contactSalesCta: "Kontakta sälj",
      cards: {
        clinic: {
          name: "Clinic",
          tagline: "För enheter med en plats och mindre kliniker.",
          features: [
            "10 dokument per månad",
            "Obegränsad standardkartläggning",
            "Obegränsade granskningsplaner",
            "Prioriterad kö",
            "PDF + Word‑export",
          ],
        },
        network: {
          name: "Network / SaaS",
          tagline: "För flerplatsnätverk och vårdrelaterade SaaS‑leverantörer.",
          features: [
            "50 dokument per månad",
            "Obegränsade riskbedömningar",
            "Obegränsad gap‑analys",
            "Teamkonton",
            "Delad historik",
          ],
        },
        enterprise: {
          name: "Enterprise",
          tagline: "För IDN, större konsultorganisationer och verksamheter med hög volym.",
          features: [
            "Obegränsad användning",
            "API‑åtkomst",
            "Veckovis övervakning",
            "Dedikerad support",
            "Anpassade integrationer",
          ],
        },
      },
    },
    whoItsForPage: {
      kicker: "FÖR VEM",
      title: "För vem",
      items: [
        { label: "Kliniker", sub: "Primärvård, specialistvård, tandvård och psykiatri med behov av strukturerade egenkontroller, dokumentationsgranskning och spårbara åtgärdsunderlag." },
        { label: "Billing‑bolag", sub: "Organisationer som hanterar ersättningsflöden och behöver verifiera kravhantering, avslag, kodning och dokumentationskvalitet innan inskick." },
        { label: "Healthcare SaaS", sub: "Leverantörer av EHR‑tillägg, AI‑dokumentation, patientportaler och andra digitala vårdtjänster som behöver oberoende granskning av innehåll, säkerhet och kommunikation." },
        { label: "Nätverk och grupper", sub: "IDN, ACO och flerplatsverksamheter som kräver enhetliga granskningsprocesser, gemensamma standarder och jämförbara rapporter." },
        { label: "Konsulter", sub: "Rådgivare och revisionspartners som behöver ett white‑label‑lager för granskning, dokumentation och standardiserade rapporter." },
        { label: "Interna revisionsteam", sub: "Team som arbetar med återkommande kontroller, evidensinsamling, riskbedömning och spårbara granskningsrapporter." },
        { label: "Tillsynsmyndigheter", sub: "Enheter som genomför oberoende verifiering av dokumentation, processer, informationssäkerhet och kliniskt innehåll." },
      ],
    },
    docsPage: {
      kicker: "DOKUMENTATION",
      title: "Documentation",
      groups: [
        {
          heading: "Kom igång",
          items: ["Kör din första granskning", "Generera compliance‑dokument", "Använd standards mapping", "Exportera rapporter"],
        },
        {
          heading: "Granskningsmotorn",
          items: ["Claims‑granskning", "Full compliance‑granskning", "Denial‑granskning", "Allvarlighetsmodell", "Nödvändiga åtgärder"],
        },
        {
          heading: "Compliance‑suiten",
          items: ["Audit Plan Generator", "Standards Mapping", "Document Gap Analysis", "HIPAA Risk Assessment", "Policy & SOP Generator"],
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
        "En plattform för vårdgranskning och compliance‑dokumentation. Sexkanalig granskningsmotor + HIPAA‑anpassad dokumentationssuite. Fil in. Rapport ut.",
      copyright: "© 2026 MEDIREADY",
      cols: {
        product: {
          heading: "Produkt",
          productOverview: "Produktöversikt",
          complianceSuite: "Compliance‑suite",
          pricing: "Prissättning",
          freeAudit: "Kostnadsfri granskning",
          sampleReport: "Exempelrapport",
        },
        company: {
          heading: "Företag",
          company: "Om oss",
          whoItsFor: "För vem",
          contact: "Kontakt",
          waitlist: "Väntelista",
        },
        resources: {
          heading: "Resurser",
          documentation: "Dokumentation",
          status: "Status",
          safety: "Säkerhet",
          security: "Informationsskydd",
          monitoring: "Övervakning",
        },
        legal: {
          heading: "Juridik",
          privacy: "Integritet",
          terms: "Användarvillkor",
          regulatory: "Regulatorisk positionering",
          classification: "Klassificeringsdokument",
          dpa: "Personuppgiftsbiträdesavtal",
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
      kicker: "ÖVERVAKNING",
      title: "Veckovisa granskningar. Trendanalys. Regressionsaviseringar.",
      body:
        "Engångsgranskningar visar nuläget. Övervakning visar om compliance‑status förbättras eller försämras över tid — och aviserar när status förändras.",
      features: [
        { title: "Veckovisa automatiserade granskningar", desc: "Konfigurera ett mål en gång. Ny rapport genereras varje vecka utan manuell körning." },
        { title: "Trendanalys", desc: "Historik per kanal över samtliga körningar. Tidiga regressionssignaler och dokumenterade förbättringar." },
        { title: "Regressionsaviseringar", desc: "E‑postavisering när totalpoängen sjunker eller ett nytt kritiskt fynd registreras." },
        { title: "Historiska jämförelser", desc: "Jämför aktuell körning mot de senaste fyra veckorna. Se vilka fynd som återkommer och vilka som åtgärdats." },
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
        body: "Verktyg för granskningsplaner, standardkartläggning och dokumentationsgap inom vård och hälsa. Utdata sparas i lokal historik och kan laddas ned som Word‑dokument.",
        history: "Historik",
        backToScan: "Tillbaka till kostnadsfri granskning",
        aboutLabel: "Om denna suite —",
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
          pageTitle: "Generera en fullständig intern granskningsplan.",
          pageBody:
            "Omfattning, metodik, schema, checklista och riskområden med allvarlighetsgrad — skrivna för vårdverksamheter under HIPAA. Sparas i lokal historik; laddas ned som Word‑dokument.",
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
            "Accepterar PDF, DOCX, TXT eller inklistrad text (upp till 5 MB). AI identifierar saknade avsnitt, otillräcklig formulering och saknade kravreferenser mot valt ramverk.",
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
          pageTitle: "Det årliga dokumentet som OCR kommer att begära.",
          pageBody:
            "Obligatoriskt enligt 45 CFR §164.308(a)(1)(ii)(A). Metodik enligt NIST 800‑30, fullständigt riskregister med sannolikhet × konsekvens, inherent och residual risk, rekommenderade kontroller och klausulreferenser.",
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
        backToSuite: "Suiten",
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
        body: "MediReady är avsett för avidentifierade policyer, arbetsflöden, exempeltext och syntetiska exempel — inte ett nationellt medicinskt informationssystem (NMI) och får inte användas för individuell patientvård. Skicka inte skyddad patientinformation (PHI) — namn, födelsedatum, personnummer, journalnummer, adresser eller någon av de 18 HIPAA‑identifierarna kopplade till en verklig person. Inmatning bearbetas av tredjeparts AI‑leverantörer.",
        confirm: "Jag bekräftar att inmatningen inte innehåller skyddad patientinformation och inte används för individuell patientvård.",
        detectedHeading: "Möjlig identifierare upptäckt — inmatning blockerad.",
        detectedBody: "Din inmatning ser ut att innehålla personidentifierare. Ta bort eller maskera den markerade texten innan du kör granskningen. Om detta är en falsk träff: redigera den omgivande texten så mönstret bryts.",
        labelByType: {
          se_personnummer: "Personnummer",
          us_ssn: "US Social Security Number",
          labeled_id: "Märkt personidentifierare (Personnummer / Patient‑ID / MRN)",
          dob_context: "Födelsedatum med kontext",
          phone_se: "Telefonnummer",
        },
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
