import per4 from "@/assets/images/about/personels/resul.jpg";
import per5 from "@/assets/images/about/personels/Irina Kulagina.jpg";
import per6 from "@/assets/images/about/personels/ramazan.jpg";
import per7 from "@/assets/images/about/personels/Andrey Kasimov.jpg";
import per8 from "@/assets/images/about/personels/sule.jpg";
import per9 from "@/assets/images/about/personels/Ali Mosadegh.jpg";
import per11 from "@/assets/images/about/personels/MEHMET NASTRULLA.jpg";
import per12 from "@/assets/images/about/personels/ERHAN GUNAL.jpg";
import per30 from "@/assets/images/about/personels/Narbayeva.jpg"
import per31 from "@/assets/images/about/personels/Jafarov.jpg"
import per32 from "@/assets/images/about/personels/Kubra.jpg"
import per33 from "@/assets/images/about/personels/Shaker.jpg"
import PersonelCard from "./personelCard";
// import { IoIosArrowForward } from "react-icons/io";
// import { HiArrowLongRight } from "react-icons/hi2";
// import Link from "next/link";
import { OurTeamComType } from "@/types/about/aboutPageType";
// {
//   id: 3,
//   fullName: locale === "ru" ? "Юдакова Наталия" : "Nataliya Yudakova",
//   position: locale === "ru" ? "Эксперт по недвижимости" : "Real Estate Expert",
//   img: per13,
// },
// {
//   id: 4,
//   fullName: locale === "ru" ? "Хайри Йылдырым" : "HAYRI YILDIRIM",
//   position: locale === "ru" ? "Директор Аланийского офиса" : "Director of the Alanya Office",
//   img: per14,
// },


// {
//   id: 7,
//   fullName: locale === "ru" ? "Умут Гюнал" : "Umut Günal",
//   position: locale === "ru" ? "Координатор объектов" : "Property Coordinator",
//   img: per15,
// },
// {
//   id: 8,
//   fullName: locale === "ru" ? "Хюсейн Джанданай" : "Hüseyin Candanay",
//   position: locale === "ru" ? "Координатор объектов" : "Property Coordinator",
//   img: per16,
// },
// {
//   id: 9,
//   fullName: locale === "ru" ? "Елена Гечер" : "Elena Gecher",
//   position: locale === "ru" ? "Эксперт по недвижимости" : "Real Estate Expert",
//   img: per17,
// },


// {
//   id: 12,
//   fullName: locale === "ru" ? "Джафер Дуран" : "Cafer Duran",
//   position: locale === "ru" ? "Специалист по послепродажному обслуживанию" : "After-Sales Service Specialist",
//   img: per19,
// },

// {
//   id: 14,
//   fullName: locale === "ru" ? "Усманова Асель" : "Usmanova Asel",
//   position: locale === "ru" ? "Русское портфолио, отдел аренды" : "Russian Portfolio, Rental Department",
//   img: per20,
// },

