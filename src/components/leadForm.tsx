"use client";

import ImgFetcher from "./imgFetcher";
import leaddesk from "@/assets/images/leaddesk.png";
import leadphone from "@/assets/images/leadPhone.png";
import { OptionType } from "@/types/comboBox/comboType";
import { FormItemType, LeadFormType } from "@/types/forms";
import { useState } from "react";
import CountryCode from "./forms/countryCode";
import { SubmitHandler, useForm } from "react-hook-form";
import { LucideSendHorizontal } from "lucide-react";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useLocale } from "next-intl";
import { IoLogoWhatsapp } from "react-icons/io";
const LeadForm = ({ className }: LeadFormType) => {
  const locale = useLocale();
  const { setValue, watch, handleSubmit, register, reset } =
    useForm<FormItemType>();
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const [codes, setCodes] = useState<OptionType | null>({
    id: 0,
    key: "+90",
    label: "Turkey",
  });
  const phoneValue = watch("phone", "");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (!inputValue.startsWith(codes?.key || "")) {
      inputValue = inputValue.replace(/^\+\d+/, "");
    }
    inputValue = inputValue.replace(/[^0-9+]/g, "");
    setValue("phone", inputValue);
  };

  const onSubmit: SubmitHandler<FormItemType> = async ({
    email,
    fullName,
    phone,
  }) => {
    setLoading(true);
    const response = await sendFormFunc({
      email,
      name: fullName,
      pageUrl: pathname,
      throughEmail: 1,
      phone: codes?.key + phone,
    });
    if (response) {
      toast.success("Request sent successfully.");
      setLoading(false);
    } else {
      toast.error("There was a problem sending the request.");
      setLoading(false);
    }
    reset();
  };
  return (
    <section
      aria-labelledby="lead-form"
      className={`${
        className || ""
      } grid grid-cols-12 relative h-[567px] max-h-[567px] s1280:h-[259px] s1512:h-[306px] s1728:h-[346px] s1920:h-[374px] rounded-[40px] overflow-hidden `}
    >
      <div className="w-full absolute top-0 left-0  h-[567px] max-h-full">
        <ImgFetcher
          width={1500}
          height={800}
          src={leaddesk}
          className="hidden s1280:block object-cover"
        />
        <ImgFetcher
          width={1500}
          height={800}
          src={leadphone}
          className="s1280:hidden object-cover"
        />
      </div>
      <div className="col-span-12 s1280:col-span-5 relative flex items-end justify-center s1280:items-center s1280:py-5 p-4 s1280:ms-10 pt-0 h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full s1280:h-fit bg-gradient-to-b from-[#FFFFFF91] to-[#FFFFFF6E] p-3 s1280:p-0 rounded-[38px] s1280:rounded-none s1280:bg-none mt-auto s1280:mt-0 h-fit"
        >
          <hr className="mx-auto w-[101px] h-[3px] bg-white rounded-[10px] my-2 s1280:hidden" />
          <p className="font-bold s1512:text-[20px] s1728:text-[24px] text-center s1280:text-start text-white">
            {locale === "ru"
              ? "Вы готовы пройти медицинское обследование?"
              : "Are you ready for a health checkup?"}
          </p>
          <div className="grid grid-cols-12 gap-y-4 s1280:gap-x-2 s1280:gap-y-6 mt-4 s1280:mt-6 s1920:gap-y-10">
            <div className="col-span-12 s1280:col-span-6">
              <input
                {...register("fullName", { required: true })}
                placeholder={locale === "ru" ? "Имя" : "Name"}
                className="px-3 outline-none bg-white w-full h-[48px] s1280:h-[38px] s1512:h-[40px] s1728:h-[48px] s1512:text-[16px] s1280:text-[14px] placeholder:text-[#9996A0] font-medium rounded-[40px]"
                type="text"
              />
            </div>
            <div className="col-span-12 s1280:col-span-6">
              <input
                {...register("email", { required: true })}
                placeholder={locale === "ru" ? "Электронная почта" : "Email"}
                className="px-3 outline-none bg-white w-full h-[48px] s1280:h-[38px] s1512:h-[40px] s1728:h-[48px] s1512:text-[16px] s1280:text-[14px] placeholder:text-[#9996A0] font-medium rounded-[40px]"
                type="email"
              />
            </div>
            <div className="col-span-12 relative">
              <input
                {...register("phone", { required: true })}
                onChange={handlePhoneChange}
                defaultValue={phoneValue}
                placeholder={locale === "ru" ? "Телефон" : "Phone"}
                className="ps-20 s1280:ps-16 s1512:ps-20 pe-3 outline-none bg-white w-full h-[48px] s1280:h-[38px] s1512:h-[40px] s1728:h-[48px] s1512:text-[16px] s1280:text-[14px] placeholder:text-[#9996A0] font-medium rounded-[40px]"
                type="text"
              />
              <CountryCode
                className="s1280:text-[14px] s1512:text-[16px]"
                codes={codes}
                setCodes={setCodes}
              />
            </div>
            <div className="col-span-12 flex-cen">
              <button
                disabled={loading}
                className="outline-none rounded-[48px] shadow-[0px_0px_20px_0px_#5ED2B76B] text-center s1280:h-[40px] font-medium h-[43px] w-full text-[14px] s1512:text-[16px] s1920:text-[20px] s1920:h-[59px] s1728:h-[52px] s1728:text-[20px] group relative overflow-hidden"
              >
                <div
                  className={`z-[2] bg-white text-[#088387] w-full h-full absolute top-0 ${
                    loading ? "top-0" : "group-hover:-top-full"
                  } group-hover:-top-full left-0 text-center flex-cen anm`}
                >
                  {loading
                    ? "Sending..."
                    : locale === "ru"
                    ? "Отправить запрос"
                    : "Send Request"}
                </div>
                <div className="z-[1] bg-[#86D1AB] text-white w-full h-full absolute top-0 left-0 text-center  flex-cen">
                  <LucideSendHorizontal className="size-5" />
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-span-3 hidden s1280:flex relative pb-3 s1512:pb-[34px] s1728:pb-[38px]">
        <div className="h-[59px] bg-blue-6000 mt-auto flex-left gap-x-2">
          <p className="font-bold s1280:text-[24px] text-white me-3">
            {locale === "ru" ? "или" : "OR"}
          </p>
          <Link
            target="_blank"
            href="https://t.me/azpohealth"
            className="bg-white w-[35px] h-[35px] s1512:w-[44px] s1512:h-[44px] rounded-full flex-cen p-2 text-[#0088cc] hover:bg-[#0CA5A5] hover:text-white anm shadow-[0px_1px_6px_0px_#00000040]"
          >
            <FaTelegramPlane className="size-5 s1512:size-6" />
          </Link>
          <Link
            target="_blank"
            href={
              locale === "ru"
                ? "https://www.instagram.com/azpo_health?igsh=MXcxbm9tMXV2bmE5dg=="
                : "https://www.instagram.com/azpo_health_international?igsh=NzJkcWY5NmxkbGky"
            }
            className="bg-white w-[35px] h-[35px] s1512:w-[44px] s1512:h-[44px] rounded-full flex-cen p-2 text-[#C13584] hover:bg-[#0CA5A5] hover:text-white anm shadow-[0px_1px_6px_0px_#00000040]"
          >
            <BsInstagram className="s1280:size-5 s1512:size-6" />
          </Link>
          <Link
            target="_blank"
            href="whatsapp://send?phone=+905393323230"
            className="w-[35px] h-[35px] s1512:w-[44px] s1512:h-[44px] rounded-full flex-cen p-2 text-[#128C7E] bg-white hover:bg-[#0CA5A5] hover:text-white anm shadow-[0px_1px_6px_0px_#00000040]"
          >
            <IoLogoWhatsapp className="s1280:size-5 s1512:size-6" />
            {/* <MdOutlineWhatsapp className="s1280:size-5" /> */}
            {/* <FaFacebookF className="s1280:size-5" /> */}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LeadForm;
