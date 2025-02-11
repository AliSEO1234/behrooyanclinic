"use client";

import { AboutTabType } from "@/types/about/aboutTabType";
import { useState } from "react";

const AboutTab = ({ children, trigerList }: AboutTabType) => {
  const [activeTab, setActiveTab] = useState<string>(trigerList[0].keyTrigg);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex-cen whitespace-nowrap flex-nowrap overflow-hidden mb-5 bg-[#E9F1EE] s1280:w-fit rounded-t-[100px]">
        {trigerList.map((trigg) => {
          return (
            <button
              className={`${
                activeTab === trigg.keyTrigg
                  ? "font-extrabold bg-[#25A6A9] text-white"
                  : "font-semibold text-[#25A6A9]"
              } anm w-1/3 px-4 py-3 s1280:px-[89px] s1280:py-[15px] text-[14px] s1280:text-[20px]`}
              key={trigg.keyTrigg}
              onClick={() => setActiveTab(trigg.keyTrigg)}
            >
              {trigg.title}
            </button>
          );
        })}
      </div>
      <div className="mt-5">{children[activeTab]}</div>
    </div>
  );
};
export default AboutTab;
