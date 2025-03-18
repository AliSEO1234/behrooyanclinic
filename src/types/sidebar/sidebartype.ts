import { StaticImageData } from "next/image";

export type AdminCardType = {
    name: string;
    value: string;
    image: StaticImageData;
    userType: "onlyView" | "contact";
    classLabel?: string;
    className?: string;
    langs: StaticImageData[];
    isNotFull? : boolean 
  };