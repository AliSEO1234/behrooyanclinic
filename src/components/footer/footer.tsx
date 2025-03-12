"use client"
import health from "@/assets/images/health.svg";
import ImgFetcher from "../imgFetcher";
import Link from "next/link";
import loc from "@/assets/images/locicon.svg";
import glob from "@/assets/images/Globe Medical.svg";
import phone from "@/assets/images/phonefooter.svg";
import { MdArrowForwardIos } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import CertiLayout from "./certifications";
import { useLocale } from "next-intl";
const Footer = () => {
  const locale = useLocale()
  return (
    <footer className="px-7 pt-5 pb-2 s1280:viewport-p bg-white shadow-[0px_0px_9.6px_#00000014] rounded-t-[40px] s1280:rounded-t-[100px]">
      <div className="grid grid-cols-12 gap-y-6 s1280:gap-y-0 s1280:gap-x-5 s1280:mb-6">
        <div className="col-span-12 s1280:col-span-4">
          <div className="flex items-start justify-start gap-x-2 mb-4">
            <div className="w-[72px] h-[72px] s1280:w-[49px] s1280:h-[49px] s1600:w-[72px] s1600:h-[72px]">
              <ImgFetcher src={health} />
            </div>
            <div className="text-[#00979A]">
              <p className="font-black text-[32px] s412:text-[40px] s1280:text-[24px] s1600:text-[40px] s412:-mt-2 s1280:-mt-0 s1920:-mt-2">
                AZPO
              </p>
              <p className="font-bold s412:text-[20px] s1280:text-[16px] s1600:text-[20px] -mt-2 s412:-mt-2 s1280:-mt-0 s1920:-mt-2">
                Health
              </p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-normal s1280:text-[14px] s1600:text-[18px] s1728:text-[20px] s1728:pe-14 s1280:pe-4">
              Your health, our priority – delivering world-class medical care
              and seamless support tailored just for you.
            </p>
          </div>
          {/* certificate */}
          <CertiLayout />
        </div>
        <div className="col-span-12 s1280:col-span-3 text-[#333333] s1512:ms-10">
          <div className="mb-5">
            <h3 className="font-medium text-[#00979A] s1280:text-[#333333] s1728:text-[20px]">
              Our Branches
            </h3>
          </div>
          <div className="font-normal flex flex-col items-center justify-between gap-y-7 s1512:gap-y-6 s1600:pe-0 s1600:gap-y-14 s1728:gap-y-12">
            {/* item */}
            <div className="flex items-start justify-start gap-x-4">
              <div className="w-5 min-w-5 s1280:w-[14px] s1280:min-w-[14px] s1512:w-[17px] s1512:min-w-[17px] s1728:w-[20px] s1728:min-w-[20px]">
                <ImgFetcher src={loc} />
              </div>
              <div>
                <p className="s1280:text-[12px] s1512:text-[14px] s1728:text-[16px]">
                  Cumhuriyet Mahallesi Keykubat Bulvarı 270A/14 Alanya/Antalya
                </p>
              </div>
            </div>
            {/* item */}
            <div className="flex items-start justify-start gap-x-4">
              <div className="w-5 min-w-5 s1280:w-[14px] s1280:min-w-[14px] s1512:w-[17px] s1512:min-w-[17px] s1728:w-[20px] s1728:min-w-[20px]">
                <ImgFetcher src={loc} />
              </div>
              <div>
                <p className="s1280:text-[12px] s1512:text-[14px] s1728:text-[16px]">
                  Fener mahallesi Bülent Ecevit Bulvarı Özdemir Plaza № 42/1,
                  07230 Muratpaşa/Antalya
                </p>
              </div>
            </div>
            {/* item */}
            <div className="flex items-start justify-start gap-x-4">
              <div className="w-5 min-w-5 s1280:w-[14px] s1280:min-w-[14px] s1512:w-[17px] s1512:min-w-[17px] s1728:w-[20px] s1728:min-w-[20px]">
                <ImgFetcher src={loc} />
              </div>
              <div>
                <p className="s1280:text-[12px] s1512:text-[14px] s1728:text-[16px]">
                  Kayabaşı Mahallesi, Adnan Menderes Bulvarı, No: 5/A, Blok: B3,
                  Kat: 2, Daire: 12. Başakşehir/Istanbul
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="col-span-12 hidden s1280:block s1280:col-span-5 s1512:ms-36">
          <table className="text-[#333333] table-auto border-collapse w-full color">
            <thead dir="rtl">
              <tr className="font-medium s1728:text-[20px]">
                <th className="text-end pb-2 w-[110px] s1728:w-[150px] block">Our services</th>
                {/* <th className="text-start pb-2">Department</th>
                <th className="text-start pb-2">Useful Links</th> */}
              </tr>
            </thead>
            <tbody dir="rtl" className="space-y-10 s1280:text-[14px] s1728:text-[16px]">
              <tr>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href={`/${locale}/medicaltourism/aesthetic`} className="flex-right gap-x-2 w-[110px] s1728:w-[150px]">
                    <span>Aesthetic</span>
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                  </Link>
                </td>
                {/* <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td> */}
              </tr>
              <tr>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-right gap-x-2 w-[110px] s1728:w-[150px]">
                    <span>Fertility</span>
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                  </Link>
                </td>
                {/* <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td> */}
              </tr>
              <tr>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-right gap-x-2 w-[110px] s1728:w-[150px]">
                    <span>Eye surgery</span>
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                  </Link>
                </td>
                {/* <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td> */}
              </tr>
              <tr>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-right gap-x-2 w-[110px] s1728:w-[150px]">
                    <span>Stem cell</span>
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                  </Link>
                </td>
                {/* <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td> */}
              </tr>
              <tr>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href={`/${locale}/medicaltourism/dental-treatments`} className="flex-right gap-x-2 w-[110px] s1728:w-[150px]">
                    <span>Dental</span>
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                  </Link>
                </td>
                {/* <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3 s1512:pb-4 s1600:pb-8 s1728:pb-7">
                  <Link href="/" className="flex-left gap-x-2">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className="w-full h-0 border-[1px] border-black my-5" />
      <div className="flex flex-col items-start justify-start gap-y-4 s1280:gap-y-0 s1280:flex-row s1280:items-center s1280:justify-between">
        <div className="order-2 s1280:order-1">
          <p className="text-[#474744] font-normal">
            Copyright ©2024All Rights Reserved
          </p>
        </div>
        <div className="order-1 s1280:order-2 flex items-center justify-start flex-wrap s1280:flex-nowrap s1280:justify-end gap-x-4 text-[#0CA5A5] s1280:gap-x-2">
          <div className="w-full flex flex-col items-start justify-start mb-3 s1280:mb-0 s1280:flex-row s1280:items-center s1280:justify-end s1280:w-fit">
            <div>
              <Link
                href="maito:info@azpohealth.com"
                className="flex-cen gap-x-2 p-2 text-[#333333] font-normal s1280:text-[14px] s1600:text-[16px]"
              >
                <span className="w-5 min-w-5 s1920:w-7 s1920:min-w-7">
                  <ImgFetcher src={glob} />
                </span>
                <span>info@azpohealth.com</span>
              </Link>
            </div>
            <div>
              <Link
                href="tel:+90 539 332 32 30"
                className="flex-cen gap-x-2 p-2 text-[#333333] font-normal s1280:text-[14px] s1600:text-[16px]"
              >
                <span className="w-5 min-w-5 s1920:w-7 s1920:min-w-7">
                  <ImgFetcher src={phone} />
                </span>
                <span>+90 539 332 32 30</span>
              </Link>
            </div>
          </div>

          <div>
            <Link
              target="_blank"
              href="whatsapp://send?phone=905300515535"
              className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2 hover:bg-[#0CA5A5] hover:text-white anm"
            >
              <IoLogoWhatsapp className="s1280:size-5" />
              {/* <MdOutlineWhatsapp className="s1280:size-5" /> */}
              {/* <FaFacebookF className="s1280:size-5" /> */}
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2 hover:bg-[#0CA5A5] hover:text-white anm"
            >
              <FaXTwitter className="s1280:size-5" />
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
              href="https://instagram.com/azpo_health"
              className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2 hover:bg-[#0CA5A5] hover:text-white anm"
            >
              <BsInstagram className="s1280:size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
