"use client";

import { useState } from "react";
import VideoPlayer from "../services/videoPlayer/videoPlayer";

// import VideoCard from "./videoCard";
import { useLocale } from "next-intl";
const VideoTab = () => {
  const [activeTab, setActiveTab] = useState<"doctors" | "patient">("doctors");
  // const [activeVideo, setActiveVideo] = useState<string>("doc1");
  // const videoList = [
  //   {
  //     id: 0,
  //     videoKey: "doc1",
  //   },
  //   {
  //     id: 1,
  //     videoKey: "doc2",
  //   },
  //   {
  //     id: 2,
  //     videoKey: "doc3",
  //   },
  //   {
  //     id: 3,
  //     videoKey: "doc4",
  //   },
  //   {
  //     id: 4,
  //     videoKey: "doc5",
  //   },
  //   {
  //     id: 5,
  //     videoKey: "doc6",
  //   },
  // ];
  const locale = useLocale();
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
            <button
              onClick={() => setActiveTab("patient")}
              className={`font-normal ${
                activeTab === "patient"
                  ? "border-b border-[#00979A] text-[#00979A]"
                  : "text-[#474744]"
              } anm`}
            >
              Patient
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-y-10 s1280:gap-y-0 s1280:flex-row s1280:items-center s1280:justify-center s1280:gap-x-5">
        <div className="s1280:w-[684px] s1280:h-[434px] s1512:w-[798px] s1512:h-[506px] s1600:w-[836px] s1600:h-[530px] s1728:w-[885px] s1920:w-[966px]">
          <VideoPlayer
            showLogo={false}
            src={
              locale === "ru"
                ? "https://azpo.com/api/files/property-videos/site_health.mp4"
                : "https://azpo.com/api/files/property-videos/site_health_en.mp4"
            }
            toolsbarStyle="h-[38px] s1280:h-[60px] border-[1px] border-white"
            className="w-full  s1280:h-[434px] s1512:w-[798px] s1512:h-[506px] s1600:w-[836px] s1600:h-[530px] s1728:w-[885px] s1920:w-[966px]"
          />
        </div>
        {/* <div className="flex s1280:flex-col gap-x-4 s1280:gap-x-0 s1280:gap-y-4 s1600:gap-y-3 items-center s1280:items-end justify-start overflow-x-scroll s1280:overflow-x-hidden s1280:overflow-y-scroll scroll-hide s1280:h-[434px] s1512:h-[506px] s1600:h-[530px] w-full s1280:w-fit">
          {videoList.map((video) => {
            const isActive = activeVideo === video.videoKey;
            return (
              <VideoCard
                setActiveVideo={setActiveVideo}
                videoKey={video.videoKey}
                key={video.id}
                isActive={isActive}
              />
            );
          })}
        </div> */}
        <div className="col-span-12 s1280:mt-12 hidden s1280:grid grid-cols-12">
          <div className="col-span-12 s1280:col-span-10 shadow-subtreat-video h-9"></div>
          <div className="col-span-6 s1280:col-span-2"></div>
        </div>
      </div>
    </div>
  );
};
export default VideoTab;
