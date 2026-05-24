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
    sections: {
      heading: string;
      paragraphs?: string[];
      bullets?: string[];
      subsections?: {
        heading: string;
        paragraphs?: string[];
        bullets?: string[];
        quote?: string;
        quoteAttribution?: string;
      }[];
    }[];
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
      legal: { heading: string; privacy: string; terms: string; regulatory: string; classification: string };
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
    classificationPage: {
      kicker: "CLASSIFICATION DOCUMENT",
      title: "MediReady — Classification Document",
      verdict: "Assessment: not medical device software (MDSW) and not a national medical information system (NMI).",
      metaVersion: "Version",
      metaVersionValue: "1.0",
      metaDate: "Date",
      metaDateValue: "2026-05-24",
      metaPreparedBy: "Prepared by",
      metaPreparedByValue: "MediReady AB",
      sections: [
        {
          heading: "1. Purpose",
          paragraphs: [
            "This document establishes MediReady's formal classification in relation to:",
          ],
          bullets: [
            "EU Regulation (EU) 2017/745 (MDR) — medical devices and medical device software (MDSW).",
            "HSLF-FS 2022:42 — national medical information systems (NMI).",
          ],
        },
        {
          heading: "",
          paragraphs: [
            "The document describes MediReady's intended use, functional limitations, and regulatory boundaries as the basis for the assessment that the product is not within the scope of MDR and not within the scope of the NMI framework.",
          ],
        },
        {
          heading: "2. Product description",
          paragraphs: [
            "MediReady is an administrative tool for compliance documentation and workflow audit. The system is used by administrators, quality leads, and operations managers to:",
          ],
          bullets: [
            "generate policies, SOPs, and risk assessments",
            "perform administrative gap analyses",
            "map standards (HIPAA, ISO, NIST, etc.)",
            "perform non-clinical workflow audits",
            "produce reports for internal governance and compliance",
          ],
        },
        {
          heading: "",
          paragraphs: [
            "MediReady does not process medical decisions, does not influence patient care, and does not provide recommendations on diagnosis, treatment, or clinical actions.",
          ],
        },
        {
          heading: "3. Intended purpose",
          paragraphs: ["MediReady is intended for:"],
          bullets: [
            "administrative documentation",
            "compliance work",
            "internal workflow audits",
            "policy and governance-document management",
            "non-clinical risk assessments",
          ],
        },
        {
          heading: "",
          paragraphs: ["MediReady is not intended to:"],
          bullets: [
            "be used for diagnosis, treatment, monitoring, or alleviation of disease",
            "be used for clinical decisions or patient-facing assessments",
            "process medical records or clinical parameters",
            "provide recommendations that affect patient care or treatment",
            "update or read authority registers in healthcare",
          ],
        },
        {
          heading: "4. Assessment under MDR (EU 2017/745)",
          subsections: [
            {
              heading: "4.1 Relevant criteria",
              paragraphs: [
                "Under MDR, software is classified as a medical device if it has a medical purpose, for example to:",
              ],
              bullets: [
                "diagnose",
                "prevent",
                "monitor",
                "treat",
                "alleviate disease",
              ],
            },
            {
              heading: "4.2 Assessment",
              paragraphs: ["MediReady meets none of MDR's medical purposes. The system:"],
              bullets: [
                "does not analyse patient data",
                "does not influence clinical decisions",
                "does not generate medical recommendations",
                "is not used by clinical staff in patient-facing work",
                "processes administrative information only",
              ],
              quote: "“Software for administrative purposes is not covered.”",
              quoteAttribution: "— MDR interpretation per EU guidance",
            },
            {
              heading: "4.3 Conclusion",
              paragraphs: [
                "MediReady is not a medical device and is not within the scope of MDR.",
              ],
            },
          ],
        },
        {
          heading: "5. Assessment under HSLF-FS 2022:42 (National medical information systems)",
          subsections: [
            {
              heading: "5.1 Relevant criteria",
              paragraphs: ["NMI covers systems that:"],
              bullets: [
                "process medical information of significance for an individual patient's care, or",
                "provide direct access to or update authority registers, or",
                "are used to dispense prescriptions at pharmacies.",
              ],
            },
            {
              heading: "5.2 Exception in the regulation",
              paragraphs: ["HSLF-FS 2022:42 states that the following is not NMI:"],
              quote: "“Generic software used in a care environment, except where the software has been adapted in a way that meets the definition of a national medical information system.”",
            },
            {
              heading: "5.3 Assessment",
              paragraphs: ["MediReady:"],
              bullets: [
                "does not process medical information",
                "does not affect patient care",
                "has no connection to authority registers",
                "is not used for prescriptions or dispensing",
                "is not adapted for clinical decisions",
                "is not a system of significance for an individual patient's care",
              ],
            },
            {
              heading: "5.4 Conclusion",
              paragraphs: [
                "MediReady does not meet the definition of NMI and is not within the scope of HSLF-FS 2022:42.",
              ],
            },
          ],
        },
        {
          heading: "6. Data protection and GDPR",
          paragraphs: [
            "Even though MediReady is neither MDSW nor NMI, the system is subject to GDPR.",
          ],
          bullets: [
            "Inputs are processed ephemerally in memory and discarded immediately.",
            "No PHI is stored.",
            "No background collection, telemetry, or profiling.",
            "The healthcare provider is the controller.",
            "MediReady is the processor.",
            "A data processing agreement under Article 28 is required.",
          ],
        },
        {
          heading: "7. Overall conclusion",
          paragraphs: [
            "Based on intended use, functionality, and regulatory criteria, MediReady is assessed:",
          ],
          bullets: [
            "not to be medical device software (MDSW) under MDR",
            "not to be a national medical information system (NMI) under HSLF-FS 2022:42",
            "to be an administrative compliance and workflow tool",
            "to be subject to GDPR, but not to MDR or the NMI framework",
          ],
        },
      ],
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
    classificationPage: {
      kicker: "KLASSIFICERINGSDOKUMENT",
      title: "MediReady — Klassificeringsdokument",
      verdict: "Bedömning: ej medicinteknisk programvara (MDSW) och ej nationellt medicinskt informationssystem (NMI).",
      metaVersion: "Version",
      metaVersionValue: "1.0",
      metaDate: "Datum",
      metaDateValue: "2026‑05‑24",
      metaPreparedBy: "Upprättad av",
      metaPreparedByValue: "MediReady AB",
      sections: [
        {
          heading: "1. Syfte",
          paragraphs: [
            "Detta dokument fastställer MediReadys formella klassificering i förhållande till:",
          ],
          bullets: [
            "EU:s förordning (EU) 2017/745 (MDR) — medicintekniska produkter och medicinteknisk programvara (MDSW).",
            "HSLF‑FS 2022:42 — nationella medicinska informationssystem (NMI).",
          ],
        },
        {
          heading: "",
          paragraphs: [
            "Dokumentet beskriver MediReadys avsedda användning, funktionella begränsningar och regulatoriska avgränsningar som grund för bedömningen att produkten inte omfattas av MDR och inte omfattas av NMI‑regelverket.",
          ],
        },
        {
          heading: "2. Produktbeskrivning",
          paragraphs: [
            "MediReady är ett administrativt verktyg för compliance‑dokumentation och workflow‑revision. Systemet används av administratörer, kvalitetsansvariga och verksamhetschefer för att:",
          ],
          bullets: [
            "generera policyer, SOP:er och riskbedömningar",
            "genomföra administrativa gap‑analyser",
            "kartlägga standarder (HIPAA, ISO, NIST m.fl.)",
            "utföra icke‑kliniska workflow‑revisioner",
            "skapa rapporter för intern styrning och efterlevnad",
          ],
        },
        {
          heading: "",
          paragraphs: [
            "MediReady bearbetar inte medicinska beslut, påverkar inte patientvård och ger inga rekommendationer om diagnos, behandling eller kliniska åtgärder.",
          ],
        },
        {
          heading: "3. Avsedd användning (Intended Purpose)",
          paragraphs: ["MediReady är avsett att användas för:"],
          bullets: [
            "administrativ dokumentation",
            "compliance‑arbete",
            "intern revision av arbetsflöden",
            "policy‑ och styrdokumentshantering",
            "icke‑kliniska riskbedömningar",
          ],
        },
        {
          heading: "",
          paragraphs: ["MediReady är inte avsett att:"],
          bullets: [
            "användas för diagnos, behandling, monitorering eller lindring av sjukdom",
            "användas för kliniska beslut eller patientnära bedömningar",
            "hantera journaluppgifter eller medicinska parametrar",
            "ge rekommendationer som påverkar patienters vård eller behandling",
            "uppdatera eller läsa myndighetsregister inom hälso‑ och sjukvård",
          ],
        },
        {
          heading: "4. Bedömning enligt MDR (EU 2017/745)",
          subsections: [
            {
              heading: "4.1 Relevanta kriterier",
              paragraphs: [
                "Enligt MDR klassas programvara som medicinteknisk produkt om den har ett medicinskt syfte, exempelvis att:",
              ],
              bullets: [
                "diagnostisera",
                "förebygga",
                "övervaka",
                "behandla",
                "lindra sjukdom",
              ],
            },
            {
              heading: "4.2 Bedömning",
              paragraphs: ["MediReady uppfyller inga av MDR:s medicinska syften. Systemet:"],
              bullets: [
                "analyserar inte patientdata",
                "påverkar inte kliniska beslut",
                "genererar inte medicinska rekommendationer",
                "används inte av vårdpersonal i patientnära arbete",
                "hanterar endast administrativ information",
              ],
              quote: "“Software for administrative purposes is not covered.”",
              quoteAttribution: "— MDR‑tolkning enligt EU:s vägledningar",
            },
            {
              heading: "4.3 Slutsats",
              paragraphs: [
                "MediReady är inte en medicinteknisk produkt och omfattas inte av MDR.",
              ],
            },
          ],
        },
        {
          heading: "5. Bedömning enligt HSLF‑FS 2022:42 (Nationella medicinska informationssystem)",
          subsections: [
            {
              heading: "5.1 Relevanta kriterier",
              paragraphs: ["NMI omfattar system som:"],
              bullets: [
                "hanterar medicinsk information av betydelse för enskilda patienters vård, eller",
                "ger direkt åtkomst till eller uppdaterar myndighetsregister, eller",
                "används för expediering av recept på apotek.",
              ],
            },
            {
              heading: "5.2 Undantag i föreskriften",
              paragraphs: ["HSLF‑FS 2022:42 anger att följande inte är NMI:"],
              quote: "“Generell programvara som används i vårdmiljö, utom i fall då denna anpassats på sätt som uppfyller definitionen för nationella medicinska informationssystem.”",
            },
            {
              heading: "5.3 Bedömning",
              paragraphs: ["MediReady:"],
              bullets: [
                "hanterar inte medicinsk information",
                "påverkar inte patienters vård",
                "har ingen koppling till myndighetsregister",
                "används inte för recept eller expediering",
                "är inte anpassat för kliniska beslut",
                "är inte ett system av betydelse för enskilda patienters vård",
              ],
            },
            {
              heading: "5.4 Slutsats",
              paragraphs: [
                "MediReady uppfyller inte definitionen av NMI och omfattas inte av HSLF‑FS 2022:42.",
              ],
            },
          ],
        },
        {
          heading: "6. Dataskydd och GDPR",
          paragraphs: [
            "Även om MediReady inte är MDSW eller NMI omfattas systemet av GDPR.",
          ],
          bullets: [
            "Inmatningar bearbetas flyktigt i minnet och raderas direkt.",
            "Ingen PHI lagras.",
            "Ingen bakgrundsinsamling, telemetri eller profilering.",
            "Vårdgivaren är personuppgiftsansvarig.",
            "MediReady är personuppgiftsbiträde.",
            "Ett biträdesavtal enligt Artikel 28 krävs.",
          ],
        },
        {
          heading: "7. Samlad slutsats",
          paragraphs: [
            "Baserat på avsedd användning, funktionalitet och regulatoriska kriterier bedöms MediReady:",
          ],
          bullets: [
            "inte vara medicinteknisk programvara (MDSW) enligt MDR",
            "inte vara ett nationellt medicinskt informationssystem (NMI) enligt HSLF‑FS 2022:42",
            "vara ett administrativt compliance‑ och workflow‑verktyg",
            "vara föremål för GDPR, men inte för MDR eller NMI‑regelverket",
          ],
        },
      ],
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
