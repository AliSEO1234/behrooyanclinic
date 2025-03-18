import ImgFetcher from "@/components/imgFetcher";
import { AdminCardType } from "@/types/sidebar/sidebartype";
import Link from "next/link";

const CarouselAdmin = ({
  image,
  name,
  value,
  userType,
  classLabel,
  className,
  langs,
  isNotFull
}: AdminCardType) => {
  return (
    <div className={` gap-x-1 my-5 ${className ? className : "flex-left"}`}>
      <div className="flex-cen">
        <div className={`w-[67px] h-[67px] ${isNotFull ? "bg-[#00979A] p-2" : ""} rounded-full overflow-hidden`}>
          <ImgFetcher width={2000} src={image} className="object-cover" />
        </div>
      </div>
      <div>
        <p className={`${classLabel ? classLabel : "text-[16px]"} font-bold`}>
          {name}
        </p>
        <div className="mb-1">
          {userType === "onlyView" ? (
            <>
              <p className="text-[#333333] text-[12px] font-normal">{value}</p>
            </>
          ) : (
            <Link
              className="text-[#333333] s1280:text-[14px]"
              href={`mailto:${value}`}
            >
              {value}
            </Link>
          )}
        </div>
        <div>
          <p className="flex-left gap-x-2">
            {langs.map((lang, index) => {
              return (
                <span className="w-6" key={index}>
                  <ImgFetcher width={1000} src={lang} />
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CarouselAdmin;
