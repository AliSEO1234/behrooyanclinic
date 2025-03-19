"use client"
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import phone from "@/assets/images/white-phone-logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ImgFetcher from "../imgFetcher";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { useLocale } from "next-intl";

const WhatsAppLink = () => {
  const locale = useLocale()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        data-aos="fade-up"
        className="w-10 h-10 s1512:w-[54px] s1512:h-[54px] rounded-full bg-[#00979A] p-2 outline-none"
      >
        <ImgFetcher src={phone} width={500} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-aos="fade-down"
        className="w-[40px] s1512:w-[54px] bg-inherit border-none p-0 my-3"
      >
        <DropdownMenuGroup className="flex flex-col items-center gap-y-2">
          <DropdownMenuItem className="border shadow w-10 h-10 s1512:w-[54px] s1512:h-[54px] rounded-full bg-white">
            <Link
              className="w-full h-full flex-cen"
              href="whatsapp://send?phone=05393323230"
              target="_blank"
            >
              <IoLogoWhatsapp className="size-6 text-[#25d366]" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="border shadow w-10 h-10 s1512:w-[54px] s1512:h-[54px] rounded-full bg-white s1512:p-3">
            <Link
              className="w-full h-full flex-cen text-[#00979A]"
              href="tel:+ 90 545 555 0 555"
              target="_blank"
            >
              {" "}
              <BiSolidPhoneCall className="size-6" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="border shadow w-10 h-10 s1512:w-[54px] s1512:h-[54px] rounded-full bg-white text-[#00979A]">
            <Link
              className="w-full h-full flex-cen"
              href={
                locale === "ru"
                  ? "https://www.instagram.com/azpo_health?igsh=MXcxbm9tMXV2bmE5dg=="
                  : "https://www.instagram.com/azpo_health_international?igsh=NzJkcWY5NmxkbGky"
              }
              target="_blank"
            >
              <BsInstagram className="s1280:size-5" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default WhatsAppLink;
