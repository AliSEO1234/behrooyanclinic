"use client";
import HomeServiceCard from "@/features/services/homeServiceCard";
import handleServices from "@/staticData/services/handleServices";
import { useLocale } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "./serviceStyles.css"

const ScrollServices = () => {
  const locale = useLocale()
  const services = handleServices(locale) || [];

  return (
    <div className="relative">
      {/* Left fade */}
      <div className="absolute top-0 left-0 w-[60px] s1280:w-[90px] h-full bg-gradient-to-r from-[#FCFCFC] to-transparent z-[3] pointer-events-none" />
      {/* Right fade */}
      <div className="absolute top-0 right-0 w-[60px] s1280:w-[90px] h-full bg-gradient-to-l from-[#FCFCFC] to-transparent z-[3] pointer-events-none" />

      <div className="flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode={true}
          centeredSlides={false}
          pagination={{ clickable: true }}
          navigation={false}
          className="w-full !pb-3"
        >
          {services.map(({ countService, img, label, path }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="!w-[210px] !min-w-[210px]
                          s1512:!w-[252px] s1512:!min-w-[252px]
                          s1600:!w-[262px] s1600:!min-w-[262px]
                          s1728:!w-[282px] s1728:!min-w-[282px]
                          snap-center me16">
            <HomeServiceCard
              countService={countService}
              img={img}
              title={label}
              linkService={path}
              linkStyle=" text-[11px] s1280:text-[13px] s1512:text-[14px]"
              titleStyle={`${locale=== "ru" ? "text-[12px] s1280:text-[12px] s1512:text-[14px]" : "text-[14px] s1280:text-[13px] s1512:text-[15px]"}`}
              imgStyle="p-4 w-[190px] h-[190px] s1280:h-[180px] s1280:w-[180px] s1512:h-[220px] s1512:w-[220px] s1728:w-[250px] s1728:h-[250px]"
              className=" w-full"
            />
            </SwiperSlide>
          );
        })}
        </Swiper>
      </div>
    </div>
  );
};
export default ScrollServices;
