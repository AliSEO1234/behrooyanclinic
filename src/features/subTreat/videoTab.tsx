"use client";
import { useState } from "react";
import VideoPlayer from "../services/videoPlayer/videoPlayer";
import { VideoTabType } from "@/types/videoPlayer/videoTabPdp/videoTab";
const VideoTab = ({videoSrc} : VideoTabType) => {
  const [activeTab, setActiveTab] = useState<"doctors" | "patient">("doctors");
  return (
    <div>
      <div className="flex-right -mt-9 s1280:-mt-16 mb-[18px] s1280:mb-16">
        <div className="flex-cen gap-x-4 s1280:gap-x-8 w-[151px] h-[47px] s1280:w-[221px] s1280:h-[68px] shadow-[0px_4px_4px_#00000025] rounded-[100px] text-[14px] s1280:text-[16px]">
          <div>
            <button
              onClick={() => setActiveTab("doctors")}
              className={`font-normal ${
                activeTab === "doctors"
                  ? "border-b border-[#00979A] text-[#00979A]"
                  : "text-[#474744]"
              } anm`}
            >
              Doctors
            </button>
          </div>
          <div>
            <a
            href="#patient-bf"
              // onClick={() => setActiveTab("patient")}
              className={`font-normal ${
                activeTab === "patient"
                  ? "border-b border-[#00979A] text-[#00979A]"
                  : "text-[#474744]"
              } anm`}
            >
              Patient
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-y-10 s1280:gap-y-0 s1280:flex-row s1280:items-center s1280:justify-center s1280:gap-x-5">
        <div className="s1280:w-[684px] s1280:h-[434px] s1512:w-[798px] s1512:h-[506px] s1600:w-[836px] s1600:h-[530px] s1728:w-[885px] s1920:w-[966px]">
          <VideoPlayer
            showLogo
            positionVideo={"subnested"}
            src={videoSrc}
            toolsbarStyle="h-[38px] s1280:h-[60px] border-[1px] border-white"
            className="w-[300px] h-[170px] s1280:h-[434px] s1512:w-[798px] s1512:h-[506px] s1600:w-[836px] s1600:h-[530px] s1728:w-[885px] s1920:w-[966px]"
          />
        </div>
        <div className="col-span-12 s1280:mt-12 hidden s1280:grid grid-cols-12">
          <div className="col-span-12 s1280:col-span-10 shadow-subtreat-video h-9"></div>
          <div className="col-span-6 s1280:col-span-2"></div>
        </div>
      </div>
    </div>
  );
};
export default VideoTab;
