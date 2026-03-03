"use client";

import { useState } from "react";
import { defaultFormValues, FormValues } from "../types";
import JumpLoggingForm from "../JumpLoggingForm/JumpLoggingForm";

const CreateJumpLoggingForm = () => {
  const [values, setValues] = useState<FormValues>(defaultFormValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submiting form...");
  };

  return (
    <JumpLoggingForm
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateJumpLoggingForm;
