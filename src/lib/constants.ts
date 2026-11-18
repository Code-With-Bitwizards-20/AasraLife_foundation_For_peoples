/**
 * Centralized Settings for AasraLife Foundation.
 * Easily toggle public features, donation availability, and verified account information.
 */

/**
 * CRITICAL DONATION AUTHORIZATION TOGGLE:
 * Set to FALSE initially until formal regulatory registration and fundraising authorization
 * are completed. When false, public donation details (account numbers) are hidden
 * and an informative compliance message is displayed.
 */
export const DONATIONS_ENABLED = false;

/**
 * SadaPay & Bank Account Details (Configured only when DONATIONS_ENABLED is set to true)
 * NEVER store PINs, OTPs, or passwords here. Only public recipient account credentials.
 */
export const SADAPAY_ACCOUNT_NAME = "ADD VERIFIED ACCOUNT HOLDER NAME";
export const SADAPAY_ACCOUNT_NUMBER = "ADD VERIFIED ACCOUNT NUMBER";
export const SADAPAY_IBAN = "ADD VERIFIED IBAN IF APPLICABLE";
export const SADAPAY_INSTRUCTIONS = [
  "Choose the amount you wish to contribute to the designated humanitarian fund.",
  "Open your verified SadaPay mobile application.",
  "Transfer your contribution to the official foundation account details shown.",
  "Save your transaction reference number for your records.",
  "Contact the foundation via email or our contact desk if you wish to share your donation reference.",
];

export const BANK_TRANSFER_DETAILS = {
  bankName: "ADD VERIFIED BANK NAME",
  accountTitle: "ADD VERIFIED ACCOUNT TITLE",
  accountNumber: "ADD VERIFIED ACCOUNT NUMBER",
  iban: "ADD VERIFIED IBAN",
  branch: "ADD VERIFIED BRANCH CODE & CITY",
};

/**
 * Illustrative contribution options (clearly labeled as illustrative)
 */
export const ILLUSTRATIVE_CONTRIBUTION_AMOUNTS_PKR = [1000, 2500, 5000, 10000, 25000, 50000];
export const ILLUSTRATIVE_CONTRIBUTION_AMOUNTS_USD = [25, 50, 100, 250, 500];

export const ILLUSTRATIVE_FUND_CATEGORIES = [
  { id: "general", label: "General Humanitarian Care" },
  { id: "medical", label: "Aasra Medical Care & Healthcare" },
  { id: "education", label: "Aasra Education & Scholarships" },
  { id: "food", label: "Aasra Food Support & Nutrition" },
  { id: "women", label: "Aasra Women's Empowerment" },
  { id: "livelihood", label: "Aasra Livelihood & Small Business" },
  { id: "emergency", label: "Aasra Emergency Relief" },
];
