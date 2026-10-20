export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  startTime: string;
  endTime: string;
  eventLocation: string;
  eventType: string;
  barChoice: string;
  barPackage: string;
  budget: string;
  details: string;
  referralSource: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

export const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  eventDate: "",
  guestCount: "",
  startTime: "",
  endTime: "",
  eventLocation: "",
  eventType: "",
  barChoice: "",
  barPackage: "",
  budget: "",
  details: "",
  referralSource: "",
};

export function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  if (!data.eventDate) errors.eventDate = "Event date is required.";
  if (!data.guestCount.trim()) {
    errors.guestCount = "Guest count is required.";
  } else if (isNaN(Number(data.guestCount)) || Number(data.guestCount) < 1) {
    errors.guestCount = "Enter a valid number.";
  }
  if (!data.startTime) errors.startTime = "Start time is required.";
  if (!data.endTime) errors.endTime = "End time is required.";
  if (!data.eventLocation.trim())
    errors.eventLocation = "Event location is required.";
  if (!data.eventType) errors.eventType = "Select an event type.";
  if (!data.barChoice) errors.barChoice = "Select a bar option.";
  if (!data.barPackage) errors.barPackage = "Select a bar package.";
  return errors;
}
