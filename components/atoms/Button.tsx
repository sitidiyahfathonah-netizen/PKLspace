"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  variant?: "primary" | "dark" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
}

export const Button = ({
  children,
  label,
  variant = "dark",
  size = "md",
  fullWidth = false,
  rounded = "md",
  className = "",
  onClick,
  type = "button",
  href,
  ...props
}: ButtonProps) => {
  // Base styles: sudut rounded-md sesuai desain UI yang lebih modern dan proporsional
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const variants = {
    // Varian 'dark': Tombol "Jelajahi" di Hero (Biru-Ungu Gelap / Dark Navy)
    dark: "bg-indigo-950 text-white hover:bg-[#252552]",
    // Varian 'primary': Biru standar
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    // Varian 'secondary': Abu-abu terang / Putih
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
    // Varian 'outline': Garis tepi
    outline: "border border-[#181838] text-[#181838] hover:bg-[#181838]/10",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const combinedClassName = `${baseStyles} ${roundedClasses[rounded]} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        onClick={
          onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
        }
      >
        {children || label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children || label}
    </button>
  );
};

export default Button;
