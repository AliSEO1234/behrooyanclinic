"use client";
import { useState } from "react";
import men from "@/assets/images/chars/men.png";
import ImgFetcher from "@/components/imgFetcher";
import ServiceSliderCard from "./serviceSliderCard";
import eye from "@/assets/images/icons/services/eye.png";
import dental from "@/assets/images/icons/services/dental.png";
import fertility from "@/assets/images/icons/services/fertility.png";
import cells from "@/assets/images/icons/services/cells.png";
import hair from "@/assets/images/icons/services/hair.svg";
import aesthetics from "@/assets/images/icons/services/aesthetics.png";
import arrow from "@/assets/images/arrow.svg";
import arrowwomen from "@/assets/images/arrowwomen.svg";
// import Ball from "@/components/ballAnimate";
const ServiceSlider = () => {
  const [checked, setChecked] = useState(true);
  // const balls = [54, 62, 42, 50, 45, 32, 23, 15];
  return (
    <div className="relative">
      {/* {balls.map((bal,index) => {
          return <Ball key={index} size={bal} />;
        })} */}
      <div className="flex-cen">
        <label className="relative inline-flex items-center justify-center cursor-pointer">
          <input
            type="checkbox"
            className="toggle-checkbox hidden"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <div
            className={`flex px-1 items-center justify-between ${
              checked ? "flex-row-reverse bg-[#70A3BE]" : "flex-row bg-[#E08AE3A1]"
            } justify-center w-20 h-[25px] s1512:h-8  rounded-full relative`}
          >
            <span className={` text-white text-[12px] text-center w-full`}>
              {checked ? "Men" : "Women"}
            </span>
            <div
              className={` w-6 h-5 shadow-[0px_3px_1px_#0000000F] bg-white text-[#70A3BE] rounded-full transition-transform peer-checked:translate-x-4 flex items-center justify-center border-[0.5px] border-[#0000000A] `}
            >
              <div className={`anm`}>
                <ImgFetcher src={checked ? arrow : arrowwomen} />
              </div>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-cen relative">
        {/* left items */}
        <ServiceSliderCard className="left-0 top-1/2" img={eye} />
        <ServiceSliderCard
          className="left-5 top-[30%] s1280:left-10 s1280:top-[30%] s1512:left-14 s1512:top-[25%]"
          img={dental}
        />
        <ServiceSliderCard
          className="left-16 top-[12.5%] p-2 s1280:left-24 s1280:top-[10%]  s1512:left-40 s1512:top-[4%] "
          img={fertility}
        />
        {/* right items */}
        <ServiceSliderCard className="right-0 top-1/2" img={aesthetics} />
        <ServiceSliderCard
          className="p-2 right-5 top-[30%] s1280:p-5 s1280:right-10 s1280:top-[30%] s1512:right-14 s1512:top-[25%]"
          img={hair}
        />
        <ServiceSliderCard
          imgStyle="-mt-5"
          className="right-16 top-[12.5%] s1280:right-24 s1280:top-[10%] s1512:right-40 s1512:top-[4%]"
          img={cells}
        />
        <div className="s1280:w-[547px] s1280:h-[547px] s1512:w-[580px] s1512:h-[580px] relative z-[1]">
          <ImgFetcher width={1000} src={men} />
          <div className="shadow-char-slider absolute bottom-0 s1280:bottom-2 -translate-x-1/2 left-1/2 shadow-char-slider w-[244px] h-[18px]"></div>
        </div>
      </div>
    </div>
  );
};
export default ServiceSlider;
