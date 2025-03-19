import { useAppContext } from "@/contexts/app-context/app-context";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { useEffect, useState } from "react";
import health from "@/assets/images/health.svg";
import ImgFetcher from "../imgFetcher";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useLocale } from "next-intl";
import glob from "@/assets/images/Globe Medical.svg";
import phone from "@/assets/images/phonefooter.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { options } from "@/staticData/optionsForm";
import { MdArrowForwardIos } from "react-icons/md";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const HamburgerMenu = () => {
  const { hamburgerMenu, setHamburgerMenu } = useAppContext();
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const locale = useLocale();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth >= 646) {
      setHamburgerMenu(false);
    }
  }, [windowWidth, setHamburgerMenu]);
  const sortedData = [...options].sort((a, b) => +b.isActive - +a.isActive);
  return (
    <Sheet open={hamburgerMenu} onOpenChange={setHamburgerMenu}>
      <SheetContent className="[&>button]:hidden px-3 rounded-s-[40px] overflow-hidden">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div>
          <div className="flex-bet">
            <div className="flex-left">
              <button
                onClick={() => setHamburgerMenu(false)}
                className="flex-cen"
              >
                <IoClose className="size-10 text-[#00979A]" />
              </button>
            </div>
            <div className="flex-left gap-x-2">
              <div className="w-[48px] h-[48px]">
                <ImgFetcher src={health} width={800} />
              </div>
              <div>
                <p className="flex flex-col items-start text-[#00979A]">
                  <span className="font-black text-[24px]">AZPO</span>
                  <span className="font-bold text-[14px] -mt-1">HEALTH</span>
                </p>
              </div>
            </div>
          </div>
          <hr className="h-0 w-full border-[0.7px] border-[#00000029] mt-4 mb-10" />
          <div className="overflow-y-scroll h-[60vh] pb-12">
            <div className="relative mb-10">
              <input
                type="search"
                className="w-full h-[48px] border-[0.5px] border-[#00000012] rounded-[100px] px-4"
                placeholder="Search"
              />
              <button className="w-10 h-10 rounded-full bg-[#25A6A9] flex-cen border-[2px] border-[#FFFFFF] text-white absolute top-1/2 right-1 -translate-y-1/2">
                <FiSearch className="size-6" />
              </button>
            </div>
            <div>
              <ul className="flex flex-col items-start gap-y-6 font-medium text-[#474744]">
                <li>
                  <Link href={`/${locale}`}>Home Page</Link>
                </li>
                <li>
                  <Link href={`/${locale}/patient-services`}>
                    Patient Services
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/clinics`}>Hospital & Clinics</Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact-us`}>Contact Us</Link>
                </li>
                <li>
                  <Link href={`/${locale}/about`}>About Us</Link>
                </li>
                <li className="w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="py-0">
                        Medical Branches
                      </AccordionTrigger>
                      <AccordionContent className="mt-3 p-3 pb-6">
                        <ul className="flex flex-col items-start gap-y-3">
                          {sortedData.map((service, index) => {
                            return (
                              <li className="w-full" key={index}>
                                <Link
                                  className="font-normal flex-bet"
                                  href={`/${locale}/medicaltourism/${service.key}`}
                                >
                                  <span className="line-clamp-1">
                                    {service.label}
                                  </span>
                                  {service.isActive ? (
                                    <span className="rounded-full flex-cen w-6 h-6">
                                      <MdArrowForwardIos className="size-3 -me-[1px]" />
                                    </span>
                                  ) : (
                                    <span className="bg-[#00979A] text-white font-medium s1280:text-[14px] rounded-[5px] px-1 shadow-soon-service">
                                      Soon
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <SheetFooter className="flex flex-col items-center justify-start gap-y-2 absolute left-1/2 -translate-x-1/2 bottom-0 w-full bg-white pb-3">
          <hr className="h-0 w-full border-[0.7px] border-[#00000029] my-4" />
          <div className="flex-col items-start gap-y-3 w-[192px]">
            <div className="w-full">
              <Link
                href="maito:info@azpohealth.com"
                className="flex-cen gap-x-2 p-2 text-[#333333] font-normal"
              >
                <span className="w-5 min-w-5">
                  <ImgFetcher src={glob} />
                </span>
                <span>info@azpohealth.com</span>
              </Link>
            </div>
            <div className="w-full">
              <Link
                href="tel:+90 539 332 32 30"
                className="flex-cen gap-x-2 py-2 text-[#333333] font-normal"
              >
                <span className="w-5 min-w-5">
                  <ImgFetcher src={phone} />
                </span>
                <span>+90 539 332 32 30</span>
              </Link>
            </div>
          </div>
          <div className="w-full text-[#0CA5A5] flex-cen gap-x-3">
            <div>
              <Link
                target="_blank"
                href="whatsapp://send?phone=05393323230"
                className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2 hover:bg-[#0CA5A5] hover:text-white anm"
              >
                <IoLogoWhatsapp className="s1280:size-5" />
                {/* <MdOutlineWhatsapp className="s1280:size-5" /> */}
                {/* <FaFacebookF className="s1280:size-5" /> */}
              </Link>
            </div>
            <div>
              <Link
                href="https://www.facebook.com/share/1C8Kd8rX83/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2 hover:bg-[#0CA5A5] hover:text-white anm"
              >
                <FaFacebookF className="s1280:size-5" />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href="http://www.youtube.com/@azpohealth"
                className="s1280:w-[35px] s1280:h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2 hover:bg-[#0CA5A5] hover:text-white anm"
              >
                <IoLogoYoutube className="s1280:size-5" />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href={
                  locale === "ru"
                    ? "https://www.instagram.com/azpo_health?igsh=MXcxbm9tMXV2bmE5dg=="
                    : "https://www.instagram.com/azpo_health_international?igsh=NzJkcWY5NmxkbGky"
                }
                className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2 hover:bg-[#0CA5A5] hover:text-white anm"
              >
                <BsInstagram className="s1280:size-5" />
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default HamburgerMenu;
