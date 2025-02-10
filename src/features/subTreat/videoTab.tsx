"use client";

import { useState } from "react";
import VideoPlayer from "../services/videoPlayer/videoPlayer";
import video from "@/assets/images/videoCover.jpg";
import VideoCard from "./videoCard";
const VideoTab = () => {
  const [activeTab, setActiveTab] = useState<"doctors" | "patient">("doctors");
  const [activeVideo, setActiveVideo] = useState<string>("doc1");
  const videoList = [
    {
      id: 0,
      videoKey: "doc1",
    },
    {
      id: 1,
      videoKey: "doc2",
    },
    {
      id: 2,
      videoKey: "doc3",
    },
    {
      id: 3,
      videoKey: "doc4",
    },
    {
      id: 4,
      videoKey: "doc5",
    },
    {
      id: 5,
      videoKey: "doc6",
    },
  ];
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
      <div className="grid grid-cols-12 gap-y-10 s1280:gap-y-0 s1280:gap-x-4">
        <div className="col-span-12 s1280:col-span-10">
          <VideoPlayer
            src={video}
            toolsbarStyle="h-[38px] s1280:h-[60px] border-[1px] border-white"
            className="s1280:w-full s1280:h-[615px] s1512:h-[700px]"
          />
        </div>
        <div className="col-span-12 s1280:col-span-2 s1280:ps-8 s1512:ps-12 s1728:ps-16 flex s1280:flex-col gap-x-4 s1280:gap-x-0 s1280:gap-y-4 items-center s1280:items-end justify-start overflow-y-scroll scroll-hide s1280:h-[615px] s1512:h-[700px]">
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
