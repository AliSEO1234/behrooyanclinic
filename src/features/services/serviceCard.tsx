import ImgFetcher from "@/components/imgFetcher";
import { ServiceCardType } from "@/types/services/service";
const ServiceCard = ({
  className,
  title,
  img,
  countService,
  imgStyle,
  titleStyle,
  linkStyle,
}: ServiceCardType) => {
  return (
    <div
      className={`${
        className && className
      } bg-white rounded-b-[80px] rounded-t-[400px] shadow-[0px_4px_15px_#0000001A] pb-4 pt-3`}
    >
      <div className="flex-cen mb-4">
        <div
          className={`${imgStyle} treatments__card-bubble flex-cen overflow-hidden border rounded-full shadow-inner-[0px_0px_40px_-8px_#86D1AB] bg-white shadow-service`}
        >
          {/* <div className="w-full h-full min-w-full max-w-full min-h-full max-h-full"> */}
          <ImgFetcher width={200} height={200} src={img} />
          {/* </div> */}
        </div>
      </div>
      <div className="mb-2">
        <h3
          className={`text-center font-medium text-[#474744] ${
            titleStyle ? titleStyle : ""
          }`}
        >
          {title}
        </h3>
        <p className="text-[#888888] font-normal s1280:text-[14px] s1512:text-[16px] text-center">
          {countService} Service
        </p>
      </div>
      <div className="flex-cen px-4">
        <button
          className={`treatments__card-button bg-[#86D1AB] text-white font-bold rounded-[40px] h-[48px] w-[156px] drop-shadow-[0px_4px_4px_#00000040] ${
            linkStyle ? linkStyle : linkStyle
          }`}
        >
          View services
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;
