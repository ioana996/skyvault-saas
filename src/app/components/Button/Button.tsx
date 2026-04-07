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
      ? 'bg-sky-primary text-white hover:bg-blue-600 active:bg-blue-700'
      : '';

  return (
    <button
      type={type}
      className={`w-full min-h-[44px] rounded-lg font-semibold text-[15px] transition-colors ${variantClasses} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
