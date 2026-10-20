export type InquiryOption = {
  value: string;
  description?: string;
};

export const EVENT_TYPES: InquiryOption[] = [
  { value: "Wedding" },
  { value: "Birthday" },
  { value: "Corporate" },
  { value: "Holiday Gathering" },
  { value: "Other" },
];

export const BAR_OPTIONS: InquiryOption[] = [
  {
    value: "Satellite Bar",
    description: "Small portable bar, perfect for 10-50 guests",
  },
  { value: "Mobile Bar", description: "10-130 guests" },
  {
    value: "Bartenders Only",
    description: "My venue already has a bar",
  },
];

export const PACKAGE_OPTIONS: InquiryOption[] = [
  { value: "Beer & Wine" },
  { value: "Beer & Wine + 2 Signature Cocktails" },
  { value: "Full Bar + 2 Signature Cocktails" },
  { value: "Cocktail Class" },
];

export const REFERRAL_OPTIONS: InquiryOption[] = [
  { value: "Vendor Referral" },
  { value: "Client Referral" },
  { value: "Personal Website" },
  { value: "Google" },
  { value: "Facebook" },
  { value: "Instagram" },
  { value: "Friend" },
  { value: "Other" },
];

export function isAllowedOption(
  options: InquiryOption[],
  value: unknown
): boolean {
  return typeof value === "string" && options.some((o) => o.value === value);
}
