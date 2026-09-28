'use client';

import { usePathname } from 'next/navigation';
import { NavLink } from '../atoms/NavLink';

export interface NavItem {
  label: string;
  href: string;
}

interface NavMenuProps {
  items: NavItem[];
}

export const NavMenu = ({ items }: NavMenuProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={isActive}
          />
        );
      })}
    </nav>
  );
};