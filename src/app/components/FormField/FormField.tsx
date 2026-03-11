export interface FormFieldProps {
  type: string;
  name: string;
  label: string;
  required?: boolean;
  className?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
const FormField = ({
  type,
  name,
  label,
  required = false,
  className = "",
  value,
  onChange,
}: FormFieldProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <br></br>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className={className}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FormField;
