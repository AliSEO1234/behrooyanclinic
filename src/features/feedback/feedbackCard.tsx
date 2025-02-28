"use client";
// import ImgFetcher from "@/components/imgFetcher";
import { FeedBackCardType } from "@/types/feedback/feedbackCard";
import { FaStar } from "react-icons/fa";
// import feed from "@/assets/images/feed.jpg";
const FeedbackCard = ({ desc, title }: FeedBackCardType) => {
  return (
    <div className="w-[329px] min-w-[329px] s1280:w-[432px] s1280:min-w-[432px] h-[244px] bg-white rounded-[20px] shadow-[0_4px_15px_0_#0000001A] px-8 py-5 pointer-events-none">
      <div className="flex-left gap-x-3 mb-4">
        <div>
          <div>
            <p className="font-bold s1280:text-[20px]">{title}</p>
          </div>
          <div className="flex-left gap-x-1 text-[#F9C909]">
            <FaStar className="size-[19px]" />
            <FaStar className="size-[19px]" />
            <FaStar className="size-[19px]" />
            <FaStar className="size-[19px]" />
            <FaStar className="size-[19px]" />
          </div>
        </div>
      </div>
      <div>
        <p className="line-clamp-3 font-semibold s1280:text-[18px] text-justify s1280:text-start text-[#6D6D6D]">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default FeedbackCard;
