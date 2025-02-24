"use client";
import ImgFetcher from "@/components/imgFetcher";
import { VideoPlayerType } from "@/types/videoPlayer/videoTypes";
import healthlogo from "@/assets/images/healthlogo.png";
const VideoPlayer = ({ src, className, showLogo = true }: VideoPlayerType) => {
  // const [togglePlay, setTogglePlay] = useState<boolean>(false);
  return (
    <div className="relative w-fit">
      <div
        className={`${
          className ? className : ""
        } rounded-[20px] s1280:rounded-[40px] ${showLogo ? "relative" : ""}  overflow-hidden z-[2]`}
      >
        <div className="bg-[#00000047] rounded-[20px] s1280:rounded-[40px] w-full h-full absolute top-0 left-0"></div>
        {typeof src === "string" ? (
          <div className="w-full h-full">
            <video
              className="w-full h-full min-h-full max-h-full object-cover"
              controls
              src={src}
            ></video>
          </div>
        ) : (
          <ImgFetcher className="object-cover" width={2000} src={src} />
        )}
        {/* video controler */}
      </div>
      {showLogo && (
        <>
          <div className="hidden s1280:block s1280:w-[245px] s1280:h-[245px] s1728:w-[294px] s1728:h-[294px] absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-[1]">
            <ImgFetcher src={healthlogo} />
          </div>
          <div className="hidden s1280:block s1280:w-[245px] s1280:h-[245px] s1728:w-[294px] s1728:h-[294px] absolute top-1/2 -right-[27%] s1728:-right-[32%] -translate-x-1/2 -translate-y-1/2 z-[1]">
            <ImgFetcher src={healthlogo} />
          </div>
        </>
      )}
      {/* <div className="absolute -bottom-10 s1280:-bottom-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex-cen px-5 s1280:px-20 s1512:px-32">
        <div
          className={` ${
            toolsbarStyle ? toolsbarStyle : ""
          } flex w-full items-center justify-between s1280:justify-between px-5 s1280:gap-x-5 rounded-[200px] bg-gradient-to-r from-[#8D8D8D57] to-[#8D8D8DD4] border border-white backdrop-blur-[12px] text-white shadow-[0px_4px_4px_#00000025]`}
        >
          <div>
            <button onClick={() => setTogglePlay((val) => !val)} className="">
              {togglePlay ? (
                <FaPause className="size-4 s1280:size-4 s1600:size-5" />
              ) : (
                <FaPlay className="size-4 s1280:size-4 s1600:size-5" />
              )}
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
      </div> */}
    </div>
  );
};
export default VideoPlayer;
