"use client";
import ComboBox from "@/components/comboBox";
import CountryCode from "@/components/forms/countryCode";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { options } from "@/staticData/optionsForm";
import { OptionType } from "@/types/comboBox/comboType";
import { HomePlatformWorkFormType } from "@/types/forms";
import { LucideSendHorizontal } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const PlatformWorkForm = () => {
  const locale = useLocale();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [codes, setCodes] = useState<OptionType | null>(null);
  const [countriesDrop, setCountriesDrop] = useState<boolean>(false);
  const pathnme = usePathname();
  const { handleSubmit, register, setValue, watch, setError, reset } =
    useForm<HomePlatformWorkFormType>();
  useEffect(() => {
    setValue("treatment", `${selectedOption?.label},${selectedOption?.key}`);
  }, [selectedOption, setValue]);
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
  const onSubmit: SubmitHandler<HomePlatformWorkFormType> = async ({
    full_name,
    phone,
    treatment,
  }) => {
    if (isNaN(+phone)) {
      setError("phone", { type: "validate", message: "The number is wrong." });
      return;
    } else if (!selectedOption) {
      setError("treatment", {
        type: "validate",
        message: "Select service type",
      });
      return;
    }
    const response = await sendFormFunc({
      name: full_name,
      phone: codes?.key + phone,
      treatment,
      pageUrl: pathnme,
    });

    if (response) {
      toast.success("Request sent successfully.");
    } else {
      toast.error("There was a problem sending the request.");
    }
    reset();
  };
  const optionList = options(locale);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 gap-y-4 form-platform-work-end bg-white shadow-[0_4px_19px_0_#0000001A] rounded-[40px] px-[18px] s390:px-[25px] s412:px-[35px] py-5 s1280:py-8 s1280:px-[30px] s1512:px-9 s1920:px-[58px]"
    >
      {/* platform__form-container  */}
      <div className="col-span-12 ">
        <h3 className="text-center font-bold text-[20px] s1280:text-[18px] s1728:text-[28px] text-[#0CA5A5]">
          {locale === "ru"
            ? "Заполните форму для получения консультации"
            : "Fill out the form to receive advice"}
        </h3>
      </div>
      <div className="col-span-12">
        <label>{locale === "ru" ? "Имя" : "Name & Surname"}</label>
        <input
          {...register("full_name", { required: true })}
          className="px-4"
          placeholder={locale === "ru" ? "Имя" : "Name & Surname"}
          type="text"
        />
      </div>
      <div className="col-span-12">
        <label htmlFor="phone-our-work">
          {locale === "ru" ? "Телефон" : "Phone Number"}
        </label>
        <div className="relative">
          <input
            {...register("phone", { required: true })}
            onChange={handlePhoneChange}
            defaultValue={phoneValue}
            className="ps-20 pe-4"
            id="phone-our-work"
            placeholder={locale === "ru" ? "Телефон" : "Number"}
            type="text"
          />
          <CountryCode
            countriesDrop={countriesDrop}
            setCountriesDrop={setCountriesDrop}
            codes={codes}
            setCodes={setCodes}
          />
        </div>
      </div>
      <div className="col-span-12">
        <label htmlFor="">
          {locale === "ru" ? "Выберите тип услуги" : "Choose your service type"}
        </label>
        <ComboBox
          trigger={
            selectedOption
              ? selectedOption.label
              : locale === "ru"
              ? "Лечение"
              : "Treatment"
          }
          className="flex-bet w-full outline-none h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-normal text-[#BBBBBB] mb-1"
          options={optionList}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
        {/* <input placeholder="Please Select" type="email" /> */}
      </div>
      <div className="col-span-12 flex-cen">
        <button className="font-bold w-full h-[54px] text-center rounded-[40px] group relative overflow-hidden">
          <div className="z-[2] bg-[#0CA5A5] text-white w-full h-full absolute top-0 group-hover:-top-full left-0 text-center flex-cen anm">
            {locale === "ru" ? "Отправить сообщение" : "Send Message"}
          </div>
          <div className="z-[1] bg-[#86D1AB] text-white w-full h-full absolute top-0 left-0 text-center  flex-cen">
            <LucideSendHorizontal className="size-5" />
          </div>
        </button>
      </div>
    </form>
  );
};
export default PlatformWorkForm;
