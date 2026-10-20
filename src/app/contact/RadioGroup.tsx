import type { InquiryOption } from "@/lib/inquiryOptions";

type RadioGroupProps = {
  name: string;
  legend: string;
  options: InquiryOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  /** "inline" renders compact dots, "panel" renders selectable tiles */
  variant?: "inline" | "panel";
  legendClass: string;
  errorClass: string;
};

function Dot({ selected }: { selected: boolean }) {
  return (
    <span
      className={`shrink-0 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-colors duration-150 ${
        selected ? "border-forest" : "border-[#C9C3B8]"
      }`}
    >
      {selected && <span className="w-2 h-2 rounded-full bg-forest" />}
    </span>
  );
}

export default function RadioGroup({
  name,
  legend,
  options,
  value,
  onChange,
  required = false,
  error,
  variant = "panel",
  legendClass,
  errorClass,
}: RadioGroupProps) {
  const isPanel = variant === "panel";
  const errorId = `${name}-error`;

  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className={legendClass}>
        {legend} {required && <span className="text-clover">*</span>}
      </legend>
      <div
        className={
          isPanel
            ? "grid grid-cols-1 md:grid-cols-2 gap-3"
            : "flex flex-wrap gap-x-6 gap-y-3"
        }
      >
        {options.map((option) => {
          const selected = value === option.value;
          return (
            <label
              key={option.value}
              className={
                isPanel
                  ? `flex items-start gap-3 cursor-pointer bg-[#FFFFFF] border rounded-[2px] py-3 px-4 transition-colors duration-150 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-forest/40 ${
                      selected
                        ? "border-forest"
                        : "border-[#D6D1C7] hover:border-forest/50"
                    }`
                  : "flex items-center gap-2 cursor-pointer"
              }
            >
              <span className={isPanel ? "mt-1" : undefined}>
                <Dot selected={selected} />
              </span>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <span className="flex flex-col">
                <span className="font-body text-sm text-ink">
                  {option.value}
                </span>
                {option.description && (
                  <span className="mt-0.5 font-body text-[13px] leading-snug text-ink/60">
                    {option.description}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id={errorId} className={errorClass}>
          {error}
        </p>
      )}
    </fieldset>
  );
}
