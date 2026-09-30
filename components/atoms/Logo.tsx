import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  href?: string;
  className?: string;
}

export const Logo = ({ href = '/', className = '' }: LogoProps) => {
  return (
    <Link href={href} className={`flex items-center gap-2 group ${className}`}>
      {/* 
        Ukuran div dibuat proporsional (h-16 w-20) agar ikon koper membesar 
        seperti di Figma tanpa membuat jarak ke teks terlalu jauh.
      */}
      <div className="relative h-30 w-50 sm:h-20 sm:w-24 shrink-0 -my-3">
        <Image
          src="/img/Logo PKLspace.png"
          alt="PKLspace Logo"
          fill
          className="object-contain transition-transform "
          priority
        />
      </div>
      <span className="text-2xl font-bold text-blue-300 tracking-wide transition-colors">
        PKLspace
      </span>
    </Link>
  );
};

export default Logo;