"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DistinctiveCard from "./distinctiveCard";
import { handlePatient } from "@/staticData/patientContent";
import { useLocale } from "next-intl";

const PatientsSpeakSlider = () => {
  const locale = useLocale();
  const patientContents = handlePatient(locale);
  
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={false}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1512: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        grabCursor={true}
        touchRatio={1}
        touchAngle={45}
        simulateTouch={true}
        allowTouchMove={true}
        className="pb-4 !mt-10 w-[260px] sm:w-full relative"
      >
        {patientContents.map(
          ({ desc, header, service, serviceIcon, video }, index) => {
            return (
              <SwiperSlide key={`slide-${index}`} className="!flex !flex-col gap-x-5">
                <DistinctiveCard
                  icon={serviceIcon}
                  service={service}
                  title={header}
                  video={video}
                  desc={desc}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default PatientsSpeakSlider;