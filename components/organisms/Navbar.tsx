"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "../atoms/Logo";
import { NavMenu } from "../molecules/NavMenu";
import Link from "next/link";
import { Home, LayoutGrid, Info, X } from "lucide-react";

interface SidebarNavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SIDEBAR_ITEMS: SidebarNavItem[] = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Katalog", href: "/katalog", icon: LayoutGrid },
  { label: "Tentang", href: "/About", icon: Info },
];

const DESKTOP_NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Katalog", href: "/katalog" },
  { label: "Tentang", href: "/About" },
];

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Tutup sidebar saat route berubah
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Kunci scroll body saat sidebar terbuka
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <>
      <header className="relative z-40 w-full bg-indigo-950 px-4 py-3 text-white shadow-md sm:px-8 sm:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Logo />

          {/* Desktop nav links */}
          <div className="hidden md:block">
            <NavMenu items={DESKTOP_NAV_ITEMS} />
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Buka menu navigasi"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ===== MOBILE SIDEBAR DRAWER ===== */}

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          sidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        className={`fixed left-3 top-3 bottom-3 z-50 flex w-[260px] max-w-[calc(100vw-24px)] flex-col justify-between rounded-3xl bg-[#161942] p-4 text-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-[120%]"
        }`}
      >
        <div>
          {/* Sidebar header */}
          <div className="flex items-center justify-between border-b border-white/10 px-1 pb-3 pt-1">
            <Logo onClick={closeSidebar} />

            <button
              type="button"
              onClick={closeSidebar}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8C98C3] transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Tutup menu navigasi"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar nav links */}
          <nav className="mt-4">
            <ul className="flex flex-col gap-2">
              {SIDEBAR_ITEMS.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeSidebar}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-[#282F63] text-white shadow-sm border-l-4 border-[#3862FA]"
                          : "text-[#A2AFD3] hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <IconComponent className="h-5 w-5 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="px-2 pt-4">
          <p className="text-xs leading-relaxed text-[#7E8BAE]">
            © {new Date().getFullYear()} PKLspace
            <br />
            SMKN 2 Sumedang
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;