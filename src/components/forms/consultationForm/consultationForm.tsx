"use client";
import { OptionType } from "@/types/comboBox/comboType";
import CountryCode from "../countryCode";
import { useEffect, useState } from "react";
import { LucideSendHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";
import { SubnestedFormType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { toast } from "react-toastify";

const ConsultationForm = () => {
  const pathname = usePathname();
  const { handleSubmit, register, setValue, watch, setError, reset } =
    useForm<SubnestedFormType>();
  const [codes, setCodes] = useState<OptionType | null>({
    id: 0,
    key: "+90",
    label: "Turkey",
  });
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
  const onSubmit: SubmitHandler<SubnestedFormType> = async ({
    email,
    phone,
  }) => {
    setLoading(true);
    if (isNaN(+phone)) {
      setError("phone", { type: "validate", message: "The number is wrong." });
      setLoading(false);
      return;
    }

    const response = await sendFormFunc({
      email: email,
      throughEmail: 1,
      phone,
      pageUrl: pathname,
    });

    if (response) {
      setLoading(false);
      toast.success("Request sent successfully.");
    } else {
      setLoading(false);
      toast.error("There was a problem sending the request.");
    }
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-[22px]  s1280:w-[473px] s1512:w-[609px] s1728:w-[630px] s1512:me-20 drop-shadow-[0px_4px_19px_#0000001A] rounded-[40px] bg-white s1280:px-[66px] s1280:py-8 s1512:px-[136px]"
    >
      <div className="mb-3 s1280:mb-10">
        <input
          {...register("email", { required: true })}
          autoComplete="off"
          className="consul-form-input p-3"
          placeholder="Email"
          type="email"
        />
      </div>
      <div className="mb-5 s1280:mb-8 relative">
        <input
          {...register("phone", { required: true })}
          onChange={handlePhoneChange}
          defaultValue={phoneValue}
          autoComplete="off"
          className="consul-form-input ps-20 p-3"
          placeholder="Number"
          type="text"
        />
        <CountryCode codes={codes} setCodes={setCodes} />
      </div>
      <div>
        {/* <button className="free-consultation__form--button w-full text-white bg-[#0CA5A5] font-bold h-[54px] rounded-[40px]">Send Message</button> */}
        <button
          type="submit"
          disabled={loading}
          className="font-bold w-full h-[48px] text-center rounded-[40px] group s1280:text-[18px] text-white relative overflow-hidden"
        >
          <div
            className={`z-[2] bg-[#0CA5A5] w-full h-full absolute top-0 ${
              loading ? "top-0" : "group-hover:-top-full"
            }  left-0 text-center flex-cen anm`}
          >
            {loading ? "Loading..." : "let’s connect"}
          </div>
          <div className="z-[1] bg-[#86D1AB] text-white w-full h-full absolute top-0 left-0 text-center  flex-cen">
            <LucideSendHorizontal className="size-5" />
          </div>
        </button>
      </div>
    </form>
  );
};
export default ConsultationForm;
