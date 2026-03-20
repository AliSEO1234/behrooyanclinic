"use client";
import { useEffect, useState } from "react";

const VideoPlayerCom = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={"video-header"}>
      {
        isClient &&
        <video autoPlay muted playsInline preload={"auto"} loop width={"100%"} height={"100%"}
               poster={"/videos/video-health-cover.jpg"}>
          <source src={"/videos/Video Project 2.mp4"} type={"video/mp4"}/>
        </video>
      }
    </div>
  );
};

export default VideoPlayerCom;
