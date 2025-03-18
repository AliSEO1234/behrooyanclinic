import { ServiceType } from "@/types/services/servicesTypes";
import cell from "@/assets/images/icons/services/cells.png";
import fertility from "@/assets/images/icons/services/fertility.png";
import eye from "@/assets/images/icons/services/eye.png";
import dental from "@/assets/images/icons/services/dental.png";
import aesthetics from "@/assets/images/icons/services/aesthetics.png";
import { categoryDataHandler } from "../subCategoryList";
const handleServices = (locale: string) => {
  const countAethServices = categoryDataHandler("aesthetic", locale)
    ?.subCategoryList.length;
  const countDentalServices = categoryDataHandler("dental-treatments", locale)
    ?.subCategoryList.length;
  const countEyeServices = categoryDataHandler("eye-surgery", locale)
    ?.subCategoryList.length;
  const countFertilityServices = categoryDataHandler("fertility", locale)
    ?.subCategoryList.length;
  const countStemCellServices = categoryDataHandler("stem-cell", locale)
    ?.subCategoryList.length;
  const services: ServiceType[] = [
    {
      countService: countAethServices || 0,
      img: aesthetics,
      label: "Aesthetics",
      path: "aesthetic",
    },
    {
      countService: countDentalServices || 0,
      img: dental,
      label: "Dental",
      path: "dental-treatments",
    },
    {
      countService: countEyeServices || 0,
      img: eye,
      label: "Eye Surgeries",
      path: "eye-surgery",
    },
    {
      countService: countFertilityServices || 0,
      img: fertility,
      label: "Fertility",
      path: "fertility",
    },
    {
      countService: countStemCellServices || 0,
      img: cell,
      label: "Stem Cell",
      path: "stem-cell",
    },
  ];
  return services;
};
export default handleServices;
