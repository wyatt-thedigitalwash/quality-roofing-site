'use client';

import { useState, type FormEvent } from 'react';
import { Field, SelectField, TextField, borderFor, controlBase } from './FormFields';

type Status = 'idle' | 'sending' | 'success' | 'error';
type FieldErrors = Record<string, string>;

const BUILDING_TYPES = ['Residential', 'Commercial', 'Multi-Housing'];
const ROOFING_TYPES = ['Shingle', 'Metal', 'Flat / Single Ply', 'Tile', 'Built Up', 'Other'];
const YES_NO = ['Yes', 'No'];

function validate(data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (data.phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.';
  if (!data.message.trim()) errors.message = 'Please tell us about your project or question.';
  return errors;
}

const legendClass = 'mb-5 text-xl font-normal text-[#252525] font-[family-name:var(--font-dm-serif)]';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const nextErrors = validate(data);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      setStatus('idle');
      setSubmitError('');
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setStatus('sending');
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error);
      }
      setStatus('success');
    } catch (err) {
      setSubmitError(
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong. Please try again or call us at (813) 620-4797.'
      );
      setStatus('error');
    }
  }

  function clearError(name: string) {
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-lg bg-[#154D29]/5 p-8 text-center">
        <h3 className="text-2xl font-normal text-[#154D29] font-[family-name:var(--font-dm-serif)]">
          Thank You
        </h3>
        <p className="mt-3 text-base text-[#252525]/70">
          Your request has been submitted. Our team will be in touch within one business day. If
          you need immediate assistance, call us at{' '}
          <a href="tel:8136204797" className="tap-target font-semibold text-[#154D29]">
            (813) 620-4797
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={(e) => clearError((e.target as EventTarget as HTMLInputElement).name)}
      noValidate
      className="space-y-10"
    >
      <p className="-mt-4 text-sm text-[#252525]/70">Fields marked with * are required.</p>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset>
        <legend className={legendClass}>Your Information</legend>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <TextField
            name="name"
            label="Full Name"
            required
            autoComplete="name"
            maxLength={100}
            error={errors.name}
            className="sm:col-span-2"
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            error={errors.email}
          />
          <TextField
            name="phone"
            label="Phone"
            type="tel"
            required
            autoComplete="tel"
            maxLength={40}
            error={errors.phone}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend className={legendClass}>Project Details</legend>
        <div className="space-y-5">
          <TextField
            name="streetAddress"
            label="Street Address"
            autoComplete="street-address"
            maxLength={200}
          />

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            <TextField
              name="city"
              label="City"
              autoComplete="address-level2"
              maxLength={100}
              className="col-span-2"
            />
            <TextField
              name="state"
              label="State"
              autoComplete="address-level1"
              defaultValue="FL"
              maxLength={50}
            />
            <TextField
              name="zip"
              label="Zip"
              autoComplete="postal-code"
              inputMode="numeric"
              maxLength={20}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <SelectField name="buildingType" label="Building Type" options={BUILDING_TYPES} />
            <SelectField name="roofingType" label="Roofing Type" options={ROOFING_TYPES} />
            <SelectField name="pendingSale" label="Pending Sale / Closing?" options={YES_NO} />
          </div>

          <Field id="message" label="Message" required error={errors.message}>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              rows={5}
              maxLength={2000}
              placeholder="Tell us about your project or question"
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${controlBase} ${borderFor(errors.message)} block resize-y py-3`}
            />
          </Field>
        </div>
      </fieldset>

      <div>
        {status === 'error' && (
          <p role="alert" className="mb-4 text-sm text-[#B42318]">
            {submitError}
          </p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded bg-[#154D29] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154D29]/85 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:w-auto"
        >
          {status === 'sending' ? 'Sending...' : 'Submit Request'}
        </button>
      </div>
    </form>
  );
}
