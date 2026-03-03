import { formFields } from "@/app/data/form-fields";
import FormField from "../FormField/FormField";
import { FormValues } from "../types";

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
    <form onSubmit={onSubmit} className="flex flex-row justify-between">
      {formFields.map((fieldConfig) => (
        <FormField
          key={fieldConfig.name}
          {...fieldConfig}
          value={values[fieldConfig.name as keyof FormValues]}
          onChange={onChange}
          className="border-4 border-indigo-500"
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default JumpLoggingForm;
