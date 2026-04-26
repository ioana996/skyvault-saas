import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import JumpLoggingForm from '../JumpLoggingForm';

const noop = vi.fn();
const defaultValues = { dropzone: '', date: '', notes: '' };

describe('JumpLoggingForm', () => {
  it('renders all three form fields', () => {
    render(
      <JumpLoggingForm values={defaultValues} onChange={noop} onSubmit={noop} />
    );
    expect(screen.getByLabelText('Dropzone')).toBeInTheDocument();
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Notes')).toBeInTheDocument();
  });

  it('renders a submit button with text "Log Jump"', () => {
    render(
      <JumpLoggingForm values={defaultValues} onChange={noop} onSubmit={noop} />
    );
    expect(screen.getByRole('button', { name: /log jump/i })).toBeInTheDocument();
  });

  it('submit button is type="submit"', () => {
    render(
      <JumpLoggingForm values={defaultValues} onChange={noop} onSubmit={noop} />
    );
    expect(screen.getByRole('button', { name: /log jump/i })).toHaveAttribute('type', 'submit');
  });

  it('submit button has full-width styling class', () => {
    render(
      <JumpLoggingForm values={defaultValues} onChange={noop} onSubmit={noop} />
    );
    const button = screen.getByRole('button', { name: /log jump/i });
    expect(button.className).toContain('w-full');
  });

  it('calls onSubmit when form is submitted', async () => {
    const handleSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    render(
      <JumpLoggingForm values={defaultValues} onChange={noop} onSubmit={handleSubmit} />
    );
    fireEvent.submit(screen.getByRole('button', { name: /log jump/i }).closest('form')!);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders the Notes field as a textarea', () => {
    render(
      <JumpLoggingForm values={defaultValues} onChange={noop} onSubmit={noop} />
    );
    const notes = screen.getByLabelText('Notes');
    expect(notes.tagName).toBe('TEXTAREA');
  });
});
