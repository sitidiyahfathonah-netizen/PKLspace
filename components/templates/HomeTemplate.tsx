
import Hero from "../organisms/Hero";
import TipsBanner from "../organisms/TipsBanner";
import Recommendation from "../organisms/Recommendation";
import Footer from "../organisms/Footer";

const HomeTemplate = () => {
  return (
    <div className="w-full bg-white">
      <section className="flex flex-col md:h-[calc(100vh-76px)] md:max-h-[calc(100vh-76px)]">
        <div className="w-full md:h-1/2 md:min-h-0">
          <Hero />
        </div>

        <div className="w-full md:h-1/2 md:min-h-0">
          <TipsBanner />
        </div>
      </section>

      <section className="flex min-h-screen w-full flex-col justify-center md:min-h-[calc(100vh-76px)]">
        <Recommendation companies={[]} />
      </section>

      <Footer />
    </div>
  );
};

export default HomeTemplate;