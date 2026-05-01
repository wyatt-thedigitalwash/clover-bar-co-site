"use client";

import { useState } from "react";
import Button from "@/components/Button";

const EVENT_TYPES = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Holiday Gathering",
  "Other",
] as const;

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  startTime: string;
  endTime: string;
  eventLocation: string;
  eventType: string;
  budget: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  eventDate: "",
  guestCount: "",
  startTime: "",
  endTime: "",
  eventLocation: "",
  eventType: "",
  budget: "",
  details: "",
};

function validate(data: FormData): FormErrors {
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
  return errors;
}

const labelClass =
  "block font-body text-[11px] font-medium uppercase tracking-[0.2em] text-forest mb-2";

const inputClass =
  "w-full font-body text-base text-ink bg-white border border-[#E8E5DF] rounded-[2px] py-3 px-4 placeholder:text-ink/40 focus:border-forest focus:outline-none transition-colors duration-150";

const errorClass = "mt-1 font-body text-[13px] text-[#9B2C2C]";

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(
          data.error ||
            "Something went wrong. Please try again, or email me directly at cloverbarco@gmail.com."
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again, or email me directly at cloverbarco@gmail.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div>
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          Inquiry sent
        </span>
        <h2 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
          Thank you. I&rsquo;ll be in touch within 24 to 48 hours.
        </h2>
        <p className="mt-6 max-w-[480px] font-body text-[17px] leading-[1.6] text-ink/85">
          Your inquiry is on its way to me. I&rsquo;ll review it and follow up
          with a personalized quote by email. In the meantime, feel free to
          check out the gallery or follow along on Instagram.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">Back to home</Button>
          <Button variant="ghost" href="/gallery">
            See the gallery
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Full name */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full name <span className="text-clover">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          className={inputClass}
          autoComplete="name"
        />
        {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email address <span className="text-clover">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
          autoComplete="email"
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone number <span className="text-clover">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass}
          autoComplete="tel"
        />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      {/* Event date + Guest count */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="eventDate" className={labelClass}>
            Event date <span className="text-clover">*</span>
          </label>
          <input
            id="eventDate"
            type="date"
            value={form.eventDate}
            onChange={(e) => update("eventDate", e.target.value)}
            className={inputClass}
          />
          {errors.eventDate && <p className={errorClass}>{errors.eventDate}</p>}
        </div>
        <div>
          <label htmlFor="guestCount" className={labelClass}>
            Estimated guests <span className="text-clover">*</span>
          </label>
          <input
            id="guestCount"
            type="number"
            min="1"
            value={form.guestCount}
            onChange={(e) => update("guestCount", e.target.value)}
            className={inputClass}
          />
          {errors.guestCount && (
            <p className={errorClass}>{errors.guestCount}</p>
          )}
        </div>
      </div>

      {/* Start time + End time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="startTime" className={labelClass}>
            Event start time <span className="text-clover">*</span>
          </label>
          <input
            id="startTime"
            type="time"
            value={form.startTime}
            onChange={(e) => update("startTime", e.target.value)}
            className={inputClass}
          />
          {errors.startTime && (
            <p className={errorClass}>{errors.startTime}</p>
          )}
        </div>
        <div>
          <label htmlFor="endTime" className={labelClass}>
            Estimated end time <span className="text-clover">*</span>
          </label>
          <input
            id="endTime"
            type="time"
            value={form.endTime}
            onChange={(e) => update("endTime", e.target.value)}
            className={inputClass}
          />
          {errors.endTime && <p className={errorClass}>{errors.endTime}</p>}
        </div>
      </div>

      {/* Event location */}
      <div>
        <label htmlFor="eventLocation" className={labelClass}>
          Event location <span className="text-clover">*</span>
        </label>
        <input
          id="eventLocation"
          type="text"
          value={form.eventLocation}
          onChange={(e) => update("eventLocation", e.target.value)}
          placeholder="City, state, or venue name"
          className={inputClass}
          autoComplete="address-level2"
        />
        {errors.eventLocation && (
          <p className={errorClass}>{errors.eventLocation}</p>
        )}
      </div>

      {/* Event type */}
      <fieldset>
        <legend className={labelClass}>
          Type of event <span className="text-clover">*</span>
        </legend>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {EVENT_TYPES.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span
                className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-colors duration-150 ${
                  form.eventType === type
                    ? "border-forest"
                    : "border-[#E8E5DF]"
                }`}
              >
                {form.eventType === type && (
                  <span className="w-2 h-2 rounded-full bg-forest" />
                )}
              </span>
              <input
                type="radio"
                name="eventType"
                value={type}
                checked={form.eventType === type}
                onChange={(e) => update("eventType", e.target.value)}
                className="sr-only"
              />
              <span className="font-body text-sm text-ink">{type}</span>
            </label>
          ))}
        </div>
        {errors.eventType && <p className={errorClass}>{errors.eventType}</p>}
      </fieldset>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget for services
        </label>
        <input
          id="budget"
          type="text"
          value={form.budget}
          onChange={(e) => update("budget", e.target.value)}
          placeholder="Optional. A rough range is helpful."
          className={inputClass}
        />
      </div>

      {/* Details */}
      <div>
        <label htmlFor="details" className={labelClass}>
          Anything specific about your event
        </label>
        <textarea
          id="details"
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          placeholder="Theme, flavors, vibe, anything you want me to know."
          className={`${inputClass} min-h-[120px] resize-y`}
          rows={4}
        />
      </div>

      {/* Submit error */}
      {submitError && (
        <p className="font-body text-sm text-[#9B2C2C]">{submitError}</p>
      )}

      {/* Submit */}
      <div className="mt-4">
        <button
          type="submit"
          disabled={submitting}
          className={`inline-flex items-center gap-2 font-body text-[15px] font-medium tracking-wide rounded-sm transition-colors duration-150 bg-light-green text-white px-7 py-3.5 w-full md:w-auto justify-center md:justify-start ${
            submitting
              ? "bg-light-green/50 cursor-not-allowed"
              : "hover:bg-forest"
          }`}
        >
          {submitting ? "Sending..." : "Send inquiry"}
          {!submitting && <span aria-hidden="true">&rarr;</span>}
        </button>
      </div>
    </form>
  );
}
