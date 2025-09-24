import TrendyPlants from "./HeroComponents/TrendyPlants";
import BgImage from "./HeroComponents/BgImage";
import HeroSection from "./HeroComponents/HeroSection";

const Hero = () => {
  return (
    <header className="relative pt-8 md:pt-0" id="Home-p" role="banner">
      <BgImage />
      <HeroSection />
      <TrendyPlants />
    </header>
  );
};

export default Hero;
