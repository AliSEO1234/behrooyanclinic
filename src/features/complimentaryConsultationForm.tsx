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

const ComplimentaryConsultationForm = () => {
  const locale = useLocale();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const pathnme = usePathname();
  const [codes, setCodes] = useState<OptionType | null>({
    id: 0,
    key: "+90",
    label: "Turkey",
  });
  const { handleSubmit, register, setValue, watch, setError, reset } =
    useForm<HomePageFormType>();
  useEffect(() => {
    setValue("treatment", `${selectedOption?.label},${selectedOption?.key}`);
  }, [selectedOption, setValue]);
  const phoneValue = watch("phone", "");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (!inputValue.startsWith(codes?.key || "")) {
      inputValue = `${codes?.key || ""}${inputValue.replace(/^\+\d+/, "")}`;
    }
    inputValue = inputValue.replace(/[^0-9+]/g, "");

    setValue("phone", inputValue);
  };
  useEffect(() => {
    if (codes) {
      setValue("phone", codes.key);
    }
  }, [codes, setValue]);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-10 gap-x-4 gap-y-4 relative z-[2] w-full s1280:mt-auto mb-5 s1280:mb-10 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF4D] backdrop-blur-[5px] rounded-[40px] s1280:rounded-[90px] p-5 s1280:p-4 s1280:h-20"
    >
      <div className="col-span-12 s1280:col-span-2 h-fit">
        <input
          {...register("full_name", { required: true })}
          className="homepage-input px-4"
          placeholder={locale === "ru" ? "Имя" : "Name & Surname"}
          type="text"
        />
      </div>
      <div className="col-span-12 s1280:col-span-2 h-fit">
        <ComboBox
          trigger={
            selectedOption
              ? selectedOption.label
              : locale === "ru"
              ? "Лечение"
              : "Treatment"
          }
          className="flex-bet s1728:text-[16px] w-full outline-none h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-medium text-[#898989] bg-white"
          options={options}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
      </div>
      <div className="col-span-12 s1280:col-span-2 h-fit relative">
        <input
          {...register("phone", { required: true })}
          onChange={handlePhoneChange}
          defaultValue={phoneValue}
          className="homepage-input ps-20 pe-4"
          placeholder={locale==="ru" ? "Телефон" :"Phone Number"}
          type="text"
        />
        <CountryCode codes={codes} setCodes={setCodes} />
      </div>
      <div className="col-span-12 s1280:col-span-2 h-fit">
        <input
          {...register("email", { required: true })}
          className="homepage-input px-4"
          placeholder="Email"
          type="text"
        />
      </div>
      <div className="col-span-12 s1280:col-span-2 h-fit">
        <button
          disabled={loading}
          type="submit"
          className="h-[48px] rounded-[40px] text-white px-4 w-full text-center font-bold group relative overflow-hidden text-[18px]"
        >
          <div
            className={`z-[2] bg-[#0CA5A5] text-white w-full h-full absolute top-0 ${
              loading ? "top-0" : "group-hover:-top-full"
            } group-hover:-top-full left-0 text-center flex-cen anm`}
          >
            {loading ? "Sending..." : locale === "ru" ? "На связь!" : "Let’s Connect"}
          </div>
          <div className="z-[1] bg-[#86D1AB] text-white w-full h-full absolute top-0 left-0 text-center  flex-cen">
            <LucideSendHorizontal className="size-5" />
          </div>
        </button>
      </div>
    </form>
  );
};
export default ComplimentaryConsultationForm;
