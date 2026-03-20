"use client";
import ComboBox from "@/components/comboBox";
import CountryCode from "@/components/forms/countryCode";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { options } from "@/staticData/optionsForm";
import { OptionType } from "@/types/comboBox/comboType";
import { HomePageFormType } from "@/types/forms";
import { LucideSendHorizontal } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { clsx } from "clsx";

const ComplimentaryConsultationForm = () => {
  const locale = useLocale();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [countriesDrop , setCountriesDrop] = useState<boolean>(false)
  const pathnme = usePathname();
  const [codes, setCodes] = useState<OptionType | null>(null);
  const { handleSubmit, register, setValue, watch, setError, reset } =
    useForm<HomePageFormType>();
  useEffect(() => {
    setValue("treatment", `${selectedOption?.label},${selectedOption?.key}`);
  }, [selectedOption, setValue]);
  const phoneValue = watch("phone", "");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!codes) {
      setCountriesDrop(true);
      e.target.value = ""
      return;
    }
    let inputValue = e.target.value;
    if (!inputValue.startsWith(codes?.key || "")) {
      inputValue = inputValue.replace(/^\+\d+/, "");
      inputValue = inputValue.replace(/[^0-9+]/g, "");
    }
    setValue("phone", inputValue);
  };
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<HomePageFormType> = async ({
    email,
    full_name,
    phone,
    treatment,
  }) => {
    setLoading(true);
    if (isNaN(+phone)) {
      setError("phone", { type: "validate", message: "شماره اشتباه است." });
      setLoading(false);
      return;
    } else if (!selectedOption) {
      setError("treatment", {
        type: "validate",
        message: "نوع خدمت را انتخاب کنید",
      });
      setLoading(false);
      return;
    }
    const response = await sendFormFunc({
      email,
      name: full_name,
      phone: codes?.key + phone,
      pageUrl: pathnme,
      throughEmail: 1,
      treatment,
    });
    if (response) {
      toast.success("درخواست با موفقیت ارسال شد.");
      setLoading(false);
    } else {
      toast.error("مشکلی در ارسال درخواست پیش آمد.");
      setLoading(false);
    }
    reset();
  };
  const optionList = options(locale);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-header">
      <div>
        <ComboBox
          trigger={
            selectedOption
              ? selectedOption.label
              : locale === "ru"
              ? "Лечение"
              : "انتخاب خدمت"
          }
          className="combo-box"
          options={optionList}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
      </div>
      <div>
        <input
          {...register("full_name", { required: true })}
          className="homepage-input"
          placeholder={locale === "ru" ? "Имя" : "نام خود را وارد کنید"}
          type="text"
        />
      </div>
      <div>
        <input
          {...register("phone", { required: true })}
          className="homepage-input"
          placeholder={locale === "ru" ? "Телефон" : "شماره خود را وارد نمایید"}
          type="tel"
        />
      </div>
      <div>
        <button disabled={loading} type="submit" className="submit-btn group">
          <span
            className={clsx(
              {
                "top-0" : loading,
                "top-0 group-hover:-top-full" : !loading
              }
            )}
          >
            {loading
              ? "Sending..."
              : locale === "ru"
              ? "На связь!"
              : "ارسال درخواست"}
          </span>
          <span>
            <LucideSendHorizontal className="" />
          </span>
        </button>
      </div>
    </form>
  );
};
export default ComplimentaryConsultationForm;
