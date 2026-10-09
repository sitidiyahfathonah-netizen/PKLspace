import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export const Logo = ({ href = "/", className = "" }: LogoProps) => {
  return (
    <Link
      href={href}
      className={`group flex shrink-0 items-center gap-1 sm:gap-2 ${className}`}
    >
      <div className="relative -my-2 h-16 w-20 shrink-0 sm:-my-3 sm:h-20 sm:w-24">
        <Image
          src="/img/Logo PKLspace.png"
          alt="PKLspace Logo"
          fill
          sizes="(max-width: 640px) 80px, 96px"
          className="object-contain transition-transform"
          priority
        />
      </div>

      <span className="whitespace-nowrap text-xl font-bold tracking-wide text-blue-300 transition-colors sm:text-2xl">
        PKLspace
      </span>
    </Link>
  );
};

export default Logo;
