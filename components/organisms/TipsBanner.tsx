const TipsBanner = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-[#C9D5FF] px-4 py-4 md:px-8 md:py-2">
      <div className="flex h-full w-full max-w-[1200px] flex-col items-center justify-center">

        {/* Heading */}
        <div className="mb-2 flex shrink-0 items-center justify-center gap-2 sm:mb-2.5 sm:gap-4 md:gap-5">
          <div className="h-[2px] w-8 rounded-full bg-[#64748B] sm:w-14 md:w-16 lg:w-20" />

          <h2 className="text-sm font-bold tracking-wide text-[#1E1B4B] sm:text-base md:text-lg lg:text-xl">
            Tips Singkat Untuk PKL
          </h2>

          <div className="h-[2px] w-8 rounded-full bg-[#64748B] sm:w-14 md:w-16 lg:w-20" />
        </div>

       
{/* Banner */}
<div className="flex min-h-0 w-full flex-1 items-center justify-center px-0.5 sm:px-2">
  <img
    src="/img/tips-banner-pkl.png"
    alt="Tips menghadapi PKL"
    className="h-auto max-h-full max-w-full rounded-lg border border-[#211B55] object-contain"
  />
</div>

      </div>
    </section>
  );
};

export default TipsBanner;
