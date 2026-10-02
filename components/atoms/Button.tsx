'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  variant?: 'primary' | 'dark' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  label,
  variant = 'dark',
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Base styles: rounded-full untuk efek kapsul melengkung persis di Figma
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    // Varian 'dark': Tombol "Jelajahi" di Hero Figma (Biru-Ungu Peat)
    dark: 'bg-[#181838] text-white hover:bg-[#252552]',
    // Varian 'primary': Biru standar
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    // Varian 'secondary': Abu-abu terang / Putih
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300',
    // Varian 'outline': Garis tepi
    outline: 'border border-[#181838] text-[#181838] hover:bg-[#181838]/10',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children || label}
    </button>
  );
};

export default Button;