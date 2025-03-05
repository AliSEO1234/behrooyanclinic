"use client";
import { CiSearch } from "react-icons/ci";
import ComboBox from "../comboBox";
import { useState } from "react";
import { OptionType } from "@/types/comboBox/comboType";
import { clinicCities } from "@/staticData/clinics/clinicCitiesList";
import { IoSearchSharp } from "react-icons/io5";
const SearchClinic = () => {
  const [citySelected, setCitySelected] = useState<OptionType | null>(null);

  return (
    <div className="s1280:w-[548px] h-[57px] s1280:h-[68px] grid grid-cols-12 rounded-[100px] shadow-[0px_4px_4px_0px_#00000040] bg-white px-1 s1280:px-3">
      <div className="col-span-6">
        <input
          placeholder="Name of the treatment center"
          className="placeholder:text-[#898989] font-normal s1280:font-medium text-[12px] s1280:text-[16px] outline-none h-full w-full rounded-[100px] ps-2 s1280:ps-0"
          type="search"
        />
      </div>
      <div className="col-span-6 flex-right gap-x-2">
        <div>
          <button className="flex-cen s1280:w-[45px] s1280:h-[45px] text-[#25A6A9]">
            <CiSearch className="size-7 hidden s1280:inline" />
            <IoSearchSharp className="s1280:hidden size-5" />
          </button>
        </div>
        <div>
          <ComboBox
            trigger={citySelected ? citySelected.label : "Select the city"}
            className="flex flex-row-reverse items-center justify-between gap-x-1 s1280:gap-x-2 bg-[#25A6A9] h-[45px] s1280:h-[45px] rounded-[100px] px-2 s1280:px-4 text-white font-medium w-[123px] s1280:w-[168px] text-[12px] s1280:text-[16px]"
            containertStyle="s1280:w-[168px]"
            onChange={setCitySelected}
            selectedValue={citySelected}
            options={clinicCities}
          />
        </div>
      </div>
    </div>
  );
};
export default SearchClinic;
