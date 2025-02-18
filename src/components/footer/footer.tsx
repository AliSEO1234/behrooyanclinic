import health from "@/assets/images/health.svg";
import ImgFetcher from "../imgFetcher";
import cert1 from "@/assets/images/certificate/1.png";
import cert2 from "@/assets/images/certificate/2.png";
import cert3 from "@/assets/images/certificate/3.png";
import Link from "next/link";
import loc from "@/assets/images/locicon.svg";
import glob from "@/assets/images/Globe Medical.svg";
import phone from "@/assets/images/phonefooter.svg";
import { MdArrowForwardIos } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="px-7 pt-5 pb-2 s1280:viewport-p bg-white shadow-[0px_0px_9.6px_#00000014] rounded-t-[40px] s1280:rounded-t-[100px]">
      <div className="grid grid-cols-12 s1280:gap-x-5 s1280:mb-6">
        <div className="col-span-12 s1280:col-span-5 mb-2 s1280:mb-0">
          <div className="flex-left gap-x-2 mb-4">
            <div className="w-[72px] h-[72px] s1280:w-[49px] s1280:h-[49px] s1600:w-[72px] s1600:h-[72px]">
              <ImgFetcher src={health} />
            </div>
            <div className="text-[#00979A]">
              <p className="font-black text-[40px] s1280:text-[24px] s1600:text-[40px]">
                AZPO
              </p>
              <p className="font-bold text-[20px] s1280:text-[16px] s1600:text-[20px]">
                Health
              </p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-normal text-[20px] s1280:text-[16px] s1600:text-[20px] s1280:pe-4">
              Your health, our priority – delivering world-class medical care
              and seamless support tailored just for you.
            </p>
          </div>
          {/* certificate */}
          <div className="flex-left gap-x-8">
            <div className="w-[110px] h-[80px] s1280:w-[132px] s1280:h-[95px] s1512:w-[171px] s1512:h-[124px] bg-[#72D6B2] p-1 rounded-[5px]">
              <ImgFetcher className="object-cover" src={cert1} />
            </div>
            <div className="w-[58px] h-[80px] s1280:w-[70px] s1280:h-[95px] s1512:w-[90px] s1512:h-[124px] bg-[#72D6B2] p-1 rounded-[5px]">
              <ImgFetcher className="object-cover" src={cert2} />
            </div>
            <div className="w-[58px] h-[80px] s1280:w-[70px] s1280:h-[95px] s1512:w-[90px] s1512:h-[124px] bg-[#72D6B2] p-1 rounded-[5px]">
              <ImgFetcher className="object-cover" src={cert3} />
            </div>
          </div>
        </div>
        <div className="col-span-12 hidden s1280:block s1280:col-span-7">
          <table className="text-[#333333] table-auto border-collapse w-full color">
            <thead>
              <tr className="font-medium s1600:text-[20px]">
                <th className="text-start pb-2">Contact us</th>
                <th className="text-start pb-2">Quick Links</th>
                <th className="text-start pb-2">Department</th>
                <th className="text-start pb-2">Useful Links</th>
              </tr>
            </thead>
            <tbody className="space-y-10 s1280:text-[14px] s1600:text-[16px]">
              <tr>
                <td className="flex-left gap-x-2 py-3">
                  <span className="s1280:w-[15px] s1280:h-[19px] s1512:w-[18px] s1512:h-[23px]">
                    <ImgFetcher src={loc} />
                  </span>
                  <span>Alanya, 201005</span>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-3">
                  <Link href="tel:+9088787878787" className="flex-left gap-x-2">
                    <span className="s1280:w-[15px] s1280:h-[19px] s1512:w-[18px] s1512:h-[23px]">
                      <ImgFetcher src={phone} />
                    </span>
                    <span>+90-88787878787</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-3">
                  <Link
                    href="mailto:info@azpo.com"
                    className="flex-left gap-x-2"
                  >
                    <span className="s1280:w-[15px] s1280:h-[19px] s1512:w-[18px] s1512:h-[23px]">
                      <ImgFetcher src={glob} />
                    </span>
                    <span>info@azpo.com</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-3"></td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-3"></td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>Orthology</span>
                  </Link>
                </td>
                <td className="py-3">
                  <Link href="/" className="flex-left gap-x-4">
                    <span>
                      <MdArrowForwardIos className="s1280:size-4" />
                    </span>
                    <span>About Us</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-12 mb-4 s1280:hidden text-[#333333] flex flex-col items-start justify-start gap-y-3">
          <div>
            <Link href="/" className="flex-left gap-x-2">
              <span className="w-[18px] h-[23px] s1280:w-[15px] s1280:h-[19px] s1512:w-[18px] s1512:h-[23px]">
                <ImgFetcher src={loc} />
              </span>
              <span>Alanya, 201005</span>
            </Link>
          </div>
          <div>
            <Link href="tel:+9088787878787" className="flex-left gap-x-2">
              <span className="w-[18px] h-[23px] s1280:w-[15px] s1280:h-[19px] s1512:w-[18px] s1512:h-[23px]">
                <ImgFetcher src={phone} />
              </span>
              <span>+90-88787878787</span>
            </Link>
          </div>
          <div>
            <Link href="mailto:info@azpo.com" className="flex-left gap-x-2">
              <span className="w-[18px] h-[23px] s1280:w-[15px] s1280:h-[19px] s1512:w-[18px] s1512:h-[23px]">
                <ImgFetcher src={glob} />
              </span>
              <span>info@azpo.com</span>
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full h-0 border-[1px] border-black mb-5" />
      <div className="flex flex-col items-start justify-start gap-y-4 s1280:gap-y-0 s1280:flex-row s1280:items-center s1280:justify-between">
        <div className="order-2 s1280:order-1">
          <p className="text-[#474744] font-normal s1512:text-[14px] s1280:text-[16px]">
            Copyright ©2024All Rights Reserved
          </p>
        </div>
        <div className="order-1 s1280:order-2 flex items-center justify-start s1280:justify-end gap-x-4 text-[#0CA5A5] s1280:gap-x-2">
          <div>
            <Link
              href="/"
              className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2"
            >
              <FaFacebookF className="s1280:size-5" />
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2"
            >
              <FaXTwitter className="s1280:size-5" />
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="s1280:w-[35px] s1280:h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2"
            >
              <IoLogoYoutube className="s1280:size-5" />
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="w-[35px] h-[35px] rounded-full border-[1px] border-[#0CA5A5] flex-cen p-2"
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
