import { formFields } from '@/app/data/form-fields';
import FormField from '../FormField/FormField';
import { FormValues } from '@/lib/types';

interface JumpLoggingFormProps {
  values: FormValues;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const JumpLoggingForm = ({
  values,
  onChange,
  onSubmit,
}: JumpLoggingFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {formFields.map((fieldConfig) => (
        <FormField
          key={fieldConfig.name}
          {...fieldConfig}
          value={values[fieldConfig.name as keyof FormValues]}
          onChange={onChange}
        />
      ))}
      <button
        type="submit"
        className="w-full mt-2 min-h-[44px] rounded-lg bg-sky-primary text-white font-semibold text-[15px] hover:bg-blue-600 active:bg-blue-700 transition-colors"
      >
        Log Jump
      </button>
    </form>
  );
};

export default JumpLoggingForm;
