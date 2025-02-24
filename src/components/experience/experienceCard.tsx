import { ExperienceCardType } from "@/types/experince/experienceType";
import ImgFetcher from "../imgFetcher";

const ExperienceCard = ({ icon, title }: ExperienceCardType) => {
  return (
    <div className="experience__card-container flex-left p-3 s1920:p-5 gap-x-4 col-span-12 s1280:col-span-4 rounded-[100px] bg-white shadow-[0_4px_4px_0_#00000040]">
      <div className="w-[84px] min-w-[84px] h-[84px] overflow-hidden rounded-full experience-card-shadow p-5 s1280:p-4">
        <ImgFetcher src={icon} />
      </div>
      <div>
        <p className="s1280:text-[16px] s1512:text-[20px] font-medium">{title}</p>
      </div>
    </div>
  );
};
export default ExperienceCard;
