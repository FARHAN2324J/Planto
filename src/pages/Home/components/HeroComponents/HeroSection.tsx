import { BsPlayCircle } from "react-icons/bs";
import Btn from "../../../../components/ui/BtnUi/Btn";
import profile from "../../../../assets/images/unsplash_3TLl_97HNJo.png";
import Star from "../../../../assets/images/Group 7.png";
import Review from "../../../../components/common/Review";
import ScrollImages from "./ScrollImages";
import { scrollToSection } from "../../../../utils/ScrollTo";

const HeroSection = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:gap-0 gap-20 md:pt-30 pt-20 justify-evenly lg:px-15 md:px-10 px-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-medium xl:text-8xl lg:text-7xl md:text-6xl text-4xl tracking-wide">
            Breath Natureal
          </h1>
          <p className="lg:w-[80%] md:w-auto lg:text-lg text-[15px] w-[95%]">
            With natural plants, purify the air in your home, bring peace to
            your living space, and experience the beauty of nature every day
          </p>
          <div className="flex items-center gap-6">
            <Btn className="border-2" aria-label="Explore our products">
              <span onClick={() => scrollToSection("More")}>Explore</span>
            </Btn>
            <a
              href="https://youtu.be/u46A0WKp2nk?si=-7rgzgfXogC5a8Ex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play live demo"
              className="flex items-center gap-3"
            >
              <BsPlayCircle size={40} />
              <span className="text-sm">Live Demo...</span>
            </a>
          </div>
        </div>
        <ScrollImages />
      </div>
      <Review
        imageProfile={profile}
        altProfile="Alena Profile"
        imageRate={Star}
        altRate="Star 5 Rate"
        content="Your plants have changed my life! Great quality, fast delivery and easy to maintain. I will definitely buy again."
        user="alena Patel"
        className="mt-15 md:mt-0 md:w-sm lg:mx-20 md:mx-10 mx-10"
      />
    </>
  );
};

export default HeroSection;
