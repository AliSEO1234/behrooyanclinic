"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ImgFetcher from "@/components/imgFetcher";
import { useState } from "react";
import { StaticImageData } from "next/image";

const BFSwiper = ({
  bfList,
  dynamic,
}: {
  bfList: StaticImageData[] | string[];
  dynamic: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const fetchLinkImg = `https://azpohealth.com/api/files/content-images/`;
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      breakpoints={{
        1024: {
          spaceBetween: 40,
          slidesPerView: 4,
        },
      }}
      centeredSlides={true}
      grabCursor={true}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
      }}
    >
      {bfList.map((src, index) => (
        <SwiperSlide
          key={index}
          className={`s1280:h-[200px] s1280:min-h-[200px] s1280:w-[100px] rounded-[20px] overflow-hidden transition-opacity duration-300 ${
            activeIndex === index
              ? "opacity-100 shadow-[-4px_0px_8.1px_#00000040]"
              : "opacity-30 p-2 s1280:p-10"
          }`}
        >
          <ImgFetcher
            width={3000}
            height={3000}
            src={dynamic ? `${fetchLinkImg}${src}` : src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BFSwiper;
