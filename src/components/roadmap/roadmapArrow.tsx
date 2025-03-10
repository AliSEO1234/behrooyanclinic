import { RoadmapArrowType } from "@/types/roadmap/roadmap";

const RoadmapArrow = ({ align }: RoadmapArrowType) => {
  return (
    <div
    // roadmap-arrow__order--${ order } 
      className={`hidden s1280:block z-[3] s1280:w-[250px] s1280:h-[150px] border-t-[6px] border-[#00979A] absolute top-[90%] -translate-y-1/2 ${
        align === "left" ? "rounded-tr-[200px] -right-[250px] border-e-[6px]" : "rounded-tl-[200px] border-s-[6px] -left-[250px]"
      }`}
    >
      <div className={`absolute ${align === "left" ? "top-[10%] left-[70%]" : "top-[10%] right-[30%]"}  -translate-x-1/2 -translate-y-1/2 w-[98px] h-[98px] rounded-full overflow-hidden bg-[#B7EACC66] p-8 flex-cen`}>
        <div className="bg-gradient-to-r from-[#82DFB5] to-[#00979A] rounded-full w-full h-full"></div>
      </div>
    </div>
  );
};
export default RoadmapArrow;
