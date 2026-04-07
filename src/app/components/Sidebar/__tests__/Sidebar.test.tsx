import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';

// Mock localStorage and matchMedia (needed because Sidebar renders ThemeToggle)
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
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

describe('Sidebar', () => {
  it('renders the SkyVault brand name', () => {
    render(<Sidebar />);
    expect(screen.getByText('SkyVault')).toBeInTheDocument();
  });

  it('renders Dashboard as the active nav item', () => {
    render(<Sidebar />);
    const dashboard = screen.getByText('Dashboard');
    expect(dashboard.closest('[aria-current="page"]')).toBeTruthy();
  });

  it('renders disabled nav items: Logbook, Gear, Progression, Stats', () => {
    render(<Sidebar />);
    expect(screen.getByText('Logbook')).toBeInTheDocument();
    expect(screen.getByText('Gear')).toBeInTheDocument();
    expect(screen.getByText('Progression')).toBeInTheDocument();
    expect(screen.getByText('Stats')).toBeInTheDocument();
  });

  it('non-active nav items have cursor-default styling', () => {
    render(<Sidebar />);
    const logbook = screen.getByText('Logbook').closest('div');
    expect(logbook?.className).toContain('cursor-default');
  });

  it('renders a ThemeToggle inside the sidebar', () => {
    render(<Sidebar />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('has a nav element with aria-label', () => {
    render(<Sidebar />);
    expect(screen.getByRole('navigation', { name: /sidebar/i })).toBeInTheDocument();
  });
});
