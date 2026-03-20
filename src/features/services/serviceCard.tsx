"use client";
import Image from "next/image";
import { ServiceCardType } from "@/types/services/service";
import { useLocale } from "next-intl";
import Link from "next/link";
import { BsArrowDown, BsArrowUpRight } from "react-icons/bs";

const ServiceCard = ({
  className,
  title,
  img,
  description,
  linkService,
}: ServiceCardType) => {
  const locale = useLocale();
  const href = `/${locale}/medicaltourism/${linkService}`;

  return (
    <article
      className={`${className || ""} bg-white rounded-[30px] shadow-[0px_4px_15px_#0000001A] px-3 py-4 s1280:px-3 s1280:py-3 s1512:px-4 s1512:py-4 s1920:px-5 s1920:py-5 flex flex-col aspect-[1/0.9]`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-[180px] h-[180px] s1280:w-[160px] s1280:h-[160px] s1512:w-[180px] s1512:h-[180px] s1920:w-[206px] s1920:h-[206px] rounded-full overflow-hidden shadow-service flex-cen bg-white">
          <Image
            src={img}
            alt={title}
            width={400}
            height={400}
            loading="lazy"
            className="w-3/4 h-3/4 object-contain"
            sizes="(max-width: 1280px) 158px, (max-width: 1920px) 158px, 190px"
          />
        </div>
        <Link
          href={href}
          className="group relative w-11 h-11 s1280:w-10 s1280:h-10 s1512:w-11 s1512:h-11 rounded-full border border-[#d1d5db] flex-cen hover:border-[#9A62F7] hover:bg-[#9A62F7] hover:text-white transition-all duration-300 text-[#888]"
        >
          <BsArrowDown className="size-[18px] s1280:size-4 s1512:size-[18px] transition-all duration-300 group-hover:opacity-0 group-hover:scale-50" />
          <BsArrowUpRight className="size-[18px] s1280:size-4 s1512:size-[18px] absolute transition-all duration-300 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100" />
        </Link>
      </div>

      <h3 className="font-bold text-[#9A62F7] text-right text-[18px] s1280:text-[16px] s1512:text-[18px] s1920:text-[20px] mb-2 mt-2 s1280:mt-3">
        {title}
      </h3>

      {description && (
        <p className="text-[#666] text-right text-[13px] s1280:text-[12px] s1512:text-[13px] s1920:text-[14px] leading-6 line-clamp-3">
          {description}
        </p>
      )}
    </article>
  );
};

export default ServiceCard;
