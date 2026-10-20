import { inputClass, labelClass, errorClass } from "./formStyles";

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  min?: string;
  multiline?: boolean;
};

export default function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  error,
  placeholder,
  autoComplete,
  min,
  multiline = false,
}: TextFieldProps) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    value,
    placeholder,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-clover">*</span>}
      </label>
      {multiline ? (
        <textarea
          {...shared}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} min-h-[120px] resize-y`}
          rows={4}
        />
      ) : (
        <input
          {...shared}
          type={type}
          min={min}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )}
      {error && (
        <p id={errorId} className={errorClass}>
          {error}
        </p>
      )}
    </div>
  );
}
