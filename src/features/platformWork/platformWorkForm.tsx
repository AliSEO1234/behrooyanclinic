"use client";
import ComboBox from "@/components/comboBox";
import { OptionType } from "@/types/comboBox/comboType";
import { LucideSendHorizontal } from "lucide-react";
import { useState } from "react";

const PlatformWorkForm = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const options = [
    { label: "Dental", key: "dental", id: 0 },
    { label: "Eye", key: "eye", id: 1 },
    { label: "Stem Cell", key: "stemcell", id: 2 },
  ];
  return (
    <form className="platform__form-container grid grid-cols-12 gap-y-4 form-platform-work-end bg-white shadow-[0_4px_19px_0_#0000001A] rounded-[40px] px-[18px] s390:px-[25px] s412:px-[35px] py-5 s1280:py-8 s1280:px-[30px] s1512:px-9 s1920:px-[58px]">
      <div className="col-span-12 ">
        <h3 className="text-center font-bold text-[20px] s1280:text-[18px] s1728:text-[28px] text-[#0CA5A5]">
          Fill out the form to receive advice
        </h3>
      </div>
      <div className="col-span-12">
        <label htmlFor="">Email</label>
        <input placeholder="Email" type="email" />
      </div>
      <div className="col-span-12">
        <label htmlFor="">Phone Number</label>
        <input placeholder="Number" type="email" />
      </div>
      <div className="col-span-12">
        <label htmlFor="">Choose your service type</label>
        <ComboBox
          trigger={selectedOption ? selectedOption.label : "Treatment"}
          className="w-full outline-none h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-normal text-[#BBBBBB] mb-1"
          options={options}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
        {/* <input placeholder="Please Select" type="email" /> */}
      </div>
      <div className="col-span-12 flex-cen">
        <button className="font-bold w-full h-[54px] text-center rounded-[40px] group relative overflow-hidden">
          <div className="z-[2] bg-[#0CA5A5] text-white w-full h-full absolute top-0 group-hover:-top-full left-0 text-center flex-cen anm">
            Send Message
          </div>
          <div className="z-[1] bg-[#86D1AB] text-white w-full h-full absolute top-0 left-0 text-center  flex-cen">
            <LucideSendHorizontal className="size-5" />
          </div>
        </button>
      </div>
    </form>
  );
};
export default PlatformWorkForm;
