import { ConsultationAdminType } from "@/types/consultationAdmin/consultationAdminType";
import ImgFetcher from "./imgFetcher";

const ConsultationAdmin = ({ img, positionStyle }: ConsultationAdminType) => {
  return (
    <div
      className={`s1280:w-[81px] s1280:h-[81px] rounded-full overflow-hidden border-[2px] border-[#33333380] drop-shadow-[-2px_2px_4px_#00000040] absolute ${positionStyle}`}
    >
      <ImgFetcher width={2000} height={2000} src={img} className="object-fill" />
    </div>
  );
};
export default ConsultationAdmin;
