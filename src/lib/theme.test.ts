import { describe, it, expect } from 'vitest';
import { THEME_STORAGE_KEY, THEME_LIGHT_VALUE, THEME_DARK_VALUE } from './theme';

describe('theme constants', () => {
  it('exports THEME_STORAGE_KEY as skyvault-theme', () => {
    expect(THEME_STORAGE_KEY).toBe('skyvault-theme');
  });

  it('exports THEME_LIGHT_VALUE as light', () => {
    expect(THEME_LIGHT_VALUE).toBe('light');
  });

  it('exports THEME_DARK_VALUE as dark', () => {
    expect(THEME_DARK_VALUE).toBe('dark');
  });
});
