import ImgFetcher from "@/components/imgFetcher";
import { ServiceCardType } from "@/types/services/service";
const ServiceCard = ({
  className,
  title,
  img,
  countService,
  imgStyle
}: ServiceCardType) => {
  return (
    <div
      className={`${
        className && className
      } bg-white rounded-b-[40px] rounded-t-[400px] shadow-[0px_4px_15px_#0000001A] pt-4 pb-4`}
    >
      <div className="flex-cen mb-4 px-4">
        <div className={`${imgStyle} flex-cen overflow-hidden border rounded-full shadow-inner-[0px_0px_40px_-8px_#86D1AB] p-4 bg-white shadow-service`}>
          <div className="w-full h-full">
            <ImgFetcher src={img} />
          </div>
        </div>
      </div>
      <div className="mb-2">
        <h3 className="text-center font-medium text-[#474744] text-[20px] s1512:text-[20px]">{title}</h3>
        <p className="text-[#888888] font-normal s1280:text-[14px] s1512:text-[16px] text-center">
          {countService} Service
        </p>
      </div>
      <div className="flex-cen">
        <button className="bg-[#86D1AB] text-white font-bold rounded-[40px] h-[48px] w-[156px] drop-shadow-[0px_4px_4px_#00000040] text-[18px] s1512:text-[18px]">
          View services
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;
