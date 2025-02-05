"use client";
import ComboBox from "@/components/comboBox";
import { OptionType } from "@/types/comboBox/comboType";
import { useState } from "react";

const ComplimentaryConsultationForm = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const options = [
    { label: "Dental", key: "dental", id: 0 },
    { label: "Eye", key: "eye", id: 1 },
    { label: "Stem Cell", key: "stemcell", id: 2 },
  ];
  return (
    <form className="grid grid-cols-12 gap-x-4 gap-y-2 form-platform-work">
      <div className="col-span-12 s1280:col-span-12 s1512:col-span-12 complimentaryFormItem">
        <label htmlFor="">Residen of</label>
        <input placeholder="Residen of" type="text" />
      </div>
      <div className="col-span-12 s1280:col-span-12 s1512:col-span-12">
      {/* text-[#474744] */}
        <label className="block font-semibold  mb-1" htmlFor="">Treatment</label>
        <ComboBox
          trigger={selectedOption ? selectedOption.label : "Treatment"}
          className="w-full outline-none h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-normal text-[#BBBBBB] mb-1 bg-white"
          options={options}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
        {/* <input placeholder="Treatment" type="text" /> */}
      </div>
      <div className="col-span-12 s1280:col-span-12 s1512:col-span-12 complimentaryFormItem">
        <label htmlFor="">Phone Number</label>
        <input placeholder="Phone Number" type="text" />
      </div>
      <div className="col-span-12 s1280:col-span-12 s1512:col-span-12 complimentaryFormItem">
        <label htmlFor="">Email</label>
        <input placeholder="Email" type="text" />
      </div>
      <div className="col-span-12 flex items-center s1280:justify-end s1512:justify-center">
        <button className="h-[48px] bg-[#00979A] rounded-[40px] text-white px-4 w-full s1280:w-[214px] text-center s1600:text-[18px] font-bold">
          Let’s Connect
        </button>
      </div>
    </form>
  );
};
export default ComplimentaryConsultationForm;
