"use client"
import { OptionType } from "@/types/comboBox/comboType";
import CountryCode from "../countryCode";
import { useState } from "react";

const ConsultationForm = () => {
  const [codes, setCodes] = useState<OptionType | null>({id : 0 , key : "+90" , label : "Turkey"});
  return (
    <form className="p-[22px]  s1280:w-[473px] s1512:w-[609px] s1728:w-[630px] s1512:me-20 drop-shadow-[0px_4px_19px_#0000001A] rounded-[40px] bg-white s1280:px-[66px] s1280:py-8 s1512:px-[136px]">
      <div className="mb-3 s1280:mb-10">
        <input autoComplete="off" className="consul-form-input p-3" placeholder="Email" type="email" />
      </div>
      <div className="mb-5 s1280:mb-8 relative">
        <input autoComplete="off" className="consul-form-input ps-20 p-3" placeholder="Number" type="text" />
        <CountryCode codes={codes} setCodes={setCodes} />
      </div>
      <div>
        <button className="free-consultation__form--button w-full text-white bg-[#0CA5A5] font-bold h-[54px] rounded-[40px]">Send Message</button>
      </div>
    </form>
  );
};
export default ConsultationForm;
