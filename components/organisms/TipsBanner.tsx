const TipsBanner = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-[#C9D5FF] px-4 py-3 sm:px-6 sm:py-4">
      <div className="flex h-full max-h-full w-full max-w-[900px] flex-col items-center justify-center">
        {/* Section Heading with Divider Lines */}
        <div className="mb-2 flex shrink-0 items-center justify-center gap-3 sm:mb-3 sm:gap-5">
          <div className="h-[2px] w-8 rounded-full bg-[#64748B] sm:w-16 md:w-20" />
          <h2 className="text-base font-bold tracking-wide text-[#1E1B4B] sm:text-lg md:text-xl">
            Tips Singkat Untuk PKL
          </h2>
          <div className="h-[2px] w-8 rounded-full bg-[#64748B] sm:w-16 md:w-20" />
        </div>

        {/* Banner Card - Tidak terpotong */}
       <div className="mx-auto w-full w-full px-2">
          <img
            src="/img/tips-banner-pkl.png"
            alt="Tips menghadapi PKL"
           className="h-[280px] w-[calc(100vw-40px)] rounded-lg border border-[#211B55] object-fill"/>
        </div>
      </div>
    </section>
  );
};

export default TipsBanner;


