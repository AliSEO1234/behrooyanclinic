
import { PersonelCardType } from "@/types/about/personelCardType";
import ImgFetcher from "../imgFetcher";

const PersonelCard = ({ img, fullName, position }: PersonelCardType) => {
  return (
    <div className="flex flex-col items-center gap-y-4  h-[291px] w-[291px] group relative s1280:rounded-[20px] overflow-hidden">
      <div className="absolute top-0 left-0 s1280:static w-full h-full s1280:w-[162px] s1280:h-[162px] rounded-[40px] s1280:rounded-full overflow-hidden group-hover:personel-hover">
        <ImgFetcher className="object-cover" src={img} width={3000} height={3000} />
      </div>
      <div className="s1280:w-full font-semibold text-[#25A6A9] absolute bottom-10 left-0 s1280:static bg-[#0505057A] s1280:bg-inherit rounded-e-[10px] s1280:rounded-none px-4 py-2 s1280:group-hover:hidden">
        <p>{fullName}</p>
        <p className="text-[14px]">{position}</p>
      </div>
    </div>
  );
};
export default PersonelCard;
