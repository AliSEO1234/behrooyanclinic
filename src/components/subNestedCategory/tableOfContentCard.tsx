import { TableOfContentCardType } from "@/types/subNestedTypes/tableOfContentType";
import Link from "next/link";
import ImgFetcher from "../imgFetcher";

const TableOfContentCard = ({ icon, label, link }: TableOfContentCardType) => {
  return (
    <Link
      href={`#${link}`}
      className="border-[0.5px] border-dashed border-[#00979A] rounded-[12px] flex-cen w-[80px] h-[80px] s1280:w-[105px] s1280:h-[105px] s1512:w-[125px] s1512:h-[125px] p-2 s1280:p-3 [drop-shadow:0px_0px_8px_0px_#00979A40] group relative z-[2]"
    >
      <div className="flex flex-col items-center justify-center gap-y-2 shadow-[0px_0px_8px_0px_#00979A33] rounded-[12px] w-full h-full bg-white">
        <div className="w-[22px] h-[22px] s1280:w-[32px] s1280:h-[35px] s1512:w-[38px] s1512:h-[42px]">
          <ImgFetcher className="group-hover:scale-125 anm" src={icon} />
        </div>
        <div>
          <p className="font-normal text-[10px] s1280:text-[12px] s1512:text-[14px]">
            {label}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default TableOfContentCard;
