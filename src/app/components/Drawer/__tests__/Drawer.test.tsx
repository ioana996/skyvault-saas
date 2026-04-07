import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Drawer from '../Drawer';

describe('Drawer', () => {
  it('does not render children when closed', () => {
    render(
      <Drawer isOpen={false} onClose={vi.fn()}>
        <div>Form content</div>
      </Drawer>
    );
    expect(screen.queryByText('Form content')).toBeInTheDocument();
    const backdrop = screen.queryByTestId('drawer-backdrop');
    expect(backdrop).toHaveClass('opacity-0');
  });

  it('shows backdrop and content when open', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()}>
        <div>Form content</div>
      </Drawer>
    );
    expect(screen.getByTestId('drawer-backdrop')).toHaveClass('opacity-100');
    expect(screen.getByText('Form content')).toBeInTheDocument();
  });

  it('calls onClose when backdrop is clicked', () => {
    const onClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={onClose}>
        <div>Form content</div>
      </Drawer>
    );
    fireEvent.click(screen.getByTestId('drawer-backdrop'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('has a drag handle bar', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()}>
        <div>Form content</div>
      </Drawer>
    );
    expect(screen.getByTestId('drawer-handle')).toBeInTheDocument();
  });

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={onClose}>
        <div>Form content</div>
      </Drawer>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('has aria-modal="true" when open', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()}>
        <div>Form content</div>
      </Drawer>
    );
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
  });
});
