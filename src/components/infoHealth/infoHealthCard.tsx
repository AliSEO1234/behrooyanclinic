import { InfoHealthCardType } from "@/types/infoHealth/infoHealthCard";

const InfoHealthCard = ({ title, value, order }: InfoHealthCardType) => {
  return (
    <div className={`${ order ? `info__text-container--${ order }` : "" } w-[128px] s1280:w-fit`}>
      <p className="text-center font-semibold text-[18px] s1280:text-[36px] text-[#474744] s1728:text-[40px]">{value}</p>
      <p className="text-center font-normal s1280:text-[18px] s1512:text-[24px] s1728:text-[28px] text-[#474744]">{title}</p>
    </div>
  );
};
export default InfoHealthCard;
