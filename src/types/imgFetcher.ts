import { StaticImageData } from "next/image";

export type ImgFetcherType = {
  title?: string;
  src: StaticImageData | string;
  width?: number;
  height?: number;
  dynamic?: boolean;
  className? : string
};
