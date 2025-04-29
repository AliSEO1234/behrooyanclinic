import { ServiceType } from "@/types/services/servicesTypes";
import cell from "@/assets/images/icons/services/cells.png";
import fertility from "@/assets/images/icons/services/fertility.png";
import eye from "@/assets/images/icons/services/eye.png";
import dental from "@/assets/images/icons/services/dental.png";
import aesthetics from "@/assets/images/icons/services/aesthetics.png";
import { allSubCategory, allSubNestedCategory } from "../allSubCategory";
const handleServices = (locale : string) => {
  // const countAethServices = categoryDataHandler("aesthetic", locale)
  //   ?.subCategoryList.length;
  const countAethServices = allSubCategory.filter(
    (sub) => sub.categoryKey === "aesthetic"
  ).length;
  const counSubnestedAethServices = allSubNestedCategory.filter(
    (subnested) => subnested.categoryKey === "aesthetic"
  ).length;
  
  const countDentalServices = allSubCategory.filter(
    (sub) => sub.categoryKey === "dental-treatments"
  ).length;
  const counSubnestedDentalServices = allSubNestedCategory.filter(
    (subnested) => subnested.categoryKey === "dental-treatments"
  ).length;


  const countEyeServices = allSubCategory.filter(
    (sub) => sub.categoryKey === "eye-surgery"
  ).length;
  const countSubnestedEyeServices = allSubNestedCategory.filter(
    (subnested) => subnested.categoryKey === "eye-surgery"
  ).length;


  const countFertilityServices = allSubCategory.filter(
    (sub) => sub.categoryKey === "fertility"
  ).length;
  const countSubnestedFertilityServices = allSubNestedCategory.filter(
    (subnested) => subnested.categoryKey === "fertility"
  ).length;

  const countStemCellServices = allSubCategory.filter(
    (sub) => sub.categoryKey === "stem-cell"
  ).length;
  const countSubnestedStemCellServices = allSubNestedCategory.filter(
    (subnested) => subnested.categoryKey === "stem-cell"
  ).length;
  const services: ServiceType[] = [
    {
      countService: countAethServices + counSubnestedAethServices || 0,
      img: aesthetics,
      label: locale === "ru" ? "Эстетическая медицина" : "Aesthetics",
      path: "aesthetic",
    },
    {
      countService: countDentalServices + counSubnestedDentalServices || 0,
      img: dental,
      label: locale=== "ru" ? "Стоматология" : "Dental",
      path: "dental-treatments",
    },
    {
      countService: countEyeServices + countSubnestedEyeServices || 0,
      img: eye,
      label: locale ==="ru" ? "Офтальмологические операции" : "Eye Surgeries",
      path: "eye-surgery",
    },
    {
      countService: countFertilityServices + countSubnestedFertilityServices || 0,
      img: fertility,
      label: locale === "ru" ? "Репродуктивное здоровье" : "Fertility",
      path: "fertility",
    },
    {
      countService: countStemCellServices + countSubnestedStemCellServices || 0,
      img: cell,
      label: locale === "ru" ? "Лечение стволовыми клетками" : "Stem Cell",
      path: "stem-cell",
    },
  ];
  return services;
};
export default handleServices;
