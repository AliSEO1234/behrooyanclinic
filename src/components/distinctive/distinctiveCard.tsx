"use client";
import { DistinctiveType } from "@/types/distinctive/distinctiveType";
import ImgFetcher from "../imgFetcher";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const DistinctiveCard = ({
  desc,
  service,
  title,
  video,
  className,
  icon,
}: DistinctiveType) => {
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
        video.currentTime = 5;
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
  }, [video]);

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
    <div
      className={`${
        className && className
      } w-[221px] h-[222px] min-w-[221px] s1512:w-[250px] s1512:min-w-[250px] s1728:min-w-[295px] s1512:h-[250px] s1728:w-[295px] s1728:h-[295px] rounded-[20px] s1280:rounded-[40px] overflow-hidden relative`}
    >
      <div className="w-full h-full absolute top-0 left-0">
        <video
          crossOrigin="anonymous"
          poster={poster || undefined}
          ref={videoEl}
          src={video}
          preload="auto"
          playsInline
          className="w-full h-full object-cover"
        ></video>
        {/* <ImgFetcher src={videoSrc} width={2000} /> */}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFFFFF00] to-[#20a1a3c3]">
        <button
          onClick={handlePlay}
          className="w-[46px] h-[46px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-cen rounded-full bg-[#FFFFFFB2] text-[#00979ACC] border border-white group"
        >
          <FaPlay className="size-5 -me-1 group-hover:scale-110 anm" />
        </button>
        <div className="absolute top-5 s1512:top-8 left-0 bg-gradient-to-r rounded-r-[100px] from-[#00979A2E] to-[#00979A] h-[26px] s1512:h-[30px] s1728:h-[35px] overflow-hidden p-[1px] ps-0">
          <p className="flex-left gap-x-2 h-full font-normal text-[12px] s1280:text-[14px] s1728:text-[16px] rounded-r-[100px] ps-2 s1280:ps-4 pe-2 bg-white text-[#00979A]">
            <span className="w-4 h-4">
              <ImgFetcher src={icon} />
            </span>
            <span>{service}</span>
          </p>
        </div>
        <div className="w-full absolute bottom-3 s1512:bottom-5 left-0 flex-cen">
          <div>
            <p className="font-bold text-white s1512:text-[18px] line-clamp-1">
              {desc}
            </p>
            <hr className="h-0 w-full border-[0.5px] border-white my-1" />
            <p className="font-medium text-[14px] s1512:text-[16px] s1728:text-[18px] text-white">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DistinctiveCard;
