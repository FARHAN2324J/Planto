import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Style from "../../../../components/ui/Card/Card.module.css";
import RoseGold from "../../../../assets/images/Rose Gold Feminine Calligraphy Monogram Logo(15) 1 (2).webp";
import RoseGold2 from "../../../../assets/images/ss.webp";
import { Autoplay, Navigation } from "swiper/modules";
import Btn from "../../../../components/ui/BtnUi/Btn";
import { scrollToSection } from "../../../../utils/ScrollTo";

const ScrollImages = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className={`s xl:w-[30%] lg:w-[75%] md:w-[95%] w-[100%]`}
      >
        <SwiperSlide className={`${Style.card} pb-4`}>
          <div className="lg:w-[350px] lg:h-[350px] m-auto md:w-[200px] md:h-[200px] w-[250px] h-[250px]">
            <img
              src={RoseGold2}
              className="-translate-y-10 h-auto m-auto max-w-full max-h-full"
              alt="Cactus"
              loading="lazy"
            />
          </div>
          <div className="pb-5 md:px-15 px-10  flex flex-col gap-2">
            <p className="font-light">Low-maintenance Plant</p>
            <div className="flex flex-col gap-3 items-start">
              <span className="xl:text-2xl lg:text-xl text-2xl">Cactus</span>
              <Btn
                className="border-1"
                aria-label="Buy"
                onClick={() => scrollToSection("More")}
              >
                Buy Now
              </Btn>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${Style.card} pb-4`}>
          <div className="lg:w-[350px] lg:h-[350px] m-auto  md:w-[200px] md:h-[200px] w-[250px] h-[250px]">
            <img
              src={RoseGold}
              className="-translate-y-10 h-auto max-w-full max-h-full"
              alt="Calathea Plant"
              loading="lazy"
            />
          </div>
          <div className="pb-5 md:px-15 px-10  flex flex-col gap-2">
            <p className="font-light">Trendy House Plant</p>
            <div className="flex flex-col gap-3 items-start">
              <span className="xl:text-2xl lg:text-xl text-2xl">
                Calathea Plant
              </span>
              <Btn
                className="border-1"
                aria-label="Buy"
                onClick={() => scrollToSection("More")}
              >
                Buy Now
              </Btn>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ScrollImages;
