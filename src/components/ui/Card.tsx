import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export const Card = ({
  children,
  className = '',
  style
}: CardProps) => {
  return <div className={`glass-effect rounded-xl p-6 hover:border-[#0052D4]/30 transition-all flex flex-col h-full hover-glow ${className}`} style={style}>
      {children}
    </div>;
};