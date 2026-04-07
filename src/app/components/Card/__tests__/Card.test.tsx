import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Hello World</Card>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies bg-sky-surface class', () => {
    const { container } = render(<Card>content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-sky-surface');
  });

  it('applies border-sky-border class', () => {
    const { container } = render(<Card>content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('border-sky-border');
  });

  it('applies rounded-xl class', () => {
    const { container } = render(<Card>content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('rounded-xl');
  });

  it('merges additional className onto the wrapper div', () => {
    const { container } = render(<Card className="p-6">content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('p-6');
  });

  it('does not hardcode padding when no className is provided', () => {
    const { container } = render(<Card>content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).not.toMatch(/\bp-\d/);
    expect(card.className).not.toMatch(/\bpx-\d/);
    expect(card.className).not.toMatch(/\bpy-\d/);
  });

  it('renders a <div> element', () => {
    const { container } = render(<Card>content</Card>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});
