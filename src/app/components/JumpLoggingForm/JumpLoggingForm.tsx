import { formFields } from "@/app/data/form-fields";
import FormField from "../FormField/FormField";

const JumpLogginForm = () => {
  return (
    <form className="flex flex-row justify-between">
      {formFields.map((fieldConfig) => (
        <FormField
          key={fieldConfig.name}
          type={fieldConfig.type}
          name={fieldConfig.name}
          label={fieldConfig.label}
          required={fieldConfig.required}
          className="border-4 border-indigo-500"
        />
      ))}
    </form>
  );
};

export default JumpLogginForm;
