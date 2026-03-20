"use client";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { useAppContext } from "@/contexts/app-context/app-context";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const HamburgerMenu = dynamic(() => import("./hamburgerMenu"), {
  ssr: false,
});

const menuItems = [
  { label: "صفحه اصلی", path: "" },
  { label: "خدمات بهرویان", path: "/medicaltourism" },
  { label: "مقالات", path: "/about" },
  { label: "تماس با ما", path: "/contact-us" },
  { label: "درباره ما", path: "/about" },
] as const;

const Navbar = () => {
  const locale = useLocale();
  const [isScroll, setIsScroll] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const pathname = usePathname();
  const { setHamburgerMenu } = useAppContext();
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasPassedHeroRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScroll(scrollY > 50);

      // Check if user scrolled past 20% of viewport height
      const triggerHeight = window.innerHeight * 0.2;
      if (scrollY > triggerHeight && !hasPassedHeroRef.current) {
        hasPassedHeroRef.current = true;
        // Show header after 2 second delay
        delayTimerRef.current = setTimeout(() => {
          setShowHeader(true);
        }, 2000);
      } else if (scrollY <= triggerHeight) {
        hasPassedHeroRef.current = false;
        if (delayTimerRef.current) {
          clearTimeout(delayTimerRef.current);
          delayTimerRef.current = null;
        }
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
    };
  }, []);

  useEffect(() => {
    setHamburgerMenu(false);
  }, [pathname, setHamburgerMenu]);

  const toggleMenu = useCallback(() => {
    setHamburgerMenu((val: boolean) => !val);
  }, [setHamburgerMenu]);

  return (
    <>
      <HamburgerMenu />
      <header
        className={`fixed left-0 w-full z-[5] flex justify-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          showHeader ? "top-0 translate-y-0" : "-translate-y-full top-0"
        }`}
        style={{ paddingTop: "clamp(8px, 0.8vw, 12px)", paddingLeft: "clamp(10px, 5vw, 131px)", paddingRight: "clamp(10px, 5vw, 131px)" }}
      >
        <nav
          dir="rtl"
          className="flex items-center justify-between bg-[#F4EDF2] w-full rounded-[100px] font-yekan-bakh anm"
          style={{
            paddingLeft: "clamp(15px, 3.5vw, 50px)",
            paddingRight: "clamp(15px, 3.5vw, 50px)",
            height: isScroll ? "clamp(55px, 4.5vw, 75px)" : "clamp(60px, 5.5vw, 93px)",
          }}
        >
          <div className="flex-left s1280:gap-x-6 s1512:gap-x-9 s1728:gap-x-11">
            <Link href={`/${locale}`} className="flex-cen">
              <Image
                src="/images/Behrooyan-Logo.svg"
                alt="بهرویان"
                width={48}
                height={48}
                priority
                className="w-9 h-9 s1280:w-[38px] s1280:h-[38px] s1512:w-[42px] s1512:h-[42px] s1920:w-12 s1920:h-12"
              />
            </Link>
            <div className="hidden s1280:flex items-center font-medium s1280:text-[13px] s1512:text-[15px] s1728:text-[16px] s1920:text-[18px] s1280:gap-x-5 s1512:gap-x-8 s1728:gap-x-10 s1920:gap-x-14 text-[#9A62F7]">
              {menuItems.map(({ label, path }) => (
                <Link
                  key={path + label}
                  className="hover:opacity-70 anm"
                  href={`/${locale}${path}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-right gap-x-2">
            <Link
              href={`/${locale}/contact-us`}
              className="hidden s1280:flex flex-cen bg-[#9A62F7] rounded-[40px] px-5 s1512:px-6 s1920:px-8 s1280:h-[38px] s1512:h-[42px] s1920:h-12 font-bold s1280:text-[13px] s1512:text-[14px] s1920:text-[16px] text-white hover:opacity-90 anm"
            >
              رزرو نوبت
            </Link>
            <button
              onClick={toggleMenu}
              className="s1280:hidden flex-cen bg-[#9A62F7] w-[33px] h-[33px] text-white p-2 rounded-full"
              aria-label="منو"
            >
              <HiMenuAlt2 className="size-5" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
