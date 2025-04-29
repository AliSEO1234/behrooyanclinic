import { ClinicCardType } from "@/types/clinic/clinicCard";
import ImgFetcher from "../imgFetcher";

const ClinicCard = ({ img, label }: ClinicCardType) => {
  return (
    <div className="w-full sm:w-[340px] s1280:w-[270px] s1512:w-[300px] s1728:w-[350px] bg-white rounded-[40px] shadow-[0px_10px_28px_-14px_#00000040] z-[2] p-4 s1280:p-3">
      <div className="rounded-[40px] overflow-hidden h-[140px] s1280:h-[140px] s1512:h-[185px] w-full">
        <ImgFetcher
          src={img}
          width={3000}
          height={3000}
          className="object-cover"
        />
      </div>
      <div>
        <div className="mt-2 s1280:mt-2 s1512:mt-3">
          <p className="font-medium text-[#474744] s1512:text-[18px] s1728:text-[20px] text-center">
            {label}
          </p>
        </div>
        {/* <div className="flex-cen mt-5 s1280:mt-6">
          <Link
            target="_blank"
            href={link}
            className="flex-cen gap-x-2 font-medium text-[#25A6A9] s1512:text-[18px]"
          >
            <span>Go to the site</span>
            <span className="bg-[#25A6A9] text-white w-8 h-8 flex-cen rounded-full">
              <IoIosArrowForward className="size-5 -me-[2px]" />
            </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};
export default ClinicCard;
