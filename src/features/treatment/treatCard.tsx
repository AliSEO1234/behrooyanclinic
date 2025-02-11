"use client"
import { TreatCardType } from "@/types/tratment/treatCardType";
import clipTreat from "@/assets/images/treatment/treatCardClip.svg";
import ImgFetcher from "@/components/imgFetcher";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { useLocale } from "next-intl";
const TreatCard = ({ className, desc, img, title }: TreatCardType) => {
  const locale = useLocale()
  return (
    <div
      className={`${
        className ? className : ""
      } bg-white rounded-[40px] w-full s1280:w-[255px] s1512:w-[329px] s1600:w-[349px] s1728:w-[369px] s1920:w-[390px] poly-treat-card relative overflow-hidden shadow-[4px_4px_4px_0px_#00000025] p-4 pb-0 s1728:p-5 s1728:pb-0 s1280:pb-0 s1920:p-6 s1920:pb-0`}
    >
      {/* img treat */}
      <div className="flex-right mb-5">
        <div className="w-[193px] h-[193px] s390:w-[206px] s390:h-[206px] s1280:w-[128px] s1280:h-[128px] s1512:w-[165px] s1512:h-[165px] s1600:w-[185px] s1600:h-[185px] s1728:w-[206px] s1728:h-[206px] overflow-hidden rounded-full">
          <ImgFetcher src={img!} />
        </div>
      </div>
      {/* contents */}
      <div className="mb-5">
        <h3 className="font-semibold text-[20px] s1280:text-[14px] s1512:text-[20px] text-[#00979A] line-clamp-1 mb-2">
          {title}
        </h3>
        <p className="s1280:text-[14px] s1512:text-[16px] text-[#333333] font-normal text-justify line-clamp-4">{desc}</p>
      </div>
      <div className="flex-cen">
        <Link className="w-[138px] h-[32px] s1280:w-[108px]  s1280:h-6 s1512:w-[138px] s1512:h-[32px] bg-[#DAEDE6] rounded-t-[50px] font-normal s1280:text-[14px] text-[#333333] flex-cen" href={`/${locale}/medicaltourism/stemCell/lasik`}>View More</Link>
      </div>
      {/* clip */}
      <div className="w-[350px] h-[350px] s1512:w-[300px] s1512:h-[300px] absolute -top-[160px] -left-[160px] s1280:-top-[105px] s1280:-left-[105px] s1512:-left-[125px] s1512:-top-[125px] rounded-[40px] overflow-hidden">
        <ImgFetcher src={clipTreat} />
      </div>
      {/* arrow icon */}
      <div className="w-[86px] h-[86px] s1512:w-[86px] s1512:h-[86px] rounded-full shadow-[0px_4px_4px_0px_#00000025] flex-cen bg-white text-[#CECFCF] absolute top-1 left-3">
        <BsArrowDownRight className="size-9 s1280:size-9" />
      </div>
    </div>
  );
};
export default TreatCard;
