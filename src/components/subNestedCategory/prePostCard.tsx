import { PrePostCardType } from "@/types/subNestedTypes/prePostTypes";
import ImgFetcher from "../imgFetcher";

const PrePostCard = ({ icon, position }: PrePostCardType) => {
  return (
    <div className="s1280:w-[188px] s1280:min-w-[188px] s1280:h-[188px] s1512:w-[214px] s1512:min-w-[214px] s1512:h-[214px] s1728:w-[221px] s1728:min-w-[221px] s1728:h-[221px] s1920:w-[255px] s1920:min-w-[255px] s1920:h-[255px] rounded-[12px] border-[0.5px] border-none s1280:border-dashed border-[#00979A] s1280:p-3 s1512:p-4 group s1280:bg-[#FBFDFD]">
      <div className="flex justify-start gap-x-3 s1280:flex-col items-center s1280:justify-center s1280:gap-y-1 s1280:shadow-[0px_0px_8px_0px_#00979A40] s1280:bg-white rounded-[12px] w-full h-full s1728:px-2">
        <div className="w-10 h-10 s1280:w-[103px] s1280:h-[104px] s1512:w-[114px] s1512:h-[116px] s1920:w-[131px] s1920:h-[132px]">
          <ImgFetcher className="group-hover:scale-110 anm" src={icon} />
        </div>
        <div>
          <p className="font-black s1280:text-[14px] s1512:text-[16px] s1728:text-[18px] s1920:text-[20px] text-center text-[#019E9F]">
            {position === "post"
              ? "Pre-operative Guidelines"
              : "Post-operative Care Instructions"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrePostCard;
