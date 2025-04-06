import { PrePostItemCardType } from "@/types/subNestedTypes/prePostTypes";

const PrePostItemCard = ({ label }: PrePostItemCardType) => {
  return (
    <article className="w-[216px] h-[76px] min-w-[216px] s1280:w-[204px] s1280:min-w-[204px] s1280:h-[115px] s1728:w-[250px] s1728:min-w-[250px] s1728:h-[141px] relative z-[2] snap-start scroll-mr-4">
      <div className="w-[98%] h-full absolute top-0 left-0 rotate-[-7.3deg] border border-dashed border-[#00A8A9] rounded-[20px] z-[1]"></div>
      <div className="bg-white rounded-[20px] shadow-[0px_0px_5px_0px_#00A8A921] w-full h-full relative z-[2] flex-cen">
        <p className="text-[#474744] font-normal text-center text-[14px] s1280:text-[16px] s1728:text-[18px] s1920:text-[20px] px-2 py-1">{label}</p>
      </div>
    </article>
  );
};
export default PrePostItemCard;
