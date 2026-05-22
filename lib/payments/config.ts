// Payment configuration — the public-facing fields used by the PayNow component
// and the bank-transfer details. These are public by design (a Revolut Checkout
// link is meant to be shared; bank receiving details are on invoices).

export const REVOLUT_CHECKOUT_URL =
  "https://checkout.revolut.com/pay/8dea8634-c6bc-4491-885a-64cae566a7fb";

export const PAYMENT_AMOUNT_CENTS = 4900;
export const PAYMENT_AMOUNT_DISPLAY = "$49";
export const PAYMENT_CURRENCY = "USD";

export const BANK_TRANSFER = {
  currency: "USD",
  beneficiary: "Glenn Carter",
  iban: "LT96 3250 0055 2919 6900",
  bicSwift: "REVOLT21",
  bank: "Revolut Bank UAB",
  bankAddress: "Konstitucijos ave. 21B, 08130, Vilnius, Lithuania",
  correspondentBic: "CHASGB2L",
  amount: "$49",
  referenceHint: "Your email or invoice number",
} as const;
