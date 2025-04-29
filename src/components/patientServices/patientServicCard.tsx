import { PatientServiceType } from "@/staticData/patientServices/patientServiceType";
import ImgFetcher from "../imgFetcher";

const PatientServicCard = ({
  label,
  count,
  desc,
  photos,
}: PatientServiceType) => {
  return (
    <div
      className={`w-full flex flex-col s1280:gap-x-20 s1280:items-start s1280:justify-between gap-y-5 s1280:gap-y-0 ${
        count % 2 === 0 ? "s1280:flex-row-reverse" : "s1280:flex-row"
      }`}
    >
      <div className="s1280:hidden mb-4">
        <h1 className="font-semibold text-[#00979A]">
          <span>{count} -&nbsp;</span>
          {label}
        </h1>
      </div>
      <div
        className={`flex justify-start items-start ${
          count % 2 === 0 ? "s1280:flex-row-reverse" : "s1280:flex-row"
        } gap-x-3 s1280:gap-x-8`}
      >
        <div className="w-[190px] h-[251px] s1280:w-[291px] s1280:h-[384px] s1512:w-[356px] s1512:h-[481px] s1728:w-[413px] s1728:h-[558px] s1920:w-[451px] s1920:h-[608px] rounded-[20px] s1280:rounded-[40px] overflow-hidden">
          <ImgFetcher
            width={800}
            height={800}
            className="object-cover"
            src={photos[0]}
          />
        </div>
        <div className="w-[106px] h-[157px] s1280:w-[162px] s1280:h-[241px] s1512:w-[198px] s1512:h-[301px] s1728:w-[230px] s1728:h-[350px] s1920:w-[250px] s1920:h-[383px] overflow-hidden rounded-[20px] s1280:rounded-[20px] s1280:-mt-5">
          <ImgFetcher
            width={800}
            height={800}
            className="object-cover"
            src={photos[1]}
          />
        </div>
      </div>
      <div>
        <h2 className="font-semibold s1280:text-[18px] s1512:text-[20px] s1728:text-[24px] text-[#00979A] s1280:mb-2 s1512:mb-5 hidden s1280:flex-left">
          <span>{count} -&nbsp;</span>
          {label}
        </h2>
        <p className="font-normal s1280:text-[14px] s1512:text-[16px] s1728:text-[20px] leading-[24px] s1512:leading-[30px]">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default PatientServicCard;
