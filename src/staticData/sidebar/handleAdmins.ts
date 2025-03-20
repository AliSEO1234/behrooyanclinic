import us from "@/assets/images/us.svg";
import russian from "@/assets/images/russian.svg";
import turkey from "@/assets/images/turkey.svg";
import gr from "@/assets/images/german.jpg";
import health from "@/assets/images/healthlogo.png";
import teymur from "@/assets/images/about/personels/Jafarov.jpg";
import kubra from "@/assets/images/about/personels/Kubra.jpg";
import mehri from "@/assets/images/about/personels/Narbayeva.jpg";
import parinaz from "@/assets/images/about/personels/Shaker.jpg";
import iran from "@/assets/images/iran.svg";
import bosnia from "@/assets/images/bosnia.svg"
export const handleAdmins = (locale: string) => {
  const adminList = [
    {
      name: locale === "ru" ? "Parinaz" : "Parinaz",
      languages: [us, iran, turkey],
      desc: locale === "ru" ? "Patient Coordinators" : "Patient Coordinators",
      img: parinaz,
    },
    {
      name: "Aynur",
      languages: [gr, turkey],
      desc: locale === "ru" ? "Patient Coordinators" : "Patient Coordinators",
      img: health,
      isNotFull: true,
    },
    {
      name: "Sabina",
      languages: [us, bosnia],
      desc: locale === "ru" ? "Patient Coordinators" : "Patient Coordinators",
      img: health,
      isNotFull: true,
    },
    {
      name: "Teymur",
      languages: [russian, turkey],
      desc: locale === "ru" ? "Patient Coordinators" : "Patient Coordinators",
      img: teymur,
    },
    {
      name: "Kubra",
      languages: [us, turkey],
      desc: locale === "ru" ? "Patient Coordinators" : "Patient Coordinators",
      img: kubra,
    },
    {
      name: locale === "ru" ? "Mehri" : "Mehri",
      languages: [russian, turkey],
      desc: locale === "ru" ? "Patient Coordinators" : "Patient Coordinators",
      img: mehri,
    },
  ];
  return adminList;
};
