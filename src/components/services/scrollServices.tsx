"use client";
import ServiceCard from "@/features/services/serviceCard";
import handleServices from "@/staticData/services/handleServices";
import { useLocale } from "next-intl";
import { useEffect, useRef } from "react";

const ScrollServices = () => {
  const locale = useLocale()
  const services = handleServices(locale) || [];
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const thirdCard = container.children[2] as HTMLDivElement;
      if (thirdCard) {
        const offset = thirdCard.offsetLeft - container.offsetWidth / 2 + thirdCard.offsetWidth / 2;
        container.scrollLeft = offset;
      }
    }
  }, []);
  return (
    <div ref={scrollContainerRef} className="flex flex-nowrap scroll-hide overflow-x-scroll gap-x-8 s1280:overflow-x-hidden s1280:flex-wrap items-center justify-start s1280:items-center s1280:justify-between gap-y-8 s1280:gap-4 s1280:px-0 scroll-smooth snap-x snap-mandatory pb-4">
      {services.map(({ countService, img, label, path }, index) => {
        return (
          <ServiceCard
            key={index}
            countService={countService}
            img={img}
            title={label}
            linkService={path}
            linkStyle=" text-[18px] s1512:text-[18px]"
            titleStyle=" text-[20px] s1512:text-[20px]"
            imgStyle="p-4 w-[190px] h-[190px] s1280:h-[180px] s1280:w-[180px] s1512:h-[220px] s1512:w-[220px] s1728:w-[250px] s1728:h-[250px]"
            className="treatments__card-container w-[210px] min-w-[210px] s1512:w-[252px] s1512:min-w-[252px] s1600:w-[262px]  s1600:min-w-[262px] s1728:w-[282px] s1728:min-w-[282px] snap-center"
          />
        );
      })}
    </div>
  );
};
export default ScrollServices;
