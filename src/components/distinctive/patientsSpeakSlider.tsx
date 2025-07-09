"use client";

import DistinctiveCard from "./distinctiveCard";
import { handlePatient } from "@/staticData/patientContent";
import { useLocale } from "next-intl";
import DialogPatientSpeakVideo from "../dialogPatientSpeakVideo";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";

const PatientsSpeakSlider = () => {
  const locale = useLocale();
  const patientContents = handlePatient(locale);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const scrollLeft = () => {
    if (parentRef.current) {
      parentRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (parentRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = parentRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft < maxScroll) {
        parentRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }
  };
  return (
    <div className="relative z-[4] overflow-hidden rounded-[20px] s1280:rounded-[40px]">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-[5] h-full hidden md:flex-cen px-2">
        <button
          onClick={scrollLeft}
          className="hidden 2xl:flex-cen anm w-10 h-10 rounded-full bg-[#fff] text-[#00979A] hover:text-[#fff] hover:bg-[#00979A] active:scale-75"
        >
          <IoIosArrowBack className="size-6" />
        </button>
      </div>
      <div
        ref={parentRef}
        className="flex items-center justify-start flex-nowrap overflow-x-scroll scroll-hide s1280:flex-row gap-x-3 s1280:gap-x-6 s1512:gap-x-8 s1920:gap-x-10 snap-x"
      >
        <DialogPatientSpeakVideo />
        {patientContents.map(
          ({ desc, header, service, serviceIcon, video }, index) => {
            return (
              <DistinctiveCard
                icon={serviceIcon}
                service={service}
                title={header}
                video={video}
                desc={desc}
                key={index}
              />
            );
          }
        )}
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 z-[5] h-full hidden md:flex-cen px-2">
        <button
          onClick={scrollRight}
          className="hidden 2xl:flex-cen anm w-10 h-10 rounded-full bg-[#fff] text-[#00979A] hover:text-[#fff] hover:bg-[#00979A] active:scale-75"
        >
          <IoIosArrowBack className="size-6 rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default PatientsSpeakSlider;
