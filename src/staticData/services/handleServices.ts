import { ServiceType } from "@/types/services/servicesTypes";
import cell from "@/assets/images/icons/services/cells.png";
import fertility from "@/assets/images/icons/services/fertility.png";
import eye from "@/assets/images/icons/services/eye.png";
import dental from "@/assets/images/icons/services/dental.png";
import aesthetics from "@/assets/images/icons/services/aesthetics.png";
import { allSubCategory, allSubNestedCategory } from "../allSubCategory";

const handleServices = (locale: string) => {
  // const countAethServices = categoryDataHandler("aesthetic", locale)
  //   ?.subCategoryList.length;
  const allSubCategoryFunc = allSubCategory(locale);
  const countAethServices = allSubCategoryFunc.filter(
    (sub) => sub.categoryKey === "aesthetic"
  ).length;
  const allSubNestedCategoryFunc = allSubNestedCategory(locale);
  const counSubnestedAethServices = allSubNestedCategoryFunc.filter(
    (subnested) => subnested.categoryKey === "aesthetic"
  ).length;

  const countDentalServices = allSubCategoryFunc.filter(
    (sub) => sub.categoryKey === "dental-treatments"
  ).length;
  const counSubnestedDentalServices = allSubNestedCategoryFunc.filter(
    (subnested) => subnested.categoryKey === "dental-treatments"
  ).length;

  const countEyeServices = allSubCategoryFunc.filter(
    (sub) => sub.categoryKey === "eye-surgery"
  ).length;
  const countSubnestedEyeServices = allSubNestedCategoryFunc.filter(
    (subnested) => subnested.categoryKey === "eye-surgery"
  ).length;

  const countFertilityServices = allSubCategoryFunc.filter(
    (sub) => sub.categoryKey === "fertility"
  ).length;
  const countSubnestedFertilityServices = allSubNestedCategoryFunc.filter(
    (subnested) => subnested.categoryKey === "fertility"
  ).length;

  const countStemCellServices = allSubCategoryFunc.filter(
    (sub) => sub.categoryKey === "stem-cell"
  ).length;
  const countSubnestedStemCellServices = allSubNestedCategoryFunc.filter(
    (subnested) => subnested.categoryKey === "stem-cell"
  ).length;

  const countBariatricServices = allSubCategoryFunc.filter(
    (sub) => sub.categoryKey === "aesthetic"
  ).length;
  const countSubNestedService = allSubNestedCategoryFunc.filter(
    (subnested) => subnested.categoryKey === "aesthetic"
  ).length;

  const services: ServiceType[] = [
    {
      countService: countAethServices + counSubnestedAethServices || 0,
      img: aesthetics,
      label: "زیبایی و جوانسازی",
      path: "aesthetic",
      description: "با استفاده از جدیدترین روش‌های زیبایی و جوانسازی، پوستی شاداب و جوان داشته باشید. خدمات متنوع از فیلر و بوتاکس تا لیزر درمانی...",
    },
    {
      countService: countDentalServices + counSubnestedDentalServices || 0,
      img: dental,
      label: "لاغری و تناسب اندام",
      path: "dental-treatments",
      description: "با روش‌های نوین لاغری مانند کرایولیپولیز و کویتیشن، بدون جراحی به تناسب اندام دلخواه خود برسید...",
    },
    {
      countService: countEyeServices + countSubnestedEyeServices || 0,
      img: eye,
      label: "جراحی زیبایی صورت",
      path: "eye-surgery",
      description: "جراحی‌های زیبایی صورت شامل بلفاروپلاستی، رینوپلاستی و لیفت صورت با بهترین جراحان و نتایج طبیعی...",
    },
    {
      countService:
        countFertilityServices + countSubnestedFertilityServices || 0,
      img: fertility,
      label: "کاشت مو",
      path: "fertility",
      description: "کاشت مو با تکنیک‌های پیشرفته FUE و DHI توسط متخصصان مجرب. بازسازی خط رویش طبیعی مو با نتایج ماندگار...",
    },
    {
      countService: countStemCellServices + countSubnestedStemCellServices || 0,
      img: cell,
      label: "مراقبت پوست",
      path: "stem-cell",
      description: "خدمات تخصصی مراقبت پوست شامل مزوتراپی، پی آر پی و میکرونیدلینگ برای جوانسازی و شادابی پوست...",
    },
    {
      countService: countBariatricServices + countSubNestedService || 0,
      img: "/images/Bariatric Surgery Treatment/Adjustable Gastric Banding in Turkey.png",
      label: "خدمات بدن",
      path: "bariatric-surgery",
      description: "خدمات تخصصی بدن شامل هایفو، لیفت بدن و تناسب اندام با استفاده از فناوری‌های روز دنیا...",
    },
  ];
  return services;
};
export default handleServices;
