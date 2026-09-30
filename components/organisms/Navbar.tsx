import { Logo } from '../atoms/Logo';
import { NavMenu, NavItem } from '../molecules/NavMenu';

const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Katalog', href: '/katalog' },
  { label: 'Tentang', href: '/tentang' },
];

export const Navbar = () => {
  return (
    <header className="w-full bg-indigo-950 px-8 py-4 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <NavMenu items={NAV_ITEMS} />
      </div>
    </header>
  );
};

export default Navbar;