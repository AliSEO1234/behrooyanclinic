import { ConsultationAdminType } from "@/types/consultationAdmin/consultationAdminType";
import ImgFetcher from "./imgFetcher";

const ConsultationAdmin = ({ img, positionStyle , isHealth = false }: ConsultationAdminType) => {
  return (
    <div
      className={`w-[60px] h-[60px] s390:w-[62px] s390:h-[62px] s412:w-[66px] s412:h-[66px] s1280:w-[81px] s1280:h-[81px] s1512:w-[103px] s1512:h-[103px] s1600:w-[120px] s1600:h-[120px] rounded-full overflow-hidden drop-shadow-[-2px_2px_4px_#00000040] absolute ${isHealth ? "bg-[#00979A] p-3" : "border-[2px] border-[#33333380]"} ${positionStyle}`}
    >
      <ImgFetcher width={2000} height={2000} src={img} className="object-fill" />
    </div>
  );
};
export default ConsultationAdmin;
