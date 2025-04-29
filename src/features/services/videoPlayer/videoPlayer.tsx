"use client";
import ImgFetcher from "@/components/imgFetcher";
import { VideoPlayerType } from "@/types/videoPlayer/videoTypes";
import healthlogo from "@/assets/images/healthlogo.png";
import { SyntheticEvent, useState } from "react";
import { getYouTubeVideoId } from "@/components/scripts/operations/getYoutubeId";
const VideoPlayer = ({
  src,
  className,
  showLogo = true,
  positionVideo,
}: VideoPlayerType) => {
  // const [isLoading, setIsLoading] = useState(false);
  const [errorYoutube , setErrorYoutube] = useState<boolean>(false)
  const [videoSrc, setVideoSrc] = useState(src);
  const handleError = (e: SyntheticEvent<HTMLIFrameElement, Event>) => {
    const target = e.target as HTMLIFrameElement;
    if (target) {
      if (target.src.includes("youtube.com") || target.src.includes("youtu.be")) {
        setErrorYoutube(true);
        return
      } else {
        setErrorYoutube(true);
      }
    }
  };
  const handleTryAgain = () => {
    setErrorYoutube(false);
    setVideoSrc("");
    setTimeout(() => {
      setVideoSrc(src);
    }, 100);
  };
  return (
    <div className="relative w-fit" id="video-service">
      <div
        className={`${
          className ? className : ""
        } rounded-[20px] s1280:rounded-[40px] ${
          showLogo ? "relative" : ""
        }  overflow-hidden z-[2] ${errorYoutube && "shadow-[0px_4px_4px_#00000040]"}`}
      >
        <div className="bg-black/50 backdrop-blur-[10px] rounded-[20px] s1280:rounded-[40px] w-full h-full absolute top-0 left-0"></div>
        {videoSrc && typeof src === "string" && (
          <div className="w-full h-full relative rounded-[20px] s1280:rounded-[40px] overflow-hidden">
            <iframe
              // poster="/images/videoCover.png"
              className="w-full h-full min-w-full max-w-full min-h-full max-h-full image-overlay bg-white"
              // ref={videoEl}
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoSrc)}?enablejsapi=1&rel=0`}
              // muted={videoMuted}
              allowFullScreen
              // playsInline
              onError={handleError}
            ></iframe>
          </div>
        )}
        {
          errorYoutube && (
            <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-y-2">
              <p className="font-semibold s1280:text-[18px] text-stone-800">Please check your internet</p>
              <button onClick={handleTryAgain} className="font-light hover:bg-[#25A6A9] hover:text-white rounded-[10px] px-3 py-1 anm outline-none border-none">Try again</button>
            </div>
          )
        }
        {/* video controler */}
      </div>
      {showLogo && (
        <>
          <div
            className={`hidden s1280:block s1280:w-[245px] s1280:h-[245px] s1728:w-[294px] s1728:h-[294px] absolute ${
              positionVideo === "subnested" ? "left-[84.7%]" : " left-[86.5%]"
            } top-1/2 -translate-y-1/2 z-[1]`}
          >
            <ImgFetcher src={healthlogo} />
          </div>
          <div
            className={`hidden s1280:block s1280:w-[245px] s1280:h-[245px] s1728:w-[294px] s1728:h-[294px] absolute ${
              positionVideo === "subnested" ? "right-[84.7%]" : " right-[86.5%]"
            } top-1/2 -translate-y-1/2 z-[1]`}
          >
            <ImgFetcher src={healthlogo} />
          </div>
        </>
      )}
      {/* <div className="absolute -bottom-10 s1280:-bottom-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex-cen px-5 s1280:px-20 s1512:px-32 z-[3]">
        <div
          className={` ${
            toolsbarStyle ? toolsbarStyle : ""
          } flex w-full items-center justify-between s1280:justify-between px-5 s1280:gap-x-5 rounded-[200px] bg-gradient-to-r from-[#8D8D8D57] to-[#8D8D8DD4] border border-white backdrop-blur-[12px] text-white shadow-[0px_4px_4px_#00000025]`}
        >
          <div>
            <button onClick={handlePlayPause} className="">
              {togglePlay ? (
                <FaPause className="size-4 s1280:size-4 s1600:size-5" />
              ) : (
                <FaPlay className="size-4 s1280:size-4 s1600:size-5" />
              )}
            </button>
          </div>
          <div className="w-[60%] s1280:w-[90%] flex-cen">
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleProgressChange}
              className="w-full h-[3px] cursor-pointer"
            />
          </div>
          <div className="flex-cen gap-x-4">
            <div>
              <button
                className="hover:scale-110 anm hover:text"
                onClick={handleFullScreen}
              >
                <AiOutlineFullscreen className="size-4 s1280:size-4 s1600:size-5" />
              </button>
            </div>
            <div>
              <button
                className="hover:scale-110 anm hover:text relative"
                onClick={() => setVideoMuted((val) => !val)}
              >
                <span
                  className={`bg-[#545454] absolute top-[2px] left-0 -rotate-45 rounded-[5px] origin-top-left ${
                    videoMuted ? "open-animate-video" : "close-animate-video"
                  }`}
                ></span>
                <PiSpeakerHighFill className="size-4 s1280:size-4 s1600:size-5" />
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default VideoPlayer;
