import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#0052D4] hover-glow';
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#0052D4] to-[#4364F7] text-white hover:shadow-lg hover:shadow-[#0052D4]/20 transform hover:-translate-y-0.5 btn-primary',
    outline: 'bg-gray-900/50 border border-gray-700 text-white hover:border-white/30 hover:bg-gray-800/50'
  };
  const sizeStyles = {
    sm: 'text-xs px-3 py-1',
    md: 'px-6 py-2.5',
    lg: 'text-lg px-8 py-3.5'
  };
  return <button onClick={onClick} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>;
};