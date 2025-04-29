"use client"
import { BranchCardType } from "@/types/about/branchCardType";
import Link from "next/link";
import ImgFetcher from "../imgFetcher";
// import map from "@/assets/images/about/map.jpg";
import { FaLocationDot } from "react-icons/fa6";
import ring from "@/assets/images/about/ring.svg";
import { useAppContext } from "@/contexts/app-context/app-context";
const BranchCard = ({
  desc,
  locationAddress,
  photoList,
  phone,
  mapCover,
  title,
  mapLink,
}: BranchCardType) => {
  const { setAboutGalleryIndex, setAboutGallery, setImgsAbout } =
    useAppContext();
  return (
    <div className="mb-20">
      <div className="mb-4">
        <h2 className="border-text font-extrabold text-[20px] s1280:text-[40px] s1512:text-[64px] text-white text-center s1280:text-start">
          {title}
        </h2>
      </div>
      <div className="bg-[#E9F1EE] rounded-[40px] py-8 px-6 flex flex-col items-center justify-start gap-y-6 s1280:gap-y-0 s1280:gap-x-4 s1280:flex-row s1280:items-start s1280:justify-between shadow-[0px_4px_4px_#00000040]">
        <div className="s1280:w-[571px] s1512:w-[651px]">
          <div className="mb-10">
            <p className="font-medium text-[12px] s1280:text-[14px] s1512:text-[16px] text-[#474744] leading-[25px]">
              {desc}
            </p>
          </div>
          <div className="mb-5">
            <Link
              href={`tel:${phone}`}
              className="flex-cen gap-x-2 w-fit font-medium text-[12px] s1280:text-[16px] text-[#474744]"
            >
              <span className="w-3 h-3 s1280:w-[18px] s1280:h-[18px] inline-block">
                <ImgFetcher src={ring} />
              </span>{" "}
              <span>{phone}</span>
            </Link>
          </div>
          <div className="flex items-center justify-between s1280:justify-start gap-x-4">
            {photoList.map((photo, index) => {
              const endItem = index === photoList.length - 1;
              return (
                <button
                onClick={() => {
                  setImgsAbout(photoList);
                  setAboutGalleryIndex(photo.key);
                  setAboutGallery((val) => !val);
                }}
                  className={`${
                    endItem && "relative"
                  } w-[67px] h-[67px] s1280:w-[130px] s1280:h-[130px] s1512:w-[150px] s1512:h-[150px] rounded-[20px] overflow-hidden`}
                  key={index}
                >
                  <ImgFetcher
                    src={photo.src}
                    width={2000}
                    height={2000}
                    className="object-cover"
                  />
                  {photoList.length > 4 && (
                    <div
                      className={`absolute top-0 left-0 w-full h-full bg-[#47474466] items-center justify-center ${
                        endItem ? "flex" : "hidden"
                      }`}
                    >
                      <p className="text-white font-medium s1280:text-[20px]">
                        +4
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-end justify-start s1280:w-[439px] s1512:w-[570px] s1728:w-[600px] gap-y-5">
          <Link
            href={mapLink}
            target="_blank"
            className="order-2 s1280:order-1 w-[321px] h-[149px] s1280:w-[439px] s1280:h-[300px] s1512:w-[570px] s1512:h-[329px] s1728:w-[600px] rounded-[40px] overflow-hidden -mb-20 s1280:mb-0 s1280:-mt-[90px] shadow-[0px_1px_4px_#00000040]"
          >
            <ImgFetcher
              src={mapCover}
              width={2000}
              height={2000}
              className="scale-105 object-cover"
            />
          </Link>
          <div className="order-1 s1280:order-2 w-full">
            <p className="flex items-start justify-start s1512:items-center gap-x-2 font-medium text-[12px] s1280:text-[14px] s1512:text-[16px]">
              <span>
                <FaLocationDot className="text-[#288285] size-4 s1280:size-8" />
              </span>
              <span className="text-[#474744]">{locationAddress}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BranchCard;
