"use client";
import ServiceCard from "@/features/services/serviceCard";
import handleServices from "@/staticData/services/handleServices";
import { useLocale } from "next-intl";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "./serviceStyles.css"

const ScrollServices = () => {
  const locale = useLocale()
  const services = handleServices(locale) || [];

  return (
    <div className={"flex xl:justify-center"}>
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        spaceBetween={16}
        slidesPerView={"auto"}
        freeMode={true}
        pagination={{ clickable: true, }}
        navigation={true}
        className="w-full !pb-3 !px-3"
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
          <ServiceCard
            countService={countService}
            img={img}
            title={label}
            linkService={path}
            linkStyle=" text-[18px] s1512:text-[18px]"
            titleStyle={`${locale=== "ru" ? "text-[14px] s1512:text-[16px]" : "text-[20px] s1512:text-[20px]"}`}
            imgStyle="p-4 w-[190px] h-[190px] s1280:h-[180px] s1280:w-[180px] s1512:h-[220px] s1512:w-[220px] s1728:w-[250px] s1728:h-[250px]"
            className=" w-full"
          />
          </SwiperSlide>
        );
      })}
      </Swiper>
    </div>
  );
};
export default ScrollServices;
