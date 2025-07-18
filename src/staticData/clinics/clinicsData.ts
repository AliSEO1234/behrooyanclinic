import clinic1 from "@/assets/images/clinics/clinicsPhoto/1.png";
// import clinic2 from "@/assets/images/clinics/clinicsPhoto/2.png";
import clinic3 from "@/assets/images/clinics/clinicsPhoto/3.png";
import clinic4 from "@/assets/images/clinics/clinicsPhoto/4.jpg";
import clinic5 from "@/assets/images/clinics/clinicsPhoto/5.jpg";
import clinic6 from "@/assets/images/clinics/clinicsPhoto/6.png";
import clinic7 from "@/assets/images/clinics/clinicsPhoto/7.png";
import clinic8 from "@/assets/images/clinics/clinicsPhoto/8.png";
import clinic9 from "@/assets/images/clinics/clinicsPhoto/9.jpg";
import clinic10 from "@/assets/images/clinics/clinicsPhoto/10.jpg";
import clinic11 from "@/assets/images/clinics/clinicsPhoto/11.jpg";
import clinic12 from "@/assets/images/clinics/clinicsPhoto/12.jpg";
// import clinic13 from "@/assets/images/clinics/clinicsPhoto/13.jpg";
import clinic14 from "@/assets/images/clinics/clinicsPhoto/14.jpg";
import clinic15 from "@/assets/images/clinics/clinicsPhoto/15.jpg";
import clinic16 from "@/assets/images/clinics/clinicsPhoto/16.jpg";
import clinic17 from "@/assets/images/clinics/clinicsPhoto/17.jpg";
import clinic18 from "@/assets/images/clinics/clinicsPhoto/18.jpg";

export const clinicsData = (locale: string) => {
  const isRu = locale === "ru";
  const clinics = [
    {
      label: isRu ? "Глазная больница Вени Види" : "Veni Vidi Eye Hospital",
      img: clinic1,
      link: "https://venividigoz.com",
    },
    {
      label: isRu ? "Группа здравоохранения Мемориал" : "Memorial Healthcare Group",
      img: clinic3,
      link: isRu
        ? "https://www.memorial.com.tr/ru"
        : "https://www.memorial.com.tr/en",
    },
    {
      label: isRu ? "Группа здравоохранения Аджибадем" : "Acıbadem Healthcare Group",
      img: clinic4,
      link: "https://www.acibadem.com.tr",
    },
    {
      label: isRu ? "Больница Аврасия" : "Avrasya Hospital",
      img: clinic5,
      link: "https://www.avrasyahospital.com.tr",
    },
    {
      label: isRu ? "Больница Лив" : "Liv Hospital",
      img: clinic6,
      link: isRu
        ? "https://www.livhospital.com/ru"
        : "https://www.livhospital.com/en",
    },
    {
      label: isRu ? "Группа здравоохранения Коч" : "Koç Healthcare Group",
      img: clinic7,
      link: "https://portal.kochealthcare.org",
    },
    {
      label: isRu ? "Группа глазных больниц Дюнья Гёз" : "Dünya Göz Eye Hospital Group",
      img: clinic8,
      link: "https://www.dunyagoz.com/tr",
    },
    {
      label: isRu ? "Группа здравоохранения Медикана" : "Medicana Health Group",
      img: clinic9,
      link: "https://www.medicanainternational.com",
    },
    {
      label: isRu ? "Больница Университета Йедитепе" : "Yeditepe University Hospital",
      img: clinic10,
      link: "https://yeditepehastaneleri.com",
    },
    {
      label: isRu ? "Больница Университета Бируни" : "Biruni University Hospital",
      img: clinic11,
      link: "https://www.birunihastanesi.com.tr",
    },
    {
      label: isRu ? "Больница Университета Башкент" : "Başkent University Hospital",
      img: clinic12,
      link: "https://istanbulbaskentuniversitesi.com",
    },
    {
      label: isRu ? "Больница Медистейт" : "Medistate Hospital",
      img: clinic14,
      link: "https://www.medistate.com.tr",
    },
    {
      label: isRu ? "Группа Флоренс Найтингейл" : "Florance Nigtingale Group",
      img: clinic15,
      link: "https://www.florence.com.tr/hastanelerimiz",
    },
    {
      label: isRu ? "Группа здравоохранения Медиполь" : "Medipol Health Group",
      img: clinic16,
      link: "https://medipol.com.tr",
    },
    {
      label: isRu ? "Больницы Авиценна" : "Aviccena Hospitals",
      img: clinic17,
      link: isRu
        ? "https://avicennahospitals.com/ru"
        : "https://avicennahospitals.com/en",
    },
    {
      label: isRu ? "Межконтинентальная больница Хисар" : "Hisar Intercontitental Hospital",
      img: clinic18,
      link: isRu
        ? "https://hisarhospital.com/ru"
        : "https://hisarhospital.com/en",
    },
  ];
  return clinics;
};
