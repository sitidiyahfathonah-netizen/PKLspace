import React, { InputHTMLAttributes } from 'react';

// Menggunakan React.InputHTMLAttributes agar mendukung semua props input bawaan HTML
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onEnter?: () => void;
}

export const Input = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
  onEnter,
  className = '',
  ...props
}: InputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.();
    }
    onKeyDown?.(e);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 sm:py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${className}`}
      {...props}
    />
  );
};

export default Input;