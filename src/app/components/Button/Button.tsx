interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  disabled,
}: ButtonProps) => {
  const variantClasses =
    variant === 'primary'
      ? 'bg-gradient-to-r from-sky-primary to-sky-primary-bright text-white hover:opacity-90 active:opacity-80'
      : '';

  return (
    <button
      type={type}
      className={`w-full min-h-[44px] rounded-lg font-semibold text-[13px] uppercase tracking-[0.08em] transition-opacity ${variantClasses} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
