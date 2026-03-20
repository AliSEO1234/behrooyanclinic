"use client";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";

const Footer = () => {
  const locale = useLocale();
  return (
    <footer dir="rtl" className="bg-white shadow-[0px_-2px_10px_#00000008] relative z-[2] font-yekan-bakh">
      <div className="pt-8 pb-4" style={{ paddingLeft: "clamp(10px, 5vw, 131px)", paddingRight: "clamp(10px, 5vw, 131px)" }}>
        {/* Top Section - Logo & Newsletter */}
        <div className="flex flex-col s1280:flex-row items-center justify-between gap-y-4 mb-6">
          {/* Logo */}
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
          {/* Newsletter Input */}
          <div className="flex items-center gap-x-0">
            <button className="bg-gray-100 p-3 rounded-r-lg border border-l-0 border-gray-200">
              <IoSearch className="text-gray-500 size-5" />
            </button>
            <input
              type="email"
              placeholder="ایمیل خود را برای دریافت آخرین اخبار وارد کنید..."
              className="outline-none border border-gray-200 px-4 py-2.5 text-[14px] w-[280px] s1280:w-[340px] placeholder:text-gray-400 text-right"
            />
            <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium px-6 py-2.5 rounded-l-lg text-[14px] anm">
              جستجو
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Main Columns */}
        <div className="grid grid-cols-2 s1280:grid-cols-4 gap-8 s1280:gap-12 mb-10">
          {/* Column One */}
          <div>
            <h3 className="font-bold text-[15px] s1280:text-[16px] text-[#333333] mb-5 tracking-wide">
              ستون اول
            </h3>
            <ul className="flex flex-col gap-y-4 text-[14px] s1280:text-[15px] text-[#555555]">
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  بیست و یک
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  سی و دو
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  چهل و سه
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  پنجاه و چهار
                </Link>
              </li>
            </ul>
          </div>

          {/* Column Two */}
          <div>
            <h3 className="font-bold text-[15px] s1280:text-[16px] text-[#333333] mb-5 tracking-wide">
              ستون دوم
            </h3>
            <ul className="flex flex-col gap-y-4 text-[14px] s1280:text-[15px] text-[#555555]">
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  شصت و پنج
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  هفتاد و شش
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  هشتاد و هفت
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  نود و هشت
                </Link>
              </li>
            </ul>
          </div>

          {/* Column Three */}
          <div>
            <h3 className="font-bold text-[15px] s1280:text-[16px] text-[#333333] mb-5 tracking-wide">
              ستون سوم
            </h3>
            <ul className="flex flex-col gap-y-4 text-[14px] s1280:text-[15px] text-[#555555]">
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  یک دو
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  سه چهار
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  پنج شش
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-[#333333] anm">
                  هفت هشت
                </Link>
              </li>
            </ul>
          </div>

          {/* Column Four - Social */}
          <div>
            <h3 className="font-bold text-[15px] s1280:text-[16px] text-[#333333] mb-5 tracking-wide">
              ستون چهارم
            </h3>
            <p className="text-[14px] s1280:text-[15px] text-[#555555] mb-4">
              ما را دنبال کنید
            </p>
            <div className="flex items-center gap-x-3">
              <Link
                target="_blank"
                href="http://www.youtube.com/@azpohealth"
                className="text-[#333333] hover:text-[#555555] anm"
              >
                <IoLogoYoutube className="size-5" />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/share/1C8Kd8rX83/"
                className="text-[#333333] hover:text-[#555555] anm"
              >
                <FaFacebookF className="size-4" />
              </Link>
              <Link
                target="_blank"
                href="https://twitter.com"
                className="text-[#333333] hover:text-[#555555] anm"
              >
                <FaTwitter className="size-4" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/azpo_health_international"
                className="text-[#333333] hover:text-[#555555] anm"
              >
                <BsInstagram className="size-4" />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com"
                className="text-[#333333] hover:text-[#555555] anm"
              >
                <FaLinkedinIn className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-gray-100 mb-4" />
        <div className="flex flex-col s1280:flex-row items-center justify-between gap-y-3 text-[13px] s1280:text-[14px] text-[#888888]">
          {/* Copyright */}
          <p>
            بهروییان کلینیک &copy; ۱۴۰۴. تمامی حقوق محفوظ است.
          </p>
          {/* Nav Links */}
          <nav className="flex items-center gap-x-6 text-[#555555]">
            <Link href={`/${locale}`} className="hover:text-[#333333] anm">
              خانه
            </Link>
            <div className="flex items-center gap-x-1">
              <Link href={`/${locale}/medicaltourism`} className="hover:text-[#333333] anm">
                خدمات
              </Link>
              <IoChevronDownOutline className="size-3" />
            </div>
            <Link href={`/${locale}`} className="hover:text-[#333333] anm">
              بلاگ
            </Link>
            <Link href={`/${locale}/contact-us`} className="hover:text-[#333333] anm">
              مرکز راهنمایی
            </Link>
            <Link href={`/${locale}/about`} className="hover:text-[#333333] anm">
              درباره ما
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
