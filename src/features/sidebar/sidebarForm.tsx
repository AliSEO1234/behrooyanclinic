"use client";
import ComboBox from "@/components/comboBox";
import { OptionType } from "@/types/comboBox/comboType";
import { useState } from "react";

const SidebarForm = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const options = [
    { label: "Dental", key: "dental", id: 0 },
    { label: "Eye", key: "eye", id: 1 },
    { label: "Stem Cell", key: "stemcell", id: 2 },
  ];
  return (
    <form className="grid grid-cols-12 gap-y-4 form-work">
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
          trigger={selectedOption ? selectedOption.label : "Please Select"}
          className="w-full outline-none h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-normal text-[#BBBBBB] mb-1"
          options={options}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
        {/* <input placeholder="Please Select" type="email" /> */}
      </div>
      <div className="col-span-12 flex-cen">
        <button className="font-bold w-full h-[54px] text-center rounded-[40px] s1280:text-[18px] bg-[#0CA5A5] text-white">
          Chat whit a Health Now
        </button>
      </div>
    </form>
  );
};
export default SidebarForm;
