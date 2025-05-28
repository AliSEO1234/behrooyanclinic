"use client";

import { Suspense } from "react";

const VideoPlayerCom = () => {
  return (
    <div className="w-full h-full s1280:h-screen absolute top-0 left-0 z-[2]">
      <Suspense
      // fallback={}
      >
        <video
          autoPlay
          muted
          loop={true}
          playsInline
          className="w-full object-cover h-full"
          src="/videos/videohealth1.mp4"
        />
      </Suspense>
    </div>
  );
};
export default VideoPlayerCom;
