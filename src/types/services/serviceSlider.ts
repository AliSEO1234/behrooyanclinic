import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type ServiceSliderCardType = {
  img: StaticImageData;
  setServiceKey?: Dispatch<SetStateAction<string>>;
  serviceKey? : string
  services? :string[]
  className? : string
  imgStyle? : string
  changeImageHandler : (key : string)=>void
  keyImg : string
};
