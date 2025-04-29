import { StaticImageData } from "next/image";

export type FeedBackCardType = {
  img?: StaticImageData | string;
  title: string;
  desc: string;
  scoreCount : number
};
