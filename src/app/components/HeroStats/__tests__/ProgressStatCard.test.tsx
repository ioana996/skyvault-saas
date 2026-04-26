import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProgressStatCard from '../ProgressStatCard';

describe('ProgressStatCard', () => {
  const defaultProps = {
    title: 'C-License',
    label: 'Next License Goal',
    current: 127,
    required: 200,
    progress: 64,
  };

  it('renders the title', () => {
    render(<ProgressStatCard {...defaultProps} />);
    expect(screen.getByText('C-License')).toBeInTheDocument();
  });

  it('renders the label', () => {
    render(<ProgressStatCard {...defaultProps} />);
    expect(screen.getByText('Next License Goal')).toBeInTheDocument();
  });

  it('has role="progressbar" on the progress bar element', () => {
    render(<ProgressStatCard {...defaultProps} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('has aria-valuenow equal to progress', () => {
    render(<ProgressStatCard {...defaultProps} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '64');
  });

  it('has aria-valuemin="0" and aria-valuemax="100"', () => {
    const { getByRole } = render(<ProgressStatCard {...defaultProps} />);
    const el = getByRole('progressbar');
    expect(el).toHaveAttribute('aria-valuemin', '0');
    expect(el).toHaveAttribute('aria-valuemax', '100');
  });

  it('has aria-label describing the progress bar', () => {
    render(<ProgressStatCard {...defaultProps} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label');
  });
});