// {
//   id: 15,
//   fullName: locale === "ru" ? "Абдуллах Дурсун" : "Abdullah Dursun",
//   position: locale === "ru" ? "Шофёр" : "Driver",
//   img: per21,
// },
// {
//   id: 16,
//   fullName: locale === "ru" ? "Бахтияр Акиф" : "Bahtiyar Akif",
//   position:
//     locale === "ru"
//       ? "Руководитель отдела продаж в Анталии."
//       : "Sales Department Manager in Antalya",
//   img: per22,
// },
// {
//   id: 17,
//   fullName: locale === "ru" ? "Гульнара Кая" : "Gulnara Kaya",
//   position:
//     locale === "ru" ? "Эксперт по недвижимости" : "Real Estate Expert",
//   img: per24,
// },
// {
//   id: 18,
//   fullName: locale === "ru" ? "Григорий Лазарев" : "Grigory Lazarev",
//   position:
//     locale === "ru" ? "эксперт по недвижимости." : "Real Estate Expert.",
//   img: per23,
// },
// {
//   id: 19,
//   fullName: locale === "ru" ? "Муслим Шаруддин" : "MUSLim Şaruddin",
//   position:
//     locale === "ru"
//       ? "Директор офиса в Анталии"
//       : "Antalya Office Director",
//   img: per25,
// },
// {
//   id: 20,
//   fullName: locale === "ru" ? "Магомед Оздомиров" : "Magomed Ozdomirov",
//   position: locale === "ru" ? "Экономист" : "Economist",
//   img: per26,
// },
// {
//   id: 21,
//   fullName: locale === "ru" ? "Эмре Айдын" : "Emre Aydın",
//   position: locale === "ru" ? "Координатор объектов" : "Property Coordinator",
//   img: per27,
// },
// {
//   id: 22,
//   fullName: locale === "ru" ? "Огузхан Каймакчы" : "Oğuzhan Kaymakçı",
//   position:
//     locale === "ru" ? "Координатор объектов" : "Property Coordinator",
//   img: per28,
// },
// {
//   id: 23,
//   fullName: locale === "ru" ? "Иса Той" : "İsa Toy",
//   position: locale === "ru" ? "Бухгалтер" : "Accountant",
//   img: per29,
// },
const OurTeam = ({locale} : OurTeamComType) => {
  const personels = [
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
      fullName: locale === "ru" ? "ЭРХАН ГЮНАЛ" : "ERHAN GUNAL",
      position: locale === "ru" ? "Менеджер по логистике" : "Logistics Manager",
      img: per12,
    },
    {
      id: 10,
      fullName: locale === "ru" ? "МЕХМЕТ НАСТРУЛА" : "MEHMET NASTRULLA",
      position: locale === "ru" ? "ВОДИТЕЛЬ" : "DRİVER",
      img: per11,
    },
    {
      id: 6,
      fullName: locale === "ru" ? "Рамазан Илькджан Шенсой" : "Ramazan İlkcan Şensoy",
      position: locale === "ru" ? "Бухгалтери" : "Accounting",
      img: per6,
    },
    {
      id: 5,
      fullName:locale === "ru" ? "Ирина Кулагина" : "Irina Kulagina",
      position:locale === "ru" ? "Отдел социальных сетей" : "Social Media Department",
      img: per5,
    },
    {
      id: 0,
      fullName: locale === "ru" ? "Ресул Чечен" : "Resul Çeçen",
      position: locale === "ru" ? "Владелец компании" : "Company Owner",
      img: per4,
    },
    {
      id: 2,
      fullName: locale === "ru" ? "Али Моссадык" : "Ali Mosadegh",
      position: locale === "ru" ? "Генеральный директор и технический директор" : "SEO and CTO maneger",
      img: per9,
    },
    {
      id: 24,
      fullName: locale === "ru" ? "Mehri Narbayeva" : "Mehri Narbayeva",
      position: locale === "ru" ? "Patient Coordinator" : "Patient Coordinator",
      img: per30,
    },
    {
      id: 25,
      fullName: locale === "ru" ? "Teymur Jafarov" : "Teymur Jafarov",
      position: locale === "ru" ? "Patient Coordinator" : "Patient Coordinator",
      img: per31,
    },
    {
      id: 26,
      fullName: locale === "ru" ? "Kubra Balik" : "Kubra Balik",
      position: locale === "ru" ? "Patient Coordinator" : "Patient Coordinator",
      img: per32,
    },
    {
      id: 27,
      fullName: locale === "ru" ? "Parinaz Shaker" : "Parinaz Shaker",
      position: locale === "ru" ? "Azpo Health Department Manager" : "Azpo Health Department Manager",
      img: per33,
    },
  ];
  return (
    <>
      <div className="mb-10 s1280:mb-20">
        <p className="text-center font-medium s1280:text-[20px] s1280:leading-[36px] text-[#474744] s1280:px-20 s1512:px-40">
          {
            locale === "ru" ? "Наш опыт в построении партнёрских отношений и внимательность к деталям помогают решать сложные задачи и достигать реальных результатов. Именно поэтому Azpo Group занимает лидирующие позиции на рынке, предлагая качественные услуги. Наша команда экспертов поддержит вас на каждом этапе: от оформления визы до выбора клиники и врача, организации проживания и трансфера." : "With a commitment to reliability and a customer-focused approach, Azpo Group supports patients every step of the way, making their health journey smooth, safe, and well-coordinated."
          }
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
