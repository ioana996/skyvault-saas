import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroStats from '../HeroStats';

describe('HeroStats', () => {
  it('renders the hero jump count prominently', () => {
    render(<HeroStats />);
    expect(screen.getByText('127')).toBeInTheDocument();
  });

  it('renders "Total Jumps" label', () => {
    render(<HeroStats />);
    expect(screen.getByText('Total Jumps')).toBeInTheDocument();
  });

  it('renders freefall time stat', () => {
    render(<HeroStats />);
    expect(screen.getByText('Total Freefall')).toBeInTheDocument();
  });

  it('renders days since last jump stat', () => {
    render(<HeroStats />);
    expect(screen.getByText('Days Since Jump')).toBeInTheDocument();
  });

  it('renders the license progress card', () => {
    render(<HeroStats />);
    expect(screen.getByText('Next License Goal')).toBeInTheDocument();
  });

  it('renders achievement badge for 100+ jumps', () => {
    render(<HeroStats />);
    expect(screen.getByText(/Century Jumper/i)).toBeInTheDocument();
  });

  it('does not use flex gap-8 layout (non-wrapping)', () => {
    const { container } = render(<HeroStats />);
    const root = container.firstChild as HTMLElement;
    expect(root.className).not.toBe('flex gap-8 mb-8');
  });
});
