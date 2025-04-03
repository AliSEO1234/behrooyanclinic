"use client";

import ImgFetcher from "./imgFetcher";
import leaddesk from "@/assets/images/leaddesk.png";
import leadphone from "@/assets/images/leadPhone.png";
import { LeadFormType } from "@/types/forms";
const LeadForm = ({ className }: LeadFormType) => {
  return (
    <div
      className={`${
        className || ""
      } grid grid-cols-12 relative s1280:h-[259px]`}
    >
      <ImgFetcher
        width={3000}
        src={leaddesk}
        className="w-full h-full absolute top-0 left-0 hidden s1280:block"
      />
      <ImgFetcher
        width={3000}
        src={leadphone}
        className="w-full h-full absolute top-0 left-0 s1280:hidden"
      />
      <form className="s1280:col-span-6 relative">

      </form>
    </div>
  );
};
export default LeadForm;
