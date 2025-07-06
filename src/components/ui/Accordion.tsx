import React from 'react';
import { ChevronDown } from 'lucide-react';
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  style?: React.CSSProperties;
}
export const Accordion = ({
  title,
  children,
  isOpen,
  onToggle,
  className = '',
  style
}: AccordionProps) => {
  return <div className={`border border-gray-800 rounded-xl overflow-hidden hover-glow mesh-hover ${className}`} style={style}>
      <button className={`w-full flex items-center justify-between p-5 text-left font-space transition-colors ${isOpen ? 'bg-gray-900 text-white' : 'bg-gray-900/50 text-gray-300 hover:bg-gray-900/80'}`} onClick={onToggle}>
        <span>{title}</span>
        <ChevronDown size={20} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-5 bg-gray-900/30">{children}</div>
      </div>
    </div>;
};