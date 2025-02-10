import ImgFetcher from "@/components/imgFetcher";
import video from "@/assets/images/videoCover.jpg";
import { VideoCardType } from "@/types/subTreat/videoTab";
const VideoCard = ({ isActive, setActiveVideo, videoKey }: VideoCardType) => {
  const handleChange = () => {
    setActiveVideo(videoKey);
  };
  return (
    <div>
      <button
        onClick={handleChange}
        className="w-[95px] h-[92px] s1280:w-full s1280:h-[190px] s1512:h-[218px] rounded-[20px] s1280:rounded-[40px] overflow-hidden relative anm"
      >
        {!isActive && (
          <div className="w-full h-full absolute top-0 left-0 bg-[#00000066]"></div>
        )}
        <ImgFetcher className="object-cover" src={video} />
      </button>
    </div>
  );
};
export default VideoCard;
