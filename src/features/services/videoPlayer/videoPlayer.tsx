import ImgFetcher from "@/components/imgFetcher";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { PiSpeakerHighFill } from "react-icons/pi";
import videoCover from "@/assets/images/videoCover.jpg";
const VideoPlayer = () => {
  return (
    <>
      <div className="rounded-[20px] s1280:rounded-[40px] h-[200px] s1280:h-[622px] s1512:h-[736px] s1600:h-[784px] s1728:h-[830px] s1920:h-[895px] relative overflow-hidden">
        <div className="bg-[#00000047] w-full h-full absolute top-0 left-0"></div>
        <ImgFetcher width={2000} src={videoCover} />
        {/* video controler */}
      </div>
      <div className="-mt-5 s1280:-mt-12 px-6 s1280:px-16 s1600:px-28 s1920:px-36">
        <div className="flex items-center justify-between s1280:justify-center px-5 s1280:px-0 s1280:gap-x-10 rounded-[200px] bg-gradient-to-r from-[#8D8D8D57] to-[#8D8D8DD4] border border-white backdrop-blur-[12px] h-[38px] s1280:h-[88px] text-white">
          <div>
            <button>
              {/* pause */}
              {/* <FaPause className="size-5" /> */}
              {/* play */}
              <FaPlay className="size-4 s1280:size-8" />
            </button>
          </div>
          <div className="w-[60%] s1280:w-[70%] flex-cen">
            <progress
              className="w-full h-[3px] progVideoHome"
              value="40"
              max={100}
            ></progress>
          </div>
          <div className="flex-cen gap-x-2">
            <div>
              <button>
                <AiOutlineFullscreen className="size-4 s1280:size-8" />
              </button>
            </div>
            <div>
              <button>
                <PiSpeakerHighFill className="size-4 s1280:size-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoPlayer;
