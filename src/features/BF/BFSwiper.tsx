"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bf1 from "@/assets/images/subTreatment/BF/ba1.jpg";
import bf2 from "@/assets/images/subTreatment/BF/ba2.jpg";
import bf3 from "@/assets/images/subTreatment/BF/ba3.jpg";
import bf4 from "@/assets/images/subTreatment/BF/ba4.jpg";
import bf5 from "@/assets/images/subTreatment/BF/ba5.jpg";
import ImgFetcher from "@/components/imgFetcher";
import { useState } from "react";

const BFSwiper = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      breakpoints={{
        1024: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
      }}
      centeredSlides={true}
      grabCursor={true}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
      }}
    >
      {[bf1, bf2, bf3, bf4, bf5].map((src, index) => (
        <SwiperSlide
          key={index}
          className={`rounded-[20px] overflow-hidden transition-opacity duration-300 ${
            activeIndex === index ? "opacity-100 shadow-[-4px_0px_8.1px_#00000040]" : "opacity-30 p-2 s1280:p-10"
          }`}
        >
          <ImgFetcher width={3000} height={3000} src={src} />

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BFSwiper;
