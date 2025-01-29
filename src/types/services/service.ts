import { StaticImageData } from "next/image";

export type ServiceCardType = {
  className?: string;
  img: StaticImageData | string;
  title: string;
  countService: number;
  linkService: string;
  imgStyle: string
};
