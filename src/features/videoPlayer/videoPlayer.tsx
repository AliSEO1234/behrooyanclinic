"use client";
import dynamic from "next/dynamic";
// import ReactPlayer from "react-player";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const VideoPlayerCom = () => {
  return (
    <div className="video-header">
        <ReactPlayer
          url={`/videos/videohealth1.mp4`}
          playing
          muted
          loop
          width="100%"
          height="100%"
        />
    </div>
  );
};
export default VideoPlayerCom;
