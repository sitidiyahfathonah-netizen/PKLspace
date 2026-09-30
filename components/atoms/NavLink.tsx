'use client';

import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export const NavLink = ({ href, label, isActive = false }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`relative py-1 text-sm font-semibold transition-colors hover:text-white ${
        isActive ? 'text-blue-300' : 'text-gray-300'
      }`}
    >
      {label}
      {/* Underline aktif sesuai desain Figma */}
      {isActive && (
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-400 rounded-full" />
      )}
    </Link>
  );
};