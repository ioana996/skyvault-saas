import { FormFieldConfig } from '@/lib/types';

export interface FormFieldProps extends FormFieldConfig {
  className?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const baseInputClasses =
  'w-full rounded-lg px-3 bg-sky-surface border border-sky-surface-mid text-sky-text placeholder:text-sky-text-subtle focus:outline-none focus:ring-2 focus:ring-sky-primary min-h-[44px] text-[15px]';

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
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-sm font-medium text-sky-text-muted"
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
