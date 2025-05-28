"use client";
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
import { BiMessageSquareEdit, BiSolidPhoneCall } from "react-icons/bi";
import { useState } from "react";
import { useLocale } from "next-intl";

const WhatsAppLink = () => {
  const [whatsapp, setWhatsapp] = useState<boolean>(false);
  const locale = useLocale();
  return (
    <DropdownMenu modal={false} onOpenChange={setWhatsapp} open={whatsapp}>
      <DropdownMenuTrigger
        data-aos="fade-up"
        className={`w-10 h-10 s1512:w-[54px] s1512:h-[54px] rounded-full bg-[#00979A] p-2 outline-none fixed bottom-5 right-5 z-[5] ${
          whatsapp ? "" : "animate-ping-custom"
        }`}
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
              href="whatsapp://send?phone=+905393323230"
              target="_blank"
            >
              <IoLogoWhatsapp className="size-6 text-[#25d366]" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="border shadow w-10 h-10 s1512:w-[54px] s1512:h-[54px] rounded-full bg-white s1512:p-3">
            <Link
              className="w-full h-full flex-cen text-[#00979A]"
              href="tel:+90 539 332 32 30"
              target="_blank"
            >
              {" "}
              <BiSolidPhoneCall className="size-6" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="border shadow w-10 h-10 s1512:w-[54px] s1512:h-[54px] rounded-full bg-white text-[#00979A]">
            <Link
              onClick={() => setWhatsapp(false)}
              className="w-full h-full flex-cen"
              href={`/${locale}/contact-us`}
            >
              <BiMessageSquareEdit className="size-7" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default WhatsAppLink;
