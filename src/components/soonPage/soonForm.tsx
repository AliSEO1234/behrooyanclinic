"use client";

import { OptionType } from "@/types/comboBox/comboType";
import CountryCode from "../forms/countryCode";
import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { FormItemType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { toast } from "react-toastify";
const SoonForm = () => {
  const locale = useLocale();
  const { setValue, watch, handleSubmit, register, reset } =
    useForm<FormItemType>();
  const [countriesDrop, setCountriesDrop] = useState<boolean>(false);
  const [codes, setCodes] = useState<OptionType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const phoneValue = watch("phone", "");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!codes) {
      setCountriesDrop(true);
      e.target.value = "";
      return;
    }
    let inputValue = e.target.value;
    if (!inputValue.startsWith(codes?.key || "")) {
      inputValue = inputValue.replace(/^\+\d+/, "");
      inputValue = inputValue.replace(/[^0-9+]/g, "");
    }
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
      toast.success("Request sent successfully. Redirecting ... (3s)");
      setTimeout(() => {
        router.push(`/${locale}`);
      }, 3000);
      setLoading(false);
    } else {
      toast.error("There was a problem sending the request.");
      setLoading(false);
    }
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full grid grid-cols-12 gap-5 bg-white rounded-[40px] shadow-[0px_2px_7.3px_0px_#08838740] px-6 py-8 s1728:px-16"
    >
      <div className="col-span-12 h-fit">
        <p className="font-medium text-[#474744] s1512:text-[18px] s1728:text-[20px] text-center s1280:text-start">
          {locale === "ru"
            ? "Azpo Health немедленно начнёт вашу оценку!"
            : "Azpo Health will start your evaluation immediatly!"}
        </p>
      </div>
      <div className="col-span-12 s1280:col-span-6 h-fit">
        <input
          {...register("fullName", { required: true })}
          className="soon-input px-3"
          placeholder={locale === "ru" ? "Имя и фамилия" : "Name & Surname"}
          type="text"
        />
      </div>
      <div className="col-span-12 s1280:col-span-6 h-fit">
        <input
          {...register("email", { required: true })}
          className="soon-input px-3"
          placeholder={locale === "ru" ? "Электронная почта" : "Email"}
          type="text"
        />
      </div>
      <div className="col-span-12 h-fit relative">
        <input
          {...register("phone", { required: true })}
          className="soon-input pe-3 ps-[70px]"
          placeholder={locale === "ru" ? "Телефон" : "Phone"}
          onChange={handlePhoneChange}
          defaultValue={phoneValue}
          type="text"
        />
        <CountryCode
          countriesDrop={countriesDrop}
          setCountriesDrop={setCountriesDrop}
          className="s1280:text-[14px] s1512:text-[16px]"
          codes={codes}
          setCodes={setCodes}
        />
      </div>
      <div className="col-span-12">
        <button
          type="submit"
          disabled={loading}
          className={`w-full h-[44px] s1280:h-[45px] s1512:h-[59px] bg-[#088387] rounded-[48px] font-medium s1280:text-[20px] text-center text-white border border-[#088387] anm shadow-[0px_0px_20px_0px_#5ED2B76B] ${
            loading ? "" : "hover:bg-inherit hover:text-[#088387] "
          }`}
        >
          {loading
            ? locale === "ru"
              ? "Загрузка..."
              : "Loading..."
            : locale === "ru"
            ? "Отправить запрос"
            : "Send Request"}
        </button>
      </div>
      <div className="col-span-12 flex-left gap-x-2">
        <p className="me-4 font-medium text-[#474744] s1512:text-[18px]">
          {locale === "ru" ? "Или" : "OR"}
        </p>
        <Link
          className="h-11 w-11 s1280:w-[38px] s1280:h-[38px] s1512:w-10 s1512:h-10 s1728:w-[42px] s1728:h-[42px] s1920:w-[44px] s1920:h-[44px] rounded-full flex-cen shadow-[0px_1px_6px_0px_#00000040] text-[#25D366]"
          href=""
        >
          <FaWhatsapp className="size-6" />
        </Link>
        <Link
          className="h-11 w-11 s1280:w-[38px] s1280:h-[38px] s1512:w-10 s1512:h-10 s1728:w-[42px] s1728:h-[42px] s1920:w-[44px] s1920:h-[44px] rounded-full flex-cen shadow-[0px_1px_6px_0px_#00000040] text-[#28A8E9]"
          href=""
        >
          <RiTelegram2Fill className="size-6" />
        </Link>
      </div>
    </form>
  );
};
export default SoonForm;
