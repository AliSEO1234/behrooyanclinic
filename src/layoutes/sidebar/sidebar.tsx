"use client";
import Image from "next/image";
import SidebarForm from "@/features/sidebar/sidebarForm";
import { useLocale } from "next-intl";

const Sidebar = () => {
  const locale = useLocale();
  return (
    <aside
      dir="rtl"
      className="hidden s1280:sticky s1280:top-0 s1280:flex s1280:flex-col w-full s1280:w-[250px] s1280:flex-shrink-0 s1280:min-w-[250px] s1512:w-[270px] s1512:min-w-[270px] s1600:w-[290px] s1600:min-w-[290px] s1920:w-[320px] s1920:min-w-[320px] rounded-[30px] shadow-[0_4px_15px_#0000001A] bg-white px-3 s1512:px-4 s1920:px-5 py-5 s1920:py-6 font-yekan-bakh"
    >
      <div className="s1280:mb-4">
        <div className="mb-4">
          <h3 className="font-bold text-[14px] s1512:text-[15px] s1920:text-[18px] text-[#9A62F7] text-center">
            فرم درخواست مشاوره
          </h3>
        </div>

        {/* Doctor info - static */}
        <div className="flex items-center gap-x-2 mb-4">
          <div className="w-[55px] h-[55px] s1920:w-[65px] s1920:h-[65px] rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/dr-naseh.png"
              alt="دکتر محمد حسن ناصح"
              width={140}
              height={140}
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>
          <div className="text-right">
            <p className="font-bold text-[12px] s1512:text-[13px] s1920:text-[14px] text-[#333] flex items-center gap-x-1">
              دکتر محمد حسن ناصح
              <Image src="/images/blue-tick.png" alt="" width={14} height={14} className="w-3.5 h-3.5 rounded-full aspect-square" />
            </p>
            <p className="text-[10px] s1512:text-[11px] s1920:text-[12px] text-[#888] mt-0.5">
              پزشک و موسس بهرویان
            </p>
          </div>
        </div>

        <div>
          <SidebarForm activeAdmin="دکتر محمد حسن ناصح" />
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
