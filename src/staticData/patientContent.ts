import dist1icon from "@/assets/images/distinctive/icon1.svg";
// import dist2icon from "@/assets/images/distinctive/icon2.svg";
// import dist3icon from "@/assets/images/distinctive/icon3.svg";
// import dist4icon from "@/assets/images/distinctive/icon4.svg";
import { StaticImageData } from "next/image";
export const handlePatient = (locale: string) => {
  const isRu = locale === "ru"
  const patientContents: {
    service: string;
    serivceKey: string;
    header: string;
    desc: string;
    video: string;
    serviceIcon: StaticImageData;
  }[] = [
    {
      service: isRu ? "Стоматологическое лечение" : "Dental Treatments",
      serivceKey: "dental-treatments",
      serviceIcon: dist1icon,
      header: "Jasminka",
      desc: "All-on-4 dental implant",
      video: isRu ? "https://youtu.be/pebPJAQD4xk?si=92H5tai32u-MMtDJ" : "https://youtu.be/Y-X7bSZzzu0?si=mYPor7A99_PklD1K",
    },
    {
      service: isRu ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Maliba",
      desc: "Hair Transplant Journey",
      video: "https://youtu.be/gsQ849f0x-I?si=sQ3nz3PbXQ7O3zFw",
    },
    {
      service: isRu ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Timur's",
      desc: "Hair Transplant Journey",
      video: "https://www.youtube.com/shorts/CUzIi1Yyikg",
    },
    {
      service: isRu ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Alexander's",
      desc: "Hair Transplant Journey",
      video: "https://www.youtube.com/shorts/gvc__8i32cI",
    },
    {
      service: isRu ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Vadim's",
      desc: "Hair Transplant Journey",
      video: "https://www.youtube.com/shorts/9Tb9jafBfAI",
    },

    {
      service: isRu ? "Эстетическая медицина" : "Aesthetics",
      serivceKey: "aesthetic",
      serviceIcon: dist1icon,
      header: "Ludmila's",
      desc: "Hip Replacement Surgery",
      video: "https://www.youtube.com/shorts/V9S1j1aldmM",
    },
  ];
  return patientContents;
};
