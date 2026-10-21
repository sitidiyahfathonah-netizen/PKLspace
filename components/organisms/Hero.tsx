import { Button } from "../atoms/Button";

const Hero = () => {
  return (
    <section className="flex h-full w-full items-center justify-center overflow-hidden bg-[#F8F9FD] px-4 py-6 sm:px-6 md:px-10 md:py-6">
      <div className="mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-center gap-3 sm:gap-4 md:flex-row md:gap-8">

        {/* Text — 45% */}
        <div className="flex w-full min-w-0 flex-col items-center text-center md:w-[45%] md:shrink-0 md:items-start md:text-left">
          <h1 className="text-xl font-bold leading-tight text-[#243B82] sm:text-2xl md:text-3xl lg:text-[34px] xl:text-4xl">
            Temukan Tempat PKL
            <br />
            yang sesuai dengan jurusanmu
          </h1>

          <p className="mt-1.5 max-w-[480px] text-xs leading-relaxed text-[#6B7280] sm:mt-2 sm:text-sm md:mt-2.5 md:text-sm lg:text-base">
            Jelajahi berbagai pilihan tempat PKL dan bandingkan informasi
            untuk menemukan tempat yang tepat untukmu.
          </p>

          {/* Button — desktop */}
          <div className="mt-3 hidden w-full max-w-[300px] md:block lg:mt-4">
            <Button
              label="Jelajahi"
              href="/katalog"
              fullWidth
              className="h-12 !text-lg"
            />
          </div>
        </div>

        {/* Ilustrasi — 55% */}
        <div className="flex w-full min-w-0 items-center justify-center md:w-[55%]">
          <img
            src="/img/ilustrasi-hero.png"
            alt="Ilustrasi siswa sedang mencari tempat PKL"
            className="h-auto max-h-[160px] w-auto max-w-full object-contain sm:max-h-[200px] md:max-h-[220px] lg:max-h-[280px] xl:max-h-[320px]"
          />
        </div>

        {/* Button — mobile */}
        <div className="w-full max-w-[300px] md:hidden">
          <Button
            label="Jelajahi"
            fullWidth
            href="/katalog"
            className="h-12 !text-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
