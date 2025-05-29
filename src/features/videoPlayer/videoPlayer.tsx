"use client";
import VideoPlayerSkeleton from "@/components/videoPlayer/videoPlayerSkeleton";
import { Suspense } from "react";
import ReactPlayer from "react-player";
const VideoPlayerCom = () => {
  return (
    <div className="video-header">
      <Suspense fallback={<VideoPlayerSkeleton />}>
        {/* <video
          autoPlay
          muted
          loop={true}
          playsInline
          src="/videos/videohealth1.mp4"
        /> */}
        <ReactPlayer
          url={`/videos/videohealth1.mp4`}
          playing
          muted
          loop
          width="100%"
          height="100%"
        />
      </Suspense>
    </div>
  );
};
export default VideoPlayerCom;
