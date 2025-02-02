import { ChooseUsCardType } from "@/types/chooseUs/chooseUsType";

const ChooseUsCard = ({ desc, header, index, className ,end = false }: ChooseUsCardType) => {
  return (
    <div
      className={`${
        className && className
      } relative bg-white rounded-[40px] shadow-[0_4px_4px_0px_#00000040] ${end ? "" : "mb-[32px]"} s1280:mb-10 px-4 pb-5 s1280:px-3 s1280:pb-8 s1280:pt-4`}
    >
      <div className="mb-2">
        <h3 className="ms-6 s1280:ms-16 font-semibold text-[#00979A]">{header}</h3>
      </div>
      <div>
        <p className="text-[14px] s1280:text-[14px] s1600:text-[16px] font-normal text-[#575757] leading-[17px] s1600:leading-[20px] text-justify">
          {desc}
        </p>
      </div>
      {/* counter */}
      <div className="rounded-full bg-white shadow-choose-us w-[35px] h-[35px] text-[14px] s1280:w-[54px] s1280:h-[54px] absolute -left-3 -top-3 s1280:left-0 flex-cen text-[#00979A] s1280:text-[20px] font-semibold">
        {index}
      </div>
    </div>
  );
};
export default ChooseUsCard;
