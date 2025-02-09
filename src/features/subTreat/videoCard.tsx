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
        className="s1280:h-[200px] rounded-[40px] overflow-hidden relative anm"
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
