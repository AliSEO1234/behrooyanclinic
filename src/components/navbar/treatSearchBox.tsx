"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const TreatSearchBox = ({ className }: { className?: string }) => {
  // s1280:w-[115px]
  const [activeSearchBox, setActiveSearchBox] = useState<boolean>(false);
  return (
    <div
      className={`overflow-hidden s1280:h-[35px] s1600:h-[44px] border-[1px] border-[#25A6A9] rounded-[100px] ${
        activeSearchBox ? "animate-search-parent" : "s1280:w-[35px] s1600:w-[44px]"
      } relative ${className ? className : ""} anm`}
    >
      <button
        onClick={() => {
          setActiveSearchBox((val) => !val);
        }}
        className={`w-[27px] h-[27px] s1600:w-[33px] s1600:h-[33px] flex-cen text-[#25A6A9] bg-[#DAEDE6] rounded-full absolute top-1/2   -translate-y-1/2 ${
          activeSearchBox
            ? "right-[3.3px] s1600:right-[4.3px] -translate-x-0"
            : "right-[3.3px] s1600:right-[4.3px] -translate-x-0"
        }`}
      >
        <FiSearch className="s1280:size-4 s1600:size-5" />
      </button>
      {activeSearchBox && (
        <input
          type="search"
          className="w-full h-full outline-none px-2 placeholder:text-[12px] s1600:placeholder:text-[14px]"
          placeholder="Treatment"
        />
      )}
    </div>
  );
};

export default TreatSearchBox;
