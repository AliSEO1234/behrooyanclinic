"use client";
import ComboBox from "@/components/comboBox";
import CountryCode from "@/components/forms/countryCode";
import { options } from "@/staticData/optionsForm";
import { OptionType } from "@/types/comboBox/comboType";
import { LucideSendHorizontal } from "lucide-react";
import { useState } from "react";

const ComplimentaryConsultationForm = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [codes, setCodes] = useState<OptionType | null>({id : 0 , key : "+90" , label : "Turkey"});
  return (
    <form className="grid grid-cols-10 gap-x-4 gap-y-4 relative z-[2] w-full s1280:mt-auto mb-5 s1280:mb-10 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF4D] backdrop-blur-[5px] rounded-[40px] s1280:rounded-[90px] p-5 s1280:p-4 s1280:h-20">
      <div className="col-span-12 s1280:col-span-2 h-fit">
        <input
          className="homepage-input px-4"
          placeholder="Name & Surname"
          type="text"
        />
      </div>
      <div className="col-span-12 s1280:col-span-2 h-fit">
        <ComboBox
          trigger={selectedOption ? selectedOption.label : "Treatment"}
          className="flex-bet s1728:text-[16px] w-full outline-none h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-medium text-[#898989] bg-white"
          options={options}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
      </div>
      <div className="col-span-12 s1280:col-span-2 h-fit relative">
        <input
          className="homepage-input ps-20 pe-4"
          placeholder="Phone Number"
          type="text"
        />
        <CountryCode codes={codes} setCodes={setCodes} />
      </div>
      <div className="col-span-12 s1280:col-span-2 h-fit">
        <input className="homepage-input px-4" placeholder="Email" type="text" />
      </div>
      <div className="col-span-12 s1280:col-span-2 h-fit">
        <button
          type="button"
          className="h-[48px] rounded-[40px] text-white px-4 w-full text-center font-bold group relative overflow-hidden text-[18px]"
        >
          <div className="z-[2] bg-[#0CA5A5] text-white w-full h-full absolute top-0 group-hover:-top-full left-0 text-center flex-cen anm">
            Let’s Connect
          </div>
          <div className="z-[1] bg-[#86D1AB] text-white w-full h-full absolute top-0 left-0 text-center  flex-cen">
            <LucideSendHorizontal className="size-5" />
          </div>
        </button>
      </div>
    </form>
  );
};
export default ComplimentaryConsultationForm;
