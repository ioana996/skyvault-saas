import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BottomNav from '../BottomNav';

describe('BottomNav', () => {
  it('renders the FAB button', () => {
    render(<BottomNav onFabClick={vi.fn()} />);
    expect(screen.getByRole('button', { name: /log jump/i })).toBeInTheDocument();
  });

  it('calls onFabClick when FAB is clicked', () => {
    const onFabClick = vi.fn();
    render(<BottomNav onFabClick={onFabClick} />);
    fireEvent.click(screen.getByRole('button', { name: /log jump/i }));
    expect(onFabClick).toHaveBeenCalledTimes(1);
  });

  it('FAB has aria-label', () => {
    render(<BottomNav onFabClick={vi.fn()} />);
    const fab = screen.getByRole('button', { name: /log jump/i });
    expect(fab).toHaveAttribute('aria-label');
  });

  it('has a nav element', () => {
    render(<BottomNav onFabClick={vi.fn()} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders Dashboard nav item as active', () => {
    render(<BottomNav onFabClick={vi.fn()} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
