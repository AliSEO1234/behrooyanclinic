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
      setError("phone", { type: "validate", message: "The number is wrong." });
      setLoading(false);
      return;
    } else if (!selectedOption) {
      setError("treatment", {
        type: "validate",
        message: "Select service type",
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
      toast.success("Request sent successfully.");
      setLoading(false);
    } else {
      toast.error("There was a problem sending the request.");
      setLoading(false);
    }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-header">
      <div>
        <input
          {...register("full_name", { required: true })}
          className="homepage-input px-4"
          placeholder={locale === "ru" ? "Имя" : "Name & Surname"}
          type="text"
        />
      </div>
      <div>
        <ComboBox
          trigger={
            selectedOption
              ? selectedOption.label
              : locale === "ru"
              ? "Лечение"
              : "Treatment"
          }
          className="combo-box"
          options={options}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
      </div>
      <div className="relative">
        <input
          {...register("phone", { required: true })}
          onChange={handlePhoneChange}
          defaultValue={phoneValue}
          className="homepage-input ps-20 pe-4"
          placeholder={locale === "ru" ? "Телефон" : "Phone Number"}
          type="text"
        />
        <CountryCode countriesDrop={countriesDrop} setCountriesDrop={setCountriesDrop} codes={codes} setCodes={setCodes} />
      </div>
      <div>
        <input
          {...register("email", { required: true })}
          className="homepage-input px-4"
          placeholder={locale === "ru" ? "Электронная почта" : "Email"}
          type="text"
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
              : "Let’s Connect"}
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
