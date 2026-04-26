import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatCard from '../StatCard';

describe('StatCard', () => {
  it('renders the value', () => {
    render(<StatCard value={127} label="Total Jumps" />);
    expect(screen.getByText('127')).toBeInTheDocument();
  });

  it('renders the label', () => {
    render(<StatCard value={127} label="Total Jumps" />);
    expect(screen.getByText('Total Jumps')).toBeInTheDocument();
  });

  it('renders string values', () => {
    render(<StatCard value="1:42:15" label="Freefall Time" />);
    expect(screen.getByText('1:42:15')).toBeInTheDocument();
  });

  it('does not use bg-white class (must use theme tokens)', () => {
    const { container } = render(<StatCard value={127} label="Total Jumps" />);
    const card = container.firstChild as HTMLElement;
    expect(card.className).not.toContain('bg-white');
  });
});
