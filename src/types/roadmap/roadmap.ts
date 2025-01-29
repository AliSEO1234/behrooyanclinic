import { StaticImageData } from "next/image";

export type RoadmapType = {
  cover: StaticImageData | string;
  title?: string;
  desc?: string;
  className?: string;
  align: "left" | "right";
  endArrow? : boolean
};
export type RoadmapArrowType = {
  align: "left" | "right";
};
