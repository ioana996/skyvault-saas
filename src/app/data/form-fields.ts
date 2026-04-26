import { FormFieldConfig } from '@/lib/types';

export const formFields: FormFieldConfig[] = [
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
