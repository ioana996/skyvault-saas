import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';

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

describe('Home page', () => {
  it('renders HeroStats section', () => {
    render(<Home />);
    expect(screen.getByText('127')).toBeInTheDocument();
  });

  it('renders the Log Jump form', () => {
    render(<Home />);
    const logJumpButtons = screen.getAllByRole('button', { name: /log jump/i });
    expect(logJumpButtons.length).toBeGreaterThan(0);
  });

  it('renders mobile bottom nav', () => {
    render(<Home />);
    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument();
  });

  it('drawer is initially closed', () => {
    render(<Home />);
    const backdrop = screen.getByTestId('drawer-backdrop');
    expect(backdrop).toHaveClass('opacity-0');
  });

  it('clicking FAB opens the drawer', () => {
    render(<Home />);
    // The FAB has aria-label="Log Jump" — find it specifically (not the form submit button)
    const fab = screen.getByLabelText('Log Jump');
    fireEvent.click(fab);
    expect(screen.getByTestId('drawer-backdrop')).toHaveClass('opacity-100');
  });
});
