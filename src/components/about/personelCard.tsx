import { PersonelCardType } from "@/types/about/personelCardType";
import ImgFetcher from "../imgFetcher";

const PersonelCard = ({ img, fullName, position }: PersonelCardType) => {
  return (
    <div className="flex flex-col items-center gap-y-4  h-[291px] w-[291px] group relative rounded-[20px] s1280:rounded-[40px] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 w-full h-full s1280:personel-mask s1280:group-hover:mask-hover">
        <ImgFetcher
          className={`

               object-cover group-hover:object-cover bg-top s1280:group-hover:object-center
           transition-all duration-500 ease-in-out`}
          src={img}
          width={500}
          height={500}
        />
      </div>
      {fullName && (
        <div className="z-[1] w-fit  font-semibold text-white s1280:text-[#2E5A90] absolute bottom-10 left-0 bg-[#0505057A] s1280:bg-inherit s1280:group-hover:bg-[#0505057A] s1280:group-hover:text-white rounded-e-[10px] px-4 py-2">
          <p className="z-[2]">{fullName}</p>
          <p className="text-[14px] z-[2]">{position}</p>
        </div>
      )}
    </div>
  );
};
export default PersonelCard;
