import { StaticImageData } from "next/image";

export type VideoPlayerType = {
  className?: string;
  src: StaticImageData | string;
  toolsbarStyle: string;
  showLogo? : boolean
};

export type VideoDataType = {
  videoName: string;
  src: string | StaticImageData;
  videoKey: string;
  id: number;
  order: number;
};

export type videoChangeType = {
  videoList: VideoDataType[];
};
