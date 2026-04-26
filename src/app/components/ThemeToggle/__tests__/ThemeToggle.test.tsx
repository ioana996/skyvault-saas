import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

beforeEach(() => {
  localStorageMock.clear();
  document.documentElement.removeAttribute('data-theme');
});

describe('ThemeToggle', () => {
  it('renders a button with role="switch"', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('has aria-label', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-label');
  });

  it('is keyboard operable with Space key', () => {
    render(<ThemeToggle />);
    const toggle = screen.getByRole('switch');
    fireEvent.keyDown(toggle, { key: ' ' });
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('is keyboard operable with Enter key', () => {
    render(<ThemeToggle />);
    const toggle = screen.getByRole('switch');
    fireEvent.keyDown(toggle, { key: 'Enter' });
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('clicking the toggle switches to light theme and persists to localStorage', () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('switch'));
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorageMock.getItem('skyvault-theme')).toBe('light');
  });

  it('clicking again switches back to dark theme', () => {
    render(<ThemeToggle />);
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);
    fireEvent.click(toggle);
    expect(document.documentElement.getAttribute('data-theme')).toBeNull();
    expect(localStorageMock.getItem('skyvault-theme')).toBe('dark');
  });
});
