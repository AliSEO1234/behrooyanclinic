"use client";

import ImgFetcher from "./imgFetcher";
import leaddesk from "@/assets/images/leaddesk.png";
import leadphone from "@/assets/images/leadPhone.png";
import { OptionType } from "@/types/comboBox/comboType";
import { FormItemType, LeadFormType } from "@/types/forms";
import { useEffect, useState } from "react";
import CountryCode from "./forms/countryCode";
import { SubmitHandler, useForm } from "react-hook-form";
import { LucideSendHorizontal } from "lucide-react";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
const LeadForm = ({ className }: LeadFormType) => {
  const { setValue, watch, handleSubmit, register , reset } = useForm<FormItemType>();
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

  const onSubmit: SubmitHandler<FormItemType> = async ({
    email,
    fullName,
    phone,
  }) => {
    setLoading(true)
    const response = await sendFormFunc({
      email,
      name: fullName,
      pageUrl: pathname,
      throughEmail: 1,
      phone,
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
    <div
      className={`${
        className || ""
      } grid grid-cols-12 relative h-[567px] s1280:h-[259px] s1512:h-[306px] s1728:h-[346px] s1920:h-[374px]`}
    >
      <ImgFetcher
        width={3000}
        src={leaddesk}
        className="w-full h-full absolute top-0 left-0 hidden s1280:block"
      />
      <ImgFetcher
        width={3000}
        src={leadphone}
        className="w-full h-full absolute top-0 left-0 s1280:hidden"
      />
      <div className="col-span-12 s1280:col-span-7 relative flex items-end justify-center s1280:items-center s1280:py-5 s1280:ps-10 s1280:pe-3 p-4 pt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-[332px] s1280:h-full rounded-[38px] bg-gradient-to-b from-[#FFFFFF91] to-[#FFFFFF6E]"
        >
          <hr className="mx-auto w-[101px] s1512:w-[121px] s1728:w-[136px] s1920:w-[153px] h-[5px] bg-white my-4 s1512:my-8 rounded-[10px] s1728:my-10" />
          <p className="font-bold s1512:text-[20px] s1728:text-[24px] text-center text-white">
            Are you ready for a health checkup?
          </p>
          <div className="grid grid-cols-12 gap-y-4 s1280:gap-x-2 s1280:gap-y-6 px-3 mt-4 s1280:mt-6 s1920:gap-y-10">
            <div className="col-span-12 s1280:col-span-4">
              <input
                {...register("fullName", { required: true })}
                placeholder="Name"
                className="px-3 outline-none bg-white w-full h-[48px] s1280:h-[38px] s1512:h-[40px] s1728:h-[48px] s1512:text-[16px] s1280:text-[14px] placeholder:text-[#9996A0] font-medium rounded-[40px]"
                type="text"
              />
            </div>
            <div className="col-span-12 s1280:col-span-4 relative">
              <input
                {...register("phone", { required: true })}
                onChange={handlePhoneChange}
                defaultValue={phoneValue}
                placeholder="Phone"
                className="ps-20 s1280:ps-16 s1512:ps-20 pe-3 outline-none bg-white w-full h-[48px] s1280:h-[38px] s1512:h-[40px] s1728:h-[48px] s1512:text-[16px] s1280:text-[14px] placeholder:text-[#9996A0] font-medium rounded-[40px]"
                type="text"
              />
              <CountryCode
                className="s1280:text-[14px] s1512:text-[16px]"
                codes={codes}
                setCodes={setCodes}
              />
            </div>
            <div className="col-span-12 s1280:col-span-4">
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="px-3 outline-none bg-white w-full h-[48px] s1280:h-[38px] s1512:h-[40px] s1728:h-[48px] s1512:text-[16px] s1280:text-[14px] placeholder:text-[#9996A0] font-medium rounded-[40px]"
                type="email"
              />
            </div>
            <div className="col-span-12 flex-cen">
              <button
                disabled={loading}
                className="outline-none  rounded-[48px] shadow-[0px_0px_20px_0px_#5ED2B76B] text-center s1280:h-[40px] font-medium h-[43px] w-full text-[14px] s1512:text-[16px] s1920:text-[20px] s1280:w-[197px] s1512:w-[235px] s1728:w-[275px] s1920:w-[311px] s1920:h-[59px] s1728:h-[52px] s1728:text-[20px] group relative overflow-hidden"
              >
                <div
                  className={`z-[2] bg-white text-[#088387] w-full h-full absolute top-0 ${
                    loading ? "top-0" : "group-hover:-top-full"
                  } group-hover:-top-full left-0 text-center flex-cen anm`}
                >
                  {loading ? "Sending..." : "Send Request"}
                </div>
                <div className="z-[1] bg-[#86D1AB] text-white w-full h-full absolute top-0 left-0 text-center  flex-cen">
                  <LucideSendHorizontal className="size-5" />
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LeadForm;
