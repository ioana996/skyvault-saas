import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormField from '../FormField';

const noop = vi.fn();

describe('FormField', () => {
  it('renders a label linked to the input', () => {
    render(
      <FormField type="text" name="dropzone" label="Dropzone" value="" onChange={noop} />
    );
    expect(screen.getByLabelText('Dropzone')).toBeInTheDocument();
  });

  it('renders an <input> for type="text"', () => {
    render(
      <FormField type="text" name="dropzone" label="Dropzone" value="Skydive Chicago" onChange={noop} />
    );
    const input = screen.getByLabelText('Dropzone');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders a <textarea> for type="textarea"', () => {
    render(
      <FormField type="textarea" name="notes" label="Notes" value="great jump" onChange={noop} />
    );
    const textarea = screen.getByLabelText('Notes');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('renders a <input type="date"> for type="date"', () => {
    render(
      <FormField type="date" name="date" label="Date" value="2026-04-07" onChange={noop} />
    );
    const input = screen.getByLabelText('Date');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'date');
  });

  it('does not render a <br> element', () => {
    const { container } = render(
      <FormField type="text" name="dropzone" label="Dropzone" value="" onChange={noop} />
    );
    expect(container.querySelector('br')).toBeNull();
  });

  it('applies className to the input', () => {
    render(
      <FormField type="text" name="dropzone" label="Dropzone" value="" onChange={noop} className="custom-class" />
    );
    expect(screen.getByLabelText('Dropzone')).toHaveClass('custom-class');
  });

  it('passes required attribute', () => {
    render(
      <FormField type="text" name="dropzone" label="Dropzone" value="" onChange={noop} required />
    );
    expect(screen.getByLabelText('Dropzone')).toBeRequired();
  });
});
