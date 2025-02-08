"use client";
import ImgFetcher from "@/components/imgFetcher";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaPause, FaPlay } from "react-icons/fa";
import { PiSpeakerHighFill } from "react-icons/pi";
import { useState } from "react";
import { VideoPlayerType } from "@/types/videoPlayer/videoTypes";
const VideoPlayer = ({ src, className, toolsbarStyle }: VideoPlayerType) => {
  const [togglePlay, setTogglePlay] = useState<boolean>(false);
  return (
    <div className="relative w-fit">
      <div
        className={`${
          className ? className : ""
        } rounded-[20px] s1280:rounded-[40px] relative overflow-hidden`}
      >
        <div className="bg-[#00000047] w-full h-full absolute top-0 left-0"></div>
        <ImgFetcher width={2000} src={src} />
        {/* video controler */}
      </div>
      <div className="absolute -bottom-10 s1280:-bottom-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex-cen px-5 s1280:px-20 s1512:px-32">
        <div
          className={` ${
            toolsbarStyle ? toolsbarStyle : ""
          } flex w-full items-center justify-between s1280:justify-between px-5 s1280:gap-x-5 rounded-[200px] bg-gradient-to-r from-[#8D8D8D57] to-[#8D8D8DD4] border border-white backdrop-blur-[12px] text-white`}
        >
          <div>
            <button onClick={() => setTogglePlay((val) => !val)} className="">
              {/* pause */}
              {togglePlay ? (
                <FaPause className="size-4 s1280:size-4 s1600:size-5" />
              ) : (
                <FaPlay className="size-4 s1280:size-4 s1600:size-5" />
              )}
              {/* play */}
            </button>
          </div>
          <div className="w-[60%] s1280:w-[90%] flex-cen">
            <progress
              className="w-full h-[3px] progVideoHome"
              value="40"
              max={100}
            ></progress>
          </div>
          <div className="flex-cen gap-x-4">
            <div>
              <button>
                <AiOutlineFullscreen className="size-4 s1280:size-4 s1600:size-5" />
              </button>
            </div>
            <div>
              <button>
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
