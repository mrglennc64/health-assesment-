// Client-side PHI detector. Conservative regex pass — favors false positives
// over false negatives, since the goal is to block obvious individual-patient
// data before it leaves the browser. Not a substitute for the customer's own
// de-identification process.

export type PhiMatchType =
  | "se_personnummer"
  | "us_ssn"
  | "labeled_id"        // "Personnummer:", "MRN:", "Patient ID:", etc.
  | "dob_context"       // "född 1955-03-12", "DOB 03/12/1955"
  | "phone_se";

export type PhiMatch = {
  type: PhiMatchType;
  value: string;        // matched text
  start: number;        // character offset in the source string
  end: number;
};

// Swedish personnummer: YYMMDD-XXXX or YYYYMMDD-XXXX (also + for over-100).
// Boundary checks avoid matching inside longer digit runs.
const RE_SE_PNR = /(?<!\d)((?:19|20)?\d{6}[-+]\d{4})(?!\d)/g;

// US SSN: NNN-NN-NNNN.
const RE_US_SSN = /(?<!\d)(\d{3}-\d{2}-\d{4})(?!\d)/g;

// Explicit identifier labels followed by a value (digits, alphanumerics).
const RE_LABELED_ID =
  /\b(?:personnummer|p\s*nr|pnr|patient(?:\s*id|nummer|number)?|patnr|mrn|medical\s*record(?:\s*(?:number|#))?|journal(?:\s*nr)?|patientnummer)\b\s*[:#=]?\s*([A-Za-z0-9][A-Za-z0-9-]{2,})/gi;

// DOB-with-context: "född 1955-03-12", "DOB: 03/12/1955", "f. 1955", etc.
const RE_DOB_CONTEXT =
  /\b(?:f[öo]dd|dob|date\s*of\s*birth|f\.\s*d\.|f\.)\s*[:.]?\s*(\d{2,4}[-/.]\d{1,2}[-/.]\d{1,4}|\d{4})/gi;

// Swedish phone number with explicit "+46" or "tel" prefix.
const RE_PHONE_SE =
  /(?:tel(?:efon)?\s*[:.]?\s*)?(?:\+46|0046|0)\s?(?:7[02-9]|[1-9][0-9]?)\s?\d{2,3}\s?\d{2}\s?\d{2,3}/g;

const PATTERNS: { type: PhiMatchType; re: RegExp }[] = [
  { type: "se_personnummer", re: RE_SE_PNR },
  { type: "us_ssn", re: RE_US_SSN },
  { type: "labeled_id", re: RE_LABELED_ID },
  { type: "dob_context", re: RE_DOB_CONTEXT },
  { type: "phone_se", re: RE_PHONE_SE },
];

export function detectPhi(text: string): PhiMatch[] {
  if (!text) return [];
  const out: PhiMatch[] = [];
  for (const { type, re } of PATTERNS) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      out.push({ type, value: m[0], start: m.index, end: m.index + m[0].length });
      if (re.lastIndex === m.index) re.lastIndex++;
    }
  }
  // sort by position so the UI can highlight in order
  out.sort((a, b) => a.start - b.start);
  return out;
}

export function hasPhi(text: string): boolean {
  return detectPhi(text).length > 0;
}
