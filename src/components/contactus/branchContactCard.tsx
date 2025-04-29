import Link from "next/link";
import { FaLocationPin } from "react-icons/fa6";
import health from "@/assets/images/healthlogo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import ImgFetcher from "../imgFetcher";
import { BranchContactCardType } from "@/types/contactTypes";
const BranchContactCard = ({
  branchName,
  location,
  mail,
  phone,
}: BranchContactCardType) => {
  return (
    <div className="bg-[#BCF8DD0D] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] py-4 px-6">
      <h2 className="font-extrabold text-[#0CA5A5] mb-4 s1512:text-[18px] s1728:text-[20px]">{branchName}</h2>
      <div>
        <ul className="flex flex-col items-start justify-center gap-y-4">
          <li className="w-full flex items-start justify-start gap-x-4">
            <div className="text-[#0CA5A5] flex-cen relative">
              <div className="size-4  flex-cen absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ImgFetcher src={health} width={500} />
              </div>
              <FaLocationPin className="size-7 s1728:size-9" />
            </div>
            <div>
              <p className="font-medium text-[14px] s1512:text-[16px] text-[#474744]">
                {location}
              </p>
            </div>
          </li>
          <li className="w-full">
            <Link
              className="flex items-start justify-start gap-x-4 font-medium text-[14px] s1512:text-[16px]"
              href={`tel:${phone}`}
            >
              <div>
                <BiSolidPhoneCall className="size-7 s1728:size-9 text-[#0CA5A5]" />
              </div>
              <div className="text-[#474744]">
                <p>{phone}</p>
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="flex items-start justify-start gap-x-4 font-medium text-[14px] s1512:text-[16px]"
              href={`mailto:${mail}`}
            >
              <div><MdMail className="size-7 s1728:size-9 text-[#0CA5A5]" /></div>
              <div>
                <p className="text-[#474744]">{mail}</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BranchContactCard;
