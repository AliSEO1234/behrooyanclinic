import { PltInfoCardType } from "@/types/pltWork/infoPltWork";

const InfoCard = ({ counter, desc, title }: PltInfoCardType) => {
  return (
    <div className="flex items-start justify-start gap-x-2">
      <div className="w-[45px] h-[45px] min-w-[45px] s1280:w-[52px] s1280:min-w-[52px] rounded-full s1280:h-[52px] plt-work-info-shadow flex-cen text-[#00979A] text-[20px] font-semibold">
        <p>{counter}</p>
      </div>
      <div>
        <h4 className="font-bold s1280:text-[20px] text-[#00979A]">{title}</h4>
        <p className="text-[#6D6D6D] text-justify font-medium leading-[25px]">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default InfoCard;
