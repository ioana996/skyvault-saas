import { FormFieldConfig } from '@/lib/types';

export interface FormFieldProps extends FormFieldConfig {
  className?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const baseInputClasses =
  'w-full rounded-lg px-3 bg-sky-surface border border-sky-border text-sky-text placeholder:text-sky-text-subtle focus:outline-none focus:border-sky-primary/40 focus:ring-1 focus:ring-sky-primary/20 min-h-[44px] text-[14px] transition-colors';

const FormField = ({
  type,
  name,
  label,
  required = false,
  className = '',
  value,
  onChange,
}: FormFieldProps) => {
  const inputClasses = `${baseInputClasses} ${className}`.trim();

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-[10px] font-medium text-sky-text-subtle uppercase tracking-[0.12em]"
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          required={required}
          className={`${inputClasses} py-3 min-h-[88px] resize-none`}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          className={`${inputClasses} py-0`}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
