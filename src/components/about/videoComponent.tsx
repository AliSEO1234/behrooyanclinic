"use client";

import { VideoComponentType } from "@/types/about/videoType";
import React, { useRef, useState } from "react";
import { FaPause } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";

const VideoComponent = ({ src, className, text }: VideoComponentType) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`${className} relative`}>
      <video
        ref={videoRef}
        controls={false}
        src={src}
        className="w-full h-full object-cover"
        // autoPlay
        // loop
        // muted
        // playsInline
      />
      <div className="absolute bottom-0 left-0 w-full flex-left gap-x-2 pb-5 ps-5">
        <div>
          <button
            onClick={togglePlayPause}
            className="bg-[#C3C3C3] text-white hover:scale-105 animation-global flex items-center justify-center w-[30px] h-[30px] s1280:w-[58px] s1280:h-[58px] rounded-full"
          >
            {isPlaying ? (
              <FaPause className="size-4 s1280:size-8" />
            ) : (
              <IoPlay className="size-4 s1280:size-8" />
            )}
          </button>
        </div>
        <div>
          <p className="font-medium s1280:text-[20px] text-white">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
