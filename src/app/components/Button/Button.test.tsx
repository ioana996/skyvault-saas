import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Log Jump</Button>);
    expect(screen.getByRole('button', { name: /log jump/i })).toBeInTheDocument();
  });

  it('applies primary variant classes', () => {
    render(<Button variant="primary">Submit</Button>);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button.className).toContain('bg-sky-primary');
    expect(button.className).toContain('text-white');
  });

  it('applies w-full and min-h-[44px] shared classes', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button.className).toContain('w-full');
    expect(button.className).toContain('min-h-[44px]');
  });

  it('passes type attribute to button element', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('defaults to type="button" when not specified', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('applies additional className when provided', () => {
    render(<Button className="mt-2">Styled</Button>);
    expect(screen.getByRole('button').className).toContain('mt-2');
  });
});
