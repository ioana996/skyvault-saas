import { describe, it, expect } from 'vitest';
import { defaultFormValues } from '../index';
import type { FormValues } from '../index';

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
