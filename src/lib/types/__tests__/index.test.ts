import { describe, it, expect } from 'vitest';
import { defaultFormValues } from '../index';
import type { FormValues, FormFieldConfig } from '../index';

describe('FormValues', () => {
  it('defaultFormValues has all required fields with empty strings', () => {
    const defaults: FormValues = defaultFormValues;
    expect(defaults.dropzone).toBe('');
    expect(defaults.date).toBe('');
    expect(defaults.notes).toBe('');
  });

  it('defaultFormValues has exactly three keys', () => {
    expect(Object.keys(defaultFormValues)).toHaveLength(3);
  });
});

describe('FormFieldConfig', () => {
  it('accepts an object with required type, name, and label fields', () => {
    const config: FormFieldConfig = { type: 'text', name: 'dropzone', label: 'Dropzone' };
    expect(config.type).toBe('text');
    expect(config.name).toBe('dropzone');
    expect(config.label).toBe('Dropzone');
  });

  it('accepts an optional required field', () => {
    const config: FormFieldConfig = { type: 'date', name: 'date', label: 'Date', required: true };
    expect(config.required).toBe(true);
  });

  it('required field is optional (defaults to undefined)', () => {
    const config: FormFieldConfig = { type: 'text', name: 'notes', label: 'Notes' };
    expect(config.required).toBeUndefined();
  });
});
