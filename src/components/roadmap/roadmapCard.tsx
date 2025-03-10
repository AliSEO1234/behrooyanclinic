import { RoadmapType } from "@/types/roadmap/roadmap";
import ImgFetcher from "../imgFetcher";
import RoadmapArrow from "./roadmapArrow";

const RoadmapCard = ({
  className,
  cover,
  desc,
  title,
  align,
  endArrow = false,
  order
}: RoadmapType) => {
  return (
    <div
      className={`col-span-12 flex items-center ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {/* roadmap-card__order--${ order } */}
      <div
        className={`${
          className && className
        }  rounded-[500px] bg-white border-x-[2px] s1280:border-x-[6px] border-[#189C9F] shadow-[-4px_6px_15.5px_2px_#0000003D] flex-bet s1280:gap-x-4 s1280:px-4 relative z-[4]`}
      >
        {!endArrow && <RoadmapArrow order={ order } align={align} />}

        <div className="flex-cen absolute -top-3 s1280:static">
          <div className={`w-[39px] h-[39px] s1280:w-[127px] s1280:h-[127px] bg-white shadow-roadmap-card rounded-full overflow-hidden flex-cen ${order === 2 ? "s1280:p-3 p-1" : order === 4 ? "s1280:p-2 p-1" : order ===3 ? "p-0" : "p-1"} `}>
            <div>
              <ImgFetcher width={100} height={100} src={cover} />
            </div>
          </div>
        </div>
        <div className="py-2 s1280:py-0">
          <h3 className="px-5 s1280:p-0 text-[#00979A] font-medium text-[14px] text-center s1280:text-start s1280:text-[16px] s1512:text-[20px] s1280:mb-2 text">{title}</h3>
          <p className="font-normal text-[#423D3D] text-center px-5 s1280:p-0 s1280:text-start text-[14px] s1280:text-[16px] s1512:text-[20px]">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default RoadmapCard;
