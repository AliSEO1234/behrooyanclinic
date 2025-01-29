import health from "@/assets/images/health.svg";
import Image from "next/image";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import ChangeLanguage from "../change-language";
import { FiSearch } from "react-icons/fi";
import DropDownCustom from "../dropdownCustom";
import { HiMenuAlt2 } from "react-icons/hi";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-[4]">
      <nav className="anm grid grid-cols-12 bg-white shadow-[0_4px_2px_#0000001C] px-[20px] s1280:px-[71px] s1512:px-[78px] s1600:px-[85px] s1728:px-[100px] s1920:px-[131px] py-3 s1280:py-3 rounded-b-[40px]">
        <div className="col-span-6 s1280:col-span-1 flex-left gap-x-2">
          <div className="flex-cen">
            <div className="w-[44px] h-[44px] s1280:w-8 s1280:h-8 s1512:w-[49px] s1512:h-[49px]">
              <Image
                src={health}
                alt="Azpo Health"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="text-[#00979A]">
            <p className="font-black text-[24px] s412:text-[20px] s1280:text-[20px] s1512:text-[30px] tracking-[2px]">
              AZPO
            </p>
            <p className="-mt-2 font-bold text-[14px] s1280:text-[14px] s1512:text-[18px]">
              HEALTH
            </p>
          </div>
        </div>
        <div className="hidden s1280:flex-cen s1280:col-span-8 font-medium s1280:text-[14px] s1512:text-[16px] s1728:text-[18px] gap-x-2 s1728:gap-x-4 s1920:gap-x-8 text-[#474744]">
          <div>
            <Link href="/">Home Page</Link>
          </div>
          <div>
            <Link href="/">Medical Branches</Link>
          </div>
          <div>
            <Link href="/">Hospital&Clinics</Link>
          </div>
          <div>
            <DropDownCustom
              trigStyle="flex-cen gap-x-2 data-[state=open]:border-b data-[state=open]:border-[#25A6A9] data-[state=open]:text-[#25A6A9] anm"
              trigText="Exclusive Offers"
              bodyStyle="w-[233px] bg-white p-4 rounded-[30px]"
            >
              <div className="flex flex-col items-start justify-start gap-y-5 font-medium text-[18px] border-[#DAEDE6] text-[#474744]">
                <div>
                  <Link href="/">seasonal offers</Link>
                </div>
                <div>
                  <Link href="/">flash sales</Link>
                </div>
                <div>
                  <Link href="/">VIP offers</Link>
                </div>
              </div>
            </DropDownCustom>
            {/* <Link href="/">Exclusive Offers</Link> */}
          </div>
          <div>
            <Link href="/">Patient Services</Link>
          </div>
          <div>
            <Link href="/">Blogs</Link>
          </div>
          <div>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="col-span-6 s1280:col-span-3 flex-right gap-x-2">
          <div className="hidden s1280:block">
            <button className="outline-none flex-cen w-[35px] h-[35px] s1600:h-[44px] s1600:w-[44px] rounded-full bg-[#DAEDE6] text-[#25A6A9]">
              <FiSearch className="size-4 s1600:size-5" />
            </button>
          </div>
          <div className="hidden s1280:block">
            <ChangeLanguage
              trigStyle="s1280:w-[56px] s1600:w-[70px] h-[35px] s1600:h-[44px]"
              BodyWidth="w-[56px]"
            />
          </div>
          <div>
            <Link
              href="/"
              className="flex-cen gap-x-2 bg-[#25A6A9] rounded-[40px] py-4 px-2 s1280:py-[10px] s1280:px-[20px] font-medium s1280:text-[12px] s1600:text-[18px] text-white h-[35px] s1600:h-[44px]"
            >
              <span>
                <BiSolidPhoneCall className="size-5" />
              </span>
              <span className="hidden s1280:inline">0555 6548 5575</span>
            </Link>
          </div>
          <div className="s1280:hidden">
            <button className="flex-cen bg-[#25A6A9] text-white p-2 rounded-full">
            <HiMenuAlt2 className="size-5" />

            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
