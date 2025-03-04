"use client";

import { AboutTabType } from "@/types/about/aboutTabType";
import { useState } from "react";

const AboutTab = ({ children, trigerList }: AboutTabType) => {
  const [activeTab, setActiveTab] = useState<string>(trigerList[0].keyTrigg);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex-cen whitespace-nowrap flex-nowrap overflow-hidden mb-5 bg-[#E9F1EE] s1280:w-[802px] s1512:w-[951px] rounded-t-[40px] s1280:rounded-t-[100px]">
        {trigerList.map((trigg) => {
          return (
            <button
              className={`${
                activeTab === trigg.keyTrigg
                  ? "font-extrabold bg-[#25A6A9] text-white rounded-t-[40px] s1280:rounded-t-[100px]"
                  : "font-semibold text-[#25A6A9]"
              } anm w-1/3 px-4 py-3 s1280:h-[54px] text-[14px] s1280:text-[20px] flex-cen`}
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
