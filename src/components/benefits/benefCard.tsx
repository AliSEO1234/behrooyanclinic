import { BenefCardType } from "@/types/benefits/benefTypes";

const BenefCard = ({ desc, title }: BenefCardType) => {
  return (
    <div className="z-[2] bg-white shadow-[0px_4px_15px_#00000010] rounded-[20px] s1280:rounded-[40px] px-4 py-2 leading-[17px] s1280:px-4 s1728:px-6 s1280:py-4 s1280:leading-[25px] w-[208px] h-[104px] s1280:w-[269px] s1728:w-[357px] s1280:h-[130px]">
      <h3 className="font-medium text-[#3EBB9A] text-[14px] s1280:text-[16px] s1728:text-[20px]">{title}</h3>
      <p className="font-normal text-[14px] s1280:text-[16px] s1728:text-[20px]">{desc}</p>
    </div>
  );
};
export default BenefCard;
