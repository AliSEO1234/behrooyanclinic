import { DistinctiveType } from "@/types/distinctive/distinctiveType";
import ImgFetcher from "../imgFetcher";
import { FaPlay } from "react-icons/fa";

const DistinctiveCard = ({
  desc,
  service,
  title,
  video,
  className,
  icon,
}: DistinctiveType) => {
  return (
    <div
      className={`${
        className && className
      } video-distinctive__card-container col-span-12 s1280:col-span-3 s1512:col-span-3 h-[634px] s1280:h-full py-4 shadow-[0_4px_15px_0_#0000001A] bg-white rounded-t-[400px] rounded-b-[80px] border-t-[5px] border-[#86D1AB] flex flex-col`}
    >
      <div className="flex-cen mb-5">
        <div className="video-distinctive__image-container w-[274px] h-[274px] s1280:w-[223px] s1280:h-[223px] s1512:w-[274px] s1512:h-[274px] s1600:w-[295px] s1600:h-[295px] rounded-full overflow-hidden relative">
          <button className="w-[46px] h-[46px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-cen rounded-full bg-[#0CA5A580] text-[#FFFFFFCC]">
            <FaPlay className="size-5" />
          </button>
          <ImgFetcher src={video} width={2000} />
        </div>
      </div>
      <div className="flex-right mb-5">
        <p className="video-distinctive__service-text bg-[#DAEDE6] text-[#474744] rounded-s-[100px] px-2 py-1 font-medium flex-cen gap-x-2">
          <span className="w-[15px] h-[15px]">{<ImgFetcher src={icon} />}</span>
          <span className="s1280:text-[12px] s1512:text-[16px]">{service}</span>
        </p>
      </div>
      <div className="mb-4">
        <h3 className="video-distinctive__title text-center font-medium text-[20px] s1280:text-[14px] s1512:text-[20px] text-[#474744] mb-2">
          {title}
        </h3>
        <p className="font-normal text-[#474744] s1280:text-[14px] s1512:text-[16px] text-center px-5 s1280:px-7">
          {desc}
        </p>
      </div>
      <div className="flex-cen mt-auto ">
        <button className="video-distinctive__button--down bg-[#86D1AB] font-bold text-[18px] text-white rounded-[40px] w-[206px] h-[54px]">
          See more
        </button>
      </div>
    </div>
  );
};
export default DistinctiveCard;
