"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const VideoPlayerCom = () => {
  return (
    <div className="video-header">
      <Suspense
      fallback={<Skeleton className="w-full h-full" />}
      >
        <video
          autoPlay
          muted
          loop={true}
          playsInline
          src="/videos/videohealth1.mp4"
        />
      </Suspense>
    </div>
  );
};
export default VideoPlayerCom;
