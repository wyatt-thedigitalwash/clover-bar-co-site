"use client";

import { useState } from "react";
import Button from "@/components/Button";
import RadioGroup from "./RadioGroup";
import TextField from "./TextField";
import { labelClass, errorClass } from "./formStyles";
import {
  initialForm,
  validate,
  type FormData,
  type FormErrors,
} from "./validateInquiry";
import {
  EVENT_TYPES,
  BAR_OPTIONS,
  PACKAGE_OPTIONS,
  REFERRAL_OPTIONS,
} from "@/lib/inquiryOptions";

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
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clover">
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
      <TextField
        id="fullName"
        label="Full name"
        value={form.fullName}
        onChange={(v) => update("fullName", v)}
        required
        error={errors.fullName}
        autoComplete="name"
      />
      <TextField
        id="email"
        label="Email address"
        type="email"
        value={form.email}
        onChange={(v) => update("email", v)}
        required
        error={errors.email}
        autoComplete="email"
      />
      <TextField
        id="phone"
        label="Phone number"
        type="tel"
        value={form.phone}
        onChange={(v) => update("phone", v)}
        required
        error={errors.phone}
        autoComplete="tel"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          id="eventDate"
          label="Event date"
          type="date"
          value={form.eventDate}
          onChange={(v) => update("eventDate", v)}
          required
          error={errors.eventDate}
        />
        <TextField
          id="guestCount"
          label="Estimated guests"
          type="number"
          min="1"
          value={form.guestCount}
          onChange={(v) => update("guestCount", v)}
          required
          error={errors.guestCount}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          id="startTime"
          label="Event start time"
          type="time"
          value={form.startTime}
          onChange={(v) => update("startTime", v)}
          required
          error={errors.startTime}
        />
        <TextField
          id="endTime"
          label="Estimated end time"
          type="time"
          value={form.endTime}
          onChange={(v) => update("endTime", v)}
          required
          error={errors.endTime}
        />
      </div>

      <TextField
        id="eventLocation"
        label="Event location"
        value={form.eventLocation}
        onChange={(v) => update("eventLocation", v)}
        required
        error={errors.eventLocation}
        placeholder="City, state, or venue name"
        autoComplete="address-level2"
      />

      {/* Event type */}
      <RadioGroup
        name="eventType"
        legend="Type of event"
        options={EVENT_TYPES}
        value={form.eventType}
        onChange={(v) => update("eventType", v)}
        required
        error={errors.eventType}
        variant="inline"
        legendClass={labelClass}
        errorClass={errorClass}
      />

      {/* Bar choice */}
      <RadioGroup
        name="barChoice"
        legend="Choose your bar"
        options={BAR_OPTIONS}
        value={form.barChoice}
        onChange={(v) => update("barChoice", v)}
        required
        error={errors.barChoice}
        legendClass={labelClass}
        errorClass={errorClass}
      />

      {/* Bar package */}
      <RadioGroup
        name="barPackage"
        legend="What bar package are you interested in?"
        options={PACKAGE_OPTIONS}
        value={form.barPackage}
        onChange={(v) => update("barPackage", v)}
        required
        error={errors.barPackage}
        legendClass={labelClass}
        errorClass={errorClass}
      />

      <TextField
        id="budget"
        label="Budget for services"
        value={form.budget}
        onChange={(v) => update("budget", v)}
        placeholder="Optional. A rough range is helpful."
      />
      <TextField
        id="details"
        label="Anything specific about your event"
        value={form.details}
        onChange={(v) => update("details", v)}
        placeholder="Theme, flavors, vibe, anything you want me to know."
        multiline
      />

      {/* Referral source */}
      <RadioGroup
        name="referralSource"
        legend="How did you hear about us?"
        options={REFERRAL_OPTIONS}
        value={form.referralSource}
        onChange={(v) => update("referralSource", v)}
        legendClass={labelClass}
        errorClass={errorClass}
      />

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
