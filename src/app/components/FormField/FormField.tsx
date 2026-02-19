export interface FormFieldProps {
  type: string;
  name: string;
  label: string;
  required?: boolean;
  className?: string;
}
const FormField = ({
  type,
  name,
  label,
  required = false,
  className = "",
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
      />
    </>
  );
};

export default FormField;
