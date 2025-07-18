"use client";
import health from "@/assets/images/health.svg";
import Image from "next/image";
import Link from "next/link";
import ChangeLanguage from "../change-language";
import { HiMenuAlt2 } from "react-icons/hi";
import ring from "@/assets/images/ringnavbar.svg";
import ImgFetcher from "../imgFetcher";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { options } from "@/staticData/optionsForm";
import { MdArrowForwardIos } from "react-icons/md";
import { useAppContext } from "@/contexts/app-context/app-context";
import HamburgerMenu from "./hamburgerMenu";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const locale = useLocale();
  const isRu = locale === "ru";
  const optionList = options(locale);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const pathname = usePathname();
  const { setHamburgerMenu } = useAppContext();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setHamburgerMenu(false);
  }, [pathname, setHamburgerMenu]);
  return (
    <>
      <HamburgerMenu />
      <header
        className={`fixed top-0 left-0 ${
          isScroll ? "animateScroll" : ""
        } w-full z-[5]`}
      >
        <nav
          className={`flex items-center justify-between bg-white shadow-[0_4px_2px_#0000001C] px-[20px] py-3 rounded-b-[40px] anm s1280:px-[50px] ${
            isScroll ? "s1280:py-1" : "s1280:py-3"
          }`}
        >
          <div className="flex-left s1280:gap-x-[18px] s1512:gap-x-[32px]">
            <Link href={`/${locale}`} className={`flex-left gap-x-2`}>
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
                <p
                  className={`anm font-black tracking-[2px] s1280:text-[20px] s1512:text-[30px] ${
                    isScroll ? "" : "text-[24px] s412:text-[20px] "
                  }`}
                >
                  AZPO
                </p>
                <p
                  className={`-mt-2 font-bold text-[14px] s1280:text-[14px] s1512:text-[18px]  ${
                    isScroll ? "" : ""
                  }`}
                >
                  HEALTH
                </p>
              </div>
            </Link>
            <div
              className={`hidden s1280:flex items-center font-medium s1280:text-[14px] s1280:gap-x-6 s1512:gpa-x-10 s1512:text-[16px] s1728:text-[18px] gap-x-2 s1728:gap-x-12 text-[#474744] anm`}
            >
              <div>
                <Link className="hover:text-[#25A6A9] anm" href={`/${locale}`}>
                  {isRu ? "Главная страница" : "Home Page"}
                </Link>
              </div>
              <div>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="p-0 hover:bg-inherit focus:bg-inherit hover:text-[#00979A] s1280:text-[14px] s1512:text-[16px] s1728:text-[18px]">
                        {isRu ? "Медицинские направления" : "Medical branches"}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[900px] py-3">
                          <ul className="grid grid-cols-12">
                            {optionList.map((service, index) => {
                              return (
                                <li
                                  title={service.label}
                                  className="s1280:col-span-4"
                                  key={index}
                                >
                                  <Link
                                    className="flex-bet gap-x-2 hover:bg-[#fafafa] py-2 px-3 text-[#474744] anm font-medium hover:text-[#00979A]"
                                    href={
                                      service.isActive
                                        ? `/${locale}/medicaltourism/${service.key}`
                                        : `/${locale}/coming-soon`
                                    }
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
                                        {isRu ? "Скоро" : "Soon"}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                {/* <Link className="hover:text-[#25A6A9] anm" href="/">
                Medical Branches
              </Link> */}
              </div>
              <div>
                <Link
                  className="hover:text-[#25A6A9] anm"
                  href={`/${locale}/clinics`}
                >
                  {isRu ? "Больницы и клиники" : "Hospital & Clinics"}
                </Link>
              </div>
              <div>
                <Link
                  className="hover:text-[#25A6A9] anm"
                  href={`/${locale}/patient-services`}
                >
                  {isRu ? "Услуги для пациентов" : "Patient Services"}
                </Link>
              </div>
              {/* <div>
              <Link className="hover:text-[#25A6A9] anm" href="/">
                Blogs
              </Link>
            </div> */}
              <div>
                <Link
                  className="hover:text-[#25A6A9] anm"
                  href={`/${locale}/about`}
                >
                  {isRu ? "О нас" : "About Us"}
                </Link>
              </div>
              <div>
                <Link
                  className="hover:text-[#25A6A9] anm"
                  href={`/${locale}/contact-us`}
                >
                  {isRu ? "Свяжитесь с нами" : "Contact Us"}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-right gap-x-2 anm">
            {/* <div className="hidden s1280:block">
              <TreatSearchBox />
            </div> */}
            <div className="hidden s1280:block">
              <ChangeLanguage
                trigStyle="s1280:w-[56px] s1600:w-[70px] h-[35px] s1600:h-[44px]"
                BodyWidth="w-[70px]"
              />
            </div>
            <div>
              <Link
                href="tel:+90 539 332 32 30"
                target="_blank"
                className="flex-cen gap-x-2 bg-[#25A6A9] rounded-[40px] py-4 px-2 s1280:py-[10px] s1280:px-[20px] font-medium s1280:text-[12px] s1600:text-[18px] text-white h-[33px] w-[33px] s1280:w-fit s1280:h-[35px] s1600:h-[44px]"
              >
                <span>
                  <ImgFetcher src={ring} />
                </span>
                <span className="hidden s1280:inline">+90 539 332 32 30</span>
              </Link>
            </div>
            <div className="s1280:hidden">
              <button
                onClick={() => setHamburgerMenu((val) => !val)}
                className="flex-cen bg-[#25A6A9] w-[33px] h-[33px] text-white p-2 rounded-full"
              >
                <HiMenuAlt2 className="size-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
