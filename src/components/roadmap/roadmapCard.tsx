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
}: RoadmapType) => {
  return (
    <div
      className={`col-span-12 flex items-center ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`${
          className && className
        } rounded-[500px] bg-white border-x-[6px] border-[#189C9F] shadow-[-4px_6px_15.5px_2px_#0000003D] s1280:h-[168px] flex-bet s1280:gap-x-4 s1280:px-4 relative z-[4]`}
      >
        {!endArrow && <RoadmapArrow align={align} />}
        <div className="flex-cen">
          <div className="s1280:w-[127px] s1280:h-[127px] bg-white shadow-roadmap-card rounded-full overflow-hidden p-2 flex-cen ">
            <div>
              <ImgFetcher src={cover} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[#00979A] font-medium">{title}</h3>
          <p className="font-normal text-[#423D3D]">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default RoadmapCard;
