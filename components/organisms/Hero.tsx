import { Button } from "../atoms/Button";

const Hero = () => {
  return (
   <section className="flex h-full min-h-0 w-full items-center bg-[#F8F9FD] px-6">
  <div className="mx-auto flex w-full min-w-0 max-w-[1200px] flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row md:gap-12 md:px-10">
    
    <div className="flex w-full min-w-0 max-w-[600px] flex-col items-start">
          <h1 className="text-3xl font-bold leading-tight text-[#243B82] sm:text-4xl">
            Temukan Tempat PKL
            <br />
            yang sesuai dengan jurusanmu
          </h1>

          <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-[#6B7280] sm:text-base">
            Jelajahi berbagai instansi dan perusahaan yang menerima pkl
            sesuai jurusan yang kamu miliki.
          </p>

          <div className="mt-6">
            <Button label="Jelajahi" />
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <img
            src="/img/ilustrasi-hero.png"
            alt="Ilustrasi siswa sedang mencari tempat PKL"
            className="h-auto w-[220px] object-contain sm:w-[260px] md:w-[300px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;