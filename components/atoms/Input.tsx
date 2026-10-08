import React, { InputHTMLAttributes } from 'react';

// Menggunakan React.InputHTMLAttributes agar mendukung semua props input bawaan HTML
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({
  placeholder,
  value,
  onChange,
  className = '',
  ...props
}: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-xl bg-[#dbe2ea] px-10 py-4 text-sm text-black placeholder-slate-500 outline-none transition focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
};

export default Input;