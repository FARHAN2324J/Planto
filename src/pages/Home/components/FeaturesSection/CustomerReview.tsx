import Review from "../../../../components/common/Review";
import Info from "../../../../components/common/Info";
import user1 from "../../../../assets/images/unsplash__7LbC5J-jw4 (1).png";
import user2 from "../../../../assets/images/unsplash__7LbC5J-jw4 (2).png";
import user3 from "../../../../assets/images/unsplash__7LbC5J-jw4.png";
import user4 from "../../../../assets/images/unsplash_ZHvM3XIOHoE.png";

import Star from "../../../../assets/images/Group 7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const CustomerReview = () => {
  const slides = [
    {
      id: 1,
      imageProfile: user1,
      altProfile: "Maxn Raval Profile",
      imageRate: Star,
      altRate: "Star 5 Rate",
      content:
        "You have beautifully captured the natural atmosphere of our home. Now we wake up every day with fresh air and positive energy. It is truly amazing!",
      user: "venely k",
    },
    {
      id: 2,
      imageProfile: user2,
      altProfile: " Profile",
      imageRate: Star,
      altRate: "Star 5 Rate",
      content:
        "We experience the peace and beauty of nature every day at home. I recommend it!",
      user: "Max Makvana",
    },
    {
      id: 3,
      imageProfile: user4,
      altProfile: " Profile",
      imageRate: Star,
      altRate: "Star 5 Rate",
      content: "We received healthy and fresh plants.",
      user: "Alina Thakur",
    },
    {
      id: 4,
      imageProfile: user3,
      altProfile: " Profile",
      imageRate: Star,
      altRate: "Star 5 Rate",
      content:
        "They provided complete instructions for caring for the plants and the plants arrived completely healthy.",
      user: "Lii thakur",
    },
  ];

  return (
    <section className="mt-40 mb-30">
      <Info as="h3">Customer Review</Info>
      <div className="slider cursor-grab active:cursor-grabbing">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Review
                imageProfile={slide.imageProfile}
                altProfile={slide.altProfile}
                imageRate={slide.imageRate}
                altRate={slide.altRate}
                content={slide.content}
                user={slide.user}
                className="w-auto mx-3"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReview;
