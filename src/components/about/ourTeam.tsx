import per1 from "@/assets/images/about/personels/Parinaz Shaker.jpg";
import per2 from "@/assets/images/about/personels/Teymur Jafarov.jpg";
import per3 from "@/assets/images/about/personels/Mehri Narbayeva.jpg";
import per4 from "@/assets/images/about/personels/Resul Çeçen.jpg";
import per5 from "@/assets/images/about/personels/Irina Kulagina.jpg";
import per6 from "@/assets/images/about/personels/Ramazan İlkcan Şensoy.jpg";
import per7 from "@/assets/images/about/personels/Andrey Kasimov.jpg";
import per8 from "@/assets/images/about/personels/Şule Günal.jpg";
import per9 from "@/assets/images/about/personels/Ali Mosadegh.jpg";
import per10 from "@/assets/images/about/personels/kubrabalik.jpg";
import per11 from "@/assets/images/about/personels/MEHMETNASTRULLA.jpg";
import per12 from "@/assets/images/about/personels/ERHAN GUNAL.jpg";
import PersonelCard from "./personelCard";
import { IoIosArrowForward } from "react-icons/io";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

const OurTeam = () => {
  const personels = [
    {
      id: 0,
      fullName: "Parinaz Shaker",
      position: "Azpo Health Department Manager",
      img: per1,
    },
    {
      id: 1,
      fullName: "Teymur Jafarov",
      position: "Patient Coordinator",
      img: per2,
    },
    {
      id: 2,
      fullName: "Mehri Narbayeva",
      position: "Patient Coordinator",
      img: per3,
    },
    {
      id: 3,
      fullName: "Resul Çeçen",
      position: "Company Owner",
      img: per4,
    },
    {
      id: 4,
      fullName: "Irina Kulagina",
      position: "Social Media Department",
      img: per5,
    },
    {
      id: 5,
      fullName: "Ramazan İlkcan Şensoy",
      position: "Accounting",
      img: per6,
    },
    {
      id: 6,
      fullName: "Andrey Kasimov",
      position: "Videographer",
      img: per7,
    },
    {
      id: 7,
      fullName: "Şule Günal",
      position: "Accounting",
      img: per8,
    },
    {
      id: 8,
      fullName: "Ali Mosadegh",
      position: "SEO and CTO maneger",
      img: per9,
    },
    {
      id: 9,
      fullName: "Kubra Balik",
      position: "Patient Coordinator",
      img: per10,
    },
    {
      id: 10,
      fullName: "MEHMET NASTRULLA",
      position: "DRİVER",
      img: per11,
    },
    {
      id: 11,
      fullName: "ERHAN GUNAL",
      position: "Logistics Manager",
      img: per12,
    },
  ];
  return (
    <>
      <div className="mb-10 s1280:mb-20">
        <p className="text-center font-medium s1280:text-[20px] s1280:leading-[36px] text-[#474744] s1280:px-20 s1512:px-40">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.Lorem Ipsum is simply dummy text
          of the printing and typesetting industry
        </p>
      </div>
      <div className="flex items-center flex-col justify-start gap-y-10 s1280:flex-row flex-wrap s1280:justify-between s1728:justify-start s1728:gap-x-12 s1280:gap-y-20 mb-10 s1280:mb-20 px-8 s1280:px-0">
        {personels.map((pers) => {
          return <PersonelCard key={pers.id} {...pers} />;
        })}
      </div>
      <div className="flex-cen">
        <Link href="/" className="flex-bet gap-x-4 font-bold w-[280px] h-[60px] group hover:bg-[#25A6A9] rounded-[40px]  pe-4 anm">
          <span className="w-[60px] h-[60px] bg-[#25A6A9] text-white rounded-full flex-cen">
          <HiArrowLongRight className="size-8 group-hover:inline-block hidden" />
            <IoIosArrowForward className="size-8 group-hover:hidden" />
          </span>
          <span className="text-[#25A6A9] group-hover:text-white anm">Show More Members</span>
        </Link>
      </div>
    </>
  );
};
export default OurTeam;
