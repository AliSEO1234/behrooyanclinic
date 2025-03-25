"use client";
import ComboBox from "@/components/comboBox";
import CountryCode from "@/components/forms/countryCode";
import { sendFormFunc } from "@/server-APIs/formAPI";
import { options } from "@/staticData/optionsForm";
import { OptionType } from "@/types/comboBox/comboType";
import { SideBarType } from "@/types/forms";
import { LucideSendHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SidebarForm = ({ activeAdmin }: { activeAdmin: string }) => {
  const pathname = usePathname();
  const { handleSubmit, register, setValue, watch, setError, reset } =
    useForm<SideBarType>();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [codes, setCodes] = useState<OptionType | null>({
    id: 0,
    key: "+90",
    label: "Turkey",
  });
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
  const onSubmit: SubmitHandler<SideBarType> = async ({
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
      activeAdmin: activeAdmin,
      email,
      name: full_name,
      treatment,
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
      className="grid grid-cols-12 gap-y-4 form-work"
    >
      <div className="col-span-12">
        <label htmlFor="">Name & Surname</label>
        <input
          {...register("full_name", { required: true })}
          className="px-4"
          placeholder="Name & Surname"
          type="text"
        />
      </div>
      <div className="col-span-12">
        <label htmlFor="">Email</label>
        <input
          {...register("email", { required: true })}
          className="px-4"
          placeholder="Email"
          type="email"
        />
      </div>
      <div className="col-span-12">
        <label htmlFor="">Phone Number</label>
        <div className="w-full relative overflow-hidden">
          <input
            {...register("phone", { required: true })}
            onChange={handlePhoneChange}
            defaultValue={phoneValue}
            placeholder="Number"
            type="text"
            className="ps-20 pe-3"
          />
          <CountryCode codes={codes} setCodes={setCodes} />
        </div>
      </div>
      <div className="col-span-12 z-[4]">
        <label htmlFor="">Choose your service type</label>
        <ComboBox
          trigger={selectedOption ? selectedOption.label : "Please Select"}
          className="flex-bet w-full outline-none h-[48px] px-4 rounded-[40px] border border-[#9996A0] font-normal text-[#BBBBBB] mb-1"
          options={options}
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        />
        {/* <input placeholder="Please Select" type="email" /> */}
      </div>
      <div className="col-span-12 flex-cen z-[3]">
        <button
          type="submit"
          disabled={loading}
          className="font-bold w-full h-[48px] text-center rounded-[40px] group s1280:text-[18px]  text-white relative overflow-hidden"
        >
          <div className={`z-[2] bg-[#0CA5A5] w-full h-full absolute top-0 ${loading ? "top-0" : "group-hover:-top-full"}  left-0 text-center flex-cen anm`}>
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
export default SidebarForm;
