import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-sky-surface border border-sky-border rounded-xl ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Card;
