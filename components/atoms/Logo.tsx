import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ href = "/", className = "", onClick }: LogoProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex shrink-0 items-center gap-1 sm:gap-2 ${className}`}
    >
      <div className="relative -my-2 h-12 w-14 shrink-0 sm:-my-3 sm:h-20 sm:w-24">
        <Image
          src="/img/Logo PKLspace.png"
          alt="PKLspace Logo"
          fill
          sizes="(max-width: 640px) 56px, 96px"
          className="object-contain transition-transform"
          priority
        />
      </div>

      <span className="whitespace-nowrap text-lg font-bold tracking-wide text-blue-300 transition-colors sm:text-2xl">
        PKLspace
      </span>
    </Link>
  );
};

export default Logo;
