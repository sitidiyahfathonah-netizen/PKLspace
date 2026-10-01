"use client";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium 
      text-white transition-colors hover:bg-blue-700">
      {label}
    </button>
  );
};