"use client";
import VideoPlayer from "../services/videoPlayer/videoPlayer";
import { VideoTabType } from "@/types/videoPlayer/videoTabPdp/videoTab";
const VideoTab = ({ videoSrc }: VideoTabType) => {
  return (
    <div className="flex flex-col items-center justify-start gap-y-10 s1280:gap-y-0 s1280:flex-row s1280:items-center s1280:justify-center s1280:gap-x-5">
      <div className="w-full s1280:w-[684px] s1280:h-[414px] s1512:w-[798px] s1512:h-[450px] s1600:w-[836px] s1600:h-[470px] s1728:w-[885px] s1728:h-[500px] s1920:w-[966px] s1920:h-[550px] flex-cen">
        <VideoPlayer
          showLogo
          positionVideo={"subnested"}
          src={videoSrc}
          className="w-full min-w-full h-[203px] s1280:w-[731px] s1280:min-w-[731px] s1280:h-[414px] s1512:w-[798px] s1512:min-w-[798px] s1512:h-[450px] s1600:w-[836px] s1600:min-w-[798px] s1600:h-[470px] s1728:w-[885px] s1728:min-w-[885px] s1728:h-[500px] s1920:w-[966px] s1920:h-[550px] s1920:min-w-[966px]"
        />
      </div>
      <div className="col-span-12 s1280:mt-12 hidden s1280:grid grid-cols-12">
        <div className="col-span-12 s1280:col-span-10 shadow-subtreat-video h-9"></div>
        <div className="col-span-6 s1280:col-span-2"></div>
      </div>
    </div>
  );
};
export default VideoTab;
