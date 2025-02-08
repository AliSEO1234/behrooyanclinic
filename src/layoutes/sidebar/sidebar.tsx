import SidebarForm from "@/features/sidebar/sidebarForm";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const items = [
    {
      id: 0,
      label: "LASIK",
      path: "/",
    },
    {
      id: 1,
      label: "Cataract Surgery",
      path: "/",
    },
    {
      id: 2,
      label: "Refractive Lens Exchange",
      path: "/",
    },
    {
      id: 3,
      label: "LASIK",
      path: "/",
    },
    {
      id: 4,
      label: "Cataract Surgery",
      path: "/",
    },
    {
      id: 5,
      label: "Refractive Lens Exchange",
      path: "/",
    },
    {
      id: 6,
      label: "LASIK",
      path: "/",
    },
    {
      id: 7,
      label: "Cataract Surgery",
      path: "/",
    },
    {
      id: 8,
      label: "Refractive Lens Exchange",
      path: "/",
    },
    {
      id: 10,
      label: "LASIK",
      path: "/",
    },
    {
      id: 11,
      label: "Cataract Surgery",
      path: "/",
    },
    {
      id: 12,
      label: "Refractive Lens Exchange",
      path: "/",
    },
  ];
  return (
    <div className="hidden s1280:sticky s1280:top-0 s1280:flex s1280:flex-col w-full s1280:w-[318px] s1280:flex-shrink-0 s1280:min-w-[318px] s1600:w-[340px] s1600:min-w-[340px] rounded-[40px] shadow-[0_4px_15px_#0000001A] bg-white px-6 py-8">
      <div className="s1280:mb-10">
        <div className="mb-4">
          <h3 className="font-bold s1280:text-[20px] text-[#25A6A9] text-center">
            Free consultation
          </h3>
        </div>
        <div>
          <SidebarForm />
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex-bet mb-4">
          <span className="font-semibold s1280:text-[20px] w-1/4">Service</span>
          <span className="border-[1px] border-[#9996A0] w-[70%] h-0"></span>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-4">
          {items.map((item) => {
            return (
              <div className="w-full" key={item.id}>
                <Link href="/" className="w-full font-normal flex-bet">
                  <span className="text-[#333333]">{item.label}</span>
                  <span><IoIosArrowForward className="size-5" /></span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
