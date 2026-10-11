import { Button } from "../atoms/Button";

const Hero = () => {
  return (
    <section className="flex h-full w-full items-center justify-center overflow-hidden bg-[#F8F9FD] px-4 py-6 sm:px-6 md:px-10 md:py-2">
      <div className="mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-center gap-3 sm:gap-4 md:flex-row md:justify-between md:gap-8">

        {/* Text */}
        <div className="flex w-full max-w-[580px] flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-xl font-bold leading-tight text-[#243B82] sm:text-2xl md:text-3xl lg:text-[34px] xl:text-4xl">
            Temukan Tempat PKL
            <br />
            yang sesuai dengan jurusanmu
          </h1>

          <p className="mt-1.5 max-w-[480px] text-xs leading-relaxed text-[#6B7280] sm:mt-2 sm:text-sm md:mt-2.5 md:text-sm lg:text-base">
            Jelajahi berbagai instansi dan perusahaan yang menerima PKL
            sesuai jurusan yang kamu miliki.
          </p>

          {/* Button — visible on desktop only */}
          <div className="mt-3 hidden md:block lg:mt-4">
            <Button label="Jelajahi" />
          </div>
        </div>

        {/* Ilustrasi */}
        <div className="flex shrink-0 items-center justify-center">
          <img
            src="/img/ilustrasi-hero.png"
            alt="Ilustrasi siswa sedang mencari tempat PKL"
            className="h-auto max-h-[160px] w-auto max-w-full object-contain sm:max-h-[200px] md:max-h-[180px] lg:max-h-[220px] xl:max-h-[250px]"
          />
        </div>

        {/* Button — visible on mobile only */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:hidden">
          <Button label="Jelajahi" fullWidth size="lg" />
        </div>

      </div>
    </section>
  );
};

export default Hero;

