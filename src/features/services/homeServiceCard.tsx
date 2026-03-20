"use client";
import ImgFetcher from "@/components/imgFetcher";
import { ServiceCardType } from "@/types/services/service";
import { useLocale } from "next-intl";
import Link from "next/link";
const HomeServiceCard = ({
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
    <article
      className={`${
        className && className
      } bg-white rounded-b-[80px] rounded-t-[400px] shadow-[0px_4px_15px_#0000001A] pb-4 pt-3`}
    >
      <div className="flex-cen mb-4">
        <div
          className={`${imgStyle} treatments__card-bubble flex-cen overflow-hidden border rounded-full shadow-inner-[0px_0px_40px_-8px_#86D1AB] bg-white shadow-service`}
        >
          <ImgFetcher width={800} height={800} src={img} />
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
      </div>
      <div className="flex-cen px-4">
        <Link
          href={`/${locale}/medicaltourism/${linkService}`}
          className={`flex-cen bg-[#9A62F7] hover:bg-[#8347E0] anm text-white font-bold rounded-[40px] h-[38px] w-[130px] text-[13px] ${
            locale === "ru" ? "w-full" : ""
          } ${linkStyle ? linkStyle : linkStyle}`}
        >
          {locale === "ru" ? "Посмотреть услуги" : "مشاهده خدمات"}
        </Link>
      </div>
    </article>
  );
};
export default HomeServiceCard;
