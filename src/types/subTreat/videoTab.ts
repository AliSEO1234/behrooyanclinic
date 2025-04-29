import { Dispatch, SetStateAction } from "react";

export type VideoCardType = {
  isActive: boolean;
  setActiveVideo: Dispatch<SetStateAction<string>>;
  videoKey: string;
};
