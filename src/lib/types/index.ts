export type FormValues = {
  dropzone: string;
  date: string;
  notes: string;
};

export const defaultFormValues: FormValues = {
  dropzone: '',
  date: '',
  notes: '',
};

export type FormFieldConfig = {
  type: string;
  name: string;
  label: string;
  required?: boolean;
};
