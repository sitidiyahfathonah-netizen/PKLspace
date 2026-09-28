import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  href?: string;
}

export const Logo = ({ href = '/' }: LogoProps) => {
  return (
    <Link href={href} className="flex items-center gap-3">
      {/* Ganti /logo.png sesuai dengan path aset logo Anda */}
      <div className="relative h-10 w-10">
        <Image
          src="/img/logo-pklspace.jpg" 
          alt="PKLspace Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-xl font-bold text-white tracking-wide">
        PKLspace
      </span>
    </Link>
  );
};