import { StaticImageData } from "next/image";

export type VideoPlayerType = {
  className?: string;
  src: string | undefined;
  showLogo? : boolean
  positionVideo? : "subnested"
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
export type VideoType = {
  items: {
    contentDetails: {
      duration: string;
    };
    snippet: {
      title: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
  }[];
};
