import { FormFieldProps } from "../components/FormField/FormField";

export const formFields: Omit<FormFieldProps, "className">[] = [
  {
    type: "text",
    name: "dropzone",
    label: "Dropzone",
    required: true,
  },
  {
    type: "date",
    name: "date",
    label: "Date",
    required: true,
  },
  {
    type: "textarea",
    name: "notes",
    label: "Notes",
    required: true,
  },
];
