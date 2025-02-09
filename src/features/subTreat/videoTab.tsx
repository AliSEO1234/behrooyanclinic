"use client";

import { useState } from "react";
import VideoPlayer from "../services/videoPlayer/videoPlayer";
import video from "@/assets/images/videoCover.jpg";
import VideoCard from "./videoCard";
const VideoTab = () => {
  const [activeTab, setActiveTab] = useState<"doctors" | "patient">("doctors");
  const [activeVideo , setActiveVideo] = useState<string>("doc1")
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
      <div className="flex-right s1280:-mt-16 mb-16">
        <div className="flex-cen gap-x-8 w-[221px] h-[68px] shadow-[0px_4px_4px_#00000025] rounded-[100px]">
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
      <div className="grid grid-cols-12 s1280:h-[615px] s1280:gap-x-4">
        <div className="col-span-12 s1280:col-span-10 relative">
          <VideoPlayer
            src={video}
            toolsbarStyle="h-[38px] s1280:h-[60px] border-[1px] border-white"
            className="s1280:w-full s1280:h-[615px] "
          />
          {/* <div className="shadow-subtreat-video w-full bg-rose-400 h-9 absolute -bottom-20 left-1/2 -translate-x-1/2"></div> */}
        </div>
        <div className="col-span-12 s1280:col-span-2 s1280:px-4 flex flex-col s1280:gap-y-4 items-center justify-start overflow-y-scroll scroll-hide ">
          {videoList.map((video) => {
            const isActive = activeVideo === video.videoKey
            return <VideoCard setActiveVideo={setActiveVideo} videoKey={video.videoKey} key={video.id} isActive={isActive} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default VideoTab;
