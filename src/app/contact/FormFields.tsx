import type { InputHTMLAttributes, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export const controlBase =
  'w-full rounded border bg-white px-4 text-base text-[#252525] placeholder:text-[#252525]/65 transition-colors duration-200 focus:border-[#154D29] focus:outline-none focus:ring-2 focus:ring-[#154D29]';

export const borderFor = (error?: string) => (error ? 'border-[#B42318]' : 'border-[#949494]');

export function Field({
  id,
  label,
  required,
  error,
  className = '',
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#252525]">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-[#154D29]">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-[#B42318]">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  name,
  label,
  error,
  required,
  className,
  type = 'text',
  ...inputProps
}: {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Field id={name} label={label} required={required} error={error} className={className}>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${controlBase} ${borderFor(error)} h-12`}
        {...inputProps}
      />
    </Field>
  );
}

export function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <Field id={name} label={label}>
      <div className="relative">
        <select
          id={name}
          name={name}
          defaultValue=""
          className={`${controlBase} ${borderFor()} h-12 appearance-none pr-10`}
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-[#252525]/70"
        />
      </div>
    </Field>
  );
}
