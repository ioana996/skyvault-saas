import { formFields } from '@/app/data/form-fields';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
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
      <Button type="submit" className="mt-2">Log Jump</Button>
    </form>
  );
};

export default JumpLoggingForm;
