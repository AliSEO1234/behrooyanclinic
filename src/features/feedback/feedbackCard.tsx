"use client";
// import ImgFetcher from "@/components/imgFetcher";
import { FeedBackCardType } from "@/types/feedback/feedbackCard";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const FeedbackCard = ({ desc, title }: FeedBackCardType) => {
  return (
    <Link dir="ltr" href="https://www.google.com.tr/maps/place/AZPO+HEALTH/@36.5424725,32.0294971,17z/data=!3m1!4b1!4m6!3m5!1s0x14dc991aac26385b:0x6c62ab4b8439418e!8m2!3d36.5424682!4d32.032072!16s%2Fg%2F11y3lrrxnz?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="block h-[244px] bg-white rounded-[20px] shadow-[0_4px_15px_0_#0000001A] px-8 py-5 snap-center w-[328px] min-w-[328px] s1280:w-[432px] s1280:min-w-[432px]">
      <div className="flex-bet gap-x-3 mb-4">
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
        <div>
          <p><FcGoogle className="size-6" /></p>
        </div>
      </div>
      <div>
        <p className="line-clamp-5 font-semibold s1280:text-[18px] s1280:text-start text-[#6D6D6D]">
          {desc}
        </p>
      </div>
    </Link>
  );
};
export default FeedbackCard;
