import per4 from "@/assets/images/about/personels/resul.jpg";
import per5 from "@/assets/images/about/personels/Irina Kulagina.jpg";
import per6 from "@/assets/images/about/personels/ramazan.jpg";
import per7 from "@/assets/images/about/personels/Andrey Kasimov.jpg";
import per8 from "@/assets/images/about/personels/sule.jpg";
import per9 from "@/assets/images/about/personels/Ali Mosadegh.jpg";
import per11 from "@/assets/images/about/personels/MEHMET NASTRULLA.jpg";
import per12 from "@/assets/images/about/personels/ERHAN GUNAL.jpg";
import per30 from "@/assets/images/about/personels/Narbayeva.jpg";
import per31 from "@/assets/images/about/personels/Jafarov.jpg";
import per32 from "@/assets/images/about/personels/Kubra.jpg";
import per33 from "@/assets/images/about/personels/Shaker.jpg";
import PersonelCard from "./personelCard";
import { OurTeamComType } from "@/types/about/aboutPageType";
const OurTeam = ({ locale }: OurTeamComType) => {
  const personels = [
    {
      id: 0,
      fullName: locale === "ru" ? "Ресул Чечен" : "Resul Çeçen",
      position: locale === "ru" ? "Владелец компании" : "Company Owner",
      img: per4,
    },
    {
      id: 27,
      fullName: locale === "ru" ? "Париназ Шакер" : "Parinaz Shaker",
      position:
        locale === "ru"
          ? "Руководитель отдела здравоохранения Azpo"
          : "Azpo Health Department Manager",
      img: per33,
    },
    {
      id: 25,
      fullName: locale === "ru" ? "Теймур Джафаров" : "Teymur Jafarov",
      position: locale === "ru" ? "Координатор по работе с пациентами" : "Patient Coordinator",
      img: per31,
    },
    {
      id: 24,
      fullName: locale === "ru" ? "Мехри Нарбаева" : "Mehri Narbayeva",
      position: locale === "ru" ? "Координатор по работе с пациентами" : "Patient Coordinator",
      img: per30,
    },
    {
      id: 26,
      fullName: locale === "ru" ? "Кубра Балик" : "Kubra Balik",
      position: locale === "ru" ? "Координатор по работе с пациентами" : "Patient Coordinator",
      img: per32,
    },
    {
      id: 1,
      fullName: locale === "ru" ? "Шуле Гюнал" : "Şule Günal",
      position: locale === "ru" ? "Бухгалтерия" : "Accounting",
      img: per8,
    },
    {
      id: 13,
      fullName: locale === "ru" ? "Андрей Касимов" : "Andrey Kasimov",
      position: locale === "ru" ? "Видеооператор" : "Videographer",
      img: per7,
    },
    {
      id: 11,
      fullName: locale === "ru" ? "Эрхан Гюнал" : "ERHAN GUNAL",
      position: locale === "ru" ? "Менеджер по логистике" : "Logistics Manager",
      img: per12,
    },
    {
      id: 10,
      fullName: locale === "ru" ? "Мехмет Наструлла" : "MEHMET NASTRULLA",
      position: locale === "ru" ? "ВОДИТЕЛЬ" : "DRIVER",
      img: per11,
    },
    {
      id: 6,
      fullName:
        locale === "ru" ? "Рамазан Илькджан Шенсой" : "Ramazan İlkcan Şensoy",
      position: locale === "ru" ? "Бухгалтери" : "Accounting",
      img: per6,
    },
    {
      id: 5,
      fullName: locale === "ru" ? "Ирина Кулагина" : "Irina Kulagina",
      position:
        locale === "ru" ? "Отдел социальных сетей" : "Social Media Department",
      img: per5,
    },
    {
      id: 2,
      fullName: locale === "ru" ? "Али Мосадег" : "Ali Mosadegh",
      position:
        locale === "ru"
          ? "Генеральный директор и технический директор"
          : "SEO and CTO maneger",
      img: per9,
    },
  ];
  
  // const personels = [
  //   {
  //     id: 0,
  //     fullName: locale === "ru" ? "Ресул Чечен" : "Resul Çeçen",
  //     position: locale === "ru" ? "Владелец компании" : "Company Owner",
  //     img: per4,
  //   },
  //   {
  //     id: 27,
  //     fullName: locale === "ru" ? "Parinaz Shaker" : "Parinaz Shaker",
  //     position:
  //       locale === "ru"
  //         ? "Руководитель отдела здравоохранения Azpo"
  //         : "Azpo Health Department Manager",
  //     img: per33,
  //   },
  //   {
  //     id: 25,
  //     fullName: locale === "ru" ? "Teymur Jafarov" : "Teymur Jafarov",
  //     position: locale === "ru" ? "Координатор по работе с пациентами" : "Patient Coordinator",
  //     img: per31,
  //   },
  //   {
  //     id: 24,
  //     fullName: locale === "ru" ? "Mehri Narbayeva" : "Mehri Narbayeva",
  //     position: locale === "ru" ? "Координатор по работе с пациентами" : "Patient Coordinator",
  //     img: per30,
  //   },
  //   {
  //     id: 26,
  //     fullName: locale === "ru" ? "Kubra Balik" : "Kubra Balik",
  //     position: locale === "ru" ? "Координатор по работе с пациентами" : "Patient Coordinator",
  //     img: per32,
  //   },
  //   {
  //     id: 1,
  //     fullName: locale === "ru" ? "Шуле Гюнал" : "Şule Günal",
  //     position: locale === "ru" ? "Бухгалтерия" : "Accounting",
  //     img: per8,
  //   },
  //   {
  //     id: 13,
  //     fullName: locale === "ru" ? "Андрей Касимов" : "Andrey Kasimov",
  //     position: locale === "ru" ? "Видеооператор" : "Videographer",
  //     img: per7,
  //   },
  //   {
  //     id: 11,
  //     fullName: locale === "ru" ? "ЭРХАН ГЮНАЛ" : "ERHAN GUNAL",
  //     position: locale === "ru" ? "Менеджер по логистике" : "Logistics Manager",
  //     img: per12,
  //   },
  //   {
  //     id: 10,
  //     fullName: locale === "ru" ? "МЕХМЕТ НАСТРУЛА" : "MEHMET NASTRULLA",
  //     position: locale === "ru" ? "ВОДИТЕЛЬ" : "DRIVER",
  //     img: per11,
  //   },
  //   {
  //     id: 6,
  //     fullName:
  //       locale === "ru" ? "Рамазан Илькджан Шенсой" : "Ramazan İlkcan Şensoy",
  //     position: locale === "ru" ? "Бухгалтери" : "Accounting",
  //     img: per6,
  //   },
  //   {
  //     id: 5,
  //     fullName: locale === "ru" ? "Ирина Кулагина" : "Irina Kulagina",
  //     position:
  //       locale === "ru" ? "Отдел социальных сетей" : "Social Media Department",
  //     img: per5,
  //   },
  //   {
  //     id: 2,
  //     fullName: locale === "ru" ? "Али Моссадык" : "Ali Mosadegh",
  //     position:
  //       locale === "ru"
  //         ? "Генеральный директор и технический директор"
  //         : "SEO and CTO maneger",
  //     img: per9,
  //   },
  // ];
  return (
    <>
      <div className="mb-10 s1280:mb-20 flex-cen">
        <p className="font-medium s1280:text-[20px] s1280:leading-[36px] text-[#474744] s1280:w-[802px] s1512:w-[951px]">
          {locale === "ru"
            ? "Опытная команда врачей, медицинских работников и координаторов будет сопровождать вас на каждом этапе, гарантируя комфорт, уверенность и безупречную организацию. Мы предоставляем всестороннюю языковую поддержку, бесплатные онлайн-консультации и круглосуточную помощь — начиная с первого звонка и заканчивая реабилитацией."
            : "Our dedicated team of experienced doctors, medical professionals, and expert patient coordinators is always by your side, guiding you through every step of the process to ensure a seamless and stress-free experience.With a commitment to reliability and a customer-focused approach, Azpo Group supports patients every step of the way, making their health journey smooth, safe, and well-coordinated."}
        </p>
      </div>
      <div className="flex items-center flex-col justify-start gap-y-10 s1280:flex-row flex-wrap s1280:justify-between s1728:justify-start s1728:gap-x-12 s1280:gap-y-20 mb-10 s1280:mb-20 px-8 s1280:px-0">
        {personels.map((pers) => {
          return <PersonelCard key={pers.id} {...pers} />;
        })}
      </div>
      {/* <div className="flex-cen">
        <Link href="/" className="flex-bet gap-x-4 font-bold w-[280px] h-[60px] group hover:bg-[#25A6A9] rounded-[40px]  pe-4 anm">
          <span className="w-[60px] h-[60px] bg-[#25A6A9] text-white rounded-full flex-cen">
          <HiArrowLongRight className="size-8 group-hover:inline-block hidden" />
            <IoIosArrowForward className="size-8 group-hover:hidden" />
          </span>
          <span className="text-[#25A6A9] group-hover:text-white anm">Show More Members</span>
        </Link>
      </div> */}
    </>
  );
};
export default OurTeam;
