"use client";
import { FaPlay } from "react-icons/fa";
import { PatientVideoPlayerType } from "@/types/videoPlayer/patientVideoPlayerType";
import { useEffect, useRef, useState } from "react";

const PatientVideoPlayer = ({ videoSrc,isPoster }: PatientVideoPlayerType) => {
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const [poster, setPoster] = useState<string | null>(null);
  const handlePlay = () => {
    if (videoEl.current) {
      if (!document.fullscreenElement) {
        videoEl.current
          .requestFullscreen()
          .then(() => {
            videoEl.current?.classList.remove("object-cover");
            videoEl.current!.play();
          })
          .catch((err) =>
            console.error("Error attempting to enable full-screen mode:", err)
          );
      }
    }
  };
  useEffect(() => {
    const capturePoster = () => {
      if (videoEl.current) {
        const video = videoEl.current;
        video.currentTime =isPoster ? 20 : 5;
        video.addEventListener(
          "seeked",
          () => {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");

            if (ctx) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              setPoster(canvas.toDataURL("image/jpeg"));
            }
          },
          { once: true }
        );
      }
    };

    capturePoster();
  }, [videoSrc]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && videoEl.current) {
        videoEl.current.classList.add("object-cover");
        videoEl.current.pause();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div className="video-distinctive__image-container w-[274px] h-[274px] s1280:w-[223px] s1280:h-[223px] s1512:w-[274px] s1512:h-[274px] s1600:w-[295px] s1600:h-[295px] rounded-full overflow-hidden relative">
      <button
        onClick={handlePlay}
        className="w-[46px] h-[46px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-cen rounded-full bg-[#0CA5A580] text-[#FFFFFFCC] group z-[1]"
      >
        <FaPlay className="size-5 -me-1 group-hover:scale-110 anm" />
      </button>
      <video
        crossOrigin="anonymous"
        poster={poster || undefined}
        ref={videoEl}
        src={videoSrc}
        className="w-full h-full object-cover z-0"
      ></video>
      {/* <ImgFetcher src={videoSrc} width={2000} /> */}
    </div>
  );
};
export default PatientVideoPlayer;
