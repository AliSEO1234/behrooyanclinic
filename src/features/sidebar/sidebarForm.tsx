"use client";
import ComboBox from "@/components/comboBox";
import { options } from "@/staticData/optionsForm";
import { OptionType } from "@/types/comboBox/comboType";
import { LucideSendHorizontal } from "lucide-react";
import { useState } from "react";

const SidebarForm = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <form className="grid grid-cols-12 gap-y-4 form-work">
      <div className="col-span-12">
        <label htmlFor="">Name</label>
        <input placeholder="Name" type="text" />
      </div>
      <div className="col-span-12">
        <label htmlFor="">Email</label>
        <input placeholder="Email" type="email" />
      </div>
      <div className="col-span-12">
        <label htmlFor="">Phone Number</label>
        <input placeholder="Number" type="email" />
      </div>
      <div className="col-span-12 z-[4]">
        <label htmlFor="">Choose your service type</label>
        <ComboBox
          trigger={selectedOption ? selectedOption.label : "Please Select"}
          className="flex-bet w-full outline-none h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-normal text-[#BBBBBB] mb-1"
          options={options}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
        {/* <input placeholder="Please Select" type="email" /> */}
      </div>
      <div className="col-span-12 flex-cen z-[3]">
        <button className="font-bold w-full h-[48px] text-center rounded-[40px] group s1280:text-[18px]  text-white relative overflow-hidden">
          <div className="z-[2] bg-[#0CA5A5] w-full h-full absolute top-0 group-hover:-top-full left-0 text-center flex-cen anm">
            let’s connect
          </div>
          <div className="z-[1] bg-[#86D1AB] text-white w-full h-full absolute top-0 left-0 text-center  flex-cen">
            <LucideSendHorizontal className="size-5" />
          </div>
        </button>
      </div>
    </form>
  );
};
export default SidebarForm;
