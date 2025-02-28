"use client";
import ImgFetcher from "@/components/imgFetcher";
import { VideoPlayerType } from "@/types/videoPlayer/videoTypes";
import healthlogo from "@/assets/images/healthlogo.png";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import videoCover from "@/assets/images/videoCover.png";
import { FaPause, FaPlay } from "react-icons/fa";
import { AiOutlineFullscreen } from "react-icons/ai";
import { PiSpeakerHighFill } from "react-icons/pi";
const VideoPlayer = ({
  src,
  className,
  showLogo = true,
  toolsbarStyle,
  positionVideo
}: VideoPlayerType) => {
  const [togglePlay, setTogglePlay] = useState<boolean>(false);
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [videoMuted ,setVideoMuted] = useState<boolean>(false)
  const handlePlayPause = () => {
    if (videoEl.current) {
      if (togglePlay) {
        videoEl.current.pause();
      } else {
        videoEl.current.play();
        if (!hasPlayed) {
          setHasPlayed(true);
        }
      }
      setTogglePlay(!togglePlay);
    }
  };
  const handleFullScreen = () => {
    if (videoEl.current) {
      if (!document.fullscreenElement) {
        setCurrentTime(videoEl.current.currentTime);
        videoEl.current
          .requestFullscreen()
          .then(() => {
            videoEl.current!.currentTime = currentTime;
            videoEl.current!.play();
            setTogglePlay(true);
            setHasPlayed(true)
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        setHasPlayed(true);
        if (!videoEl.current.paused) {
          videoEl.current.pause();
          setTogglePlay(false);
        }
        document.exitFullscreen();
      }
    }
  };
  useEffect(() => {
    const handleExitFullScreen = () => {
      if (!document.fullscreenElement) {
        if (videoEl.current) {
          setTogglePlay(false);
          videoEl.current.pause();
        }
      }
    };
    document.addEventListener("fullscreenchange", handleExitFullScreen);
    return () => {
      document.removeEventListener("fullscreenchange", handleExitFullScreen);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoEl.current) {
      setCurrentTime(videoEl.current.currentTime);
      setDuration(videoEl.current.duration);
    }
  };
  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    if (videoEl.current) {
      videoEl.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  return (
    <div className="relative w-fit" id="video-service">
      <div
        className={`${
          className ? className : ""
        } rounded-[20px] s1280:rounded-[40px] ${
          showLogo ? "relative" : ""
        }  overflow-hidden z-[2]`}
      >
        <div className="bg-[#00000047] rounded-[20px] s1280:rounded-[40px] w-full h-full absolute top-0 left-0"></div>
        {  src && typeof src === "string" && (
          <div className="w-full h-full relative">
            <video
              poster="/images/videoCover.png"
              className="w-full h-full min-h-full max-h-full object-cover image-overlay bg-white"
              ref={videoEl}
              src={src}
              muted={videoMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
            ></video>
            {!hasPlayed && (
              <ImgFetcher
                width={3000}
                height={3000}
                src={videoCover}
                className="object-cover absolute top-0 left-0 z-[0]"
              />
            )}
            
          </div>
        )
      }
        {/* video controler */}
      </div>
      {showLogo && (
        <>
          <div className={`hidden s1280:block s1280:w-[245px] s1280:h-[245px] s1728:w-[294px] s1728:h-[294px] absolute ${positionVideo === "subnested" ? "left-[84.7%]" : " left-[86.5%]"} top-1/2 -translate-y-1/2 z-[1]`}>
            <ImgFetcher src={healthlogo} />
          </div>
          <div  className={`hidden s1280:block s1280:w-[245px] s1280:h-[245px] s1728:w-[294px] s1728:h-[294px] absolute ${positionVideo === "subnested" ? "right-[84.7%]" : " right-[86.5%]"} top-1/2 -translate-y-1/2 z-[1]`}>
            <ImgFetcher src={healthlogo} />
          </div>
        </>
      )}
      <div className="absolute -bottom-10 s1280:-bottom-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex-cen px-5 s1280:px-20 s1512:px-32 z-[2]">
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
            {/* <progress
              className="w-full h-[3px] progVideoHome"
              value="40"
              max={100}
            ></progress> */}
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
              onClick={()=>setVideoMuted(val=>!val)}>
                <span className={`bg-[#545454] absolute top-[2px] left-0 -rotate-45 rounded-[5px] origin-top-left ${videoMuted ? "open-animate-video" : "close-animate-video"}`}></span>
                <PiSpeakerHighFill className="size-4 s1280:size-4 s1600:size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
