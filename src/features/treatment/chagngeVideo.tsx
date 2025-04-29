"use client";
import ImgFetcher from "@/components/imgFetcher";
import { useAppContext } from "@/contexts/app-context/app-context";
import { videoChangeType } from "@/types/videoPlayer/videoTypes";
import { useEffect } from "react";
const BlurVideo = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-[#00000066]"></div>
  );
};
const ChangeVideo = ({ videoList }: videoChangeType) => {
  const { setActiveVideoTreat, activeVideoTreat } = useAppContext();
  useEffect(() => {
    if (!activeVideoTreat) {
      setActiveVideoTreat(videoList[0]);
    }
  });
  return (
    <>
      {videoList.map((video) => {
        return (
          <button
            onClick={() => setActiveVideoTreat(video)}
            key={video.id}
            className={`${
              activeVideoTreat?.videoKey === video.videoKey
                ? "h-[152px] s1280:h-[188px] s1512:h-[236px]"
                : "h-[128px] s1280:h-[158px] s1512:h-[198px]"
            } w-[108px] s1280:w-[112px] s1512:w-[141px] s1600:w-[153px] s1728:w-[167px] outline-none rounded-[20px] s1280:rounded-[40px] overflow-hidden bg-cover anm relative`}
          >
            <ImgFetcher className="object-cover" src={video.src} />
            {activeVideoTreat?.videoKey !== video.videoKey && <BlurVideo />}
          </button>
        );
      })}
      {/* <button className="relative w-[25%] outline-none h-[130px] s1512:h-[200px] rounded-[40px] overflow-hidden bg-cover">
        <ImgFetcher src={videoCover} />
        <BlurVideo />
      </button> */}
    </>
  );
};
export default ChangeVideo;
