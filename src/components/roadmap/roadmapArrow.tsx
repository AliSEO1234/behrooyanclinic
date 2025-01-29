import { RoadmapArrowType } from "@/types/roadmap/roadmap";

const RoadmapArrow = ({ align }: RoadmapArrowType) => {
  return (
    <div
      className={`z-[3] s1280:w-[200px] s1280:h-[168px] border-t-[6px] border-[#00979A] absolute top-[100%] -translate-y-1/2 ${
        align === "left" ? "rounded-tr-[200px] -right-[200px] border-e-[6px]" : "rounded-tl-[200px] border-s-[6px] -left-[200px]"
      }`}
    >
      <div className={`absolute ${align === "left" ? "top-[15%] left-[65%]" : "top-[15%] right-[15%]"}  -translate-x-1/2 -translate-y-1/2 w-[98px] h-[98px] rounded-full overflow-hidden bg-[#B7EACC66] p-4 flex-cen`}>
        <div className="bg-gradient-to-r from-[#82DFB5] to-[#00979A] rounded-full w-full h-full"></div>
      </div>
    </div>
  );
};
export default RoadmapArrow;
