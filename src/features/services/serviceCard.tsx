"use client";
import ImgFetcher from "@/components/imgFetcher";
import { ServiceCardType } from "@/types/services/service";
import { useLocale } from "next-intl";
import Link from "next/link";
const ServiceCard = ({
  className,
  title,
  img,
  countService,
  imgStyle,
  titleStyle,
  linkStyle,
  linkService,
}: ServiceCardType) => {
  const locale = useLocale();
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
          <ImgFetcher width={800} height={800} src={img} />
          {/* </div> */}
        </div>
      </div>
      <div className="mb-2 px-1 s1280:px-0">
        <h3
          className={`text-center font-semibold text-[#474744] ${
            titleStyle ? titleStyle : ""
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-[#888888] font-normal ${
            locale === "ru"
              ? "text-[12px]"
              : "s1280:text-[13px] s1512:text-[15px]"
          } text-center line-clamp-1`}
        >
          <span className="font-bold">
          {countService}
          </span>{" "}
          {locale === "ru" ? "медицинских направлений" : "Service"}
        </p>
      </div>
      <div className="flex-cen px-4">
        <Link
        href={`/${locale}/medicaltourism/${linkService}`}
          className={`flex-cen bg-[#00979a] hover:bg-[#007A7D] anm text-white font-bold rounded-[40px] h-[48px] w-[156px] drop-shadow-[0px_4px_4px_#00000040] ${locale === "ru" ? "w-full" : ""} ${
            linkStyle ? linkStyle : linkStyle
          }`}
        >
          {locale === "ru" ? "Посмотреть услуги" : "View services"}
        </Link>
      </div>
    </div>
  );
};
export default ServiceCard;
